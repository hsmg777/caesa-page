import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[position:35%_center] bg-cover bg-no-repeat py-16 sm:bg-[position:42%_center] lg:bg-[position:61%_center] lg:py-24"
      style={{
        backgroundImage: "url('/images/herobg.png')",
      }}
    >
      <div className="absolute inset-0 sm:hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.68)_30%,rgba(255,255,255,0.82)_62%,rgba(255,255,255,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,47,111,0.18)_0%,rgba(29,78,216,0.08)_28%,rgba(255,255,255,0.10)_48%,rgba(255,255,255,0.72)_64%,rgba(255,255,255,0.94)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[420px] items-center justify-end lg:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-full max-w-xl flex-col items-end py-6 text-right sm:py-8"
          >
            <div className="inline-flex rounded-full bg-[#0d2f6f] px-4 py-2 shadow-lg">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white sm:text-xs">
                Programa online CAESA Group
              </p>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl font-black leading-[0.95] text-[#0d2f6f] drop-shadow-[0_10px_30px_rgba(255,255,255,0.45)] sm:text-5xl lg:text-6xl"
            >
              Aprende a generar resultados reales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-slate-700 sm:text-lg"
            >
              Mejora operaciones, acelera proyectos y toma mejores decisiones con el Programa de Teoría de Restricciones Aplicada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-6 rounded-2xl bg-[#0d2f6f] px-5 py-4 text-white shadow-lg"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-xs">
                25% de descuento
              </p>
              <div className="mt-2 flex items-end justify-end gap-2 sm:gap-3">
                <span className="text-sm font-semibold text-slate-300 line-through sm:text-base">
                  $491
                </span>
                <span className="text-4xl font-black leading-none sm:text-5xl">$367</span>
                <span className="pb-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
                  USD
                </span>
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-200 sm:text-sm">
                3 cursos online CAESA Group
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-8 flex flex-col items-end gap-4 sm:flex-row"
            >
              <a
                href="/contacto"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#0d2f6f] px-8 py-4 text-base font-black text-white shadow-lg transition hover:bg-[#0b2557] sm:min-h-16 sm:px-10 sm:text-lg"
              >
                Quiero recibir información
              </a>
              <a
                href="/programas"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 bg-white/85 px-8 py-4 text-base font-bold text-[#0d2f6f] shadow-md backdrop-blur-sm transition hover:bg-white sm:min-h-16 sm:px-10 sm:text-lg"
              >
                Ver programa
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
