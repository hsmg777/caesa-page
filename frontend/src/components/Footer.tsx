import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="CAESA GROUP" className="h-10 w-auto brightness-0 invert" />
              <span className="text-lg">CAESA GROUP</span>
            </div>
            <p className="text-blue-200 text-sm">
              Transformando carreras a través de la educación en línea de calidad.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick('inicio')} className="text-blue-200 hover:text-white transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('programas')} className="text-blue-200 hover:text-white transition-colors">
                  Programas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('cursos')} className="text-blue-200 hover:text-white transition-colors">
                  Cursos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sobre-nosotros')} className="text-blue-200 hover:text-white transition-colors">
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contacto')} className="text-blue-200 hover:text-white transition-colors">
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Políticas de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Política de reembolsos
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} CAESA GROUP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
