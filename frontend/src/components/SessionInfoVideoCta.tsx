// src/components/SessionInfoVideoCta.tsx
import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Gift } from "lucide-react";
import CouponRequestModal from "../components/CouponRequestModal";

type Props = {
  src?: string; // por defecto: /videos/sesionInfo.mp4
  className?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
};

export default function SessionInfoVideoCta({
  src = "/videos/sesionInfo.mp4",
  className = "",
  title = "Sesión informativa",
  subtitle = "Mira el video y conoce los beneficios.",
  ctaText = "Después de ver el video si te interesa solicitar los regalos que se ofrecen pueden hacerlo llenando sus datos en el siguiente formulario:",
  ctaButtonText = "Solicitar regalos",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [canAutoplay, setCanAutoplay] = useState(true);
  const [soundOn, setSoundOn] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  // Para no marcar "pausa por salir del viewport" como pausa del usuario
  const programmaticPauseRef = useRef(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    // Ajustes recomendados
    video.playsInline = true;
    video.disablePictureInPicture = true;

    // Estado inicial (autoplay requiere muted)
    video.muted = true;
    video.volume = 0;
    setSoundOn(false);

    const tryPlay = async () => {
      if (!video) return;

      // Si el usuario pausó manualmente, no lo forzamos
      if (userPausedRef.current) return;

      try {
        // Autoplay seguro: muted
        video.muted = true;
        video.volume = 0;
        await video.play();
        setCanAutoplay(true);
      } catch {
        setCanAutoplay(false);
      }
    };

    const obs = new IntersectionObserver(
      async ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          await tryPlay();
        } else {
          if (!video.paused) {
            programmaticPauseRef.current = true;
            video.pause();
            programmaticPauseRef.current = false;
          }
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(wrapper);

    // Sync: si el usuario pausa con controles, respetamos
    const onPause = () => {
      if (!programmaticPauseRef.current) {
        userPausedRef.current = true;
      }
    };

    const onPlay = () => {
      userPausedRef.current = false;
    };

    // Sync: si cambia volumen/mute desde controles nativos
    const onVolumeChange = () => {
      const isOn = !video.muted && video.volume > 0;
      setSoundOn(isOn);
    };

    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);
    video.addEventListener("volumechange", onVolumeChange);

    return () => {
      obs.disconnect();
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      const next = !soundOn;
      setSoundOn(next);

      video.muted = !next;
      video.volume = next ? 1 : 0;

      // Si el usuario activó sonido, normalmente es una interacción válida:
      // intentamos play por si estaba pausado
      if (video.paused) {
        userPausedRef.current = false; // al activar audio, asumimos intención de reproducir
        await video.play();
      }
    } catch {
      // fallback seguro
      setSoundOn(false);
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.volume = 0;
      }
    }
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* TEXTO */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1e3a8a] px-4 py-2 rounded-full text-sm font-semibold">
              {subtitle}
            </div>

            <h2 className="text-3xl lg:text-4xl text-[#1e3a8a] mt-4 mb-3">
              {title}
            </h2>

            <p className="text-lg text-gray-600">{ctaText}</p>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full
                           bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white text-sm font-semibold
                           shadow-md hover:shadow-lg transition-all duration-200
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/70
                           focus-visible:ring-offset-2"
              >
                <Gift size={18} />
                <span>{ctaButtonText}</span>
              </button>
            </div>

            {!canAutoplay && (
              <p className="mt-4 text-sm text-gray-500">
                Tu navegador bloqueó la reproducción automática. Puedes presionar
                play en el video.
              </p>
            )}
          </div>

          {/* VIDEO (HORIZONTAL TIPO PPT) */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={wrapperRef}
              className="relative w-full max-w-[640px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-black"
            >
              <video
                ref={videoRef}
                src={src}
                className="w-full aspect-video block"
                preload="metadata"
                playsInline
                controls
                muted
                disablePictureInPicture
                controlsList="noplaybackrate noremoteplayback"
              />

              {/* Botón de audio (permite sonido por interacción) */}
              <button
                type="button"
                onClick={toggleSound}
                className="absolute top-3 right-3 inline-flex items-center gap-2 bg-white/90 hover:bg-white
                           text-[#1e3a8a] px-3 py-2 rounded-full shadow transition"
                aria-label={soundOn ? "Desactivar audio" : "Activar audio"}
              >
                {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                <span className="text-sm font-semibold">
                  {soundOn ? "Audio ON" : "Activar audio"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <CouponRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
