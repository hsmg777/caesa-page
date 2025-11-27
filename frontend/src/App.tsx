import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Inicio } from './pages/Inicio';
import { Programas } from './pages/Programas';
import { Cursos } from './pages/Cursos';
import { SobreNosotros } from './pages/SobreNosotros';
import { Contacto } from './pages/Contacto';

type Page = 'inicio' | 'programas' | 'cursos' | 'sobre-nosotros' | 'contacto';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio onNavigate={setCurrentPage} />;
      case 'programas':
        return <Programas />;
      case 'cursos':
        return <Cursos />;
      case 'sobre-nosotros':
        return <SobreNosotros onNavigate={setCurrentPage} />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}