import React, { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import { Send, X, ExternalLink, ShoppingCart } from "lucide-react";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type CouponRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  productoInteres: string;
  aceptaPoliticas: boolean;
};

export default function CouponRequestModal({
  isOpen,
  onClose,
}: CouponRequestModalProps) {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const HOTMART_URL = "https://hotmart.com"; 

  const PRODUCTOS = useMemo(
    () => [
      "Programa avanzado de competencias profesionales",
      "Curso Admin. Empresas de Manufactura con Enfoque TOC",
      "Curso Admin. de Proyectos con el Enfoque de Cadena Crítica",
      "Curso Análisis y Solución de Problemas",
      "Curso Diplomado en Manufactura Esbelta",
      "Curso Evaluación Económica de Proyectos",
      "Curso Liderazgo, Trabajo en Equipo y Administración del Tiempo",
      "Curso Mejora Continua",
      "Curso Pensamiento Crítico",
      "Curso Sistemas de Soporte para la Toma de Decisiones",
    ],
    []
  );

  const initialState: FormState = useMemo(
    () => ({
      nombre: "",
      email: "",
      telefono: "",
      productoInteres: PRODUCTOS[0], // ✅ evita valor que no existe en el select
      aceptaPoliticas: false,
    }),
    [PRODUCTOS]
  );

  const [formData, setFormData] = useState<FormState>(initialState);
  const [enviando, setEnviando] = useState(false);

  // ✅ Nuevo: controla modal paso 2
  const [openStep2, setOpenStep2] = useState(false);

  useEffect(() => {
    if (!isOpen && !openStep2) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseAll();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, openStep2]);

  const handleCloseAll = () => {
    if (enviando) return;
    setFormData(initialState);
    setOpenStep2(false);
    onClose();
  };

  const handleCloseStep1Only = () => {
    if (enviando) return;
    setFormData(initialState);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit =
    !enviando &&
    formData.nombre.trim().length >= 3 &&
    formData.email.trim().length > 0 &&
    formData.productoInteres.trim().length > 0 &&
    formData.aceptaPoliticas;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setEnviando(true);

    try {
      const resp = await fetch(`${API_URL}/request-coupon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        let msg = "Ocurrió un error al enviar la solicitud.";
        try {
          const data = await resp.json();
          if (data?.message) msg = data.message;
        } catch {
          /* ignore */
        }
        throw new Error(msg);
      }

      await Swal.fire({
        icon: "success",
        title: "Solicitud recibida",
        text:
          "Hemos recibido tu solicitud pronto te enviaremos tu cupón para tu descuento con el podras acceder al paso 2.",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#1e3a8a",
        background: "#0b1f4a",
        color: "#e5e7eb",
      });

      // ✅ Después del SweetAlert: cerrar paso 1 y abrir paso 2
      setFormData(initialState);
      handleCloseStep1Only();
      setOpenStep2(true);
    } catch (err: any) {
      const msg =
        err?.message || "No se pudo enviar la solicitud. Inténtalo nuevamente.";

      Swal.fire({
        icon: "error",
        title: "Ups, algo salió mal",
        text: msg,
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#b91c1c",
        background: "#0b1f4a",
        color: "#e5e7eb",
      });
    } finally {
      setEnviando(false);
    }
  };

  // ✅ Paso 1 visible si isOpen
  const showStep1 = isOpen;

  return (
    <>
      {/* ====================== PASO 1: Solicitud de cupón ====================== */}
      {showStep1 && (
        <div className="fixed inset-0 z-[999]">
          <button
            type="button"
            onClick={handleCloseAll}
            className="absolute inset-0 bg-slate-950/70"
            aria-label="Cerrar modal"
          />

          <div className="relative mx-auto mt-10 w-[92%] max-w-2xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
                <div>
                  <h3 className="text-lg font-semibold">Solicitud de cupón</h3>
                  <p className="text-white/90 text-sm">
                    Completa tus datos para recibir tu descuento.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCloseAll}
                  disabled={enviando}
                  className="p-2 rounded-lg hover:bg-white/10 transition disabled:opacity-60"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Teléfono (con código de país) *
                  </label>
                  <PhoneInput
                    defaultCountry="mx"
                    value={formData.telefono}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, telefono: value }))
                    }
                    className="w-full"
                    inputClassName="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Ingresa tu número"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="productoInteres"
                    className="block text-gray-700 mb-2"
                  >
                    Producto de interés *
                  </label>
                  <select
                    id="productoInteres"
                    name="productoInteres"
                    value={formData.productoInteres}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                  >
                    {PRODUCTOS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="aceptaPoliticas"
                    name="aceptaPoliticas"
                    checked={formData.aceptaPoliticas}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-[#3b82f6] border-gray-300 rounded focus:ring-[#3b82f6]"
                  />
                  <label
                    htmlFor="aceptaPoliticas"
                    className="text-sm text-gray-600"
                  >
                    Acepto las{" "}
                   <a
                    href="/docs/Terms_Conditions_Caesa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b82f6] hover:underline"
                    >
                    políticas de privacidad
                    </a>
                    {" "}
                    y el tratamiento de mis datos personales
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleCloseAll}
                    disabled={enviando}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition disabled:opacity-60"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {enviando ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Solicitar cupón</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Un asesor validará tu información y te enviará el cupón.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {openStep2 && (
        <div className="fixed inset-0 z-[1000]">
          <button
            type="button"
            onClick={handleCloseAll}
            className="absolute inset-0 bg-slate-950/70"
            aria-label="Cerrar modal"
          />

          <div className="relative mx-auto mt-10 w-[92%] max-w-xl">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1e3a8a]">
                <div>
                  <h3 className="text-lg font-semibold">¡Listo! Paso 2</h3>
                  <p className="text-[#1e3a8a]/90 text-sm">
                    Revisa tu correo para continuar
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCloseAll}
                  className="p-2 rounded-lg hover:bg-white/40 transition"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-gray-700">
                    ✅ Tu solicitud fue registrada.
                  </p>

                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">
                      Revisa las instrucciones que te llegarán al correo
                    </span>{" "}
                    para poder proceder con la compra del producto{" "}
                    <span className="font-semibold">
                      junto con tu cupón de descuento
                    </span>.
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>Revisa también “Promociones” o “Spam”.</li>
                    <li>El cupón puede tardar tiempo en llegar.</li>
                    <li>Si no te llega, vuelve a solicitarlo o contáctanos.</li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleCloseAll}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  <span>Entendido</span>
                </button>

            
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
