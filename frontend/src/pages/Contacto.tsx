import { Mail, Phone, Clock, MapPin, Facebook, Instagram, Linkedin, Youtube, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import Swal from 'sweetalert2';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const faqs = [
  {
    question:
      "¿Se requiere tener una formación técnica o ingenieril para tomar el Programa o alguno de los cursos?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        No se requiere. Todos los cursos del Programa pueden ser aprovechados
        por personas de cualquier formación profesional.
      </p>
    ),
  },
  {
    question: "¿Obtengo un certificado por cada curso?",
    answer: (
      <div className="text-gray-600 text-sm sm:text-base space-y-2">
        <p>
          • Al finalizar cada curso obtendrás una Constancia de Participación.
        </p>
        <p>
          • Adicionalmente puedes obtener un Certificado de Acreditación de todo
          el Programa al demostrar haber obtenido los conocimientos de los
          cursos, mediante la entrega de evidencias que se solicitarán al
          finalizar el Programa completo.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cómo puedo obtener los cupones de descuentos que se ofrecen?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Puedes solicitar los cupones de descuento que ofrecemos siguiendo las
        indicaciones que aparecen en esta página web.
      </p>
    ),
  },
  {
    question: "¿Los cupones de descuento tienen fecha de caducidad?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Sí. Es importante que te inscribas en los cursos y aproveches los
        descuentos antes de que llegue la fecha de caducidad.
      </p>
    ),
  },
  {
    question: "¿Cuáles son los medios disponibles para pagar?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Los cursos se imparten en la plataforma de Hotmart. Se tienen
        diferentes medios disponibles para pagar, que se indican en la
        plataforma, dependiendo de cada país.
      </p>
    ),
  },
  {
    question: "¿Tengo que pagar en dólares estadounidenses?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        En la plataforma de Hotmart puedes pagar en la moneda de tu país.
      </p>
    ),
  },
  {
    question: "¿Puedo tener asesoría personalizada?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Puedes enviar un mensaje de correo electrónico a{" "}
        <a
          href="mailto:contacto@caesagroup.com"
          className="text-[#1e3a8a] underline"
        >
          contacto@caesagroup.com
        </a>{" "}
        con las dudas que tengas sobre el contenido del curso que estés
        tomando. Por este medio recibirás respuesta a tus preguntas.
      </p>
    ),
  },
  {
    question:
      "¿Puedo inscribirme a uno o varios cursos sin tomar todo el Programa?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Sí. Puedes tomar cada curso en forma independiente. Al inscribirte en el
        Programa completo obtienes un mayor descuento.
      </p>
    ),
  },
  {
    question: "¿Se ofrece alguna garantía?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Sí. Se ofrece una garantía de 7 días, dentro de los cuales puedes
        solicitar un reembolso de tu pago.
      </p>
    ),
  },
  {
    question: "¿Puedo hacer los pagos en parcialidades?",
    answer: (
      <p className="text-gray-600 text-sm sm:text-base">
        Las inscripciones se hacen en un solo pago por el total del valor del
        Programa o Curso. En caso de que tengas dificultades para hacerlo, puedes
        enviar un mensaje de correo electrónico a{" "}
        <a
          href="mailto:contacto@caesagroup.com"
          className="text-[#1e3a8a] underline"
        >
          contacto@caesagroup.com
        </a>{" "}
        para revisar tu caso particular.
      </p>
    ),
  },
];

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
                </div>

                {/* Botones de acción */}
                <div className="mt-8 space-y-3">
                  <a
                    href="https://wa.me/528117931668"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#1e3a8a] mb-8 text-center">
            Preguntas frecuentes
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <h3 className="text-[#1e3a8a] font-medium text-sm sm:text-base">
                    {item.question}
                  </h3>
                  <span className="ml-4 text-[#1e3a8a] text-xl leading-none">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 pt-0">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
