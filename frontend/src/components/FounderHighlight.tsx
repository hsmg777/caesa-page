// src/components/FounderHighlight.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface FounderImage {
  src: string;
  alt?: string;
}

interface FounderHighlightProps {
  images?: FounderImage[];
}

export default function FounderHighlight({ images = [] }: FounderHighlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images.length > 0;

  const handlePrev = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImage = hasImages ? images[currentIndex] : null;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm py-0">
      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-8 items-center">
        {/* Carrusel de imágenes */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5]">
            {currentImage ? (
              <ImageWithFallback
                src={currentImage.src}
                alt={currentImage.alt || "Foto del fundador"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Agrega imágenes del fundador
              </div>
            )}
          </div>

          {hasImages && images.length > 1 && (
            <>
              {/* Controles */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 border border-gray-200 shadow-sm hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 border border-gray-200 shadow-sm hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-5 bg-[#1e3a8a]"
                        : "w-2 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Texto y credenciales */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#1e3a8a] uppercase mb-2">
            Ing. Felipe Quintanilla
          </p>
          <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
            Más de cuatro décadas formando ingenieros y líderes
          </h3>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Ingeniero Industrial y de Sistemas por el Tecnológico de Monterrey, Campus Monterrey,
            con maestría en Investigación de Operaciones por el Georgia Institute of Technology.
            Durante 42 años formó parte del Tecnológico de Monterrey, 15 de ellos como Director
            de la carrera de Ingeniería Industrial y de Sistemas (IIS).
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Bajo su liderazgo, la carrera de IIS pasó de poco más de 600 a más de 1,800 alumnos,
            se graduaron más de 3,000 ingenieros de 30 generaciones y coordinó en cuatro ocasiones
            el rediseño del programa. Impulsó la Modalidad de Experiencia Profesional, el Programa
            de Proyectos Empresariales con más de 500 proyectos en más de 100 empresas, y
            programas internacionales de verano en Atlanta, Georgia.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Ha impartido más de 100 cursos a empresarios en diversas ciudades de México, fue
            VicePresident International del Institute of Industrial and Systems Engineers (IISE) y
            cuenta con certificaciones en Manufactura Esbelta, Administración de Proyectos, Teoría
            de Restricciones y como Instructor y Profesor Consultor del Tecnológico de Monterrey.
            Es fundador y director de <span className="font-semibold">CAESA GROUP</span>, firma de
            consultoría en Mejora Continua desde 1996.
          </p>

          {/* Stats minimalistas (no las tocamos) */}
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Trayectoria académica
              </p>
              <p className="text-lg font-semibold text-[#1e3a8a]">42 años</p>
              <p className="text-xs text-gray-500">en el Tecnológico de Monterrey</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Dirección IIS
              </p>
              <p className="text-lg font-semibold text-[#1e3a8a]">15 años</p>
              <p className="text-xs text-gray-500">liderando la carrera de IIS</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Impacto en alumnos
              </p>
              <p className="text-lg font-semibold text-[#1e3a8a]">3000+</p>
              <p className="text-xs text-gray-500">
                egresados y cientos de proyectos empresariales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
