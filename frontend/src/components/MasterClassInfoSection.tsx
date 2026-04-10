import { ArrowRight, CheckCircle2, CircleDollarSign } from "lucide-react";

const courses = [
  "Manufactura con enfoque TOC",
  "Proyectos con Cadena Crítica",
  "Soporte para Decisiones",
];

const benefits = [
  "Mejora operaciones con una visión más clara del sistema.",
  "Gestiona proyectos con menos retrasos y mayor enfoque.",
  "Toma decisiones con mejor criterio operativo y financiero.",
];

export default function MasterClassInfoSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Programa destacado
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Teoría de Restricciones Aplicada
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Mejora operaciones, acelera proyectos y toma decisiones con impacto real.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Programa diseñado para jóvenes profesionistas, recién egresados y personal con experiencia intermedia que quieren crecer más rápido dentro de su empresa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900">
                3 cursos online
              </div>
              <div className="rounded-full border border-slate-600 px-4 py-2 text-sm font-bold text-white">
                Simulaciones didácticas
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1d4ed8]">
                Cursos incluidos
              </p>

              <div className="mt-5 grid gap-3">
                {courses.map((course, index) => (
                  <div
                    key={course}
                    className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dbeafe] text-sm font-black text-[#0d2f6f]">
                      {index + 1}
                    </div>
                    <p className="text-base font-semibold text-slate-800 sm:text-lg">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                  Beneficios
                </p>

                <ul className="mt-4 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
                  Incluye simulaciones con software didáctico para facilitar el aprendizaje práctico.
                </p>
              </div>

              <div className="rounded-3xl bg-[#0d2f6f] p-6 text-white lg:w-[240px]">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                  <CircleDollarSign size={14} className="shrink-0" />
                  <span>Precio especial</span>
                </div>

                <p className="mt-4 text-sm text-slate-300">
                  Antes <span className="line-through">$491 USD</span>
                </p>
                <p className="mt-1 text-4xl font-black">$367</p>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  USD
                </p>

                <a
                  href="/contacto"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#0d2f6f] transition hover:bg-slate-100"
                >
                  <span>Quiero información</span>
                  <ArrowRight size={16} className="shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
