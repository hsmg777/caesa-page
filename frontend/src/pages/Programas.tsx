import {
  CheckCircle,
  Clock,
  Users,
  Award,
  X,
  Target,
  Lightbulb,
  ListChecks,
  GraduationCap,
  Building2,
  Tag,
} from "lucide-react";
import { useState } from "react";
import BonusSection from "../components/BonusSection";
import CouponRequestModal from "../components/CouponRequestModal";

interface Programa {
  id: number;

  // Programa
  nombre: string;
  descripcion: string;
  duracion: string;
  nivel: string;
  modalidad: string;
  precio: string;
  beneficios: string[];
  modulos: string[];
  incluye: string[];

  imageUrl: "/images/programa.png";

  curso: {
    nombre: string;
    precio: string; 
    duracion: string;

    instructor: string;
    organiza: string;

    objetivo: string;
    descripcionGeneral: string; 
    propuestaImagenes: string[];
    instructorDescripcion: string;
    cta: string;
    footer: string;
  };
}

export function Programas() {
  const [programaSeleccionado, setProgramaSeleccionado] =
    useState<Programa | null>(null);
  const [openCouponModal, setOpenCouponModal] = useState(false);

  const programa: Programa = {
    id: 1,
    nombre: "Programa Avanzado de Competencias Profesionales",
    descripcion:
      "Ha sido diseñado para fortalecer habilidades que las empresas modernas valoran: pensamiento crítico, liderazgo, metodologías de mejora, administración de proyectos y toma de decisiones efectivas. Cada curso ofrece formación complementaria que impulsa la empleabilidad y acelera el crecimiento profesional.",
    duracion: "8 cursos y 1 diplomado.",
    nivel: "Intermedio",
    modalidad: "Online",
    precio: "$997 USD",
    beneficios: [
      "Mayor empleabilidad y preparación para puestos gerenciales",
      "Certificados profesionales individuales por curso",
      "Dominio de metodologías modernas (Lean, TOC, Kaizen)",
      "Habilidades para la toma de decisiones basada en datos",
    ],
    modulos: [
      "Curso 1: Admin. de empresas de manufactura con enfoque de teoría de restricciones (TOC)",
      "Curso 2: Administración de Proyectos con el enfoque de Cadena Crítica (CCPM)",
      "Curso 3: Sistemas de Soporte para la toma de decisiones",
      "Curso 4: Análisis y Solución de Problemas ",
      "Curso 5: Pensamiento Crítico ",
      "Curso 6: Liderazgo, Trabajo en Equipo y Administración del tiempo",
      "Curso 7: Evaluación Económica de Proyectos",
      "Curso 8: Mejora Continua",
      "Diplomado en Manufactura Esbelta (5 modulos)",
    ],
    incluye: [
      "Simuladores interactivos con software didáctico",
      'Certificación adicional "Lean Practitioner"',
      "Metodología exclusiva CAESA GROUP",
      "Herramientas para validación de hipótesis",
      "Enfoque práctico aplicable desde el primer día",
    ],

    imageUrl: "/images/programa.png",

    curso: {
      nombre: "Pensamiento Crítico",
      precio: "$997 USD",
      duracion: "A ritmo propio",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivo:
        "Desarrollar en los participantes la habilidad de analizar información, cuestionar supuestos, evaluar evidencias y razonar con claridad, aplicando los Estándares Intelectuales Universales, el Enfoque Científico y técnicas de eliminación de sesgos cognitivos para mejorar la calidad de su pensamiento, sus decisiones y su impacto profesional.",
      descripcionGeneral:
        "El Pensamiento Crítico es una de las competencias más valoradas en organizaciones líderes y una de las habilidades centrales para ocupar posiciones directivas. De acuerdo con múltiples estudios de empleabilidad, las empresas buscan profesionistas capaces de analizar información, evaluar riesgos, cuestionar supuestos, identificar sesgos y llegar a conclusiones bien fundamentadas.\n\nEste curso presenta un método estructurado para desarrollar el pensamiento crítico, basado en principios de la ciencia, estándares universales de razonamiento y habilidades metacognitivas. A partir del contenido proporcionado por CAESA GROUP, incluye temas como correlación vs causalidad, pruebas científicas, sesgos cognitivos, evidencia observable, banderas rojas en argumentos y los Estándares Intelectuales Universales del razonamiento.\n\nLos participantes aprenderán cómo funciona el pensamiento humano, por qué nos engañamos a nosotros mismos, cómo evitar errores comunes y cómo fortalecer la claridad, precisión, lógica, relevancia y profundidad del razonamiento.",
      propuestaImagenes: [
        "Cerebro formado por engranes (razonamiento).",
        "Lupa sobre ideas (evaluación crítica).",
        "Camino dividido entre evidencia y creencias.",
        "Representación visual de correlación vs causalidad.",
        "Ilusiones ópticas o efectos perceptuales.",
        "Iconografía relacionada con ciencia, lógica y pensamiento.",
      ],
      instructorDescripcion:
        "Felipe Quintanilla Flores es Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey y Maestro en Investigación de Operaciones por el Georgia Institute of Technology. Fue Director de la carrera de IIS durante 15 años y ha impartido más de 100 cursos a profesionistas y empresarios en México.\n\nHa dedicado más de 40 años a formar líderes, ingenieros y profesionistas, integrando ciencia, lógica y metodologías de razonamiento crítico en su práctica docente y consultiva. Su misión: enseñar a pensar mejor para vivir y decidir mejor.",
      cta:
        "Inscríbete al curso 'Pensamiento Crítico' y fortalece una de las competencias más importantes en el mundo profesional. Aprende a cuestionar, analizar y decidir con claridad y fundamento.",
      footer: "© CAESA GROUP | www.caesagroup.com | contacto@caesagroup.com",
    },
  };

  return (
    <div className="pt-0">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Nuestros Programas</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Programas completos diseñados para profesionales que buscan transformar
            su carrera.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <aside className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={programa.imageUrl}
                    alt={programa.nombre}
                    className="h-80 w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl text-[#1e3a8a] mb-2">{programa.nombre}</h2>
                    <p className="text-gray-700">{programa.descripcion}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        <Clock size={14} />
                        <span>{programa.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        <Users size={14} />
                        <span>{programa.modalidad}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                        <Building2 size={14} />
                        <span>CAESA GROUP</span>
                      </div>
                    </div>
                  </div>

                  {/* Beneficios (resumidos, no tanto, pero completos) */}
                  <div>
                    <h3 className="text-lg text-[#1e3a8a] mb-3 flex items-center gap-2">
                      <Lightbulb size={18} />
                      Beneficios del programa
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {programa.beneficios.map((b, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle
                            size={16}
                            className="text-green-500 mt-0.5 flex-shrink-0"
                          />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cursos incluidos */}
                  <div>
                    <h3 className="text-lg text-[#1e3a8a] mb-3 flex items-center gap-2">
                      <ListChecks size={18} />
                      Cursos incluidos
                    </h3>

                    <div className="space-y-2">
                      {programa.modulos.map((m, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle
                            size={18}
                            className="text-[#3b82f6] mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-700 text-sm">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Incluye */}
                  <div>
                    <h3 className="text-lg text-[#1e3a8a] mb-3 flex items-center gap-2">
                      <Award size={18} />
                      ¿Qué incluye?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {programa.incluye.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="text-[#3b82f6] mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precio programa */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl text-[#1e3a8a] font-semibold">
                        {programa.precio}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      💰 Precio con descuento por tiempo limitado
                    </p>

                    <div className="mt-4 space-y-2">
                        <button
                        onClick={() => setProgramaSeleccionado(programa)}
                        className="w-full bg-gray-100 text-[#1e3a8a] py-3 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Ver detalles del programa
                      </button>

                      <button
                        onClick={() => setOpenCouponModal(true)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-3 rounded-lg hover:shadow-lg transition-all"
                      >
                        <span>Solicitar cupón / Inscribirme</span>
                        <Tag size={18} />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">{programa.curso.footer}</p>
                </div>
              </div>
            </aside>
          </div>

          {/* Bonus / Cupón */}
          <div className="mt-10">
            <BonusSection onOpenCouponModal={() => setOpenCouponModal(true)} />
          </div>

          <CouponRequestModal
            isOpen={openCouponModal}
            onClose={() => setOpenCouponModal(false)}
          />

          {/* Modal de Detalles (desglosado + precio) */}
          {programaSeleccionado && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl text-[#1e3a8a]">
                    Programa de Desarrollo de Competencias Profesionales
                  </h2>
                </div>

                <button
                  onClick={() => setProgramaSeleccionado(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-8 text-gray-700">
                <div className="space-y-3">
                  <h3 className="text-xl text-[#1e3a8a]">Introducción</h3>
                  <p>
                    El Programa de Desarrollo de Competencias Profesionales ha sido diseñado para jóvenes profesionistas, recién
                    egresados y colaboradores con experiencia intermedia que desean acelerar su crecimiento profesional. Este
                    programa integra cursos prácticos que no suelen enseñarse en la universidad, pero que son altamente valorados
                    por empresas nacionales e internacionales.
                  </p>
                  <p>
                    Los participantes desarrollarán habilidades que les permitirán destacar en procesos de selección,
                    desempeñarse exitosamente en roles clave y obtener ascensos basados en resultados tangibles.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl text-[#1e3a8a]">Desafios actuales</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Falta de experiencia práctica para resolver problemas reales.</li>
                    <li>Escasas oportunidades de ascenso.</li>
                    <li>Dificultad para tomar decisiones basadas en datos.</li>
                    <li>Poca exposición a metodologías modernas como Lean, TOC, CCPM.</li>
                    <li>Falta de habilidades de liderazgo y pensamiento estratégico.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl text-[#1e3a8a]">Aspiraciones Profesionales</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Avanzar más rápido en su carrera.</li>
                    <li>Ser un profesionista altamente valorado.</li>
                    <li>Lograr ascensos y reconocimiento.</li>
                    <li>Obtener certificaciones profesionales.</li>
                    <li>Liderar proyectos con impacto empresarial.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl text-[#1e3a8a]">Beneficios al Completar el Programa</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mayor empleabilidad.</li>
                    <li>Certificados profesionales por curso.</li>
                    <li>Dominio de metodologías prácticas aplicables desde el primer día.</li>
                    <li>Habilidades técnicas, estratégicas y de liderazgo.</li>
                    <li>Preparación sólida para puestos gerenciales.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">
                      1. Administración de Empresas de Manufactura con el enfoque de Teoría de Restricciones (TOC)
                    </h3>
                    <p>
                      Curso práctico basado en los principios desarrollados por Eliyahu Goldratt, para identificar cuellos de
                      botella, gestionar flujo y mejorar entregas. Incluye simulaciones con software didáctico. Beneficio clave:
                      aumentar capacidad de producción y mejorar plazos de entrega.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">2. Administración de Proyectos con Cadena Crítica (CCPM)</h3>
                    <p>
                      Enfocado en planear y ejecutar proyectos sin retrasos. Enseña uso de buffers y coordinación de recursos.
                      Incluye simulador interactivo de proyectos. Beneficio clave: ejecutar proyectos más rápido y con menos
                      conflictos.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">3. Sistemas de Soporte para la Toma de Decisiones (VGCM)</h3>
                    <p>
                      Basado en el algoritmo de Velocidad de Generación de Contribución Marginal, desarrollado por CAESA GROUP.
                      Ayuda a analizar decisiones en ventas, compras y producción para maximizar contribución marginal. Beneficio
                      clave: tomar decisiones que aumentan resultados financieros.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">4. Análisis y Solución de Problemas</h3>
                    <p>
                      Curso basado en enfoque científico para analizar causas raíz, validar hipótesis y resolver problemas reales.
                      Beneficio clave: soluciones verificables y sostenibles.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">5. Pensamiento Crítico</h3>
                    <p>
                      Desarrolla habilidades cognitivas avanzadas para evaluar información, cuestionar supuestos y tomar decisiones
                      racionales. Beneficio clave: claridad mental en entornos complejos.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">
                      6. Liderazgo, Trabajo en Equipo y Administración del Tiempo
                    </h3>
                    <p>
                      Desarrolla habilidades humanas para dirigir equipos, comunicar con impacto y administrar prioridades.
                      Beneficio clave: convertirse en líder confiable y orientado a resultados.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">7. Evaluación Económica de Proyectos</h3>
                    <p>
                      Introduce métodos financieros como VPN, TIR, ROI y VAE para evaluar inversiones personales y empresariales.
                      Beneficio clave: decisiones financieras inteligentes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">8. Mejora Continua</h3>
                    <p>
                      Integra metodologías Lean, Kaizen y PDCA, más la metodología CAESA aplicada en empresas reales. Beneficio
                      clave: resultados visibles en eficiencia, productividad y costos.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-[#1e3a8a]">9. Diplomado en Manufactura Esbelta</h3>
                    <p>
                      Programa completo de 5 módulos: Estrategia, VSM, Indicadores, Técnicas Lean y Técnicas de Implementación.
                      Incluye Certificado adicional Lean Practitioner. Beneficio clave: dominio profundo de Lean aplicado a
                      procesos industriales.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl text-[#1e3a8a]">Conclusión</h3>
                  <p>
                    Este programa prepara profesionistas completos, capaces de aportar valor estratégico, mejorar procesos, liderar
                    equipos y tomar decisiones inteligentes. Ideal para quienes buscan ascensos, cambios de rol o mayor
                    competitividad profesional.
                  </p>
                </div>

                <p className="text-sm text-gray-600">
                  © CAESA GROUP | www.caesagroup.com | contacto@caesagroup.com
                </p>
              </div>
            </div>
          </div>
        )}

        </div>
      </section>
    </div>
  );
}
