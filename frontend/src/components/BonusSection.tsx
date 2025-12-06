import React from "react";
import { motion } from "framer-motion";
import { Rocket, ExternalLink } from "lucide-react";

const BonusSection: React.FC = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-400 max-w-3xl mx-auto shadow-xl">

          {/* Título */}
          <h3 className="text-3xl font-bold mb-8 text-yellow-400">
            🎁 ¡OBTÉN TU BONUS ESPECIAL EN 2 PASOS!
          </h3>

          {/* PASO 1 */}
          <div className="mb-12">
            <p className="text-xl font-semibold mb-3 text-blue-800">
              1️. Da clic aquí para obtener tu cupón de descuento
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1e3a8a] px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg font-bold"
            >
              <Rocket size={28} />
              <span>OBTENER MI CUPÓN</span>
              <ExternalLink size={24} />
            </motion.a>
          </div>

          {/* PASO 2 */}
          <div>
            <p className="text-xl font-semibold mb-3 text-blue-800">
              2️. Da clic aquí para usar el cupón en Hotmart
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://hotmart.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg font-bold"
            >
              <span>USAR MI CUPÓN EN HOTMART</span>
              <ExternalLink size={24} />
            </motion.a>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default BonusSection;
