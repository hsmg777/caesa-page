// src/components/landing/BonusSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

type BonusSectionProps = {
  onOpenCouponModal: () => void; // abre el modal Coupon (Paso 1)
};

const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCouponModal }) => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-400 max-w-3xl mx-auto shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">
            🎁 ¡OBTÉN TU BONUS ESPECIAL!
          </h3>

          <p className="text-base sm:text-lg text-blue-900 mb-8">
            Sigue los pasos dando click al botón para obtener tu cupón y completar tu compra.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCouponModal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1e3a8a] px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg font-bold"
          >
            <Rocket size={28} />
            <span>SEGUIR LOS PASOS</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default BonusSection;
