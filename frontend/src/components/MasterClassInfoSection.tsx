import { CalendarDays, Check, Clock3, MonitorPlay, Pin, Users } from "lucide-react";

export default function MasterClassInfoSection() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-12 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/junta.jpg')" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(7, 26, 66, 0.82)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
          MASTER CLASS EXCLUSIVA
        </h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <h3 className="text-2xl font-black leading-tight sm:text-3xl">
              Teoria de Restricciones aplicada al negocio real
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
              Disenada para gerentes, ingenieros y responsables de operacion que
              necesitan resultados rapidos, medibles y sostenibles.
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 rounded-xl border border-white/15 bg-slate-900/30 px-3 py-2">
                <Pin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm sm:text-base">Administracion de Proyectos</span>
              </li>
              <li className="flex items-start gap-2 rounded-xl border border-white/15 bg-slate-900/30 px-3 py-2">
                <Pin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm sm:text-base">Programacion de Produccion</span>
              </li>
              <li className="flex items-start gap-2 rounded-xl border border-white/15 bg-slate-900/30 px-3 py-2">
                <Pin size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="text-sm sm:text-base">Sistemas de Soporte para Decisiones</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <CalendarDays size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>23, 24 y 26 de Febrero 2026</span>
              </li>
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>18:00 hrs (CDMX)</span>
              </li>
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <MonitorPlay size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>Modalidad online en vivo</span>
              </li>
              <li className="flex items-start gap-2 text-base font-semibold sm:text-lg">
                <Users size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>Ideal para equipos de operacion y liderazgo</span>
              </li>
            </ul>

            <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-white/25 pt-4">
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>3 sesiones intensivas</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>Enfoque practico</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>Casos reales</span>
              </li>
              <li className="flex items-center gap-2 rounded-lg border border-white/20 bg-slate-900/30 px-3 py-2 text-xs sm:text-sm">
                <Check size={14} className="shrink-0 text-white" />
                <span>Cupo limitado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-blue-100 sm:text-base">Asegura tu lugar ahora.</p>
          <a
            href="https://forms.gle/6hXiF2jW6tcMDtCP6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 text-sm font-extrabold text-[#0d2f6f] transition hover:bg-slate-100 sm:text-base"
          >
            Registrate ahora
          </a>
        </div>
      </div>
    </section>
  );
}
