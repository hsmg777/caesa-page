import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24 bg-[position:61%_center] md:bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/herobg.png')",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,47,111,0.24)_0%,rgba(29,78,216,0.16)_28%,rgba(255,255,255,0.34)_52%,rgba(255,255,255,0)_72%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[420px] lg:min-h-[520px] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 top-0 rounded-xl bg-[#0d2f6f]/90 px-5 py-3 sm:px-5 sm:py-3"
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] font-bold text-white">
              MASTER CLASS EXCLUSIVA
            </p>
          </motion.div>

          <div className="max-w-3xl pt-16 sm:pt-0">
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl xl:text-6xl leading-[1.05] font-black text-[#0d2f6f]"
            >
              El problema no es la falta de recursos.
              <span className="block mt-2 text-[#1d4ed8]">
                Es no gestionar correctamente la restriccion del sistema.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-[56%] sm:max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 font-medium"
            >
              Invito a Gerentes, Ingenieros y Responsables de Operacion a una
              Master Class ejecutiva sobre aplicacion practica de Teoria de Restricciones.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
