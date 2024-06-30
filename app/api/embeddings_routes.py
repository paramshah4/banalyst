import os
import pandas as pd
from . import api_blueprint
from openai import OpenAI
from flask import request, jsonify
from app.services import upload_service, embeddings_service, pinecone_service

from langchain.agents.agent_types import AgentType
from langchain_experimental.agents.agent_toolkits import create_csv_agent
from langchain_openai import ChatOpenAI, OpenAI

PINECONE_INDEX_NAME = 'index237'

@api_blueprint.route('/create_excel_embeddings', methods=['POST'])
def generate_embeddings_endpoint():
    try:
        if not request.is_json:
            return jsonify({"error": "Request must be JSON"}), 400
        
        req_data = request.get_json()
        file_name = req_data.get('file_name')
        
        if not file_name:
            return jsonify({"error": "File name is required"}), 400

        file_path = os.path.join('uploads', file_name)
        
        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404

        data = upload_service.read_excel_file(file_path)
        processed_data = upload_service.preprocess_data(data)
        chunks = upload_service.chunk_data(processed_data)

        # return jsonify({"text_data": chunks})
        
        # client = OpenAI()
        # embeddings = embeddings_service.generate_embeddings(client, chunks)

        pinecone_service.embed_chunks_and_upload_to_pinecone(chunks, PINECONE_INDEX_NAME)
        response_json = {
            "message": "Chunks embedded and stored successfully"
        }
        return jsonify(response_json)

        # return jsonify({"embeddings": embeddings})

    except Exception as e:
        # Return an error message if something goes wrong
        return jsonify({"error": str(e)}), 500

@api_blueprint.route('/handle-xlsx-query-agents', methods=['POST'])
def excel_agents():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400
        
    data = request.get_json()
    filename = data.get('filename')
    query = data.get('query')
    
    if not filename or not query:
        return jsonify({"error": "Filename and query are required"}), 400

    file_path = os.path.join('uploads', filename)
    
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404
    
    try:
        excel_data = pd.read_excel(file_path)
        csv_path = file_path.replace('.xlsx', '.csv')
        excel_data.to_csv(csv_path, index=False)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    try:
        agent = create_csv_agent(
            ChatOpenAI(temperature=0, model="gpt-4o"),
            csv_path,
            verbose=True,
            agent_type=AgentType.OPENAI_FUNCTIONS,
            allow_dangerous_code=True,
            handle_parsing_errors=True
        )
        answer = agent.run(query)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        if os.path.exists(csv_path):
            os.remove(csv_path)

    return jsonify({'answer': answer})
