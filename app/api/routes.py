from . import api_blueprint
import os
from flask import request, jsonify, Response, stream_with_context, json
import requests
import sseclient
from app.services import openai_service, pinecone_service, scraping_service
from app.utils.helper_functions import chunk_text, build_prompt, construct_messages_list
from langchain_community.document_loaders import UnstructuredExcelLoader
import pandas as pd
from langchain_community.document_loaders import DataFrameLoader
from langchain_community.document_loaders.powerpoint import UnstructuredPowerPointLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.chat_models import ChatOpenAI
from langchain_community.vectorstores.utils import filter_complex_metadata
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.vectorstores import Pinecone
from langchain.chains import RetrievalQA
import time
from langchain_pinecone import PineconeVectorStore
PINECONE_INDEX_NAME = 'index227'
from pinecone import Pinecone, ServerlessSpec
pc = Pinecone(
        api_key=os.environ.get("PINECONE_API_KEY"))
EMBEDDING_DIMENSION = 1536
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
@api_blueprint.route('/handle-query', methods=['POST'])
def handle_query():
    question = request.json['question']
    chat_history = request.json['chatHistory']
    
    # Get the most similar chunks from Pinecone
    context_chunks = pinecone_service.get_most_similar_chunks_for_query(question, PINECONE_INDEX_NAME)
    
    # Build the payload to send to OpenAI
    headers, data = openai_service.construct_llm_payload(question, context_chunks, chat_history)

    # Send to OpenAI's LLM to generate a completion
    def generate():
        url = 'https://api.openai.com/v1/chat/completions'
        response = requests.post(url, headers=headers, data=json.dumps(data), stream=True)
        client = sseclient.SSEClient(response)
        for event in client.events():
            if event.data != '[DONE]':
                try:
                    text = json.loads(event.data)['choices'][0]['delta']['content']
                    yield(text)
                except:
                    yield('')
    
    # Return the streamed response from the LLM to the frontend
    return Response(stream_with_context(generate()))

@api_blueprint.route('/embed-and-store', methods=['POST'])
def embed_and_store():
    url = request.json['url']
    url_text = scraping_service.scrape_website(url)
    chunks = chunk_text(url_text)
    pinecone_service.embed_chunks_and_upload_to_pinecone(chunks, PINECONE_INDEX_NAME)
    response_json = {
        "message": "Chunks embedded and stored successfully"
    }
    return jsonify(response_json)

@api_blueprint.route('/delete-index', methods=['POST'])
def delete_index():
    pinecone_service.delete_index(PINECONE_INDEX_NAME)
    return jsonify({"message": f"Index {PINECONE_INDEX_NAME} deleted successfully"})


@api_blueprint.route('/question', methods=['POST'])
def question():
    question = request.json['question']
    loader = UnstructuredExcelLoader("uploads/Banana Logistics Financial Model Sample 20240629.xlsx", mode="single")
    documents1 = loader.load()
    loader1 = PyMuPDFLoader("uploads/Banana Logistics Historical Financials (2022-12-31).pdf", extract_images= True)
    data1 = loader1.load()
    # loader2 = UnstructuredPowerPointLoader("uploads/temp5.pptx")
    # data = loader2.load()
    documents =  documents1 + data1
    print(len(documents))
    print(documents)

    # Split documents
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=500)
    splits = text_splitter.split_documents(documents)

    # Initialize embeddings and vector store
    embeddings = OpenAIEmbeddings()
    vectorstore = Chroma.from_documents(filter_complex_metadata(splits), embeddings)

    # Initialize LLM
    llm = ChatOpenAI(model_name="gpt-4o", temperature=0)

    # Create retrieval chain
    qa_chain = RetrievalQA.from_chain_type(
        llm,
        retriever=vectorstore.as_retriever()
    )
    response = qa_chain.run(question)
    print(type(response))
    response_data = jsonify({'body': response})
    return response_data

@api_blueprint.route('/question-answer', methods=['POST'])
def questionanswer():
    question = request.json['question']
    loader = UnstructuredExcelLoader("uploads/Banana Logistics Financial Model Sample 20240629.xlsx", mode="single")
    documents1 = loader.load()
    loader1 = PyMuPDFLoader("uploads/Banana Logistics Historical Financials (2022-12-31).pdf", extract_images= True)
    data1 = loader1.load()
    # loader2 = UnstructuredPowerPointLoader("uploads/temp5.pptx")
    # data = loader2.load()
    documents =  documents1 + data1
    print(len(documents))
    print(documents)
    existing_indexes = [index_info["name"] for index_info in pc.list_indexes()]

    if PINECONE_INDEX_NAME not in existing_indexes:
        pc.create_index(
            name=PINECONE_INDEX_NAME,
            dimension=1536,
            metric="cosine",
            spec=ServerlessSpec(cloud="aws", region="us-east-1"),
        )
        while not pc.describe_index(PINECONE_INDEX_NAME).status["ready"]:
            time.sleep(1)

    index = pc.Index(PINECONE_INDEX_NAME)
    embeddings = OpenAIEmbeddings()
    for i, doc in enumerate(documents):
        embedding = embeddings.embed_query(doc.page_content)
        index.upsert([(str(i), embedding, {"text": doc.page_content})])
    
    vectorstore = pinecone_service.getvectoreStore(PINECONE_INDEX_NAME, embeddings)
        # completion llm
    llm = ChatOpenAI(
        model_name='gpt-4o',
        temperature=0.0,
        api_key=os.environ.get("PINECONE_API_KEY")
    )

    qa = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever()
    )

    return qa.run(question)
