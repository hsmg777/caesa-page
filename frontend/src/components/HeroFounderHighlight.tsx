// src/components/HeroFounderHighlight.tsx
import { ArrowRight } from "lucide-react";

interface HeroFounderHighlightProps {
  onKnowMore: () => void;
}

export default function HeroFounderHighlight({ onKnowMore }: HeroFounderHighlightProps) {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    onKnowMore();
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-blue-50 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center gap-8">
      {/* decoraciones de fondo */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-24 h-64 w-64 rounded-full bg-blue-50/60 blur-3xl" />

      {/* Imagen circular */}
      <div className="relative z-[1] w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-blue-100/70 blur-md" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white shadow-xl ring-4 ring-blue-100">
          <img
            src="/images/founder1.jpg"
            alt="Ing. Felipe Quintanilla"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="relative z-[1] flex-1">
        <p className="text-[0.75rem] md:text-xs font-semibold tracking-[0.18em] text-[#1e3a8a] uppercase mb-2">
          Programas y cursos dictados por
        </p>

        <h3 className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-semibold leading-tight mb-3">
          Ing. Felipe Quintanilla
        </h3>

        <p className="text-slate-700 text-sm md:text-base lg:text-lg leading-relaxed mb-5 max-w-3xl">
          Ingeniero Industrial y de Sistemas con más de cuatro décadas de experiencia
          formando profesionales en el Tecnológico de Monterrey y guiando empresas en
          proyectos de mejora continua.
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-4 py-2 rounded-full bg-blue-50 text-xs md:text-sm text-[#1e3a8a] font-medium">
            42+ años de experiencia académica
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-50 text-xs md:text-sm text-[#1e3a8a] font-medium">
            Director IIS por 15 años
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-50 text-xs md:text-sm text-[#1e3a8a] font-medium">
            Fundador de CAESA GROUP
          </span>
        </div>

        {/* Link "Conocer más" */}
        <a
          href="#sobre-nosotros"
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-sm md:text-base text-[#1e3a8a] font-semibold hover:text-[#1d4ed8] transition-colors"
        >
          Conocer más
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
