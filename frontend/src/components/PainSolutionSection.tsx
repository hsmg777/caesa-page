// src/components/landing/PainSolutionSection.tsx
import React from "react";

type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

interface InicioProps {
  onNavigate: (page: Page) => void;
}

const PainSolutionSection: React.FC<InicioProps> = ({ onNavigate }) => {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden w-full rounded-3xl bg-white text-[#1e3a8a] shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-blue-100">
          {/* Imagen lado izquierdo / arriba en mobile */}
          <div className="grid md:grid-cols-[1.1fr,1.2fr]">
            <div className="relative h-64 md:h-full">
              <img
                src="/images/pain.png"
                alt="Profesional enviando su CV sin respuesta"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/70 via-[#1e3a8a]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[#1e3a8a] text-[11px] font-semibold uppercase tracking-wide shadow-sm">
                  🚀 De CV ignorado... a candidato irresistible!
                </span>
              </div>
            </div>

            {/* Texto marketero */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#1e3a8a] uppercase tracking-[0.18em] mb-2">
                  PROGRAMA AVANZADO · COMPETENCIAS PROFESIONALES
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-3">
                  ¿Tu CV cae en silencio…{" "}
                  <span className="text-[#2563eb]">pero sabes que vales más</span>?
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  No es falta de talento. Es falta de las{" "}
                  <span className="font-semibold">competencias</span> que hoy
                  hacen que una empresa diga: “Lo queremos a él / a ella”.
                </p>

                <div className="rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3 mb-4">
                  <p className="text-[11px] font-semibold text-[#1e3a8a] uppercase tracking-[0.16em] mb-1">
                    LO QUE TE DA ESTE PROGRAMA
                  </p>
                  <p className="text-sm text-gray-700">
                    Pensamiento crítico · Análisis real · Lean · TOC · Cadena
                    Crítica · Toma de decisiones con impacto · Liderazgo.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => window.open("https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo", "_blank")}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white text-sm font-semibold shadow-lg hover:from-[#f97316] hover:to-[#ea580c] transition"
                >
                  Quiero dejar de ser “uno más”!
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate('programas')}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[#1e3a8a] text-[12px] sm:text-sm text-[#1e3a8a] hover:bg-blue-50 transition"
                >
                  Más información del programa
                </button>
              </div>

              <p className="mt-3 text-[11px] text-gray-500">
                Ideal para jóvenes profesionistas y empleados intermedios que
                quieren un salto real en su carrera sin otra carrera ni una
                maestría eterna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
