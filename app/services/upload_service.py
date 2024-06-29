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

def process_excel_file(filepath):
    try:
        df = pd.read_excel(filepath)
        text_data = df.to_csv(sep='\t', index=False)
        text_filepath = os.path.join(UPLOAD_FOLDER, f"{os.path.splitext(filepath)[0]}.txt")
        with open(text_filepath, 'w') as text_file:
            text_file.write(text_data)
        return text_filepath
    except Exception as e:
        raise e

