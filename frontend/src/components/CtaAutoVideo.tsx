import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type Props = {
  src?: string;
  className?: string;
};

export default function CtaAutoVideo({
  src = "/videos/cta.mp4",
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [canAutoplay, setCanAutoplay] = useState(true);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    video.controls = false;
    video.disablePictureInPicture = true;
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        // Autoplay: DEBE iniciar muted
        video.muted = true;
        await video.play();
        setCanAutoplay(true);
      } catch {
        setCanAutoplay(false);
      }
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(wrapper);
    return () => obs.disconnect();
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      const next = !soundOn;
      setSoundOn(next);

      video.muted = !next;
      video.volume = next ? 1 : 0;

      // Algunos browsers requieren play() tras interacción para aplicar audio
      if (video.paused) await video.play();
    } catch {
      // si algo falla, revertimos estado visual
      setSoundOn(false);
      if (videoRef.current) videoRef.current.muted = true;
    }
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1e3a8a] px-4 py-2 rounded-full text-sm font-semibold">
              Transforma tu perfil profesional más competitivo.
            </div>

            <h2 className="text-3xl lg:text-4xl text-[#1e3a8a] mt-4 mb-3">
                Programa avanzado de competencias profesionales
            </h2>

            <p className="text-lg text-gray-600">
              Tu desarrollo profesional empieza con una decisión.
            </p>
            <br/>
            <a
                href="https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo"
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
                ¡REGISTRARME AHORA!
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              ref={wrapperRef}
              className="relative w-full max-w-[460px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-black"
            >
              <video
                ref={videoRef}
                src={src}
                className="w-full h-auto block pointer-events-none"
                preload="metadata"
                muted
                playsInline
                controls={false}
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback"
              />

              {/* Botón de audio (interacción del usuario = permite sonido) */}
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-3 right-3 inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#1e3a8a] px-3 py-2 rounded-full shadow transition"
              >
                {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                <span className="text-sm font-semibold">
                  {soundOn ? "Audio ON" : "Activar audio"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {!canAutoplay && (
          <p className="mt-4 text-sm text-gray-500">
            Tu navegador bloqueó la reproducción automática.
          </p>
        )}
      </div>
    </section>
  );
}
