import { CheckCircle, Clock, Users, Award, TrendingUp, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

interface Programa {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  nivel: string;
  modalidad: string;
  precio: string;
  precioAnterior: string;
  beneficios: string[];
  modulos: string[];
  incluye: string[];
}

export function Programas() {
  const [programaSeleccionado, setProgramaSeleccionado] = useState<Programa | null>(null);

  const programas: Programa[] = [
    {
      id: 1,
      nombre: 'Programa: Desarrollo de Competencias Profesionales',
      descripcion: 'Acelera tu crecimiento profesional dominando habilidades prácticas y estratégicas (TOC, Lean, CCPM) que no se enseñan en la universidad, diseñadas para lograr ascensos y resultados tangibles.',
      duracion: '9 modulos completos ',
      nivel: 'Intermedio',
      modalidad: 'Online',
      precio: '$597',
      precioAnterior: '$997',
      beneficios: [
        'Mayor empleabilidad y preparación para puestos gerenciales',
        'Certificados profesionales individuales por curso',
        'Dominio de metodologías modernas (Lean, TOC, Kaizen)',
        'Habilidades para la toma de decisiones basada en datos'
      ],
      modulos: [
        'Módulo 1: Admin. de Manufactura con Teoría de Restricciones (TOC)',
        'Módulo 2: Administración de Proyectos con Cadena Crítica (CCPM)',
        'Módulo 3: Sistemas de Soporte a Decisiones (VGCM)',
        'Módulo 4: Análisis y Solución de Problemas (Causa Raíz)',
        'Módulo 5: Pensamiento Crítico y Toma de Decisiones',
        'Módulo 6: Liderazgo, Trabajo en Equipo y Gestión del Tiempo',
        'Módulo 7: Evaluación Económica de Proyectos (ROI, VPN, TIR)',
        'Módulo 8: Mejora Continua (Lean, Kaizen, PDCA)',
        'Módulo 9: Diplomado en Manufactura Esbelta (Incluye VSM y Estrategia)'
      ],
      incluye: [
        'Simuladores interactivos con software didáctico',
        'Certificación adicional "Lean Practitioner"',
        'Metodología exclusiva CAESA GROUP',
        'Herramientas para validación de hipótesis',
        'Enfoque práctico aplicable desde el primer día'
      ]
    },
  ];

  return (
    <div className="pt-0">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Nuestros Programas</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Programas completos diseñados para profesionales que buscan transformar su carrera. 
            Incluyen acompañamiento personalizado, certificación reconocida y acceso de por vida.
          </p>
        </div>
      </section>

      {/* Programas Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programas.map((programa) => (
              <div key={programa.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="p-6">
                  {/* Badge */}
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block bg-blue-100 text-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                      {programa.nivel}
                    </span>
                  </div>

                  <h3 className="text-[#1e3a8a] mb-3">
                    {programa.nombre}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {programa.descripcion}
                  </p>

                  {/* Info chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <Clock size={14} />
                      <span>{programa.duracion}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      <Users size={14} />
                      <span>{programa.modalidad}</span>
                    </div>
                  </div>

                  {/* Beneficios principales */}
                  <div className="mb-4 space-y-2">
                    {programa.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{beneficio}</span>
                      </div>
                    ))}
                  </div>

                  {/* Precio */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-gray-500 line-through">{programa.precioAnterior}</span>
                      <span className="text-3xl text-[#1e3a8a]">{programa.precio}</span>
                    </div>
                    <div className="text-xs text-gray-600">💰 Precio con descuento por tiempo limitado</div>
                  </div>

                  {/* Botones */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setProgramaSeleccionado(programa)}
                      className="w-full bg-gray-100 text-[#1e3a8a] py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Ver detalles del programa
                    </button>
                    <a
                      href="https://hotmart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      <span>Inscribirme en Hotmart</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalles */}
      {programaSeleccionado && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl text-[#1e3a8a]">{programaSeleccionado.nombre}</h2>
              <button
                onClick={() => setProgramaSeleccionado(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Descripción */}
              <div>
                <p className="text-lg text-gray-700">{programaSeleccionado.descripcion}</p>
              </div>

              {/* Info general */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-[#1e3a8a]" size={20} />
                    <span className="text-[#1e3a8a]">Duración</span>
                  </div>
                  <p className="text-gray-700">{programaSeleccionado.duracion}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-[#1e3a8a]" size={20} />
                    <span className="text-[#1e3a8a]">Nivel</span>
                  </div>
                  <p className="text-gray-700">{programaSeleccionado.nivel}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-[#1e3a8a]" size={20} />
                    <span className="text-[#1e3a8a]">Modalidad</span>
                  </div>
                  <p className="text-gray-700">{programaSeleccionado.modalidad}</p>
                </div>
              </div>

              {/* Temario */}
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-4 flex items-center gap-2">
                  <Award size={24} />
                  Temario del Programa
                </h3>
                <div className="space-y-2">
                  {programaSeleccionado.modulos.map((modulo, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{modulo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qué incluye */}
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-4">¿Qué incluye el programa?</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {programaSeleccionado.incluye.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Precio y CTA */}
              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-6 rounded-xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-blue-200 line-through text-xl">{programaSeleccionado.precioAnterior}</span>
                      <span className="text-4xl">{programaSeleccionado.precio}</span>
                    </div>
                    <p className="text-blue-100">🔥 Oferta válida por tiempo limitado</p>
                  </div>
                  <a
                    href="https://hotmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-[#1e3a8a] px-8 py-4 rounded-lg hover:bg-yellow-300 transition-all whitespace-nowrap"
                  >
                    <span>Quiero este programa - Ir a Hotmart</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
