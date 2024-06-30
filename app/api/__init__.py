from flask import Blueprint

api_blueprint = Blueprint('api', __name__)

from . import routes
from . import upload_routes
from . import embeddings_routes
