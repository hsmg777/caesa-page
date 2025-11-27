from flask import Flask
from flask_cors import CORS
from flask_smorest import Api
from resources.mail_resource import mail_bp
from dotenv import load_dotenv

load_dotenv()  # Cargar variables desde .env

app = Flask(__name__)
CORS(app)

# Configuración de Swagger
app.config["API_TITLE"] = "VidaBuena API"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.0.3"
app.config["OPENAPI_URL_PREFIX"] = "/"
app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"

# Inicializar API
api = Api(app)

# Registrar blueprint
api.register_blueprint(mail_bp)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
