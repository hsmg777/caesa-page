from flask_smorest import Blueprint, abort
import smtplib
from email.message import EmailMessage
import os

from schemas.mail_schema import MailSchema 
mail_bp = Blueprint("mail", __name__, url_prefix="/api", description="Endpoints para envío de correos")

# SMTP config
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
MAIL_SENDER = os.getenv("MAIL_SENDER", EMAIL_ADDRESS)

# destinatario configurable
MAIL_RECIPIENT = os.getenv("MAIL_RECIPIENT", "contacto@caesagroup.com")


@mail_bp.route("/send-email", methods=["POST"])
@mail_bp.arguments(MailSchema)
@mail_bp.response(200, description="Correo enviado correctamente")
def send_email(data):
    """
    Enviar correo de contacto desde la web de CAESA GROUP
    """

    nombre = data["nombre"]
    email = data["email"]
    telefono = data.get("telefono") or "No proporcionado"
    producto_interes = data["productoInteres"]
    mensaje = data["mensaje"]
    acepta_politicas = data["aceptaPoliticas"]

    try:
        msg = EmailMessage()
        msg["Subject"] = f"Nuevo mensaje de contacto – CAESA GROUP ({nombre})"
        msg["From"] = MAIL_SENDER
        msg["To"] = MAIL_RECIPIENT

        # ----------- TEXTO PLANO (fallback) -----------
        msg.set_content(
            f"""
Nuevo mensaje de contacto desde la web de CAESA GROUP

Nombre: {nombre}
Correo: {email}
Teléfono: {telefono}
Producto de interés: {producto_interes}
Acepta políticas de privacidad: {"Sí" if acepta_politicas else "No"}

Mensaje:
{mensaje}

Notificación automática – CAESA GROUP
"""
        )

        # ----------- HTML BRANDING CAESA GROUP -----------
        msg.add_alternative(
            f"""
<html>
  <body style="margin:0; padding:0; background-color:#0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
    <table align="center" width="650" cellpadding="0" cellspacing="0" 
           style="margin:24px auto; border-radius:20px; overflow:hidden; box-shadow:0 18px 45px rgba(15,23,42,0.55); background:#0b1f4a;">
      
      <tr>
        <td style="
          padding:32px 40px 28px 40px;
          background: linear-gradient(135deg,#1e3a8a,#2563eb);
          color:#e5f0ff;
          text-align:left;
        ">
          <!-- Logo / Marca -->
          <div style="font-size:18px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; opacity:0.95;">
            CAESA GROUP
          </div>
          <p style="margin:0; font-size:14px; opacity:0.9;">
            Has recibido un nuevo mensaje desde el formulario de contacto de la página web.
          </p>
        </td>
      </tr>

      <!-- BODY: CARD DE DETALLE -->
      <tr>
        <td style="padding:28px 32px 16px 32px; background: radial-gradient(circle at top left, #1d4ed8 0, #020617 52%); color:#e5e7eb;">
          
          <!-- Tarjeta principal -->
          <table width="100%" cellpadding="0" cellspacing="0" 
                 style="border-radius:16px; background:rgba(15,23,42,0.92); border:1px solid rgba(148,163,184,0.28);">
            <tr>
              <td style="padding:22px 22px 18px 22px;">
                
                <div style="font-size:14px; text-transform:uppercase; letter-spacing:0.10em; color:#38bdf8; margin-bottom:6px;">
                  Datos del contacto
                </div>

                <h2 style="margin:0 0 16px; font-size:18px; color:#f9fafb;">
                  Nuevo mensaje de {nombre}
                </h2>

                <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                  <tr>
                    <td style="width:38%; color:#9ca3af; font-weight:500;">Nombre completo</td>
                    <td style="color:#e5e7eb;">{nombre}</td>
                  </tr>
                  <tr>
                    <td style="color:#9ca3af; font-weight:500;">Correo electrónico</td>
                    <td style="color:#e5e7eb;">{email}</td>
                  </tr>
                  <tr>
                    <td style="color:#9ca3af; font-weight:500;">Teléfono</td>
                    <td style="color:#e5e7eb;">{telefono}</td>
                  </tr>
                  <tr>
                    <td style="color:#9ca3af; font-weight:500;">Producto de interés</td>
                    <td style="color:#e5e7eb;">{producto_interes}</td>
                  </tr>
                  <tr>
                    <td style="color:#9ca3af; font-weight:500;">Políticas de privacidad</td>
                    <td style="color:#e5e7eb;">{"Aceptadas" if acepta_politicas else "No aceptadas"}</td>
                  </tr>
                </table>

                <!-- Mensaje -->
                <div style="margin-top:18px; font-size:14px;">
                  <div style="color:#9ca3af; font-weight:500; margin-bottom:6px;">
                    Mensaje
                  </div>
                  <div style="
                    padding:14px 16px;
                    border-radius:12px;
                    background:rgba(15,23,42,0.95);
                    border:1px solid rgba(148,163,184,0.35);
                    color:#e5e7eb;
                    white-space:pre-wrap;
                    line-height:1.5;
                  ">
                    {mensaje}
                  </div>
                </div>

              </td>
            </tr>
          </table>

          <!-- CTA / Banda amarilla -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td style="
                padding:14px 18px;
                border-radius:14px;
                background:linear-gradient(135deg,#facc15,#f59e0b);
                color:#111827;
                font-size:13px;
              ">
                <strong style="text-transform:uppercase; letter-spacing:0.12em; font-size:11px;">Acción sugerida</strong><br/>
                Responde al potencial estudiante o profesional a la brevedad para continuar con el proceso de orientación y matriculación.
              </td>
            </tr>
          </table>

        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="
          padding:18px 32px 24px;
          background:#020617;
          color:#64748b;
          font-size:11px;
          text-align:center;
        ">
          Este es un mensaje automático generado por el formulario de contacto de la web de CAESA GROUP.<br/>
        </td>
      </tr>

    </table>
  </body>
</html>
            """,
            subtype="html",
        )

        # ----------- ENVÍO DEL CORREO -----------
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return {"success": True, "message": "Correo enviado correctamente"}

    except Exception as e:
        print("❌ Error al enviar correo:", repr(e))
        abort(500, message="No se pudo enviar el correo")
