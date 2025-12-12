import { Clock, BarChart, Filter, X, Tag, Award, BookOpen, Cpu, Building2, User, Quote } from "lucide-react";
import { useMemo, useState } from "react";
import BonusSection from "../components/BonusSection";
import CouponRequestModal from "../components/CouponRequestModal";

interface Testimonio {
  texto: string;
  autor: string;
  cargo: string;
  empresa?: string;
}

interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: string;
  categoria: string;
  precio: string;
  objetivos: string[];
  dirigidoA: string[];
  linkHotmart: string;
  imageUrl: string;

  nombrePrograma?: string;
  introPrograma?: string;

  instructor?: string;
  organiza?: string;

  objetivoCurso?: string;
  descripcionGeneral?: string;

  beneficios?: string[];
  materialComplementario?: string[];
  requisitos?: string[];

  contextoEstadisticas?: string;

  perfilInstructorTitulo?: string;
  perfilInstructorBullets?: string[];

  propuestaVisualBullets?: string[];
  testimonio?: Testimonio;

  highlights?: string[];
  ctaTexto?: string;
  footerBrand?: string;
  footerWeb?: string;
  footerEmail?: string;
}

const Chip = ({ icon, text }: { icon?: React.ReactNode; text: string }) => (
  <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
    {icon}
    <span>{text}</span>
  </span>
);

const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="text-[#1e3a8a]">{icon}</div>
    <h3 className="text-xl text-[#1e3a8a]">{title}</h3>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <div className="space-y-2">
    {items.map((it, idx) => (
      <div key={idx} className="flex items-start gap-2">
        <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2 flex-shrink-0" />
        <span className="text-gray-700">{it}</span>
      </div>
    ))}
  </div>
);

