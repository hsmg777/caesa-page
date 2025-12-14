# schemas/coupon_schema.py
from marshmallow import Schema, fields, validate

PRODUCTOS_VALIDOS = [
    "Programa avanzado de competencias profesionales",
    "Curso Admin. Empresas de Manufactura con Enfoque TOC",
    "Curso Admin. de Proyectos con el Enfoque de Cadena Crítica",
    "Curso Análisis y Solución de Problemas",
    "Curso Diplomado en Manufactura Esbelta",
    "Curso Evaluación Económica de Proyectos",
    "Curso Liderazgo, Trabajo en Equipo y Administración del Tiempo",
    "Curso Mejora Continua",
    "Curso Pensamiento Crítico",
    "Curso Sistemas de Soporte para la Toma de Decisiones",
]

class CouponRequestSchema(Schema):
    nombre = fields.String(
        required=True,
        validate=validate.Length(min=3, max=150),
        error_messages={"required": "El nombre es obligatorio."},
    )

    email = fields.Email(
        required=True,
        validate=validate.Length(max=255),
        error_messages={
            "required": "El correo electrónico es obligatorio.",
            "invalid": "El correo electrónico no tiene un formato válido.",
        },
    )

    telefono = fields.String(required=False, allow_none=True, validate=validate.Length(min=5, max=30))

    productoInteres = fields.String(
        required=True,
        validate=validate.OneOf(PRODUCTOS_VALIDOS),
        error_messages={"validator_failed": "Producto de interés inválido."},
    )

    aceptaPoliticas = fields.Boolean(
        required=True,
        truthy=("true", "True", "1", 1, "on", "yes", "si", "sí"),
        falsy=("false", "False", "0", 0, "off", "no"),
        error_messages={"required": "Debes aceptar las políticas de privacidad."},
    )
