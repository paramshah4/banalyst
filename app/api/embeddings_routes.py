import os
import pandas as pd
from . import api_blueprint
from openai import OpenAI
from flask import request, jsonify
from app.services import upload_service, embeddings_service, pinecone_service

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
