import React, { useMemo, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Send } from "lucide-react";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  productoInteres: string;
  aceptaPoliticas: boolean;
};

export default function FormsSessionPage() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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
      productoInteres: PRODUCTOS[0],
      aceptaPoliticas: false,
    }),
    [PRODUCTOS]
  );

  const [formData, setFormData] = useState<FormState>(initialState);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
      const resp = await fetch(`${API_URL}/session-attended`, {
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
          // ignore
        }
        throw new Error(msg);
      }

      await Swal.fire({
        icon: "success",
        title: "Solicitud recibida",
        text:
          "Hemos recibido tu solicitud. Pronto te enviaremos tu cupón de descuento al correo registrado.",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#1e3a8a",
        background: "#0b1f4a",
        color: "#e5e7eb",
      });

      setFormData(initialState); // ✅ reset
    } catch (err: any) {
      const msg =
        err?.message || "No se pudo enviar la solicitud. Inténtalo nuevamente.";

      await Swal.fire({
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1f4a] via-[#0b1f4a] to-[#071737] text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Solicitud de cupón
          </h1>
          <p className="mt-2 text-slate-200/90">
            Gracias por asistir a la sesión informativa. Completa tus datos para recibir tu descuento.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-5 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
            <h2 className="text-lg font-semibold">Formulario</h2>
            <p className="text-white/90 text-sm">
              Un asesor validará tu información y te enviará el cupón.
            </p>
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
              <label htmlFor="aceptaPoliticas" className="text-sm text-gray-600">
                Acepto las{" "}
                <a
                  href="/docs/Terms_Conditions_Caesa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3b82f6] hover:underline"
                >
                  políticas de privacidad
                </a>{" "}
                y el tratamiento de mis datos personales
              </label>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setFormData(initialState)}
                disabled={enviando}
                className="w-full sm:w-auto px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition disabled:opacity-60"
              >
                Limpiar
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
              Revisa también “Promociones” o “Spam”. El cupón puede tardar un
              poco en llegar.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
