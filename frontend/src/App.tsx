import { useEffect, useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Inicio } from "./pages/Inicio";
import { Programas } from "./pages/Programas";
import { Cursos } from "./pages/Cursos";
import { SobreNosotros } from "./pages/SobreNosotros";
import { Contacto } from "./pages/Contacto";
import FormsSessionPage from "./pages/FormSessionPage";

type Page = "inicio" | "programas" | "cursos" | "sobre-nosotros" | "contacto";

const PATH_TO_PAGE: Record<string, Page> = {
  "/": "inicio",
  "/programas": "programas",
  "/cursos": "cursos",
  "/sobre-nosotros": "sobre-nosotros",
  "/contacto": "contacto",
};

const PAGE_TO_PATH: Record<Page, string> = {
  inicio: "/",
  programas: "/programas",
  cursos: "/cursos",
  "sobre-nosotros": "/sobre-nosotros",
  contacto: "/contacto",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("inicio");
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  // ✅ sync con back/forward y refresh
  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // ✅ si estás en una ruta “normal”, sincroniza currentPage desde la URL
  useEffect(() => {
    if (pathname === "/forms-session") return; // 👈 esta NO vive en currentPage
    setCurrentPage(PATH_TO_PAGE[pathname] ?? "inicio");
  }, [pathname]);

  // ✅ navegación normal: cambia URL + cambia estado
  const navigate = (page: Page) => {
    const nextPath = PAGE_TO_PATH[page];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
      setPathname(nextPath);
    }
    setCurrentPage(page);
  };

  const renderPage = useMemo(() => {
    // ✅ RUTA ÚNICA (solo accesible por URL /forms-session)
    if (pathname === "/forms-session") {
      return <FormsSessionPage />;
    }

    // ✅ Resto del sitio (tu lógica actual)
    switch (currentPage) {
      case "inicio":
        return <Inicio onNavigate={navigate} />;
      case "programas":
        return <Programas />;
      case "cursos":
        return <Cursos />;
      case "sobre-nosotros":
        return <SobreNosotros onNavigate={navigate} />;
      case "contacto":
        return <Contacto />;
      default:
        return <Inicio onNavigate={navigate} />;
    }
  }, [currentPage, pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar y Footer siguen igual, pero ahora navegan con URL */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">{renderPage}</main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
