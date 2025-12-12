// src/components/landing/PainSolutionSection.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  X,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

type Page = "inicio" | "programas" | "cursos" | "sobre-nosotros" | "contacto";

interface HeroPainSolutionProps {
  onNavigate: (page: Page) => void;
  onRequestCoupon: () => void; // lo dejo para no romper tu llamada actual (no se usa aquí)
}

const PainSolutionSection: React.FC<HeroPainSolutionProps> = ({
  onNavigate,
  onRequestCoupon, // eslint-disable-line @typescript-eslint/no-unused-vars
}) => {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo";

  const handleGoToWhatsAppGroup = () => {
    window.open(WHATSAPP_GROUP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* ✅ BACKGROUND FULL: pain.png */}
      <div className="absolute inset-0">
        <img
          src="/images/pain.png"
          alt="Profesional enviando su CV sin respuesta"
          className="h-full w-full object-cover"
        />

        {/* blur + overlays para legibilidad */}
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/90 via-[#0b1f4a]/65 to-[#020617]/500" />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* glows decor */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -right-36 h-[28rem] w-[28rem] rounded-full bg-orange-500/20 blur-3xl" />

      {/* CONTENT (izquierda / derecha) */}
      <div className="relative z-10 min-h-[100svh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* =========================
                LEFT: TEXTO (DOLOR -> PROMESA)
               ========================= */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-2 mb-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100/90">
                  PROGRAMA AVANZADO · COMPETENCIAS PROFESIONALES
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold">
                  <BadgeCheck size={14} className="text-blue-200" />
                  Certificación + enfoque 2025
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-300/25 text-[11px] font-semibold text-yellow-200">
                  <Zap size={14} />
                  Método práctico + aplicable
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.03] mb-6"
              >
                ¿Tu CV cae en silencio…{" "}
                <span className="text-[#60a5fa]">pero sabes que vales más</span>?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-blue-100/90 mb-7 max-w-xl"
              >
                No es falta de talento. Es que hoy las empresas eligen a quien
                demuestra{" "}
                <span className="font-semibold text-white">
                  competencias reales
                </span>
                : analizar, decidir, liderar y ejecutar con impacto.
              </motion.p>

              {/* pain bullets */}
              <div className="grid sm:grid-cols-2 gap-3 mb-7 max-w-xl">
                {[
                  "Envíos de CV sin respuesta",
                  "Entrevistas que no avanzan",
                  "Te piden experiencia “imposible”",
                  "Sientes que eres “uno más”",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <X className="mt-0.5 text-red-300" size={18} />
                    <p className="text-sm text-blue-100/90">{t}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToWhatsAppGroup}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full
                             bg-gradient-to-r from-yellow-400 to-orange-500
                             text-[#1e3a8a] text-sm sm:text-base font-extrabold
                             shadow-lg hover:shadow-2xl transition"
                >
                  QUIERO DEJAR DE SER “UNO MÁS”!
                  <ArrowRight className="ml-2" size={18} />
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavigate("programas")}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full
                             border-2 border-white/70 text-white bg-white/0
                             text-sm sm:text-base font-semibold hover:bg-white/10 transition"
                >
                  Ver el programa completo
                </motion.button>
              </div>

              <p className="mt-4 text-xs text-blue-100/70 max-w-xl">
                Ideal para jóvenes profesionistas y empleados intermedios que
                quieren un salto real sin otra carrera ni una maestría eterna.
              </p>
            </div>

            {/* =========================
                RIGHT: SOLUCIÓN (CARD TRANSPARENTE)
               ========================= */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div
                className="rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl
                           shadow-[0_30px_90px_rgba(0,0,0,0.45)] overflow-hidden"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-2 text-yellow-200 mb-4">
                    <Sparkles size={18} />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                      LA SOLUCIÓN (NO TEORÍA, RESULTADOS)
                    </p>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    De “candidato invisible” a{" "}
                    <span className="text-[#60a5fa]">perfil irresistible</span>
                  </h2>

                  <p className="text-sm sm:text-base text-blue-100/90 mb-6">
                    Te entrenamos con conocimientos de vanguardia para que tu
                    perfil sea{" "}
                    <span className="font-semibold text-white">
                      evidencia clara de valor profesional
                    </span>
                    . No es “otro curso”: es un upgrade real a tu forma de
                    pensar, resolver y liderar.
                  </p>

                  {/* chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Pensamiento crítico",
                      "Análisis real",
                      "Lean / TOC",
                      "Cadena Crítica",
                      "Decisión con impacto",
                      "Liderazgo",
                    ].map((x) => (
                      <span
                        key={x}
                        className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full
                                   bg-white/10 border border-white/10 text-blue-50"
                      >
                        <CheckCircle2 size={14} className="text-green-300" />
                        {x}
                      </span>
                    ))}
                  </div>

                  {/* trust row */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <ShieldCheck size={16} className="text-green-300" />
                        <p className="font-semibold text-sm">Pago seguro</p>
                      </div>
                      <p className="text-xs text-blue-100/80">
                        Garantía y checkout confiable con Hotmart.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <Users size={16} className="text-blue-200" />
                        <p className="font-semibold text-sm">Acompañamiento</p>
                      </div>
                      <p className="text-xs text-blue-100/80">
                        Comunidad + guía para aplicar lo aprendido.
                      </p>
                    </div>
                  </div>

                  {/* mini badge bottom */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/10 text-xs text-blue-50">
                      <Sparkles size={14} className="text-yellow-200" />
                      Empieza hoy: entra al grupo y recibe instrucciones + descuentos
                    </span>
                  </div>
                </div>
              </div>

              {/* subtle glow */}
              <div className="pointer-events-none absolute -inset-6 bg-gradient-to-tr from-[#1e3a8a]/35 via-transparent to-yellow-400/20 blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
