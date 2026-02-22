import { CheckCircle, TrendingUp, Award, ExternalLink,
         Users, ShieldCheck, Rocket, Gift, Instagram, Music2, ChevronLeft, ChevronRight,
         Facebook} from 'lucide-react';
import { motion } from 'framer-motion';
import { useCallback, useState } from "react";
import Hero from '../components/Hero';
import MasterClassInfoSection from '../components/MasterClassInfoSection';
import HeroFounderHighlight from '../components/HeroFounderHighlight';


type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

interface InicioProps {
  onNavigate: (page: Page) => void;
}

export function Inicio({ onNavigate }: InicioProps) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

    const scrollPrev = useCallback(() => {
      setCurrentTestimonial((prev) =>
        prev === 0 ? testimoniosFQF.length - 1 : prev - 1
      );
    }, []);

    const scrollNext = useCallback(() => {
      setCurrentTestimonial((prev) =>
        prev === testimoniosFQF.length - 1 ? 0 : prev + 1
      );
    }, []);


  const testimoniosFQF = [
  {
    nombre: 'José Antonio Fernández Carbajal',
    rol: 'Presidente Ejecutivo del Consejo de Administración de FEMSA',
    texto:
      'Tengo el gusto de conocer a Felipe desde hace más de tres décadas. Hemos tenido el privilegio de coincidir en nuestra querida alma mater, el Tecnológico de Monterrey. Reconozco su vocación genuina por la educación y el liderazgo estratégico. Es un profesor y mentor con gran calidez humana. Su entrega y compromiso se ven plasmados en todos los proyectos de transformación y cursos que imparte. Recomiendo mucho a Felipe como un líder estratega con visión humanista para brindar asesorías, cursos y aportar valor en el desarrollo profesional.',
  },
  {
    nombre: 'Dr. Antonio Dieck Assad',
    rol: 'Ex Rector de la Universidad de Monterrey',
    texto:
      'Conozco a Felipe desde la juventud cuando los juegos de soccer en diferentes escenarios más de 50 años de eso. Su trayectoria en lo personal, profesional e institucional ha sido intachable siempre con transparencia, ética y valores. hemos sido contemporáneos en la carrera universitaria de IIS así como en los estudios de posgrado en USA. Su compromiso con su desarrollo profesional inicialmente para luego asegurar el de sus estudiantes ha sido siempre una característica de Felipe. En los últimos años he tenido el honor de coincidir con Felipe en 3 etapas profesionales, 1. El área académica de Ingeniería Industrial en el Tec de Monterrey donde participamos en la cátedra a jóvenes de diferentes carreras, incluyendo IIS, así como diferentes proyectos de educación ejecutiva y asesorías a empresas; la parte de seguir colaborando, sirviendo a las diferentes áreas de la institución y externas, siempre fueron parte de la actividad. 2. Cuando fui decano de la EGADE Business School, así como ejecutivo de la Universidad Virtual del Tec de Monterrey, continuamos trabajando en iniciativas desde diferentes áreas en la misma institución, siempre viendo seguir la Visión y misión del Tec, alumnos, proyectos y comunidad. En éstos tiempos inició trabajos a nivel internacional con instituciones de prestigio en USA y el mundo para beneficiar el aprendizaje de sus estudiantes, colegas de la institución y de otras instituciones. Cabe mencionar que Felipe fue Vicepresidente Internacional del IIE, formando parte del Consejo del Instituto de Ingenieros Industriales a nivel mundial. 3. Cuando fui Rector de la Universidad de Monterrey seguimos teniendo contacto a nivel profesional y actualizándonoslo de lo que estábamos realizando cada quien, desde sus trincheras. Felipe sigue avanzando en diferentes proyectos e iniciativas siempre con la Misión y Visión institucional. En fin, Felipe siempre avanzando en temas académicos, consultoría y servicio para diferentes alumnos, organizaciones e instituciones; considero algo sumamente loable de su parte y con grandes testimonios de las personas con las que ha interactuado, que me lo comentan y recuerdan con cariño y admiración. Ya para finalizar, considero recomendar ampliamente a Felipe en el desarrollo e interacción con los cursos y programas que ofrece a la comunidad empresarial. Estoy seguro de que los miembros de las organizaciones y, en lo particular, quienes participen en ellos van a encontrar un excelente profesor, formador, mentor y humano que va a guiarlos en el desarrollo de sus actividades profesionales y formación.',
  },
  {
    nombre: 'Juan de Dios Carrizales',
    rol: 'Gerente Planta Yazaki',
    texto:
      'Tuve la fortuna de conocer a Felipe Quintanilla desde mis años como alumno en el Tec a finales de los 90, cuando cursaba mi maestría. Más adelante volví a coincidir con él cuando impartió clases en el diplomado Leadership Development Program, desarrollado por la empresa donde laboro en conjunto con el Tecnológico de Monterrey. En esa ocasión, el Tec convocó a algunos de sus profesores más destacados, y Felipe formó parte de ese selecto grupo. Sus sesiones siempre fueron dinámicas, enriquecedoras y con un enfoque muy humano; su cercanía con los alumnos hacía que el aprendizaje fluyera de manera natural. A lo largo del tiempo he mantenido contacto con él y he seguido de cerca sus iniciativas y proyectos. Se distingue por su sólida trayectoria profesional, su capacidad para generar confianza y su compromiso permanente con la actualización y el crecimiento continuo. Sin duda, es un académico y líder que deja huella en quienes tenemos la oportunidad de trabajar o aprender de él.',
  },
  {
    nombre: 'Dr. Fernando Mata',
    rol: 'Coach, Educador, Consultor y Escritor',
    texto:
      'Felipe combina una competencia excepcional con un profundo compromiso con la formación de sus estudiantes. Sabe traducir ideas complejas en enseñanzas claras y transformadoras, y se convierte en un verdadero mentor para quienes trabajan con él.',
  },
  {
    nombre: 'Rosa Hilda Félix',
    rol: 'Asesora del Capítulo 979, Instituto Tecnológico de San Luis Potosí',
    texto:
      'Conozco a Felipe Quintanilla desde su etapa como Vicepresidente del Institute of Industrial Engineers en México, periodo en el que pude constatar de primera mano su liderazgo, su capacidad de organización y su genuino interés por la formación de jóvenes profesionistas. En el trabajo compartido, siempre destacó por su visión estratégica, su apertura al diálogo y su compromiso con el desarrollo de competencias que realmente responden a las necesidades del entorno profesional. He sido testigo de su habilidad para acompañar a recién egresados en su proceso de transición al mundo laboral, brindándoles orientación clara, herramientas prácticas y confianza en su potencial. Por ello, considero que su labor como formador en competencias profesionales es una aportación valiosa y pertinente para quienes inician su trayectoria profesional.',
  },
  {
    nombre: 'Gustavo Aceves',
    rol: 'Consultor',
    texto:
      'Conozco a Felipe desde mis años como alumno en el Tec. Sus clases siempre fueron interactivas y cercanas. Hoy, como colega, destaco su amplia experiencia profesional, su actualización constante y la seguridad y confianza que inspira.',
  },
  {
    nombre: 'Patricio G. Murga',
    rol: 'Director de Tecnología y Desarrollo, Viakable',
    texto:
      'Tengo el placer de conocer a Felipe desde muy joven, y desde entonces he sentido gran respeto y admiración por él. Felipe es un Ingeniero Industrial del ITESM, con un post grado en GEORGIA INSTITUTE OF TECHNOLOGY, más conocido como GEORGIA TECH. Posteriormente a esa etapa, tuvo una excelente y muy larga trayectoria en el TEC DE MONTERREY, en donde fue un gran catedrático y funcionario. Como catedrático, y junto con sus mejores alumnos, desarrolló un sinnúmero de proyectos para la Industria local y nacional. En el presente, al jubilarse de esa institución, está dando asesorías y cursos de gran impacto. Yo recomiendo ampliamente a Felipe como una fuente segura y confiable de conocimiento.',
  },
  {
    nombre: 'Jorge Lozano',
    rol: 'Director General, PROLEC-GE',
    texto:
      'El esquema de proyectos empresariales que hemos desarrollado con Felipe es una de mis mayores satisfacciones profesionales. Es parte central de nuestra estrategia de competitividad y ha demostrado ser un enfoque ganar-ganar muy poderoso.',
  },
  {
    nombre: 'Edgar García',
    rol: 'Plant Manager, Nemak',
    texto:
      'CAESA Group jugó un rol estratégico en un proyecto de transformación, aplicando herramientas Lean con enfoque holístico. Complementaron nuestras capacidades internas y co-creamos una ruta clara para futuros desarrollos.',
  },
  {
    nombre: 'Patricio Fernando Sada Garza',
    rol: 'Gerente de Operaciones, Laboratorios Corne',
    texto:
      'Los proyectos con CAESA Group y Felipe nos dieron herramientas estratégicas para decidir mejor y aumentar márgenes. Visualizamos el balanceo de nuestras líneas y definimos estrategias efectivas. Nuestros accionistas están altamente satisfechos.',
  },
  {
    nombre: 'Esteban Jacques',
    rol: 'Partner Operations, C3 Consensus',
    texto:
      'Felipe ha marcado la disciplina de la ingeniería industrial en México. Lidera con el ejemplo, ha formado generaciones y su influencia va mucho más allá del aula, con cientos de proyectos industriales e instituciones fundadas.',
  },
  {
    nombre: 'Francisco Ocejo',
    rol: 'Presidente, ALFRA Consulting',
    texto:
      'He trabajado con Felipe: es metodológico, vanguardista y disciplinado. Su compromiso con la industria, la educación y la sociedad es evidente en cada proyecto en el que participa.',
  },
  
];


  return (
    <div className="pt-0">
      <Hero />
      <MasterClassInfoSection />
  
      {/* Hero.tsx (o donde tengas el hero) */}
      <div className="mt-8 w-full">
        <HeroFounderHighlight
          onKnowMore={() => {
            onNavigate('sobre-nosotros');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>

      {/* Testimonios CON RESULTADOS */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-4">
            TESTIMONIOS
          </div>
          <h2 className="text-3xl lg:text-4xl text-[#1e3a8a] mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-gray-600">
            Directivos, consultores y líderes que han trabajado con Felipe y CAESA Group.
          </p>
        </motion.div>

        {/* CARRUSEL */}
        <div className="relative mb-12">
          {/* Botones flecha */}
          <button
            type="button"
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:bg-gray-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:bg-gray-50"
          >
            <ChevronRight size={20} />
          </button>

          {/* Track Embla */}
          <div className="overflow-hidden px-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimoniosFQF.map((item, index) => (
                <motion.div
                  key={index}
                  className="min-w-full px-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full min-h-[360px] sm:min-h-[420px] bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm flex flex-col">
                    <div className="mb-4 text-4xl text-blue-300">&ldquo;</div>
                    <div className="flex-1">
                      <p
                        className={`text-gray-700 leading-relaxed pr-2 ${
                          expandedTestimonial === index ? "" : "max-h-[200px] overflow-hidden"
                        }`}
                      >
                        {item.texto}
                      </p>
                      {item.texto.length > 240 && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedTestimonial(
                              expandedTestimonial === index ? null : index
                            )
                          }
                          className="mt-3 text-sm font-semibold text-[#1e3a8a] hover:text-[#1e40af]"
                          aria-expanded={expandedTestimonial === index}
                        >
                          {expandedTestimonial === index ? "Ver menos" : "Ver completo"}
                        </button>
                      )}
                    </div>
                    <div className="border-t border-blue-100 pt-4 mt-6">
                      <div className="text-[#1e3a8a] font-semibold">
                        {item.nombre}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.rol}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>



          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimoniosFQF.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentTestimonial === index
                    ? "bg-[#1e3a8a]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onNavigate("contacto");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all"
          >
            <span>¡Quiero estos resultados!</span>
            <ExternalLink size={20} />
          </motion.button>
        </motion.div>

      </div>
    </section>

      {/* Beneficios con CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              ¿Por qué elegir a CAESA GROUP?
            </h2>
            <p className="text-xl text-blue-100">
              No es suerte, son resultados garantizados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Award, title: 'Certificación de finalización', desc: '' },
              { icon: TrendingUp, title: 'Mejora tu carrera ', desc: '' },
              { icon: CheckCircle, title: 'Actualizado 2025', desc: '' },
              { icon: Users, title: 'Vuelvete un profesional competitivo', desc: '' },
              { icon: Rocket, title: 'Aprende Rápido', desc: '' },
              { icon: ShieldCheck, title: 'Garantía con Hotmart', desc: '' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon size={40} />
                </motion.div>
                <h3 className="mb-2 text-xl">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redes Sociales con CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-[#1e3a8a] mb-4">
              📱 Únete a Nuestra Comunidad
            </h2>
            <p className="text-gray-600 mb-8">
              <strong className="text-[#3b82f6]">Recursos gratis</strong> y
              <strong className="text-[#3b82f6]"> ofertas exclusivas</strong> solo para seguidores
            </p>

            {/* Iconos de redes sociales */}
            <div className="flex items-center justify-center gap-4">
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/profile.php?id=61584887993548&mibextid=wwXIfr&rdid=Mjsh5hF6AYDBAynd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DNfivKyKb%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Facebook size={36} className="text-[#2c57e4]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/caesagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <Instagram size={36} className="text-[#E1306C]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.tiktok.com/@caesa.group"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                <Music2 size={36} className="text-black" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}





