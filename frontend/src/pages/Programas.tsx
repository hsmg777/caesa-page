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
    nombre: "Programa: Desarrollo de Competencias Profesionales",
    descripcion:
      "Ha sido diseñado para fortalecer habilidades que las empresas modernas valoran: pensamiento crítico, liderazgo, metodologías de mejora, administración de proyectos y toma de decisiones efectivas. Cada curso ofrece formación complementaria que impulsa la empleabilidad y acelera el crecimiento profesional.",
    duracion: "8 cursos y 1 diplomado.",
    nivel: "Intermedio",
    modalidad: "Online",
    precio: "$997",
    beneficios: [
      "Mayor empleabilidad y preparación para puestos gerenciales",
      "Certificados profesionales individuales por curso",
      "Dominio de metodologías modernas (Lean, TOC, Kaizen)",
      "Habilidades para la toma de decisiones basada en datos",
    ],
    modulos: [
      "Curso 1: Admin. de Manufactura con Teoría de Restricciones (TOC)",
      "Curso 2: Administración de Proyectos con Cadena Crítica (CCPM)",
      "Curso 3: Sistemas de Soporte a Decisiones (VGCM)",
      "Curso 4: Análisis y Solución de Problemas (Causa Raíz)",
      "Curso 5: Pensamiento Crítico y Toma de Decisiones",
      "Curso 6: Liderazgo, Trabajo en Equipo y Gestión del Tiempo",
      "Curso 7: Evaluación Económica de Proyectos (ROI, VPN, TIR)",
      "Curso 8: Mejora Continua (Lean, Kaizen, PDCA)",
      "Diplomado en Manufactura Esbelta (Incluye VSM y Estrategia)",
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
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm text-[#1e3a8a] shadow">
                    <GraduationCap size={16} />
                    <span>{programa.nivel}</span>
                  </div>
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

                    <div className="mt-4">
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

            {/* DERECHA: Card del curso (con precio) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden sticky top-24">
                <div className="p-6 space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                      <GraduationCap size={16} />
                      Curso destacado
                    </div>

                    <h3 className="text-[#1e3a8a] text-2xl mt-3">
                      {programa.curso.nombre}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Instructor: {programa.curso.instructor}
                      <br />
                      Organiza: {programa.curso.organiza}
                    </p>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                      <Clock size={14} />
                      <span>{programa.curso.duracion}</span>
                    </div>
                  </div>

                  {/* Objetivo (preview) */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={18} className="text-[#1e3a8a]" />
                      <span className="text-[#1e3a8a] font-semibold">
                        Objetivo del curso
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{programa.curso.objetivo}</p>
                  </div>

                  {/* Precio curso (✅ no olvidado) */}
                  <div className="p-4 rounded-xl border bg-white">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-gray-600 text-sm">Precio del curso</span>
                      <span className="text-2xl text-[#1e3a8a] font-semibold">
                        {programa.curso.precio}
                      </span>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setProgramaSeleccionado(programa)}
                      className="w-full bg-gray-100 text-[#1e3a8a] py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Ver detalles del curso
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
              </div>
            </div>
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
                      Curso: {programaSeleccionado.curso.nombre}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Programa: {programaSeleccionado.nombre}
                    </p>
                  </div>

                  <button
                    onClick={() => setProgramaSeleccionado(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6 space-y-8">
                  {/* Datos base + Precio */}
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="text-[#1e3a8a]" size={18} />
                        <span className="text-[#1e3a8a] font-semibold">
                          Instructor
                        </span>
                      </div>
                      <p className="text-gray-700">{programaSeleccionado.curso.instructor}</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="text-[#1e3a8a]" size={18} />
                        <span className="text-[#1e3a8a] font-semibold">Duración</span>
                      </div>
                      <p className="text-gray-700">{programaSeleccionado.curso.duracion}</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-[#1e3a8a]" size={18} />
                        <span className="text-[#1e3a8a] font-semibold">Organiza</span>
                      </div>
                      <p className="text-gray-700">{programaSeleccionado.curso.organiza}</p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag className="text-[#1e3a8a]" size={18} />
                        <span className="text-[#1e3a8a] font-semibold">Precio</span>
                      </div>
                      <p className="text-gray-800 font-semibold text-xl">
                        {programaSeleccionado.curso.precio}
                      </p>
                    </div>
                  </div>

                  {/* Objetivo */}
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl text-[#1e3a8a] mb-3 flex items-center gap-2">
                      <Target size={22} />
                      Objetivo del curso
                    </h3>
                    <p className="text-gray-700">{programaSeleccionado.curso.objetivo}</p>
                  </div>

                  {/* Descripción general (por párrafos) */}
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl text-[#1e3a8a] mb-3">Descripción general</h3>
                    <div className="space-y-3 text-gray-700">
                      {programaSeleccionado.curso.descripcionGeneral
                        .split("\n\n")
                        .filter(Boolean)
                        .map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                    </div>
                  </div>

                  {/* Propuesta imágenes */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl text-[#1e3a8a] mb-3">
                      Propuesta de imágenes para promoción
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {programaSeleccionado.curso.propuestaImagenes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={18}
                            className="text-[#3b82f6] mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructor (texto completo, por párrafos) */}
                  <div className="bg-white border rounded-xl p-6">
                    <h3 className="text-xl text-[#1e3a8a] mb-3">
                      Descripción del Instructor
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      {programaSeleccionado.curso.instructorDescripcion
                        .split("\n\n")
                        .filter(Boolean)
                        .map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-6 rounded-xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div>
                        <p className="text-blue-100">{programaSeleccionado.curso.cta}</p>
                        <p className="text-white font-semibold mt-3">
                          Precio: {programaSeleccionado.curso.precio}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setProgramaSeleccionado(null);
                          setOpenCouponModal(true);
                        }}
                        className="inline-flex items-center gap-2 bg-yellow-400 text-[#1e3a8a] px-8 py-4 rounded-lg hover:bg-yellow-300 transition-all whitespace-nowrap font-semibold"
                      >
                        <span>Solicitar cupón / Inscribirme</span>
                        <Tag size={20} />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">{programaSeleccionado.curso.footer}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
