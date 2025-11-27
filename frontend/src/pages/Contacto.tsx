import { Mail, Phone, Clock, MapPin, Facebook, Instagram, Linkedin, Youtube, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import Swal from 'sweetalert2';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    productoInteres: 'Información programas',
    mensaje: '',
    aceptaPoliticas: false
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const resp = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        let msg = 'Ocurrió un error al enviar el mensaje.';
        try {
          const data = await resp.json();
          if (data?.message) msg = data.message;
        } catch {
          /* ignore */
        }
        throw new Error(msg);
      }

      // ÉXITO
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Gracias por contactarnos. Pronto un asesor de CAESA GROUP se pondrá en contacto contigo.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#1e3a8a',
        background: '#0b1f4a',
        color: '#e5e7eb',
      });

      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        productoInteres: 'Información programas',
        mensaje: '',
        aceptaPoliticas: false,
      });
    } catch (err: any) {
      const msg = err?.message || 'No se pudo enviar el mensaje. Inténtalo nuevamente.';

      // ERROR
      Swal.fire({
        icon: 'error',
        title: 'Ups, algo salió mal',
        text: msg,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#b91c1c',
        background: '#0b1f4a',
        color: '#e5e7eb',
      });
    } finally {
      setEnviando(false);
    }
  };

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="pt-0">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Contáctanos</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            ¿Tienes dudas sobre nuestros cursos, programas o necesitas ayuda? Estamos aquí para ayudarte. 
            Escríbenos y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl text-[#1e3a8a] mb-6">Envíanos un mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre completo */}
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-gray-700 mb-2">
                    Teléfono (con código de país)
                  </label>

                  <PhoneInput
                    defaultCountry="mx"
                    value={formData.telefono}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, telefono: value }))
                    }
                    className="w-full"
                    inputClassName="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Ingresa tu número"
                  />
                </div>


                {/* Producto de interés */}
                <div>
                  <label htmlFor="productoInteres" className="block text-gray-700 mb-2">
                    Producto de interés *
                  </label>
                  <select
                    id="productoInteres"
                    name="productoInteres"
                    value={formData.productoInteres}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  >
                    <option value="Programa Desarrollo de Competencias Profesionales">Programa Desarrollo de Competencias Profesionales</option>
                    <option value="Curso Admin. Empresas de Manufactura con Enfoque TOC">Curso Admin. Empresas de Manufactura con Enfoque TOC</option>
                    <option value="Curso Admin. de Proyectos con el Enfoque de Cadena Crítica">Curso Admin. de Proyectos con el Enfoque de Cadena Crítica</option>
                    <option value="Curso Análisis y Solución de Problemas">Curso Análisis y Solución de Problemas</option>
                    <option value="Curso Diplomado en Manufactura Esbelta">Curso Diplomado en Manufactura Esbelta</option>
                    <option value="Curso Evaluación Económica de Proyectos">Curso Evaluación Económica de Proyectos</option>
                    <option value="Curso Liderazgo, Trabajo en Equipo y Administración del Tiempo">Curso Liderazgo, Trabajo en Equipo y Administración del Tiempo</option>
                    <option value="Curso Mejora Continua">Curso Mejora Continua</option>
                    <option value="Curso Pensamiento Crítico">Curso Pensamiento Crítico</option>
                    <option value="Curso Sistemas de Soporte para la Toma de Decisiones">Curso Sistemas de Soporte para la Toma de Decisiones</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                {/* Políticas */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="aceptaPoliticas"
                    name="aceptaPoliticas"
                    checked={formData.aceptaPoliticas}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-[#3b82f6] border-gray-300 rounded focus:ring-[#3b82f6]"
                  />
                  <label htmlFor="aceptaPoliticas" className="text-sm text-gray-600">
                    Acepto las{' '}
                    <a href="#" className="text-[#3b82f6] hover:underline">
                      políticas de privacidad
                    </a>{' '}
                    y el tratamiento de mis datos personales
                  </label>
                </div>

                {/* Botón submit */}
                <button
                  type="submit"
                  disabled={enviando}
                  className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-4 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {enviando ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8">
              {/* Contacto directo */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl text-[#1e3a8a] mb-6">Información de contacto</h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#1e3a8a]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#1e3a8a] mb-1">Correo electrónico</h3>
                      <a href="mailto:contacto@caesagroup.com" className="text-gray-600 hover:text-[#3b82f6] transition-colors">
                        contacto@caesagroup.com
                      </a>
                      <br />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#1e3a8a]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#1e3a8a] mb-1">Teléfono / WhatsApp</h3>
                      <a href="tel:+525512345678" className="text-gray-600 hover:text-[#3b82f6] transition-colors">
                        +52 55 1234 5678
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Disponible en WhatsApp</p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#1e3a8a]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#1e3a8a] mb-1">Horario de atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                      <p className="text-sm text-gray-500 mt-1">Hora del centro de México (GMT-6)</p>
                    </div>
                  </div>                  
                </div>

                {/* Botones de acción */}
                <div className="mt-8 space-y-3">
                  <a
                    href="https://wa.me/525512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageSquare size={20} />
                    <span>Escríbenos por WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl text-[#1e3a8a] mb-6">Síguenos en redes sociales</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://facebook.com/caesagroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <Facebook className="text-[#1e3a8a] group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-[#1e3a8a]">Facebook</div>
                      <div className="text-xs text-gray-500">@caesagroup</div>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/caesagroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
                  >
                    <Instagram className="text-[#1e3a8a] group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-[#1e3a8a]">Instagram</div>
                      <div className="text-xs text-gray-500">@caesagroup</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/company/caesagroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <Linkedin className="text-[#1e3a8a] group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-[#1e3a8a]">LinkedIn</div>
                      <div className="text-xs text-gray-500">@caesagroup</div>
                    </div>
                  </a>

                  <a
                    href="https://youtube.com/caesagroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
                  >
                    <Youtube className="text-[#1e3a8a] group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-[#1e3a8a]">YouTube</div>
                      <div className="text-xs text-gray-500">@caesagroup</div>
                    </div>
                  </a>
                </div>

                <p className="text-gray-600 text-sm mt-6 text-center">
                  Síguenos para contenido exclusivo, tips, recursos gratuitos y ofertas especiales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#1e3a8a] mb-8 text-center">Preguntas frecuentes</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#1e3a8a] mb-2">¿Cuánto tiempo tardan en responder?</h3>
              <p className="text-gray-600">
                Normalmente respondemos en menos de 24 horas durante días hábiles. Para consultas urgentes, 
                te recomendamos contactarnos por WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#1e3a8a] mb-2">¿Ofrecen asesoría personalizada?</h3>
              <p className="text-gray-600">
                Sí, podemos agendar una videollamada gratuita para ayudarte a elegir el programa o curso 
                que mejor se adapte a tus necesidades y objetivos profesionales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#1e3a8a] mb-2">¿Tienen descuentos para empresas?</h3>
              <p className="text-gray-600">
                Sí, ofrecemos planes especiales para equipos y empresas. Contáctanos seleccionando 
                "Soluciones para empresas" en el formulario para más información.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
