import { motion } from 'framer-motion';
import {Flame } from 'lucide-react';

export function PromoBanner() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-3 px-4 text-center relative overflow-hidden"
    >
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ backgroundSize: '200% 100%' }}
      />
      
      <div className="relative flex items-center justify-center gap-2 flex-wrap"> 
        <Flame size={20}/>    
        <span className="text-sm md:text-base">
          <strong>Accede a DESCUENTOS</strong> y más <strong>REGISTRANDOTE</strong> en la <strong> SESIÓN INFORMATIVA</strong>
        </span>
                
        <Flame size={20}/>
      </div>
    </motion.div>
  );
}
