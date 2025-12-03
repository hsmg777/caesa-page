import { ArrowRight, Star, CheckCircle, TrendingUp, Award, Clock, ExternalLink, 
         Zap, Users, ShieldCheck, Rocket, Gift, Target, Facebook, Instagram, Linkedin, Youtube, } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import HeroFounderHighlight from '../components/HeroFounderHighlight';


type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

interface InicioProps {
  onNavigate: (page: Page) => void;
}

export function Inicio({ onNavigate }: InicioProps) {
  // Fecha objetivo: 15 diciembre 2025
    const eventDate = new Date(2025, 11, 15); // OJO: mes 11 = diciembre (0-based)
    const today = new Date();

    // Normalizamos a medianoche para evitar problemas de horas
    eventDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = eventDate.getTime() - today.getTime();
    const rawDaysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const daysLeft = rawDaysLeft > 0 ? rawDaysLeft : 0;
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false,
    });

    useEffect(() => {
      const targetDate = new Date(2025, 11, 15, 0, 0, 0); 

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance <= 0) {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: true,
          });
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          expired: false,
        });
      };

      updateCountdown(); 
      const intervalId = setInterval(updateCountdown, 1000);

      return () => clearInterval(intervalId);
    }, []);

  const cursos = [
    {
      nombre: 'Administración de Empresas de Manufactura con Enfoque TOC',
      descripcion: 'Aprende a optimizar recursos y eliminar cuellos de botella aplicando la Teoría de Restricciones. Incluye simulador de producción y análisis del libro "La Meta".',
      nivel: 'Todos los niveles',
      precio: '$73.50',
      precioAnterior: '$147',
      descuento: '50%',
    },
    {
      nombre: 'Administración de Proyectos con el Enfoque de Cadena Crítica (CCPM)',
      descripcion: 'Domina la planeación y ejecución de proyectos eliminando la multitarea y reduciendo tiempos mediante la metodología de Cadena Crítica. Incluye software de simulación especializado.',
      nivel: 'Todos los niveles',
      precio: '$73.50',
      precioAnterior: '$147',
      descuento: '50%',
    },
    {
      nombre: 'Análisis y Solución de Problemas',
      descripcion: 'Domina una metodología científica para identificar, analizar y resolver problemas de raíz. Utiliza herramientas profesionales (5W+1H, Pareto, Causa-Efecto) para lograr mejoras sostenibles y evitar soluciones temporales.',
      nivel: 'Todos los niveles',
      precio: '$48.50',
      precioAnterior: '$97',
      descuento: '50%',
      estudiantes: '1,890',
    },
    {
      nombre: 'Diplomado en Manufactura Esbelta',
      descripcion: 'Programa integral de 5 módulos para dominar metodologías Lean, diseñado para analizar, diseñar y mejorar sistemas productivos reduciendo desperdicios.',
      nivel: 'Todos los niveles',
      precio: '$248.50',
      precioAnterior: '$497',
      descuento: '50%',
    },
  ];

  const testimonios = [
    {
      nombre: 'María González',
      profesion: 'Gerente de Marketing',
      foto: 'https://images.unsplash.com/photo-1509924023100-a470ace3c89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzY5ODU4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      testimonio: 'El Programa Premium transformó completamente mi carrera. Las herramientas y estrategias que aprendí me ayudaron a triplicar los resultados de mi equipo.',
      rating: 5,
      resultado: 'Aumento de 300% en ventas',
    },
    {
      nombre: 'Carlos Ramírez',
      profesion: 'Analista de Datos',
      foto: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MzY2MzM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      testimonio: 'Increíble calidad de contenido. Los instructores son expertos en su campo y el material está súper actualizado. Vale cada centavo.',
      rating: 5,
      resultado: 'Promoción en 3 meses',
    },
    {
      nombre: 'Laura Mendoza',
      profesion: 'Emprendedora Digital',
      foto: 'https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYzNjQyMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonio: 'Después de completar 3 cursos con CAESA GROUP, logré lanzar mi propio negocio digital. El acompañamiento es excepcional.',
      rating: 5,
      resultado: 'Negocio propio exitoso',
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section - SUPER VENDEDOR */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1673515324889-812ebdd8b434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjM2NjQ4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge animado */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="inline-block mb-6"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1e3a8a] px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 shadow-xl">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    🔥
                  </motion.div>
                  <span className="uppercase">OFERTA EXPLOSIVA - % OFF</span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl xl:text-6xl mb-6"
              >
                ¡Transforma Tu Carrera Profesional En Solo 3 Meses!
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl lg:text-2xl text-blue-100 mb-4"
              >
                Programa de Desarrollo de Competencias Profesionales
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <ShieldCheck size={20} />
                  <span>Garantía de satisfacción</span>
                </div>
              </motion.div>

              {/* PRECIO CON DESCUENTO MEGA NOTORIO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 border-4 border-yellow-400 shadow-2xl relative"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm shadow-xl"
                >
                  ¡AHORRA $400!
                </motion.div>

                <div className="text-[#1e3a8a] mb-3">
                  <span className="text-sm">Precio normal:</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl text-red-400 line-through">$1473</span>
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-5xl lg:text-6xl bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent"
                    >
                      $597
                    </motion.span>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 md:p-5 mb-4 shadow-sm">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-slate-800">
                    {/* Icono + texto */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-yellow-100 p-1.5 text-yellow-600">
                        <Zap className="w-5 h-5" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          Accede a la sesión informativa y obtén{" "}
                         <strong> <span className="text-red-600">más descuentos exclusivos</span>.</strong>
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                          Cupos limitados — contactanos por WhatsApp para confirmar tu lugar.
                        </p>
                      </div>
                    </div>

                    {/* Botón WhatsApp */}
                    <a
                      href="https://wa.me/528117931668"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-full
                                bg-green-500 text-white text-sm font-semibold shadow-md
                                hover:bg-green-600 hover:underline underline-offset-2
                                hover:shadow-lg transition-all duration-200
                                focus-visible:outline-none focus-visible:ring-2
                                focus-visible:ring-green-500/70 focus-visible:ring-offset-2
                                focus-visible:ring-offset-yellow-50"
                    >
                      ¡REGISTRARME!
                    </a>
                  </div>
                </div>

                {/* BONUS */}
                <div className="border-t-2 border-dashed border-gray-300 pt-4 mb-4">
                  <div className="text-[#1e3a8a] mb-2">Contenido del programa:</div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>8 cursos y 1 diplomado enfocados en desarrollo de competencias personales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>Certificado de finalización del programa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>Cursos dictados por Ing. Felipe Quintanilla galardonado profesional del TEC de Monterrey.</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center text-xs text-gray-500">
                  ✅ Pago seguro y garantía con Hotmart
                </div>
              </motion.div>

              {/* CTAs MEGA PODEROSOS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://hotmart.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1e3a8a] px-8 py-5 rounded-xl hover:shadow-2xl transition-all text-lg shadow-lg group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <Rocket size={24} className="relative z-10" />
                  <span className="relative z-10">¡QUIERO MI DESCUENTO AHORA!</span>
                  <ExternalLink size={20} className="relative z-10" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-center"
              >
                <button
                  onClick={() => onNavigate('programas')}
                  className="text-white hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
                >
                  <span>Ver todos los programas disponibles</span>
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <ImageWithFallback 
                  src="/images/program.png"
                  alt="Éxito profesional"
                  className="rounded-2xl shadow-2xl"
                />              
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner de urgencia */}
      

      {/* Cursos Destacados CON MAS CTAs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl text-[#1e3a8a] mb-4">
              Cursos Que Transformarán Tu Carrera Profesional
            </h2>
            <p className="text-xl text-gray-600">
              Mejora tu perfil con nuestros cursos más populares
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cursos.map((curso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 relative border-2 border-transparent hover:border-[#3b82f6]"
              >
                {/* Badge de descuento */}
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                  -{curso.descuento}
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-[#1e3a8a] px-3 py-1 rounded-full text-sm">
                    {curso.nivel}
                  </span>
                </div>
                
                <h3 className="text-[#1e3a8a] mb-3">
                  {curso.nombre}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {curso.descripcion}
                </p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl text-red-400 line-through">{curso.precioAnterior}</span>
                  <span className="text-3xl text-[#3b82f6]">{curso.precio}</span>
                </div>

                <div className="space-y-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://hotmart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-2.5 rounded-lg hover:shadow-lg transition-all"
                  >
                    <span>¡Lo quiero!</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('cursos')}
              className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Target size={24} />
              <span>Ver TODOS los cursos</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

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
              Resultados Que Hablan Por Sí Solos
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales han transformado sus carreras
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 hover:shadow-2xl transition-all border-2 border-blue-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonio.testimonio}"
                </p>

                <div className="bg-green-100 border-2 border-green-400 rounded-lg p-3 mb-4">
                  <div className="text-sm text-green-700 flex items-center gap-2">
                    <TrendingUp size={16} />
                    <strong>Resultado: {testimonio.resultado}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <ImageWithFallback 
                    src={testimonio.foto}
                    alt={testimonio.nombre}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[#1e3a8a]">{testimonio.nombre}</div>
                    <div className="text-sm text-gray-500">{testimonio.profesion}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/528117931668?text=Quiero%20inscribirme%20a%20la%20sesión%20informativa%20y%20acceder%20a%20los%20descuentos%20del%20programa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all"
            >
              <Gift size={24} />
              <span>¡Quiero estos resultados! - Inscribirme ahora en la sesión informativa</span>
              <ExternalLink size={20} />
            </motion.a>
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
              ¿Por que elegir a CAESA GROUP?
            </h2>
            <p className="text-xl text-blue-100">
              No es suerte, son resultados garantizados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Award, title: 'Certificación de finalización', desc: '' },
              { icon: TrendingUp, title: 'Resultados comprobados en ', desc: '' },
              { icon: CheckCircle, title: 'Actualizado 2024', desc: 'Contenido de última generación' },
              { icon: Users, title: 'Comunidad VIP', desc: '+15,000 profesionales activos' },
              { icon: Rocket, title: 'Aprende Rápido', desc: 'Metodología acelerada' },
              { icon: ShieldCheck, title: 'Garantía con Hotmart', desc: 'Sin preguntas, 100% reembolso' },
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-400 max-w-2xl mx-auto">
              <h3 className="text-2xl mb-4">🎁 BONUS ESPECIAL</h3>
              <p className="text-xl mb-6">
               Inscribete a la <strong className="text-yellow-400">sesión informativa</strong> y recibe
                <strong className="text-yellow-400"> 1 software de simulación GRATIS</strong> 
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/528117931668?text=Quiero%20inscribirme%20a%20la%20sesión%20informativa%20y%20acceder%20a%20los%20descuentos%20del%20programa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1e3a8a] px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg"
              >
                <Rocket size={28} />
                <span>¡SÍ! QUIERO MI BONUS GRATIS</span>
                <ExternalLink size={24} />
              </motion.a>
            </div>
          </motion.div>
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
              <strong className="text-[#3b82f6]">Tips diarios, recursos gratis</strong> y
              <strong className="text-[#3b82f6]"> ofertas exclusivas</strong> solo para seguidores
            </p>

            {/* Iconos de redes sociales */}
            <div className="flex items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/tu_pagina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Facebook size={24} className="text-[#1877F2]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/tu_pagina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <Instagram size={24} className="text-[#E1306C]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/tu_pagina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-sky-50 transition-colors"
              >
                <Linkedin size={24} className="text-[#0A66C2]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.youtube.com/@tu_canal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-3 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Youtube size={24} className="text-[#FF0000]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              ⏰ El Tiempo Se Acaba...
            </h2>

            <p className="text-2xl mb-6">
              Faltan pocos días para la <strong>sesión informativa</strong> y acceder a los descuentos exclusivos.
            </p>

            {/* CONTADOR */}
            {!timeLeft.expired ? (
              <div className="flex justify-center gap-4 flex-wrap mb-8">
                <div className="bg-white/10 rounded-xl px-4 py-3 min-w-[80px]">
                  <div className="text-3xl font-bold">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-sm uppercase tracking-wide">Días</div>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3 min-w-[80px]">
                  <div className="text-3xl font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-sm uppercase tracking-wide">Horas</div>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3 min-w-[80px]">
                  <div className="text-3xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-sm uppercase tracking-wide">Min</div>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3 min-w-[80px]">
                  <div className="text-3xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-sm uppercase tracking-wide">Seg</div>
                </div>
              </div>
            ) : (
              <p className="text-xl mb-8 font-semibold">
                🎉 ¡La sesión informativa es hoy!
              </p>
            )}

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/528117931668?text=Quiero%20inscribirme%20a%20la%20sesión%20informativa%20y%20acceder%20a%20los%20descuentos%20del%20programa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-12 py-6 rounded-2xl hover:shadow-2xl transition-all text-xl shadow-xl"
            >
              <Rocket size={32} />
              <span>¡ASEGURAR MI CUPO AHORA!</span>
              <ExternalLink size={28} />
            </motion.a>

            <p className="text-sm mt-6 opacity-90">
              ⚡ No pierdas esta oportunidad única — sesión informativa: 15/12/2025
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
