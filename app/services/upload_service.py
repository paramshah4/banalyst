import os
import pandas as pd

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'xls', 'xlsx'}

# Ensure the upload folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def save_file(file):
    filename = file.filename
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)
    return filepath

def read_excel_file(file_path):
    excel_file = pd.ExcelFile(file_path)
    
    all_sheets_data = {}
    
    for sheet_name in excel_file.sheet_names:
        sheet_data = pd.read_excel(excel_file, sheet_name=sheet_name)
        all_sheets_data[sheet_name] = sheet_data
    
    return all_sheets_data

def extract_text_from_data(data):
    text_data = []
    for sheet, df in data.items():
        for col in df.columns:
            text_data.extend(df[col].astype(str).tolist())
    return text_data

def preprocess_data(data):
    processed_data = {}
    for sheet, df in data.items():
        df = df.fillna('')  # Replace NaNs with empty strings
        processed_data[sheet] = df
    return processed_data

def chunk_data(data, max_chunk_size=500):
    chunks = []
    for sheet, df in data.items():
        for _, row in df.iterrows():
            text = ' '.join(map(str, row.values))
            if len(text) > max_chunk_size:
                text_chunks = [text[i:i+max_chunk_size] for i in range(0, len(text), max_chunk_size)]
                chunks.extend(text_chunks)
            else:
                chunks.append(text)
    return chunks

