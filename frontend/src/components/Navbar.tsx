import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PromoBanner } from './PromoBanner';

type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio' as Page, label: 'Inicio' },
    { id: 'programas' as Page, label: 'Programas' },
    { id: 'cursos' as Page, label: 'Cursos' },
    { id: 'sobre-nosotros' as Page, label: 'Sobre nosotros' },
    { id: 'contacto' as Page, label: 'Contáctanos' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* NAVBAR FIJO ARRIBA SIEMPRE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('inicio')}
            >
              <img src="/images/logo.png" alt="CAESA GROUP Logo" className="h-12 w-auto" />
              <span className="text-[#1e3a8a] text-xl">CAESA GROUP</span>
              <span className="text-sm text-gray-500">Capacitaciones</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors ${
                    currentPage === item.id
                      ? 'text-[#1e3a8a]'
                      : 'text-gray-600 hover:text-[#1e3a8a]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo", "_blank")}
                className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Quiero inscribirme</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#1e3a8a]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-[#1e3a8a] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => window.open("https://chat.whatsapp.com/LFFsURV6sp7KdBBgihKzHo", "_blank")}
                  className="block w-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Quiero inscribirme
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="mt-20">
        <PromoBanner />
      </div>
    </>
  );
}

