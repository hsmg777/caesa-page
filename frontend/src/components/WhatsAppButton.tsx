import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);


  const handleClick = () => {
    const url = `https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo`;
    window.open(url, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-64 border-2 border-green-500"
            >
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <X size={16} />
              </button>
              <p className="text-sm text-gray-700 mb-2">
                <span className="text-green-600">¿Necesitas ayuda?</span>
              </p>
              <p className="text-xs text-gray-600 mb-3">
                Chatea con nosotros y obtén un <span className="text-green-600">descuento extra</span> 🎁
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors relative"
        >
          <MessageCircle size={32} />
          
          {/* Ping animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          
          {/* Badge de notificación */}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center"
          >
            1
          </motion.span>
        </motion.button>
      </motion.div>
    </>
  );
}
