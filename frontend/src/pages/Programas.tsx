import {
  Award,
  Building2,
  CheckCircle,
  Clock,
  Lightbulb,
  ListChecks,
  Tag,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

interface CursoDetalle {
  titulo: string;
  parrafos: string[];
  beneficioClave: string;
}

interface ProgramaDetalle {
  introduccion: string[];
  desafios: string[];
  aspiraciones: string[];
  beneficiosFinales: string[];
  cursos: CursoDetalle[];
  conclusion: string;
}

interface Programa {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  nivel: string;
  modalidad: string;
  precio: string;
  precioAnterior?: string;
  beneficios: string[];
  modulos: string[];
  incluye: string[];
  imageUrl: string;
  ctaHref: string;
  ctaLabel: string;
  ctaExternal?: boolean;
  footer: string;
  detalle: ProgramaDetalle;
}

const programas: Programa[] = [
  {
    id: 1,
    nombre: "Programa Avanzado de Competencias Profesionales",
    descripcion:
      "Ha sido diseñado para fortalecer habilidades que las empresas modernas valoran: pensamiento crítico, liderazgo, metodologías de mejora, administración de proyectos y toma de decisiones efectivas. Cada curso ofrece formación complementaria que impulsa la empleabilidad y acelera el crecimiento profesional.",
    duracion: "6 cursos",
    nivel: "Intermedio",
    modalidad: "Online",
    precio: "$497 USD",
    precioAnterior: "$782 USD",
    beneficios: [
      "Mayor empleabilidad y preparación para puestos gerenciales",
      "Certificados profesionales individuales por curso",
      "Dominio de metodologías modernas (Lean, TOC, Kaizen)",
      "Habilidades para la toma de decisiones basada en datos",
    ],
    modulos: [
      "Curso 1: Admin. de empresas de manufactura con enfoque de Teoría de Restricciones (TOC)",
      "Curso 2: Administración de Proyectos con el enfoque de Cadena Crítica (CCPM)",
      "Curso 3: Sistemas de Soporte para la toma de decisiones",
      "Curso 4: Análisis y Solución de Problemas",
      "Curso 5: Pensamiento Crítico",
      "Curso 6: Liderazgo, Trabajo en Equipo y Administración del Tiempo",
    ],
    incluye: [
      "Simuladores interactivos con software didáctico",
      "Metodología exclusiva CAESA GROUP",
      "Enfoque práctico aplicable desde el primer día",
    ],
    imageUrl: "/images/programa.png",
    ctaHref: "https://go.hotmart.com/A102899896X",
    ctaLabel: "Inscribirme",
    ctaExternal: true,
    footer: "© CAESA GROUP | www.caesagroup.com | contacto@caesagroup.com",
    detalle: {
      introduccion: [
        "El Programa de Desarrollo de Competencias Profesionales ha sido diseñado para jóvenes profesionistas, recién egresados y colaboradores con experiencia intermedia que desean acelerar su crecimiento profesional.",
        "Este programa integra cursos prácticos que no suelen enseñarse en la universidad, pero que son altamente valorados por empresas nacionales e internacionales. Los participantes desarrollarán habilidades que les permitirán destacar en procesos de selección, desempeñarse exitosamente en roles clave y obtener ascensos basados en resultados tangibles.",
      ],
      desafios: [
        "Falta de experiencia práctica para resolver problemas reales.",
        "Escasas oportunidades de ascenso.",
        "Dificultad para tomar decisiones basadas en datos.",
        "Poca exposición a metodologías modernas como Lean, TOC y CCPM.",
        "Falta de habilidades de liderazgo y pensamiento estratégico.",
      ],
      aspiraciones: [
        "Avanzar más rápido en su carrera.",
        "Ser un profesionista altamente valorado.",
        "Lograr ascensos y reconocimiento.",
        "Obtener certificaciones profesionales.",
        "Liderar proyectos con impacto empresarial.",
      ],
      beneficiosFinales: [
        "Mayor empleabilidad.",
        "Certificados profesionales por curso.",
        "Dominio de metodologías prácticas aplicables desde el primer día.",
        "Habilidades técnicas, estratégicas y de liderazgo.",
        "Preparación sólida para puestos gerenciales.",
      ],
      cursos: [
        {
          titulo:
            "1. Administración de Empresas de Manufactura con el enfoque de Teoría de Restricciones (TOC)",
          parrafos: [
            "Curso práctico basado en los principios desarrollados por Eliyahu Goldratt, para identificar cuellos de botella, gestionar flujo y mejorar entregas.",
            "Incluye simulaciones con software didáctico para facilitar la comprensión y aplicación de los conceptos.",
          ],
          beneficioClave:
            "Aumentar capacidad de producción y mejorar plazos de entrega.",
        },
        {
          titulo: "2. Administración de Proyectos con Cadena Crítica (CCPM)",
          parrafos: [
            "Enfocado en planear y ejecutar proyectos sin retrasos.",
            "Enseña uso de buffers, coordinación de recursos y mejor control del avance real.",
          ],
          beneficioClave:
            "Ejecutar proyectos más rápido y con menos conflictos.",
        },
        {
          titulo: "3. Sistemas de Soporte para la Toma de Decisiones (VGCM)",
          parrafos: [
            "Basado en el algoritmo de Velocidad de Generación de Contribución Marginal, desarrollado por CAESA GROUP.",
            "Ayuda a analizar decisiones en ventas, compras y producción para maximizar la contribución marginal.",
          ],
          beneficioClave:
            "Tomar decisiones que aumentan resultados financieros.",
        },
        {
          titulo: "4. Análisis y Solución de Problemas",
          parrafos: [
            "Curso basado en enfoque científico para analizar causas raíz, validar hipótesis y resolver problemas reales.",
          ],
          beneficioClave: "Lograr soluciones verificables y sostenibles.",
        },
        {
          titulo: "5. Pensamiento Crítico",
          parrafos: [
            "Desarrolla habilidades cognitivas avanzadas para evaluar información, cuestionar supuestos y tomar decisiones racionales.",
          ],
          beneficioClave: "Ganar claridad mental en entornos complejos.",
        },
        {
          titulo: "6. Liderazgo, Trabajo en Equipo y Administración del Tiempo",
          parrafos: [
            "Desarrolla habilidades humanas para dirigir equipos, comunicar con impacto y administrar prioridades.",
          ],
          beneficioClave:
            "Convertirse en un líder confiable y orientado a resultados.",
        },
      ],
      conclusion:
        "Este programa prepara profesionistas completos, capaces de aportar valor estratégico, mejorar procesos, liderar equipos y tomar decisiones inteligentes. Es ideal para quienes buscan ascensos, cambios de rol o mayor competitividad profesional.",
    },
  },
  {
    id: 2,
    nombre: "Programa de Teoría de Restricciones Aplicada",
    descripcion:
      "Programa práctico compuesto por tres cursos de alto valor para el entorno laboral actual. Ayuda a mejorar operaciones, gestionar proyectos con menos retrasos y tomar decisiones más inteligentes con impacto real en los resultados.",
    duracion: "3 cursos",
    nivel: "Intermedio",
    modalidad: "Online",
    precio: "$367 USD",
    precioAnterior: "$491 USD",
    beneficios: [
      "Entender como mejorar el desempeño de una empresa de manufactura",
      "Gestionar proyectos con menos retrasos y mayor enfoque",
      "Tomar decisiones operativas y financieras más inteligentes",
      "Hablar el lenguaje de resultados que valoran líderes y gerentes",
    ],
    modulos: [
      "Curso 1: Administración de empresas de manufactura con enfoque de Teoría de Restricciones (TOC)",
      "Curso 2: Administración de Proyectos con el enfoque de Cadena Crítica (CCPM)",
      "Curso 3: Sistemas de Soporte para la toma de decisiones",
    ],
    incluye: [
      "Simulaciones con software didáctico para facilitar el aprendizaje práctico",
      "Enfoque práctico aplicable desde el primer día",
      "Herramientas orientadas a resultados operativos y financieros",
    ],
    imageUrl: "/images/restricciones.png",
    ctaHref: "/contacto",
    ctaLabel: "Solicitar información",
    footer: "© CAESA GROUP | www.caesagroup.com | contacto@caesagroup.com",
    detalle: {
      introduccion: [
        "El Programa de Teoría de Restricciones Aplicada ha sido diseñado para jóvenes profesionistas, recién egresados y colaboradores con experiencia intermedia que desean fortalecer sus competencias en administración de operaciones, gestión de proyectos y toma de decisiones empresariales.",
        "Este programa reúne tres cursos prácticos de alto valor para el entorno laboral actual, enfocados en metodologías modernas que permiten mejorar resultados, optimizar recursos y contribuir de forma directa al desempeño de las empresas. A través de herramientas aplicables desde el primer día, los participantes desarrollarán una visión más estratégica, analítica y orientada a resultados.",
      ],
      desafios: [
        "Dificultad para entender y gestionar sistemas productivos de manera integral.",
        "Problemas para planear y ejecutar proyectos sin retrasos.",
        "Toma de decisiones basada en intuición y no en análisis financiero y operativo.",
        "Escasa formación práctica en metodologías modernas como Teoría de Restricciones y Administración de Proyectos.",
        "Necesidad de generar resultados medibles en entornos de alta presión y recursos limitados.",
      ],
      aspiraciones: [
        "Acelerar su crecimiento profesional.",
        "Mejorar su capacidad para resolver problemas complejos.",
        "Participar en proyectos estrategicos dentro de su empresa.",
        "Incrementar su valor profesional mediante conocimientos especializados.",
        "Prepararse para posiciones de mayor responsabilidad y liderazgo.",
      ],
      beneficiosFinales: [
        "Mayor capacidad para analizar y mejorar operaciones de manufactura.",
        "Herramientas prácticas para gestionar proyectos con mayor velocidad y confiabilidad.",
        "Habilidad para tomar decisiones enfocadas en maximizar resultados financieros.",
        "Conocimientos diferenciadores altamente valorados en empresas nacionales e internacionales.",
        "Preparación sólida para asumir retos de coordinación, supervisión y mejora continua.",
      ],
      cursos: [
        {
          titulo:
            "1. Administración de Empresas de Manufactura con enfoque de Teoría de Restricciones (TOC)",
          parrafos: [
            "Curso práctico basado en los principios desarrollados por Eliyahu Goldratt, orientado a identificar cuellos de botella, gestionar el flujo y mejorar el desempeño global de los sistemas productivos.",
            "Los participantes aprenderán a reconocer las restricciones que limitan la capacidad de la empresa, priorizar acciones de mejora y enfocar esfuerzos en aquello que genera mayor impacto en los resultados. Incluye simulaciones con software didáctico para facilitar la comprensión y aplicación de los conceptos.",
          ],
          beneficioClave:
            "Aumentar la capacidad de producción, mejorar plazos de entrega y enfocar la mejora donde realmente se generan resultados.",
        },
        {
          titulo: "2. Administración de Proyectos con Cadena Crítica (CCPM)",
          parrafos: [
            "Curso enfocado en la planeación y ejecución efectiva de proyectos mediante la metodología de Cadena Crítica, también desarrollada a partir de los aportes de Goldratt.",
            "El participante aprenderá a gestionar tiempos, recursos y prioridades de manera más eficiente, evitando retrasos causados por multitarea, mala estimación de tiempos o conflictos entre actividades. Incluye el uso de buffers, coordinación de recursos y simulador interactivo de proyectos.",
          ],
          beneficioClave:
            "Ejecutar proyectos más rápido, con menos retrasos y mejor control del avance real.",
        },
        {
          titulo: "3. Sistemas de Soporte para la Toma de Decisiones (VGCM)",
          parrafos: [
            "Curso orientado al uso del algoritmo de Velocidad de Generación de Contribución Marginal (VGCM), desarrollado por CAESA GROUP, para apoyar decisiones en áreas como ventas, compras, producción y asignación de recursos.",
            "Los participantes aprenderán a evaluar alternativas de decisión con base en su impacto sobre la contribución marginal, fortaleciendo el criterio financiero y operativo para seleccionar opciones que realmente mejoren el desempeño del negocio.",
          ],
          beneficioClave:
            "Tomar decisiones más inteligentes y rentables, alineadas con los objetivos financieros de la empresa.",
        },
      ],
      conclusion:
        "El Programa de Teoría de Restricciones Aplicada prepara profesionistas capaces de entender la operación de una empresa, ejecutar proyectos con mayor efectividad y tomar decisiones fundamentadas en impacto real. Es ideal para quienes buscan diferenciarse profesionalmente, generar resultados visibles y avanzar hacia posiciones de mayor responsabilidad.",
    },
  },
];

export function Programas() {
  const [programaSeleccionado, setProgramaSeleccionado] =
    useState<Programa | null>(null);

  const renderCTA = (programa: Programa) => {
    const commonClassName =
      "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-3 text-white transition-all hover:shadow-lg";

    if (programa.ctaExternal) {
      return (
        <a
          href={programa.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={commonClassName}
        >
          <span>{programa.ctaLabel}</span>
          <Tag size={18} />
        </a>
      );
    }

    return (
      <a href={programa.ctaHref} className={commonClassName}>
        <span>{programa.ctaLabel}</span>
        <Tag size={18} />
      </a>
    );
  };

  return (
    <div className="pt-0">
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl lg:text-5xl">Nuestros Programas</h1>
          <p className="max-w-3xl text-xl text-blue-100">
            Programas completos diseñados para profesionales que buscan transformar
            su carrera con herramientas aplicables.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {programas.map((programa) => (
              <article
                key={programa.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative">
                  <img
                    src={programa.imageUrl}
                    alt={programa.nombre}
                    className="h-80 w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-6 p-6">
                  <div>
                    <h2 className="mb-2 text-2xl text-[#1e3a8a]">{programa.nombre}</h2>
                    <p className="text-gray-700">{programa.descripcion}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        <Clock size={14} />
                        <span>{programa.duracion}</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        <Users size={14} />
                        <span>{programa.modalidad}</span>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        <Building2 size={14} />
                        <span>CAESA GROUP</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-lg text-[#1e3a8a]">
                      <Lightbulb size={18} />
                      Beneficios del programa
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {programa.beneficios.map((beneficio, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-green-500"
                          />
                          <span>{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-lg text-[#1e3a8a]">
                      <ListChecks size={18} />
                      Cursos incluidos
                    </h3>

                    <div className="space-y-2">
                      {programa.modulos.map((modulo, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-lg bg-gray-50 p-3"
                        >
                          <CheckCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-[#3b82f6]"
                          />
                          <span className="text-sm text-gray-700">{modulo}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-lg text-[#1e3a8a]">
                      <Award size={18} />
                      ¿Qué incluye?
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {programa.incluye.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-[#3b82f6]"
                          />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border bg-gradient-to-r from-blue-50 to-blue-100 p-5">
                    <div className="flex flex-wrap items-end gap-3">
                      {programa.precioAnterior && (
                        <span className="text-lg text-gray-500 line-through">
                          {programa.precioAnterior}
                        </span>
                      )}
                      <span className="text-3xl font-semibold text-[#1e3a8a]">
                        {programa.precio}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#1e3a8a]">
                      {programa.id === 2
                        ? "Precio especial con 25% de descuento"
                        : "Programa completo con precio promocional"}
                    </p>
                    <div className="mt-4 space-y-2">
                      <button
                        onClick={() => setProgramaSeleccionado(programa)}
                        className="w-full rounded-lg bg-gray-100 py-3 text-[#1e3a8a] transition-colors hover:bg-gray-200"
                      >
                        Ver detalles del programa
                      </button>

                      {renderCTA(programa)}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">{programa.footer}</p>
                </div>
              </article>
            ))}
          </div>

          {programaSeleccionado && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
              <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white">
                <div className="sticky top-0 flex items-center justify-between border-b bg-white px-6 py-4">
                  <div>
                    <h2 className="text-2xl text-[#1e3a8a]">
                      {programaSeleccionado.nombre}
                    </h2>
                  </div>

                  <button
                    onClick={() => setProgramaSeleccionado(null)}
                    className="rounded-lg p-2 transition-colors hover:bg-gray-100"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8 p-6 text-gray-700">
                  <div className="space-y-3">
                    <h3 className="text-xl text-[#1e3a8a]">Introducción</h3>
                    {programaSeleccionado.detalle.introduccion.map((texto, idx) => (
                      <p key={idx}>{texto}</p>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl text-[#1e3a8a]">Desafíos actuales</h3>
                    <ul className="list-disc space-y-2 pl-6">
                      {programaSeleccionado.detalle.desafios.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl text-[#1e3a8a]">Aspiraciones Profesionales</h3>
                    <ul className="list-disc space-y-2 pl-6">
                      {programaSeleccionado.detalle.aspiraciones.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl text-[#1e3a8a]">
                      Beneficios al Completar el Programa
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      {programaSeleccionado.detalle.beneficiosFinales.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#1e3a8a]">
                      El programa incluye:
                    </h2>
                    {programaSeleccionado.detalle.cursos.map((curso) => (
                      <div key={curso.titulo} className="space-y-2">
                        <h3 className="text-xl text-[#1e3a8a]">{curso.titulo}</h3>
                        {curso.parrafos.map((parrafo, idx) => (
                          <p key={idx}>{parrafo}</p>
                        ))}
                        <p>
                          <strong>Beneficio clave:</strong> {curso.beneficioClave}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl text-[#1e3a8a]">Conclusión</h3>
                    <p>{programaSeleccionado.detalle.conclusion}</p>
                  </div>

                  <p className="text-sm text-gray-600">{programaSeleccionado.footer}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