export function Cursos() {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("Todas");
  const [cursoSeleccionado, setCursoSeleccionado] = useState<Curso | null>(null);

  const [openCouponModal, setOpenCouponModal] = useState(false);
  const [couponProductoInteres, setCouponProductoInteres] = useState<string | undefined>(undefined);
  const [couponHotmartUrl, setCouponHotmartUrl] = useState<string | undefined>(undefined);

  const openCouponForCourse = (curso?: Curso) => {
    if (curso) {
      setCouponProductoInteres(mapCursoToProductoInteres(curso.nombre));
      setCouponHotmartUrl(curso.linkHotmart || "https://hotmart.com");
    } else {
      setCouponProductoInteres(undefined);
      setCouponHotmartUrl(undefined);
    }
    setOpenCouponModal(true);
  };

  const cursos: Curso[] = [
    {
      id: 1,
      nombre: "Administración de Empresas de Manufactura con Enfoque TOC",
      descripcion:
        "Aprende a comprender y aplicar la Teoría de Restricciones (TOC) para incrementar productividad y rentabilidad, identificando limitaciones, mejorando la programación de la producción y tomando decisiones basadas en resultados.",
      duracion: "A ritmo propio",
      categoria: "Operaciones y Manufactura",
      precio: "$147 USD",
      objetivos: [
        "Administrar y optimizar empresas de manufactura aplicando la Teoría de Restricciones (TOC)",
        "Enfocarse en el aprovechamiento de recursos y la eliminación de cuellos de botella",
        "Fortalecer la mejora continua de la productividad mediante aplicación práctica",
      ],
      dirigidoA: [
        "Estudiantes y egresados de todas las carreras profesionales interesados en metodologías aplicables a la administración, mejora de procesos y productividad",
        "Personas interesadas en aprender metodologías para la administración, la mejora de procesos y la productividad",
      ],
      linkHotmart: "https://hotmart.com/producto-toc",
      imageUrl: "/images/adminemp.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      introPrograma:
        "Ha sido diseñado para fortalecer habilidades que las empresas modernas valoran: pensamiento crítico, liderazgo, metodologías de mejora, administración de proyectos y toma de decisiones efectivas. Cada curso ofrece formación complementaria que impulsa la empleabilidad y acelera el crecimiento profesional.",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP",

      objetivoCurso:
        "Desarrollar en los participantes la capacidad de administrar y optimizar empresas de manufactura mediante la aplicación práctica de la Teoría de Restricciones (TOC), enfocándose en el aprovechamiento de recursos, la eliminación de cuellos de botella y la mejora continua de la productividad.",

      descripcionGeneral:
        "A través de ejemplos claros y un software didáctico con más de 50 ejercicios de simulación, aprenderás a identificar las limitaciones que impiden el crecimiento de una empresa, a mejorar la programación de la producción y a tomar decisiones basadas en resultados. Incluye como material complementario gratuito el audiolibro 'La Meta' de Eliyahu Goldratt. No se requiere formación previa en ingeniería o matemáticas.",

      beneficios: [
        "Conoce los fundamentos y la aplicación real de la Teoría de Restricciones (TOC).",
        "Aprende a detectar cuellos de botella y a mejorar el flujo de producción.",
        "Desarrolla habilidades para la toma de decisiones y la gestión de procesos.",
        "Obtén una Constancia de Participación y un Certificado de Conocimientos al completar la evidencia del curso.",
        "Aumenta tu valor profesional y acelera tus oportunidades de ascenso.",
      ],

      materialComplementario: [
        "Audiolibro 'La Meta' de Eliyahu Goldratt (formato digital).",
        "Software didáctico de simulación con más de 50 ejercicios de producción.",
      ],

      requisitos: ["No se requiere formación previa en ingeniería o matemáticas."],

      contextoEstadisticas:
        "En Latinoamérica, la transición al primer empleo formal puede tomar entre 6 y 18 meses, y el ascenso a posiciones de liderazgo suele requerir de 3 a 5 años o más (estimaciones informadas basadas en datos de la OECD, ILO y World Bank, 2023). Además, la brecha de habilidades sigue siendo un reto clave: muchas empresas afirman que la falta de competencias prácticas y analíticas limita su crecimiento (OECD Skills in Latin America Report, 2023).",

      perfilInstructorTitulo: "Perfil del Instructor",
      perfilInstructorBullets: [
        "Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey.",
        "Maestría en Investigación de Operaciones por el Georgia Institute of Technology.",
        "Consultor de más de 50 empresas en productividad, operaciones y sistemas de información.",
        "Ha capacitado a más de 1,500 profesionistas en Administración de Operaciones, Manufactura Esbelta, TOC y Administración de Proyectos.",
        "Fundador y Director General de CAESA GROUP.",
        "Fue Director de la Carrera de Ingeniería Industrial y de Sistemas en el Tecnológico de Monterrey durante 15 años.",
        "Experiencia internacional en el Institute of Industrial and Systems Engineers (IISE).",
      ],

      propuestaVisualBullets: [
        "Colores institucionales: azul marino, blanco y gris.",
        "Elementos gráficos: fotografías de plantas de manufactura modernas, gráficos de flujo de procesos y equipos de trabajo colaborando.",
        "Iconografía: engranajes, cadena de producción, reloj (tiempo de ciclo) y certificación.",
      ],

      testimonio: {
        texto:
          "Los proyectos trabajados con CAESA Group junto con Felipe Quintanilla nos han brindado herramientas estratégicas para nuestro negocio que nos facilitan la toma de decisiones y aumentan nuestra capacidad de obtener mayores márgenes con menor esfuerzo. Hemos logrado visualizar nuestro balanceo de líneas de nuestro proceso y así establecer estrategias para mejorar nuestra capacidad de manera efectiva. Nuestros accionistas están altamente satisfechos con el trabajo y se espera que con los 3 proyectos elaborados mejoremos drásticamente nuestro resultado general para el año 2023.",
        autor: "Patricio Fernando Sada Garza",
        cargo: "Gerente de Operaciones",
        empresa: "Laboratorios Corne",
      },

      highlights: ["Teoría de Restricciones (TOC)", "50+ ejercicios de simulación", "Audiolibro 'La Meta'", "Constancia y Certificado"],

      ctaTexto:
        "Da el siguiente paso en tu desarrollo profesional. Inscríbete en el curso Administración de Empresas de Manufactura con el Enfoque de Teoría de Restricciones (TOC) y forma parte del Programa Avanzado de Competencias Profesionales. Obtén tu material gratuito, tu certificación y las herramientas para diferenciarte en el mercado laboral.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 2,
      nombre: "Administración de Proyectos con el Enfoque de Cadena Crítica (CCPM)",
      descripcion:
        "Curso introductorio y práctico para aprender a planear, coordinar y ejecutar proyectos de manera eficiente aplicando el método de Cadena Crítica (CCPM), optimizando tiempos, evitando la multitarea y logrando entregas más predecibles, rápidas y confiables.",
      duracion: "A ritmo propio",
      categoria: "Gestión de Proyectos",
      precio: "$147 USD",
      objetivos: [
        "Planear, coordinar y ejecutar proyectos de manera eficiente aplicando el método de Cadena Crítica (CCPM)",
        "Optimizar tiempos y evitar la multitarea",
        "Lograr entregas más predecibles, rápidas y confiables",
        "Aplicar el enfoque paso a paso aun sin haber administrado proyectos formalmente",
      ],
      dirigidoA: [
        "Profesionistas de cualquier área",
        "Personas que nunca han administrado proyectos formalmente",
        "Personas sin conocimientos previos",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/adminpro.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Desarrollar en los participantes las habilidades fundamentales para planear, coordinar y ejecutar proyectos de manera eficiente aplicando el método de Cadena Crítica (CCPM), optimizando tiempos, evitando la multitarea y logrando entregas más predecibles, rápidas y confiables.",

      descripcionGeneral:
        "En la mayoría de las organizaciones, los proyectos se retrasan, se vuelven más costosos o terminan con resultados incompletos. Esto se debe a la multitarea, la mala estimación de tiempos, la falta de enfoque en los recursos críticos y la ausencia de mecanismos efectivos para manejar la incertidumbre. El método de Cadena Crítica propone una forma completamente diferente de administrar proyectos, integrando la Teoría de Restricciones y técnicas prácticas para reducir tiempos, mejorar la coordinación y aumentar la confiabilidad en las entregas.\n\nEn este curso totalmente introductorio y práctico, aprenderás cómo aplicar este enfoque paso a paso, aun si nunca has administrado proyectos formalmente. A través de un software didáctico especializado para proyectos, simularás escenarios y verás cómo decisiones aparentemente pequeñas pueden acelerar o retrasar un proyecto completo.\n\nEste curso es ideal para profesionistas de cualquier área. No se requieren conocimientos previos. Al finalizar, obtendrás una comprensión sólida del método y podrás diferenciarte con el certificado profesional: ‘Certificado en Critical Chain Project Management (CCPM)’.",

      beneficios: [
        "Aprender a aplicar el enfoque paso a paso aun si nunca has administrado proyectos formalmente",
        "Simular escenarios con un software didáctico especializado para proyectos",
        "Obtener una comprensión sólida del método",
        "Diferenciarte con el certificado profesional: ‘Certificado en Critical Chain Project Management (CCPM)’",
        "Obtén tu software didáctico, tu constancia de participación y tu Certificado en Critical Chain Project Management (CCPM).",
      ],

      materialComplementario: [
        "Software didáctico especializado para proyectos",
      ],

      requisitos: [
        "No se requieren conocimientos previos.",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey.",
        "Maestro en Investigación de Operaciones por el Georgia Institute of Technology.",
        "Ha liderado proyectos complejos durante más de 25 años.",
        "Ha capacitado a más de 1,500 profesionistas en Administración de Proyectos, TOC, Manufactura Esbelta y Mejora Continua.",
        "Como Director de la carrera de Ingeniería Industrial y de Sistemas del Tec de Monterrey, coordinó más de 500 proyectos empresariales reales.",
        "Su misión es ayudar a profesionistas a desarrollar competencias que impulsen su crecimiento laboral.",
      ],

      propuestaVisualBullets: [
        "Equipos de trabajo colaborando en proyectos.",
        "Tableros visuales tipo 'buffer fever chart'.",
        "Comparaciones visuales: Método Tradicional vs Cadena Crítica.",
        "Iconografía: buffers, enfoque, cadena, recursos y tiempos.",
        "Mockups del software didáctico utilizado en el curso.",
      ],

      highlights: [
        "Cadena Crítica (CCPM)",
        "Curso introductorio y práctico",
        "Software didáctico especializado",
        "Certificado CCPM",
      ],

      ctaTexto:
        "Inscríbete al curso 'Administración de Proyectos con el Enfoque de Cadena Crítica (CCPM)' y comienza a desarrollar competencias profesionales avanzadas. Obtén tu software didáctico, tu constancia de participación y tu Certificado en Critical Chain Project Management (CCPM).",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },

    {
      id: 3,
      nombre: "Análisis y Solución de Problemas",
      descripcion:
        "Curso para identificar, analizar y resolver problemas de manera estructurada y científica, utilizando herramientas profesionales para generar mejoras sostenibles en cualquier organización.",
      duracion: "A ritmo propio",
      categoria: "Mejora Continua y Calidad",
      precio: "$97 USD",
      objetivos: [
        "Identificar, analizar y resolver problemas de manera estructurada y científica",
        "Usar herramientas profesionales como estratificación, diagrama causa–efecto, validación con 5W+1H, análisis de datos y estandarización",
        "Seleccionar correctamente un problema y describirlo con precisión",
        "Analizar causas probables mediante hechos y datos, validar científicamente la causa raíz y establecer acciones de mejora con resultados sostenibles",
      ],
      dirigidoA: [
        "Organizaciones que enfrentan problemas operativos, de calidad, productividad, tiempos o costos",
        "Personas que buscan dejar de resolver problemas mediante intuición o acciones aisladas",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/anaysol.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Desarrollar en los participantes la capacidad de identificar, analizar y resolver problemas de manera estructurada y científica, utilizando herramientas profesionales como estratificación, diagrama causa–efecto, validación con 5W+1H, análisis de datos y estandarización, para generar mejoras sostenibles en cualquier organización.",

      descripcionGeneral:
        "Todas las organizaciones enfrentan problemas operativos, de calidad, productividad, tiempos o costos. Sin embargo, la mayoría intenta resolverlos mediante intuición o acciones aisladas, lo que genera soluciones temporales y poco efectivas.\n\nEste curso presenta una metodología científica y probada que ha sido utilizada por CAESA Group en numerosos proyectos empresariales. Los participantes aprenderán a seleccionar correctamente un problema, describirlo con precisión, analizar sus causas probables mediante hechos y datos, validar científicamente la causa raíz y establecer acciones de mejora que generen resultados sostenibles.\n\nEl contenido se basa en herramientas profesionales como estratificación, hojas de recolección de datos, diagrama causa–efecto, análisis 5W+1H, metas SMART, planes de acción y estandarización. El curso incluye ejercicios, casos reales y plantillas listas para usar en el entorno laboral.",

      beneficios: [
        "Adquirir una metodología científica y práctica para resolver problemas de forma efectiva en tu organización",
        "Aprender a validar científicamente la causa raíz",
        "Establecer acciones de mejora que generen resultados sostenibles",
        "Utilizar herramientas profesionales y plantillas listas para usar en el entorno laboral",
      ],

      materialComplementario: [
        "Ejercicios",
        "Casos reales",
        "Plantillas listas para usar en el entorno laboral",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Maestro en Investigación de Operaciones por Georgia Tech.",
        "Cuenta con más de 40 años de experiencia impartiendo cursos y liderando proyectos de mejora.",
        "Como Director de la carrera de Ingeniería Industrial y de Sistemas del Tecnológico de Monterrey, coordinó más de 500 proyectos reales aplicando metodologías de análisis y solución de problemas.",
        "Su enfoque combina pensamiento crítico, herramientas profesionales y experiencia práctica para lograr soluciones efectivas y sostenibles.",
      ],

      propuestaVisualBullets: [
        "Diagramas causa–efecto.",
        "Gráficos de estratificación y Pareto.",
        "Equipos analizando datos.",
        "Indicadores de calidad y productividad.",
        "Personas trabajando en resolución de problemas.",
      ],

      highlights: [
        "Metodología científica",
        "5W+1H",
        "Diagrama causa–efecto",
        "Estratificación y Pareto",
      ],

      ctaTexto:
        "Inscríbete al curso 'Análisis y Solución de Problemas' y adquiere una metodología científica y práctica para resolver problemas de forma efectiva en tu organización.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 4,
      nombre: "Diplomado en Manufactura Esbelta",
      descripcion:
        "Diplomado compuesto por cinco módulos estructurados con enfoque práctico para dominar metodologías Lean aplicadas a procesos industriales y organizacionales, basado en técnicas reconocidas internacionalmente, herramientas metodológicas y ejemplos reales de proyectos.",
      duracion: "5 Módulos",
      categoria: "Manufactura y Operaciones",
      precio: "$497 USD",
      objetivos: [
        "Analizar, diseñar, mejorar e implementar sistemas productivos bajo el enfoque de Manufactura Esbelta",
        "Reducir desperdicios, mejorar flujo, aumentar capacidad y generar valor",
        "Utilizar herramientas estratégicas, analíticas y operativas para generar valor",
      ],
      dirigidoA: [
        "Profesionistas que desean dominar metodologías Lean aplicadas a procesos industriales y organizacionales",
        "Personas interesadas en roles en operaciones, mejora continua y manufactura",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/diplo.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      introPrograma:
        "El Diplomado en Manufactura Esbelta forma parte del Programa de Desarrollo de Competencias Profesionales. Está diseñado para profesionistas que desean dominar metodologías Lean aplicadas a procesos industriales y organizacionales. Este diplomado está compuesto por cinco módulos estructurados con enfoque práctico, basados en técnicas reconocidas internacionalmente, herramientas metodológicas y ejemplos reales de proyectos.",

      objetivoCurso:
        "Formar al participante como profesional capaz de analizar, diseñar, mejorar e implementar sistemas productivos bajo el enfoque de Manufactura Esbelta, utilizando herramientas estratégicas, analíticas y operativas para reducir desperdicios, mejorar flujo, aumentar capacidad y generar valor.",

      descripcionGeneral:
        "Módulo 1 – Estrategias de Manufactura: introduce las bases estratégicas de Lean Manufacturing, explicando cómo las decisiones de diseño de procesos, ubicación de recursos, flujo de materiales y alineación organizacional impactan en la competitividad. Se analizan conceptos como valor, demanda, flujo, variabilidad, estabilidad, utilidad del capital, lead time y ventaja competitiva basada en operaciones.\n\nMódulo 2 – Mapeo de la Cadena de Valor (VSM): desarrolla la habilidad de mapear procesos utilizando Value Stream Mapping. Se construyen mapas de estado actual, cuantificando lead time, takt time, tiempos de ciclo, inventarios, restricciones y flujos de información. Posteriormente, se diseña el mapa de estado futuro con estrategias de reducción de desperdicio, flujo continuo, balanceo de líneas y simplificación operativa.\n\nMódulo 3 – Indicadores Lean: desarrolla la habilidad de medir y gestionar el desempeño en sistemas Lean. Se estudian indicadores como OEE, disponibilidad, rendimiento, scrap, retrabajos, rotación de inventarios, estabilidad de flujo y tiempos de respuesta. El participante aprenderá a interpretar datos y definir métricas alineadas a objetivos operativos y financieros.\n\nMódulo 4 – Técnicas de Manufactura Esbelta: presenta herramientas esenciales como 5S, SMED, Poka-Yoke, Kanban, Just in Time, Jidoka, sistemas pull, células de manufactura y estandarización. Se presentan casos prácticos de manufactura tradicional vs Lean, mostrando reducciones en tiempo, costo y defectos.\n\nMódulo 5 – Técnicas de Implementación: capacita al participante para liderar iniciativas Lean en una organización. Incluye metodologías de gestión del cambio, selección de proyectos, estructuras de trabajo, eventos Kaizen, entrenamientos internos, modelos de despliegue Lean, seguimiento y sostenibilidad. El participante aprenderá cómo asegurar la continuidad de los resultados con procesos de estandarización, liderazgo y disciplina operativa.\n\nConclusión: el Diplomado en Manufactura Esbelta proporciona una formación completa, estratégica y operativa que permite al participante convertirse en agente de cambio dentro de cualquier organización. Con herramientas de análisis, metodologías reales y certificación profesional, este diplomado impulsa una carrera orientada a liderazgo y excelencia operacional.",

      beneficios: [
        "Dominio integral de metodologías Lean.",
        "Capacidad para liderar proyectos de mejora dentro de una organización.",
        "Entendimiento profundo de indicadores clave de desempeño.",
        "Habilidades para mapear procesos y diseñar flujos de valor.",
        "Preparación para roles en operaciones, mejora continua y manufactura.",
        "Certificación adicional “Lean Practitioner” al completar la evaluación final.",
      ],

      highlights: [
        "5 módulos",
        "Metodologías Lean",
        "Mapeo de la Cadena de Valor (VSM)",
        "Certificación Lean Practitioner",
      ],

      ctaTexto:
        "El Diplomado en Manufactura Esbelta proporciona una formación completa, estratégica y operativa que permite al participante convertirse en agente de cambio dentro de cualquier organización. Con herramientas de análisis, metodologías reales y certificación profesional, este diplomado impulsa una carrera orientada a liderazgo y excelencia operacional.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 5,
      nombre: "Evaluación Económica de Proyectos",
      descripcion:
        "Curso para evaluar proyectos y tomar decisiones informadas aplicando herramientas financieras como Valor Presente Neto (VPN), Tasa Interna de Rendimiento (TIR), Valor Anual Equivalente (VAE), Valor Futuro (VF), Retorno sobre la Inversión (ROI) y análisis del valor del dinero en el tiempo, en entornos profesionales y decisiones personales.",
      duracion: "A ritmo propio",
      categoria: "Finanzas y Gestión de Proyectos",
      precio: "$97 USD",
      objetivos: [
        "Evaluar proyectos y tomar decisiones informadas aplicando métodos como VPN, TIR, VAE, VF y ROI",
        "Analizar el valor del dinero en el tiempo en entornos profesionales y decisiones personales",
        "Comparar alternativas mutuamente excluyentes y propuestas de mejora o alternativas financieras",
        "Analizar flujos de efectivo, calcular tasas efectivas e interpretar rendimientos",
      ],
      dirigidoA: [
        "Personas que toman decisiones relacionadas con evaluación de proyectos: compras de equipo, expansiones, inversiones, propuestas de mejora o alternativas financieras",
        "Personas interesadas en tomar mejores decisiones financieras personales",
        "Personas que buscan evitar pérdidas económicas, bajo rendimiento o elección incorrecta de alternativas",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/evaleco.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Dotar a los participantes con herramientas financieras fundamentales para evaluar proyectos y tomar decisiones informadas, aplicando métodos como Valor Presente Neto (VPN), Tasa Interna de Rendimiento (TIR), Valor Anual Equivalente (VAE), Valor Futuro (VF), Retorno sobre la Inversión (ROI) y análisis del valor del dinero en el tiempo, tanto en entornos profesionales como en decisiones personales.",

      descripcionGeneral:
        "En las organizaciones, así como en la vida personal, constantemente se presentan decisiones relacionadas con evaluación de proyectos: compras de equipo, expansiones, inversiones, propuestas de mejora o alternativas financieras. Tomar decisiones sin un análisis adecuado puede llevar a pérdidas económicas, bajo rendimiento o elección incorrecta de alternativas.\n\nEste curso enseña un conjunto de herramientas profesionales para evaluar proyectos desde una perspectiva económica, empezando por el concepto fundamental del valor del dinero a través del tiempo y avanzando hacia la aplicación de métodos como VPN, TIR, VAE, ROI, Valor Futuro y comparación de alternativas mutuamente excluyentes. Las herramientas se presentan de forma clara, práctica y aplicable a situaciones reales.\n\nLos participantes aprenderán a analizar flujos de efectivo, calcular tasas efectivas, interpretar rendimientos, comparar alternativas, evaluar proyectos empresariales y también tomar mejores decisiones financieras personales. Este curso ofrece ejercicios, ejemplos reales y plantillas listas para usar en el ámbito profesional.",

      beneficios: [
        "Aprender a tomar decisiones informadas para evitar pérdidas económicas, bajo rendimiento o elección incorrecta de alternativas",
        "Dominar herramientas profesionales para evaluar proyectos desde una perspectiva económica",
        "Analizar el valor del dinero a través del tiempo y aplicar métodos como VPN, TIR, VAE, ROI y Valor Futuro",
        "Aplicar los conceptos a situaciones reales en entornos profesionales y decisiones personales",
      ],

      materialComplementario: [
        "Ejercicios",
        "Ejemplos reales",
        "Plantillas listas para usar en el ámbito profesional",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey.",
        "Maestro en Investigación de Operaciones por el Georgia Institute of Technology.",
        "Cuenta con más de 40 años de experiencia profesional y académica, impartiendo cursos de ingeniería económica, análisis financiero, toma de decisiones y administración en empresas e instituciones educativas.",
        "Ha guiado a cientos de profesionistas en el análisis económico de proyectos, combinando claridad, rigor conceptual y herramientas prácticas que permiten aplicar de inmediato los conceptos aprendidos.",
      ],

      propuestaVisualBullets: [
        "Gráficos de flujos de efectivo.",
        "Fórmulas simples de VPN, TIR y VAE.",
        "Representaciones del concepto 'valor del dinero en el tiempo'.",
        "Gráficas del crecimiento exponencial del interés compuesto.",
        "Imágenes de personas evaluando alternativas de inversión.",
      ],

      highlights: [
        "VPN, TIR, VAE, VF y ROI",
        "Valor del dinero en el tiempo",
        "Flujos de efectivo y tasas efectivas",
        "Ejercicios y plantillas",
      ],

      ctaTexto:
        "Inscríbete al curso 'Evaluación Económica de Proyectos' y aprende a tomar decisiones financieras inteligentes para tu vida profesional y personal. Domina métodos modernos de análisis económico y eleva tu valor profesional.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 6,
      nombre: "Liderazgo, Trabajo en Equipo y Administración del Tiempo",
      descripcion:
        "Curso para desarrollar liderazgo personal e interpersonal mediante hábitos efectivos, principios universales, pensamiento proactivo, trabajo colaborativo y administración del tiempo, para fortalecer relaciones, mejorar resultados y aumentar el impacto profesional en cualquier organización.",
      duracion: "A ritmo propio",
      categoria: "Liderazgo y Habilidades Blandas",
      precio: "$97 USD",
      objetivos: [
        "Desarrollar las habilidades de liderazgo personal e interpersonal",
        "Adoptar hábitos efectivos, principios universales y pensamiento proactivo",
        "Fortalecer relaciones, mejorar resultados y aumentar el impacto profesional en cualquier organización",
        "Impulsar trabajo colaborativo y administración del tiempo",
      ],
      dirigidoA: [
        "Profesionales que buscan aumentar su impacto profesional en cualquier organización",
        "Personas interesadas en influir positivamente, colaborar y administrar su tiempo dentro de su organización",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/lider.png",

      nombrePrograma: "Programa Avanzado de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Desarrollar las habilidades de liderazgo personal e interpersonal mediante la adopción de hábitos efectivos, principios universales, pensamiento proactivo, trabajo colaborativo y administración del tiempo, para fortalecer relaciones, mejorar resultados y aumentar el impacto profesional en cualquier organización.",

      descripcionGeneral:
        "El liderazgo no es un cargo, es una forma de vivir y trabajar. No se trata únicamente de dirigir a otros, sino de aprender a influir positivamente en nosotros mismos, desarrollar nuestro carácter y construir relaciones donde exista confianza, colaboración y crecimiento mutuo.\n\nEste curso combina el modelo de Los 7 Hábitos de la Gente Altamente Efectiva, el enfoque de Confiar e Inspirar, principios universales del comportamiento humano y prácticas reales de liderazgo aplicadas en empresas y equipos de trabajo. Incluye temas como proactividad, misión personal y valores, prioridades, Ganar–Ganar, escucha empática, sinergia, trabajo en equipo, administración del tiempo, zona de confort, comunicación efectiva y liderazgo basado en principios.\n\nEl curso se complementa con reflexiones, dinámicas, ejercicios y actividades prácticas basadas en experiencias reales de CAESA GROUP. El resultado es un profesionista capaz de influir positivamente, colaborar, administrar su tiempo y convertirse en una fuerza constructiva dentro de su organización.",

      beneficios: [
        "Desarrollar habilidades esenciales para el crecimiento profesional",
        "Aprender a inspirar, colaborar y liderar con principios sólidos",
        "Fortalecer relaciones, mejorar resultados y aumentar el impacto profesional",
        "Convertirse en una fuerza constructiva dentro de su organización",
      ],

      materialComplementario: [
        "Reflexiones",
        "Dinámicas",
        "Ejercicios",
        "Actividades prácticas basadas en experiencias reales de CAESA GROUP",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey.",
        "Maestro en Investigación de Operaciones por Georgia Tech.",
        "Fue Director de la carrera de IIS durante 15 años.",
        "Ha impartido más de 100 cursos, incluyendo temas de liderazgo, trabajo en equipo, comunicación empática y administración del tiempo.",
        "Con más de 40 años formando profesionistas y líderes, combina pensamiento crítico, principios universales y experiencia empresarial para impulsar el crecimiento de sus alumnos.",
        "Su misión: formar líderes que inspiren, colaboren y eleven a quienes los rodean.",
      ],

      propuestaVisualBullets: [
        "Líder guiando a un equipo.",
        "Manos unidas representando sinergia.",
        "Camino dividido entre liderazgo reactivo vs proactivo.",
        "Matriz importante/urgente.",
        "Equipos colaborando en espacios modernos.",
        "Metáforas visuales de confianza.",
      ],

      highlights: [
        "Los 7 Hábitos de la Gente Altamente Efectiva",
        "Confiar e Inspirar",
        "Administración del tiempo",
        "Trabajo en equipo y sinergia",
      ],

      ctaTexto:
        "Inscríbete al curso 'Liderazgo, Trabajo en Equipo y Administración del Tiempo' y desarrolla habilidades esenciales para tu crecimiento profesional. Aprende a inspirar, colaborar y liderar con principios sólidos.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 7,
      nombre: "Mejora Continua",
      descripcion:
        "Curso para aplicar un marco integral de Mejora Continua combinando principios universales (PDCA, Kaizen, Ciclo de la Calidad) con la metodología práctica utilizada por CAESA GROUP en proyectos reales, para identificar áreas de oportunidad, priorizar esfuerzos, ejecutar mejoras y sostener resultados en empresas de cualquier tamaño y sector.",
      duracion: "A ritmo propio",
      categoria: "Calidad y Procesos",
      precio: "$97 USD",
      objetivos: [
        "Combinar principios universales (PDCA, Kaizen, Ciclo de la Calidad) con la metodología práctica y aplicada utilizada por CAESA GROUP en proyectos reales",
        "Identificar áreas de oportunidad, priorizar esfuerzos, ejecutar mejoras y sostener resultados en empresas de cualquier tamaño y sector",
        "Estudiar conceptos esenciales como Kaizen, PDCA, ciclo de la calidad, identificación de desperdicios, estandarización y enfoque en procesos",
        "Integrar la metodología usada en proyectos CAESA: selección de áreas clave, roles del equipo de mejora, análisis de situación actual, Quick Hits, planes de acción, estándares visuales, reuniones de seguimiento y sostenibilidad",
      ],
      dirigidoA: [
        "Personas interesadas en identificar áreas de oportunidad y sostener resultados en empresas de cualquier tamaño y sector",
        "Profesionistas que buscan desarrollar mentalidad de mejora, herramientas prácticas y capacidad real de generar impacto en cualquier organización",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/mejor.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Proporcionar a los participantes un marco integral de Mejora Continua que combine principios universales (PDCA, Kaizen, Ciclo de la Calidad) con la metodología práctica y aplicada utilizada por CAESA GROUP en proyectos reales, para identificar áreas de oportunidad, priorizar esfuerzos, ejecutar mejoras y sostener resultados en empresas de cualquier tamaño y sector.",

      descripcionGeneral:
        "No existen empresas perfectas. Todas tienen áreas de oportunidad, retrasos, procesos ineficientes o resultados que podrían ser mejores. Sin embargo, el gran desafío es que las organizaciones no cuentan con tiempo, recursos o enfoque suficiente para mejorar al ritmo que quisieran.\n\nEste curso presenta un enfoque mixto y equilibrado: fundamentos universales de la Mejora Continua y la metodología CAESA GROUP aplicada en proyectos reales. Primero, se estudian conceptos esenciales como Kaizen, PDCA, ciclo de la calidad, identificación de desperdicios, estandarización y enfoque en procesos. Después, se integra la metodología usada en proyectos CAESA: selección de áreas clave, roles del equipo de mejora, análisis de situación actual, Quick Hits, planes de acción, estándares visuales, reuniones de seguimiento y sostenibilidad.\n\nEl curso incluye ejemplos reales, herramientas de análisis y formatos descargables. El resultado esperado: profesionistas con mentalidad de mejora, herramientas prácticas y capacidad real de generar impacto en cualquier organización.",

      beneficios: [
        "Aprender a mejorar procesos con metodologías prácticas y herramientas profesionales",
        "Identificar áreas clave, eliminar desperdicios y generar resultados visibles en pocas semanas",
        "Desarrollar mentalidad de mejora, herramientas prácticas y capacidad real de generar impacto",
        "Aplicar fundamentos universales y metodología CAESA GROUP usada en proyectos reales",
      ],

      materialComplementario: [
        "Ejemplos reales",
        "Herramientas de análisis",
        "Formatos descargables",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey.",
        "Maestro en Investigación de Operaciones por Georgia Tech.",
        "Con más de 40 años de experiencia, ha impartido más de 100 cursos para empresarios y profesionistas.",
        "Ha liderado proyectos de Mejora Continua en empresas de manufactura, servicios, alimentos, organismos públicos y organizaciones educativas.",
        "Fundador de CAESA GROUP desde 1996.",
        "Ha implementado metodologías prácticas de mejora que permiten a las empresas aumentar capacidad, reducir costos, mejorar productividad y fortalecer su cultura organizacional.",
      ],

      propuestaVisualBullets: [
        "Ciclo PDCA (Plan–Do–Check–Act).",
        "Engranes representando procesos sincronizados.",
        "Tableros visuales de desempeño.",
        "Equipos realizando sesiones de mejora.",
        "Iconos de desperdicio (Lean).",
        "Estándares visuales y rutas de proceso.",
      ],

      highlights: [
        "PDCA, Kaizen y Ciclo de la Calidad",
        "Metodología práctica CAESA GROUP",
        "Quick Hits y sostenibilidad",
        "Formatos descargables",
      ],

      ctaTexto:
        "Inscríbete al curso 'Mejora Continua' y aprende a mejorar procesos con metodologías prácticas y herramientas profesionales. Identifica áreas clave, elimina desperdicios y genera resultados visibles en pocas semanas.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 8,
      nombre: "Pensamiento Crítico",
      descripcion:
        "Curso para analizar información, cuestionar supuestos, evaluar evidencias y razonar con claridad aplicando los Estándares Intelectuales Universales, el Enfoque Científico y técnicas de eliminación de sesgos cognitivos para mejorar la calidad del pensamiento, las decisiones y el impacto profesional.",
      duracion: "A ritmo propio",
      categoria: "Habilidades Blandas y Desarrollo Profesional",
      precio: "$97 USD",
      objetivos: [
        "Analizar información, cuestionar supuestos, evaluar evidencias y razonar con claridad",
        "Aplicar los Estándares Intelectuales Universales, el Enfoque Científico y técnicas de eliminación de sesgos cognitivos",
        "Identificar sesgos y llegar a conclusiones bien fundamentadas",
        "Fortalecer la claridad, precisión, lógica, relevancia y profundidad del razonamiento",
      ],
      dirigidoA: [
        "Personas que buscan desarrollar una competencia central para ocupar posiciones directivas",
        "Profesionistas que desean analizar información, evaluar riesgos, cuestionar supuestos, identificar sesgos y llegar a conclusiones bien fundamentadas",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/pensamiento.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Desarrollar en los participantes la habilidad de analizar información, cuestionar supuestos, evaluar evidencias y razonar con claridad, aplicando los Estándares Intelectuales Universales, el Enfoque Científico y técnicas de eliminación de sesgos cognitivos para mejorar la calidad de su pensamiento, sus decisiones y su impacto profesional.",

      descripcionGeneral:
        "El Pensamiento Crítico es una de las competencias más valoradas en organizaciones líderes y una de las habilidades centrales para ocupar posiciones directivas. De acuerdo con múltiples estudios de empleabilidad, las empresas buscan profesionistas capaces de analizar información, evaluar riesgos, cuestionar supuestos, identificar sesgos y llegar a conclusiones bien fundamentadas.\n\nEste curso presenta un método estructurado para desarrollar el pensamiento crítico, basado en principios de la ciencia, estándares universales de razonamiento y habilidades metacognitivas. A partir del contenido proporcionado por CAESA GROUP, incluye temas como correlación vs causalidad, pruebas científicas, sesgos cognitivos, evidencia observable, banderas rojas en argumentos y los Estándares Intelectuales Universales del razonamiento.\n\nLos participantes aprenderán cómo funciona el pensamiento humano, por qué nos engañamos a nosotros mismos, cómo evitar errores comunes y cómo fortalecer la claridad, precisión, lógica, relevancia y profundidad del razonamiento.",

      beneficios: [
        "Fortalecer una de las competencias más importantes en el mundo profesional",
        "Aprender a cuestionar, analizar y decidir con claridad y fundamento",
        "Desarrollar un método estructurado basado en principios de la ciencia y estándares universales de razonamiento",
        "Mejorar la calidad del pensamiento, las decisiones y el impacto profesional",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey.",
        "Maestro en Investigación de Operaciones por el Georgia Institute of Technology.",
        "Fue Director de la carrera de IIS durante 15 años.",
        "Ha impartido más de 100 cursos a profesionistas y empresarios en México.",
        "Ha dedicado más de 40 años a formar líderes, ingenieros y profesionistas, integrando ciencia, lógica y metodologías de razonamiento crítico en su práctica docente y consultiva.",
        "Su misión: enseñar a pensar mejor para vivir y decidir mejor.",
      ],

      propuestaVisualBullets: [
        "Cerebro formado por engranes (razonamiento).",
        "Lupa sobre ideas (evaluación crítica).",
        "Camino dividido entre evidencia y creencias.",
        "Representación visual de correlación vs causalidad.",
        "Ilusiones ópticas o efectos perceptuales.",
        "Iconografía relacionada con ciencia, lógica y pensamiento.",
      ],

      highlights: [
        "Estándares Intelectuales Universales",
        "Enfoque Científico",
        "Sesgos cognitivos",
        "Correlación vs causalidad",
      ],

      ctaTexto:
        "Inscríbete al curso 'Pensamiento Crítico' y fortalece una de las competencias más importantes en el mundo profesional. Aprende a cuestionar, analizar y decidir con claridad y fundamento.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    },
    {
      id: 9,
      nombre: "Sistemas de Soporte para la Toma de Decisiones",
      descripcion:
        "Curso para aprender un método práctico, claro e intuitivo —respaldado por un software didáctico y un algoritmo exclusivo basado en la Velocidad de Generación de Contribución Marginal (VGCM)— para tomar decisiones operativas, tácticas y estratégicas que incrementen la rentabilidad, optimicen recursos y mejoren los resultados de cualquier empresa, sin necesidad de conocimientos matemáticos avanzados.",
      duracion: "A ritmo propio",
      categoria: "Estrategia y Negocios",
      precio: "$197 USD",
      objetivos: [
        "Tomar decisiones operativas, tácticas y estratégicas usando un algoritmo exclusivo basado en la Velocidad de Generación de Contribución Marginal (VGCM)",
        "Incrementar la rentabilidad, optimizar recursos y mejorar resultados sin necesidad de conocimientos matemáticos avanzados",
        "Simular decisiones reales en Mercadotecnia, Producción, Compras y Finanzas usando un software didáctico especializado",
        "Equilibrar capacidad, demanda y rentabilidad tomando decisiones basadas en datos",
      ],
      dirigidoA: [
        "Profesionistas que toman decisiones operativas, tácticas y estratégicas en una empresa",
        "Personas que buscan un método práctico basado en datos para tomar mejores decisiones en menos tiempo",
      ],
      linkHotmart: "https://hotmart.com",
      imageUrl: "/images/decisiones.png",

      nombrePrograma: "Programa de Desarrollo de Competencias Profesionales",
      instructor: "Felipe Quintanilla Flores",
      organiza: "CAESA GROUP – Generando Valor",

      objetivoCurso:
        "Brindar a los participantes un método práctico, claro e intuitivo —respaldado por un software didáctico y por un algoritmo exclusivo basado en la Velocidad de Generación de Contribución Marginal (VGCM)— para tomar decisiones operativas, tácticas y estratégicas que incrementen la rentabilidad, optimicen recursos y mejoren los resultados de cualquier empresa, sin necesidad de conocimientos matemáticos avanzados.",

      descripcionGeneral:
        "Todas las empresas toman decisiones todos los días: qué producir, qué vender, dónde asignar recursos, cuáles órdenes aceptar, qué clientes priorizar y cómo equilibrar capacidad, demanda y rentabilidad. Sin embargo, la mayoría toma estas decisiones basándose en intuición, experiencia o información parcial, lo que provoca pérdidas, retrasos, cuellos de botella, baja rentabilidad y decisiones incongruentes entre departamentos.\n\nPara resolver este problema, este curso introduce un Sistema de Soporte para la Toma de Decisiones (SSTD) que integra información clave de demanda, costos marginales, capacidades, tiempos de proceso y prioridades estratégicas, utilizando un algoritmo de priorización —basado en la Velocidad de Generación de Contribución Marginal (VGCM)— como motor central.\n\nAdemás, los participantes utilizarán un software didáctico especializado, el cual les permitirá simular decisiones reales en Mercadotecnia, Producción, Compras y Finanzas, analizando su impacto directo en los estados financieros y en la contribución marginal total.\n\nEste curso es totalmente introductorio, intuitivo, práctico y aplicable para cualquier profesionista. Al finalizar, los participantes habrán aprendido un método único, basado en datos, para tomar mejores decisiones en menos tiempo.",

      beneficios: [
        "Aprender a tomar decisiones basadas en datos usando un algoritmo profesional y un simulador interactivo",
        "Tomar mejores decisiones en menos tiempo mediante un método único basado en datos",
        "Incrementar la rentabilidad, optimizar recursos y mejorar resultados",
        "Simular decisiones reales y analizar su impacto directo en los estados financieros y en la contribución marginal total",
      ],

      materialComplementario: [
        "Software didáctico especializado",
      ],

      perfilInstructorTitulo: "Descripción del Instructor",
      perfilInstructorBullets: [
        "Creador del concepto Velocidad de Generación de Contribución Marginal (VGCM).",
        "Fundador y Director General de CAESA GROUP.",
        "Con más de 40 años de experiencia, ha liderado más de 500 proyectos empresariales.",
        "Ha capacitado a más de 1,500 profesionistas.",
        "Ha desarrollado Sistemas de Soporte para la Toma de Decisiones utilizados ampliamente en la industria.",
        "Maestro en Investigación de Operaciones por Georgia Tech.",
        "Exdirector de la carrera de Ingeniería Industrial y de Sistemas del Tec de Monterrey durante 15 años.",
        "Combina teoría avanzada con aplicaciones prácticas simples y poderosas para transformar la forma en que las empresas toman decisiones.",
      ],

      propuestaVisualBullets: [
        "Dashboards con indicadores financieros y operativos.",
        "Gráficos de capacidad vs demanda (cuellos de botella).",
        "Diagramas del concepto VGCM (CM / tiempo).",
        "Simuladores o mockups del software utilizado en el curso.",
        "Equipos tomando decisiones en juntas ejecutivas.",
        "Iconografía de datos, algoritmos, priorización y optimización.",
      ],

      testimonio: {
        texto:
          "Caesa Group desempeñó un rol de soporte estratégico en uno de nuestros proyectos de transformación mediante intervenciones tácticas, aplicando herramientas Lean con un enfoque holístico complementando así nuestras capacidades internas y co-creando con nosotros un mapa de ruta para futuros desarrollos.",
        autor: "Edgar García",
        cargo: "Plant Manager",
        empresa: "Nemak",
      },

      highlights: [
        "Algoritmo basado en VGCM",
        "Software didáctico especializado",
        "Decisiones operativas, tácticas y estratégicas",
        "Método introductorio e intuitivo",
      ],

      ctaTexto:
        "Inscríbete al curso 'Sistemas de Soporte para la Toma de Decisiones' y aprende a tomar decisiones basadas en datos usando un algoritmo profesional y un simulador interactivo. Obtén tu constancia de participación y una ventaja real en tu formación profesional.",

      footerBrand: "© CAESA GROUP",
      footerWeb: "www.caesagroup.com",
      footerEmail: "contacto@caesagroup.com",
    }

  ];

  const categorias = useMemo(
    () => ["Todas", ...Array.from(new Set(cursos.map((c) => c.categoria)))],
    [cursos]
  );

  const cursosFiltrados = useMemo(() => {
    return cursos.filter((curso) => {
      const matchCategoria = categoriaFiltro === "Todas" || curso.categoria === categoriaFiltro;
      return matchCategoria;
    });
  }, [cursos, categoriaFiltro]);

  return (
    <div className="pt-0">
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Nuestros Cursos</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Cursos prácticos y accesibles para desarrollar habilidades específicas. Aprende a tu ritmo con contenido de
            alta calidad y certificación al finalizar.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-yellow-400 text-[#1e3a8a] px-4 py-2 rounded-full font-semibold">
            <Tag size={18} />
            <span>Obtén un 50% de descuento por tiempo limitado</span>
          </div>
        </div>
      </section>

      <section className="bg-white border-b sticky top-20 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <span className="text-gray-700">Filtrar por categoría:</span>
            </div>

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
              {cursosFiltrados.length} curso{cursosFiltrados.length !== 1 ? "s" : ""} encontrado
              {cursosFiltrados.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cursosFiltrados.map((curso) => (
              <div
                key={curso.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                {/* Imagen */}
                <div className="relative">
                  <img src={curso.imageUrl} alt={curso.nombre} className="h-40 w-full object-cover" loading="lazy" />

                  <div className="absolute top-3 left-3 bg-yellow-400 text-[#1e3a8a] font-bold px-3 py-1 rounded-full text-xs shadow">
                    50% OFF · Tiempo limitado
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Categoría */}
                  <div className="mb-3">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {curso.categoria}
                    </span>
                  </div>

                  <h3 className="text-[#1e3a8a] mb-2">{curso.nombre}</h3>

                  {(curso.instructor || curso.organiza) && (
                    <div className="text-xs text-gray-600 mb-3 space-y-1">
                      {curso.instructor && (
                        <div className="inline-flex items-center gap-2">
                          <User size={14} className="text-gray-500" />
                          <span>
                            <span className="font-semibold">Instructor:</span> {curso.instructor}
                          </span>
                        </div>
                      )}
                      {curso.organiza && (
                        <div className="inline-flex items-center gap-2">
                          <Building2 size={14} className="text-gray-500" />
                          <span>
                            <span className="font-semibold">Organiza:</span> {curso.organiza}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-gray-600 text-sm mb-4 flex-1">{curso.descripcion}</p>

                  {curso.highlights?.length ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {curso.highlights.slice(0, 3).map((h, idx) => (
                        <Chip
                          key={idx}
                          text={h}
                          icon={
                            idx === 0 ? <BarChart size={14} /> : idx === 1 ? <Cpu size={14} /> : <BookOpen size={14} />
                          }
                        />
                      ))}
                    </div>
                  ) : null}

                  {/* Duración */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Clock size={16} />
                    <span>{curso.duracion}</span>
                  </div>

                  {/* Precio */}
                  <div className="mb-4">
                    <span className="text-2xl text-[#3b82f6]">{curso.precio}</span>
                    <p className="text-xs text-gray-500 mt-1">Obtén un 50% de descuento por tiempo limitado</p>
                  </div>

                  {/* Botones */}
                  <div className="space-y-2 mt-auto">
                    <button
                      onClick={() => setCursoSeleccionado(curso)}
                      className="w-full bg-gray-100 text-[#1e3a8a] py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Más información
                    </button>

                    <button
                      onClick={() => openCouponForCourse(curso)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-2.5 rounded-lg hover:shadow-lg transition-all"
                    >
                      <span>Lo quiero ahora</span>
                      <Tag size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cursosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron cursos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>

      <BonusSection onOpenCouponModal={() => openCouponForCourse()} />

      <CouponRequestModal isOpen={openCouponModal} onClose={() => setOpenCouponModal(false)} />

      {/* Modal de Detalles */}
      {cursoSeleccionado && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <div className="flex items-start gap-4">
                <img
                  src={cursoSeleccionado.imageUrl}
                  alt={cursoSeleccionado.nombre}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div>
                  <h2 className="text-2xl text-[#1e3a8a] mb-2">{cursoSeleccionado.nombre}</h2>

                  <div className="flex gap-2 flex-wrap items-center">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {cursoSeleccionado.categoria}
                    </span>

                    <span className="inline-block bg-yellow-400 text-[#1e3a8a] px-3 py-1 rounded-full text-sm font-semibold">
                      50% OFF · Tiempo limitado
                    </span>
                  </div>

                  {/* ✅ NUEVO: instructor/organiza */}
                  {(cursoSeleccionado.instructor || cursoSeleccionado.organiza) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cursoSeleccionado.instructor ? (
                        <Chip icon={<User size={14} />} text={`Instructor: ${cursoSeleccionado.instructor}`} />
                      ) : null}
                      {cursoSeleccionado.organiza ? (
                        <Chip icon={<Building2 size={14} />} text={`Organiza: ${cursoSeleccionado.organiza}`} />
                      ) : null}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setCursoSeleccionado(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              

              {/* Descripción corta (la de la card) */}
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">{cursoSeleccionado.descripcion}</p>
              </div>

              {/* Duración */}
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={20} />
                <span>Duración: {cursoSeleccionado.duracion}</span>
              </div>

              {/* ✅ NUEVO: Objetivo del curso (si existe) */}
              {cursoSeleccionado.objetivoCurso && (
                <div>
                  <SectionTitle icon={<BarChart size={20} />} title="Objetivo del curso" />
                  <p className="text-gray-700 leading-relaxed">{cursoSeleccionado.objetivoCurso}</p>
                </div>
              )}

              {/* ✅ NUEVO: Descripción general (si existe) */}
              {cursoSeleccionado.descripcionGeneral && (
                <div>
                  <SectionTitle icon={<BookOpen size={20} />} title="Descripción general" />
                  <p className="text-gray-700 leading-relaxed">{cursoSeleccionado.descripcionGeneral}</p>
                </div>
              )}

              {/* Lo que aprenderás (mantienes objetivos) */}
              <div>
                <SectionTitle icon={<Award size={20} />} title="Lo que aprenderás" />
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
                <SectionTitle icon={<User size={20} />} title="¿A quién está dirigido?" />
                <BulletList items={cursoSeleccionado.dirigidoA} />
              </div>

              {/* ✅ NUEVO: Beneficios (si existe) */}
              {cursoSeleccionado.beneficios?.length ? (
                <div>
                  <SectionTitle icon={<Award size={20} />} title="Beneficios del curso" />
                  <BulletList items={cursoSeleccionado.beneficios} />
                </div>
              ) : null}

              {/* ✅ NUEVO: Material complementario (si existe) */}
              {cursoSeleccionado.materialComplementario?.length ? (
                <div>
                  <SectionTitle icon={<Cpu size={20} />} title="Material complementario gratuito" />
                  <BulletList items={cursoSeleccionado.materialComplementario} />
                </div>
              ) : null}

              {/* ✅ NUEVO: Requisitos (si existe) */}
              {cursoSeleccionado.requisitos?.length ? (
                <div>
                  <SectionTitle icon={<Tag size={20} />} title="Requisitos" />
                  <BulletList items={cursoSeleccionado.requisitos} />
                </div>
              ) : null}

              {/* ✅ NUEVO: Contexto y estadísticas (si existe) */}
              {cursoSeleccionado.contextoEstadisticas ? (
                <div className="bg-white border rounded-xl p-5">
                  <SectionTitle icon={<Building2 size={20} />} title="Contexto y estadísticas laborales" />
                  <p className="text-gray-700 leading-relaxed">{cursoSeleccionado.contextoEstadisticas}</p>
                </div>
              ) : null}

              {/* ✅ NUEVO: Perfil instructor (si existe) */}
              {cursoSeleccionado.perfilInstructorBullets?.length ? (
                <div>
                  <SectionTitle icon={<User size={20} />} title={cursoSeleccionado.perfilInstructorTitulo || "Perfil"} />
                  <BulletList items={cursoSeleccionado.perfilInstructorBullets} />
                </div>
              ) : null}

              {/* ✅ NUEVO: Propuesta visual (si existe) */}
              {cursoSeleccionado.propuestaVisualBullets?.length ? (
                <div>
                  <SectionTitle icon={<Tag size={20} />} title="Propuesta visual" />
                  <BulletList items={cursoSeleccionado.propuestaVisualBullets} />
                </div>
              ) : null}

              {/* ✅ NUEVO: Testimonio (si existe) */}
              {cursoSeleccionado.testimonio ? (
                <div className="bg-gray-50 border rounded-xl p-5">
                  <SectionTitle icon={<Quote size={20} />} title="Lo que dicen nuestros participantes" />
                  <p className="text-gray-700 leading-relaxed">“{cursoSeleccionado.testimonio.texto}”</p>
                  <div className="mt-4 text-sm text-gray-700">
                    <div className="font-semibold">{cursoSeleccionado.testimonio.autor}</div>
                    <div className="text-gray-600">
                      {cursoSeleccionado.testimonio.cargo}
                      {cursoSeleccionado.testimonio.empresa ? `, ${cursoSeleccionado.testimonio.empresa}` : ""}
                    </div>
                  </div>
                </div>
              ) : null}

              
              {/* CTA final (precio + botón cupón) */}
              <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="text-3xl">{cursoSeleccionado.precio}</span>
                    <p className="text-blue-100 text-sm mt-1">Obtén un 50% de descuento por tiempo limitado</p>
                  </div>

                  <button
                    onClick={() => {
                      const curso = cursoSeleccionado;
                      setCursoSeleccionado(null);
                      openCouponForCourse(curso);
                    }}
                    className="inline-flex items-center gap-2 bg-yellow-400 text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-yellow-300 transition-all whitespace-nowrap font-semibold"
                  >
                    <span>Lo quiero ahora</span>
                    <Tag size={20} />
                  </button>
                </div>
              </div>

              {/* ✅ Si quieres, aquí puedes luego poner un botón "Ver en Hotmart" cuando ya publiques */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Mapea el nombre del curso a una opción existente del select en CouponRequestModal
 */
function mapCursoToProductoInteres(nombreCurso: string): string {
  const map: Record<string, string> = {
    "Administración de Empresas de Manufactura con Enfoque TOC": "Curso Admin. Empresas de Manufactura con Enfoque TOC",
    "Administración de Proyectos con el Enfoque de Cadena Crítica (CCPM)":
      "Curso Admin. de Proyectos con el Enfoque de Cadena Crítica",
    "Análisis y Solución de Problemas": "Curso Análisis y Solución de Problemas",
    "Diplomado en Manufactura Esbelta": "Curso Diplomado en Manufactura Esbelta",
    "Evaluación Económica de Proyectos": "Curso Evaluación Económica de Proyectos",
    "Liderazgo, Trabajo en Equipo y Administración del Tiempo": "Curso Liderazgo, Trabajo en Equipo y Administración del Tiempo",
    "Mejora Continua": "Curso Mejora Continua",
    "Pensamiento Crítico": "Curso Pensamiento Crítico",
    "Sistemas de Soporte para la Toma de Decisiones (VGCM)": "Curso Sistemas de Soporte para la Toma de Decisiones",
  };

  return map[nombreCurso] || "Programa de desarrollo de competencias profesionales";
}
