import { Clock, BarChart, ExternalLink, Filter, X } from 'lucide-react';
import { useState } from 'react';
import BonusSection from '../components/BonusSection';

interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado ' | 'Todos los niveles';
  categoria: string;
  precio: string;
  precioAnterior?: string;
  objetivos: string[];
  dirigidoA: string[];
  temario: string[];
  linkHotmart: string;
}

export function Cursos() {
  const [nivelFiltro, setNivelFiltro] = useState<string>('Todos');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('Todas');
  const [cursoSeleccionado, setCursoSeleccionado] = useState<Curso | null>(null);

  const cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Administración de Empresas de Manufactura con Enfoque TOC',
      descripcion: 'Aprende a optimizar recursos y eliminar cuellos de botella aplicando la Teoría de Restricciones. Incluye simulador de producción y análisis del libro "La Meta".',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Operaciones y Manufactura',
      precio: '73.5 USD',
      precioAnterior: '147 USD',
      objetivos: [
        'Dominar los fundamentos de la Teoría de Restricciones (TOC)',
        'Identificar y eliminar cuellos de botella en procesos',
        'Mejorar la programación de la producción y el flujo',
        'Tomar decisiones estratégicas basadas en resultados tangibles'
      ],
      dirigidoA: [
        'Estudiantes y egresados de cualquier carrera',
        'Jóvenes profesionistas que buscan diferenciarse',
        'Colaboradores que desean ascender a roles de liderazgo',
        'Interesados en mejora de procesos y productividad'
      ],
      temario: [
        'Fundamentos y aplicación real de TOC',
        'Identificación de limitaciones del sistema',
        'Simulación de producción (Software con 50+ ejercicios)',
        'Gestión de flujo y toma de decisiones',
        'Análisis práctico del libro "La Meta" de Eliyahu Goldratt'
      ],
      linkHotmart: 'https://hotmart.com/producto-toc',
    },
    {
      id: 2,
      nombre: 'Administración de Proyectos con el Enfoque de Cadena Crítica (CCPM)',
      descripcion: 'Domina la planeación y ejecución de proyectos eliminando la multitarea y reduciendo tiempos mediante la metodología de Cadena Crítica. Incluye software de simulación especializado.',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Gestión de Proyectos',
      precio: '73.5 USD', 
      precioAnterior: '147 USD',
      objetivos: [
        'Planear, coordinar y ejecutar proyectos de manera eficiente ',
        'Optimizar tiempos y evitar la multitarea dañina ',
        'Manejar la incertidumbre y enfocar recursos críticos ',
        'Lograr entregas de proyectos más predecibles, rápidas y confiables '
      ],
      dirigidoA: [
        'Profesionistas de cualquier área (Ingeniería, Admin, etc.)',
        'Personas sin conocimientos previos en gestión de proyectos ',
        'Quienes buscan certificarse en Critical Chain Project Management',
        'Interesados en reducir retrasos y sobrecostos en proyectos'
      ],
      temario: [
        'Fundamentos del método de Cadena Crítica (CCPM)',
        'Problemas de la gestión tradicional: Multitarea y estimación ',
        'Uso de buffers y manejo de la incertidumbre ',
        'Simulación de escenarios con software especializado ',
        'Comparativa: Método Tradicional vs Cadena Crítica '
      ],
      linkHotmart: '',
    },
    {
      id: 3,
      nombre: 'Análisis y Solución de Problemas',
      descripcion: 'Domina una metodología científica para identificar, analizar y resolver problemas de raíz. Utiliza herramientas profesionales (5W+1H, Pareto, Causa-Efecto) para lograr mejoras sostenibles y evitar soluciones temporales.',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Mejora Continua y Calidad',
      precio: '48.5 USD',
      precioAnterior: '97 USD',
      objetivos: [
        'Resolver problemas de manera estructurada y científica',
        'Validar hipótesis y encontrar causas raíz con datos reales',
        'Aplicar herramientas como Estratificación y Diagrama Causa-Efecto',
        'Generar soluciones permanentes y estandarizar procesos'
      ],
      dirigidoA: [
        'Profesionales con retos operativos, de calidad o costos',
        'Líderes de equipo que buscan resultados sostenibles',
        'Responsables de mejora continua y productividad',
        'Cualquier persona que desee dejar de usar la intuición para resolver fallas'
      ],
      temario: [
        'Selección y descripción precisa del problema',
        'Recolección de datos y Estratificación',
        'Análisis de causas (Diagrama Causa-Efecto)',
        'Validación científica de Causa Raíz (5W+1H)',
        'Establecimiento de Metas SMART y Planes de Acción',
        'Estandarización de las mejoras'
      ],
      linkHotmart: '',
    },
    {
      id: 4,
      nombre: 'Diplomado en Manufactura Esbelta',
      descripcion: 'Programa integral de 5 módulos para dominar metodologías Lean, diseñado para analizar, diseñar y mejorar sistemas productivos reduciendo desperdicios.',
      duracion: '5 Módulos',
      nivel: 'Todos los niveles',
      categoria: 'Manufactura y Operaciones',
      precio: '248.5 USD',
      precioAnterior: '497 USD',
      objetivos: [
        'Analizar, diseñar y mejorar sistemas productivos bajo el enfoque Lean',
        'Reducir desperdicios, mejorar el flujo y aumentar la capacidad',
        'Mapear procesos utilizando Value Stream Mapping (VSM)',
        'Liderar iniciativas de mejora y gestión del cambio organizacional'
      ],
      dirigidoA: [
        'Profesionistas que desean dominar metodologías Lean',
        'Responsables de operaciones, mejora continua y manufactura',
        'Líderes encargados de implementar sistemas productivos',
        'Interesados en obtener la certificación Lean Practitioner'
      ],
      temario: [
        'Módulo 1: Estrategias de Manufactura (Valor, Flujo, Lead Time)',
        'Módulo 2: Mapeo de la Cadena de Valor (VSM Actual y Futuro)',
        'Módulo 3: Indicadores Lean (OEE, Disponibilidad, Rendimiento)',
        'Módulo 4: Técnicas de Manufactura Esbelta (5S, SMED, Kanban, JIT)',
        'Módulo 5: Técnicas de Implementación y Gestión del Cambio'
      ],
      linkHotmart: '',
    },
    {
      id: 5,
      nombre: 'Evaluación Económica de Proyectos',
      descripcion: 'Aprende a evaluar proyectos y tomar decisiones financieras informadas utilizando herramientas profesionales como VPN, TIR y ROI para entornos empresariales y personales[cite: 63, 66].',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Finanzas y Gestión de Proyectos',
      precio: '48.5 USD',
      precioAnterior: '97 USD',
      objetivos: [
        'Aplicar métodos financieros fundamentales como VPN, TIR, VAE y ROI',
        'Analizar el valor del dinero en el tiempo para decisiones de inversión',
        'Comparar alternativas mutuamente excluyentes y propuestas de mejora',
        'Analizar flujos de efectivo y calcular tasas efectivas'
      ],
      dirigidoA: [
        'Profesionales que toman decisiones sobre compras, expansiones e inversiones',
        'Personas interesadas en mejorar sus decisiones financieras personales',
        'Analistas que buscan evitar pérdidas económicas por elecciones incorrectas',
        'Quienes deseen dominar métodos modernos de análisis económico'
      ],
      temario: [
        'Concepto fundamental del valor del dinero a través del tiempo',
        'Análisis de flujos de efectivo y tasas efectivas',
        'Valor Presente Neto (VPN) y Valor Futuro (VF)',
        'Tasa Interna de Rendimiento (TIR) y Retorno sobre Inversión (ROI)',
        'Valor Anual Equivalente (VAE) y comparación de alternativas'
      ],
      linkHotmart: '',
    },
    {
      id: 6,
      nombre: 'Liderazgo, Trabajo en Equipo y Administración del Tiempo',
      descripcion: 'Transforma tu capacidad de influir y colaborar. Un curso basado en modelos como "Los 7 Hábitos de la Gente Altamente Efectiva" y principios universales para liderar con confianza y gestionar prioridades.',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Liderazgo y Habilidades Blandas',
      precio: '48.5 USD',
      precioAnterior: '97 USD',
      objetivos: [
        'Desarrollar habilidades de liderazgo personal e interpersonal',
        'Adoptar hábitos efectivos y pensamiento proactivo',
        'Mejorar la administración del tiempo y la gestión de prioridades',
        'Construir relaciones de confianza y sinergia en equipos de trabajo'
      ],
      dirigidoA: [
        'Profesionales que buscan aumentar su impacto organizacional',
        'Líderes de equipo y colaboradores con potencial de crecimiento',
        'Personas interesadas en el desarrollo del carácter y principios universales',
        'Quienes deseen mejorar su comunicación y efectividad personal'
      ],
      temario: [
        'Proactividad, Misión Personal y Valores',
        'Administración del Tiempo (Matriz Importante/Urgente)',
        'Pensamiento Ganar-Ganar y Escucha Empática',
        'Sinergia, Trabajo en Equipo y Comunicación Efectiva',
        'Modelos de liderazgo: "Confiar e Inspirar" y Zona de Confort'
      ],
      linkHotmart: '',
    },
    {
      id: 7,
      nombre: 'Mejora Continua',
      descripcion: 'Implementa un marco integral de mejora combinando principios universales (PDCA, Kaizen) con la metodología práctica de CAESA para identificar oportunidades, eliminar desperdicios y sostener resultados.',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Calidad y Procesos',
      precio: '48.5 USD',
      precioAnterior: '97 USD',
      objetivos: [
        'Combinar principios universales (PDCA, Kaizen) con metodología práctica',
        'Identificar áreas de oportunidad y priorizar esfuerzos de mejora',
        'Ejecutar mejoras rápidas (Quick Hits) y asegurar la sostenibilidad',
        'Aumentar capacidad, reducir costos y fortalecer la cultura organizacional'
      ],
      dirigidoA: [
        'Profesionistas que buscan generar impacto real en su organización',
        'Líderes de empresas de manufactura, servicios o sector público',
        'Equipos encargados de optimizar procesos y reducir ineficiencias',
        'Cualquier persona interesada en desarrollar una mentalidad de mejora'
      ],
      temario: [
        'Fundamentos: Kaizen, PDCA y Ciclo de Calidad',
        'Identificación de desperdicios (Lean) y estandarización',
        'Metodología CAESA: Selección de áreas y roles del equipo',
        'Análisis de situación actual y ejecución de "Quick Hits"',
        'Planes de acción, estándares visuales y sostenibilidad'
      ],
      linkHotmart: '',
    },
    {
      id: 8,
      nombre: 'Pensamiento Crítico',
      descripcion: 'Desarrolla la habilidad de analizar información, cuestionar supuestos y eliminar sesgos cognitivos. Un curso basado en estándares intelectuales universales y el enfoque científico para mejorar la calidad de tus decisiones.',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Habilidades Blandas y Desarrollo Profesional',
      precio: '48.5 USD',
      precioAnterior: '97 USD',
      objetivos: [
        'Analizar información y evaluar evidencias con claridad',
        'Cuestionar supuestos y razonar aplicando el enfoque científico',
        'Identificar y mitigar sesgos cognitivos en la toma de decisiones',
        'Aplicar los Estándares Intelectuales Universales del razonamiento'
      ],
      dirigidoA: [
        'Profesionales que aspiran a posiciones directivas',
        'Personas que necesitan tomar decisiones complejas fundamentadas',
        'Quienes buscan evitar errores de lógica y autoengaños',
        'Cualquier colaborador interesado en mejorar su capacidad de análisis'
      ],
      temario: [
        'Funcionamiento del pensamiento humano y autoengaño',
        'Correlación vs. Causalidad y pruebas científicas',
        'Sesgos cognitivos y cómo evitarlos',
        'Banderas rojas en argumentos y evidencia observable',
        'Estándares Intelectuales Universales (Claridad, Precisión, Lógica)'
      ],
      linkHotmart: '',
    },
    {
      id: 9,
      nombre: 'Sistemas de Soporte para la Toma de Decisiones (VGCM)',
      descripcion: 'Aprende a tomar decisiones estratégicas y operativas utilizando un algoritmo exclusivo (VGCM) y un software de simulación. Maximiza la rentabilidad y optimiza recursos sin necesidad de matemáticas avanzadas.',
      duracion: 'A ritmo propio',
      nivel: 'Todos los niveles',
      categoria: 'Estrategia y Negocios',
      precio: '98.5 USD',
      precioAnterior: '197 USD',
      objetivos: [
        'Utilizar el algoritmo de Velocidad de Generación de Contribución Marginal (VGCM)',
        'Simular decisiones reales en Mercadotecnia, Producción, Compras y Finanzas',
        'Equilibrar capacidad, demanda y rentabilidad para evitar pérdidas',
        'Tomar decisiones basadas en datos duros y no solo en intuición'
      ],
      dirigidoA: [
        'Profesionistas que toman decisiones de asignación de recursos',
        'Gerentes de producción, ventas, compras y finanzas',
        'Interesados en optimizar la rentabilidad empresarial',
        'Cualquier profesionista que busque un método práctico de decisión'
      ],
      temario: [
        'Introducción a los Sistemas de Soporte para la Toma de Decisiones (SSTD)',
        'El algoritmo VGCM: Priorización y optimización',
        'Simulación de escenarios en Mercadotecnia, Producción y Finanzas',
        'Análisis de costos marginales, capacidades y tiempos de proceso',
        'Evaluación del impacto directo en los estados financieros'
      ],
      linkHotmart: '',
    },


  ];

  const categorias = ['Todas', ...Array.from(new Set(cursos.map(c => c.categoria)))];
  const niveles = ['Todos', 'Básico', 'Intermedio', 'Avanzado'];

  const cursosFiltrados = cursos.filter(curso => {
    const matchNivel = nivelFiltro === 'Todos' || curso.nivel === nivelFiltro;
    const matchCategoria = categoriaFiltro === 'Todas' || curso.categoria === categoriaFiltro;
    return matchNivel && matchCategoria;
  });

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'Básico':
        return 'bg-green-100 text-green-700';
      case 'Intermedio':
        return 'bg-blue-100 text-blue-700';
      case 'Avanzado':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="pt-0">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Nuestros Cursos</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Cursos prácticos y accesibles para desarrollar habilidades específicas. 
            Aprende a tu ritmo con contenido de alta calidad y certificación al finalizar.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b sticky top-20 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <span className="text-gray-700">Filtrar por:</span>
            </div>

            {/* Filtro de Nivel */}
            <div className="flex gap-2">
              {niveles.map((nivel) => (
                <button
                  key={nivel}
                  onClick={() => setNivelFiltro(nivel)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    nivelFiltro === nivel
                      ? 'bg-[#1e3a8a] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {nivel}
                </button>
              ))}
            </div>

            {/* Filtro de Categoría */}
            <select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            >
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>

            <div className="text-sm text-gray-500 ml-auto">
              {cursosFiltrados.length} curso{cursosFiltrados.length !== 1 ? 's' : ''} encontrado{cursosFiltrados.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cursosFiltrados.map((curso) => (
              <div key={curso.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Badges */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${getNivelColor(curso.nivel)}`}>
                      {curso.nivel}
                    </span>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {curso.categoria}
                    </span>
                  </div>

                  <h3 className="text-[#1e3a8a] mb-3">
                    {curso.nombre}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {curso.descripcion}
                  </p>

                  {/* Duración */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Clock size={16} />
                    <span>{curso.duracion}</span>
                  </div>

                  {/* Precio */}
                  <div className="mb-4">
                    {curso.precioAnterior ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 line-through">{curso.precioAnterior}</span>
                        <span className="text-2xl text-[#3b82f6]">{curso.precio}</span>
                      </div>
                    ) : (
                      <span className="text-2xl text-[#3b82f6]">{curso.precio}</span>
                    )}
                  </div>

                  {/* Botones */}
                  <div className="space-y-2 mt-auto">
                    <button
                      onClick={() => setCursoSeleccionado(curso)}
                      className="w-full bg-gray-100 text-[#1e3a8a] py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Más información
                    </button>
                    <a
                      href={curso.linkHotmart}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-2.5 rounded-lg hover:shadow-lg transition-all"
                    >
                      <span>Comprar en Hotmart</span>
                      <ExternalLink size={16} />
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {cursosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron cursos con los filtros seleccionados.
              </p>
            </div>
          )}
        </div>
      </section>

      <BonusSection/>

      {/* Modal de Detalles */}
      {cursoSeleccionado && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl text-[#1e3a8a] mb-2">{cursoSeleccionado.nombre}</h2>
                <div className="flex gap-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${getNivelColor(cursoSeleccionado.nivel)}`}>
                    {cursoSeleccionado.nivel}
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {cursoSeleccionado.categoria}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setCursoSeleccionado(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Descripción */}
              <div>
                <p className="text-lg text-gray-700">{cursoSeleccionado.descripcion}</p>
              </div>

              {/* Duración */}
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={20} />
                <span>Duración: {cursoSeleccionado.duracion}</span>
              </div>

              {/* Lo que aprenderás */}
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-3">Lo que aprenderás</h3>
                <div className="space-y-2">
                  {cursoSeleccionado.objetivos.map((objetivo, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <BarChart size={18} className="text-[#3b82f6] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objetivo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* A quién está dirigido */}
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-3">¿A quién está dirigido?</h3>
                <div className="space-y-2">
                  {cursoSeleccionado.dirigidoA.map((persona, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{persona}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temario */}
              <div>
                <h3 className="text-xl text-[#1e3a8a] mb-3">Temario</h3>
                <div className="space-y-2">
                  {cursoSeleccionado.temario.map((tema, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-[#1e3a8a] flex-shrink-0">{idx + 1}.</span>
                      <span className="text-gray-700">{tema}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Precio y CTA */}
              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    {cursoSeleccionado.precioAnterior && (
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-blue-200 line-through">{cursoSeleccionado.precioAnterior}</span>
                        <span className="text-3xl">{cursoSeleccionado.precio}</span>
                      </div>
                    )}
                    {!cursoSeleccionado.precioAnterior && (
                      <span className="text-3xl">{cursoSeleccionado.precio}</span>
                    )}
                  </div>
                  <a
                    href={cursoSeleccionado.linkHotmart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all whitespace-nowrap"
                  >
                    <span>Inscribirme ahora - Hotmart</span>
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
