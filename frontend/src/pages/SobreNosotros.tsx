import { Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle, BookOpen, Headphones, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import FounderHighlight from "../components/FounderHighlight";
type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

interface SobreNosotrosProps {
  onNavigate: (page: Page) => void;
}

export function SobreNosotros({ onNavigate }: SobreNosotrosProps) {

  const founderImages = [
    {
      src: "/images/founder1.jpg",
      alt: "Fundador impartiendo curso a empresarios"
    },
    {
      src: "/images/founder2.jpg",
      alt: "Fundador con estudiantes en evento académico"
    },
    {
      src: "/images/founder3.jpg",
      alt: "Fundador en conferencia internacional"
    },
    {
      src: "/images/founder4.jpg",
      alt: "Fundador en conferencia internacional"
    }
  ];

  const timeline = [
    {
      year: '1996',
      titulo: 'Fundación de CAESA GROUP',
      descripcion: 'Pequeña descripcion de la fundación y primeros pasos'
    },
    {
      year: '2020',
      titulo: '5,000 estudiantes graduados',
      descripcion: 'Alcanzamos nuestro primer gran hito con miles de profesionales capacitados'
    },
    {
      year: '2022',
      titulo: 'Expansión internacional',
      descripcion: 'Comenzamos a ofrecer programas en toda Latinoamérica'
    },
    {
      year: '2024',
      titulo: 'Más de 15,000 alumnos',
      descripcion: 'Nos consolidamos como referente en educación online profesional'
    }
  ];

  const beneficios = [
    {
      icono: Award,
      titulo: 'Certificación reconocida',
    },
    {
      icono: BookOpen,
      titulo: 'Contenido actualizado',
    },
    {
      icono: TrendingUp,
      titulo: 'Resultados garantizados',
    }
  ];

  return (
    <div className="pt-0">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl mb-6">Quiénes somos</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Somos el socio estratégico para las organizaciones que buscan evolucionar. 
              En CAESA GROUP nos dedicamos a transformar las necesidades empresariales en resultados tangibles a 
              través de proyectos de mejora y consultoría. Somos expertos en integrarnos con la visión de sus líderes para impulsar juntos 
              la productividad y la rentabilidad de su negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="h-1 w-12 bg-[#1e3a8a]"></span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Trayectoria</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-8">
                Nuestra historia
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  La historia de <strong>CAESA GROUP</strong> comenzó con una visión clara de las necesidades del sector industrial: 
                  las empresas requerían algo más que teoría; necesitaban <strong>incrementar su productividad y rentabilidad</strong> de forma tangible.
                </p>
                <p>
                  A lo largo de <strong>más de 25 años</strong>, hemos evolucionado de ser consultores estratégicos a convertirnos en verdaderos 
                  socios de implementación. Nuestro equipo ha acumulado una experiencia invaluable ejecutando más de 
                  <strong> 500 proyectos de mejora</strong> en manufactura y servicios.
                </p>
                <p>
                  Lo que nos define hoy no es solo lo que sabemos, sino lo que hemos logrado: transformar la cultura operativa 
                  de más de 100 organizaciones mediante metodologías de Calidad y Manufactura Esbelta.
                </p>

                <div className="pt-2">
                  <a 
                    href="https://caesagroup.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-[#1e3a8a] hover:text-blue-600 transition-colors group"
                  >
                    Visita nuestro sitio oficial
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-bold text-[#1e3a8a]">+25</p>
                  <p className="text-xs text-gray-500 uppercase mt-1">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1e3a8a]">+500</p>
                  <p className="text-xs text-gray-500 uppercase mt-1">Proyectos Exitosos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1e3a8a]">+100</p>
                  <p className="text-xs text-gray-500 uppercase mt-1">Clientes Satisfechos</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmR1c3RyaWFsJTIwbWVldGluZ3xlbnwxfHx8fDE3NjM2NDM5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Consultores de CAESA GROUP analizando procesos"
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[#1e3a8a] hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-[#1e3a8a]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Desde los 90s</p>
                    <p className="text-xs text-gray-500">Creando valor continuo</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <FounderHighlight images={founderImages} />
          </div>
        </div>
      </section>  

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl text-[#1e3a8a] mb-12 text-center">Nuestro recorrido</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="text-4xl text-[#3b82f6] mb-4">{item.year}</div>
                  <h3 className="text-[#1e3a8a] mb-2">{item.titulo}</h3>
                  <p className="text-gray-600 text-sm">{item.descripcion}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#3b82f6]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué ofrecemos estos cursos */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#1e3a8a] mb-6">
              ¿Por qué ofrecemos estos programas y cursos?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ofrecemos este programa de cursos en línea para apoyar a los profesionistas jóvenes en Latinoamérica, España y otros países de habla hispana, para que complementen su formación profesional y tengan un valor agregado que los distinga para conseguir buenos empleos y avanzar en sus carreras profesionales. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => {
              const Icono = beneficio.icono;
              return (
                <div key={index} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icono className="text-[#1e3a8a]" size={24} />
                  </div>
                  <h1 className="text-[#1e3a8a] mb-3">{beneficio.titulo}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a los próximos profesionales que transformarán sus carreras con CAESA GROUP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('programas')}
              className="bg-yellow-400 text-[#1e3a8a] px-8 py-4 rounded-lg hover:bg-yellow-300 transition-all"
            >
              Explorar programas
            </button>
            <button
              onClick={() => onNavigate('cursos')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all border border-white/30"
            >
              Ver cursos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
