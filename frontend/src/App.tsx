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

const SITE_URL = "https://cursos.caesagroup.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.png`;

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

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Array<Record<string, unknown>>) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("inicio");
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (pathname === "/forms-session") return;
    setCurrentPage(PATH_TO_PAGE[pathname] ?? "inicio");
  }, [pathname]);

  useEffect(() => {
    const routePath = pathname === "/forms-session" ? "/forms-session" : PAGE_TO_PATH[currentPage];
    const canonicalUrl = `${SITE_URL}${routePath}`;

    const baseKeywords =
      "cursos online, cursos grabados, capacitacion para crecimiento profesional, habilidades para calidad, herramientas de mejora continua, ejercicios practicos, simuladores didacticos, constancia para CV, certificado para LinkedIn";

    const seoByPath: Record<
      string,
      {
        title: string;
        description: string;
        keywords?: string;
        robots?: string;
        faq?: Array<{ question: string; answer: string }>;
      }
    > = {
      "/": {
        title: "Cursos Online y Grabados para Crecimiento Profesional | CAESA GROUP",
        description:
          "Cursos online y grabados para acelerar tu crecimiento profesional con habilidades aplicables, ejercicios practicos, simuladores didacticos y constancia para CV y LinkedIn.",
        keywords: `${baseKeywords}, crecimiento profesional, empleabilidad, cursos de manufactura y procesos`,
      },
      "/cursos": {
        title: "Cursos Online para Calidad, Procesos y Manufactura | CAESA GROUP",
        description:
          "Aprende con practica, no con teoria: cursos online y grabados con simuladores didacticos, ejercicios guiados y constancia para impulsar entrevistas, ascensos y empleabilidad.",
        keywords:
          `${baseKeywords}, cursos para calidad, cursos de procesos, cursos de manufactura, teoria de restricciones, cadena critica`,
        faq: [
          {
            question: "¿Es practico o solo teoria?",
            answer:
              "Es practico. Incluye ejercicios y simuladores computacionales didacticos paso a paso, sin requisitos previos.",
          },
          {
            question: "¿Vale lo que cuesta?",
            answer:
              "Si. Es una formacion enfocada a resultados laborales con excelente costo-beneficio, promociones y cupones disponibles.",
          },
          {
            question: "¿Entregan constancia?",
            answer: "Si. Se entrega constancia util para fortalecer CV y perfil de LinkedIn.",
          },
        ],
      },
      "/programas": {
        title: "Programa Avanzado de Competencias Profesionales | CAESA GROUP",
        description:
          "Programa online para profesionistas de calidad, procesos y manufactura que buscan resultados demostrables en 20 horas por curso, con enfoque practico y constancia.",
        keywords:
          `${baseKeywords}, programa de competencias profesionales, ascenso laboral, entrevistas laborales`,
      },
      "/sobre-nosotros": {
        title: "Sobre CAESA GROUP | Formacion Aplicada para LatAm",
        description:
          "Conoce a CAESA GROUP y su enfoque de capacitacion aplicada para Mexico, Ecuador, Chile y Colombia en calidad, mejora continua, procesos y manufactura.",
        keywords:
          "CAESA GROUP, capacitacion profesional LatAm, calidad, procesos, manufactura, mejora continua",
      },
      "/contacto": {
        title: "Contacto y Cotizaciones de Capacitacion | CAESA GROUP",
        description:
          "Solicita informacion y cotizacion de cursos online, programas y capacitacion In Company para calidad, procesos, mejora continua y manufactura.",
        keywords:
          "contacto CAESA GROUP, cotizacion cursos, capacitacion In Company, cursos online grabados",
      },
      "/forms-session": {
        title: "Sesion Informativa | CAESA GROUP",
        description: "Registro para sesion informativa de CAESA GROUP.",
        robots: "noindex, nofollow",
      },
    };

    const seo = seoByPath[routePath] ?? seoByPath["/"];

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords || baseKeywords);
    upsertMeta(
      "name",
      "robots",
      seo.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    upsertCanonical(canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "CAESA GROUP");
    upsertMeta("property", "og:locale", "es_MX");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:image:alt", "CAESA GROUP cursos online y programas");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    upsertJsonLd("seo-jsonld-webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "es-MX",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": "https://caesagroup.com/#organization" },
    });

    const breadcrumbItems = [
      { name: "Inicio", path: "/" },
      ...(routePath !== "/" ? [{ name: seo.title.split("|")[0].trim(), path: routePath }] : []),
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    }));

    upsertJsonLd("seo-jsonld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });

    if (routePath === "/cursos") {
      upsertJsonLd("seo-jsonld-courses", {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemList",
            name: "Cursos CAESA GROUP",
            itemListElement: [
              "Administracion de Empresas de Manufactura con Enfoque TOC",
              "Administracion de Proyectos con el Enfoque de Cadena Critica (CCPM)",
              "Sistemas de Soporte para la Toma de Decisiones",
              "Analisis y Solucion de Problemas",
              "Pensamiento Critico",
              "Liderazgo, Trabajo en Equipo y Administracion del Tiempo",
              "CURSOS IN COMPANY",
            ].map((name, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Course",
                name,
                provider: {
                  "@type": "Organization",
                  name: "CAESA GROUP",
                  sameAs: "https://cursos.caesagroup.com/",
                },
              },
            })),
          },
          ...(seo.faq
            ? [
                {
                  "@type": "FAQPage",
                  mainEntity: seo.faq.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: f.answer,
                    },
                  })),
                },
              ]
            : []),
        ],
      });
    } else {
      const oldCoursesSchema = document.getElementById("seo-jsonld-courses");
      if (oldCoursesSchema) oldCoursesSchema.remove();
    }
  }, [currentPage, pathname]);

  const navigate = (page: Page) => {
    const nextPath = PAGE_TO_PATH[page];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
      setPathname(nextPath);
    }
    setCurrentPage(page);
  };

  const renderPage = useMemo(() => {
    if (pathname === "/forms-session") {
      return <FormsSessionPage />;
    }

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
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">{renderPage}</main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}
