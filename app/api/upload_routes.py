import pandas as pd
from . import api_blueprint
from flask import request, jsonify
from app.services import upload_service

@api_blueprint.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "works 2"})

@api_blueprint.route('/upload_excel', methods=['POST'])
def upload_excel():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and upload_service.allowed_file(file.filename):
        try:
            filepath = upload_service.save_file(file)
            return jsonify({'message': 'File uploaded and processed successfully', 'filepath': filepath}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    return jsonify({'error': 'File type not allowed'}), 400
