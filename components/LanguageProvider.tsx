"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    nav_work: "TRABAJO",
    nav_about: "SOBRE MÍ",
    nav_contact: "CONTACTO",
    
    // Hero
    hero_role: "Software Engineer & Full-Stack Developer",
    hero_name_first: "Rolando",
    hero_name_last: "Rivas",
    hero_bio: "Ingeniero de Sistemas enfocado en construir arquitecturas escalables y experiencias web de alto impacto.",
    hero_location: "Nueva Esparta, VE",
    hero_stack: "Full-Stack",

    // Skills Ticker
    skill_1: "ARQUITECTURA FULL-STACK",
    skill_2: "NEXT.JS Y REACT",
    skill_3: "TYPESCRIPT",
    skill_4: "NODE.JS Y BACKEND",
    skill_5: "SISTEMAS DE DISEÑO",
    skill_6: "TAILWIND CSS",
    skill_7: "APIS REST Y GRAPHQL",
    skill_8: "OPTIMIZACIÓN DE RENDIMIENTO",
    skill_9: "PENSAMIENTO SISTÉMICO",
    skill_10: "CÓDIGO LIMPIO",

    // Work Section
    work_label: "PROYECTOS SELECCIONADOS",
    work_title: "Trabajo",
    
    // Project 1
    argus_title: "Gestión de Equipos de Computación para Laboratorios",
    argus_desc: "Plataforma integral para el control de inventario, mantenimiento y monitoreo en tiempo real de estaciones de cómputo en laboratorios universitarios.",
    argus_metric1_val: "+60%",
    argus_metric1_lbl: "Eficiencia operativa",
    argus_metric2_val: "100%",
    argus_metric2_lbl: "Control de inventario",

    // Project 2
    admissions_title: "Sistema Automatizado de Admisiones Universitarias",
    admissions_desc: "Portal dinámico de alta velocidad diseñado para la gestión de aspirantes, validación de documentación y automatización de procesos de admisión.",
    admissions_metric1_val: "+80%",
    admissions_metric1_lbl: "Agilidad en trámites",
    admissions_metric2_val: "10k+",
    admissions_metric2_lbl: "Aspirantes procesados",

    // About Section
    about_label: "MI HISTORIA",
    about_title: "Sobre mí",
    about_p1: "Estudiante de Ingeniería de Sistemas (GPA 17 pts, Beca Académica 100%) y Desarrollador Full-Stack con experiencia creando soluciones robustas con React, FastAPI, Python, Electron y Docker.",
    about_p2: "He diseñado e implementado plataformas clave como ARGUS (monitoreo remoto de laboratorios en UNIMAR), sistemas de evaluación docente y portales de admisiones en el Colegio Guayamurí.",
    about_p3: "Me apasiona la arquitectura limpia, la resolución analítica de problemas y el desarrollo de sistemas distribuidos escalables e intuitivos.",
    about_cv: "VER CV",
    about_exp_title: "EXPERIENCIA",
    about_exp1_company: "Colegio Guayamurí",
    about_exp1_role: "Desarrollador Full Stack",
    about_exp1_date: "Mayo 2026 – Ago 2026",
    about_exp2_company: "Universidad de Margarita (UNIMAR)",
    about_exp2_role: "Desarrollador Full Stack (Sistema ARGUS)",
    about_exp2_date: "Sep 2025 – Jun 2026",
    about_exp3_company: "Colegio Guayamurí",
    about_exp3_role: "Desarrollador Full Stack (Sistema Admisiones)",
    about_exp3_date: "Ene 2026 – Abr 2026",
    about_skills_title: "HABILIDADES",

    // Contact Section
    contact_label: "¿TIENES UN PROYECTO EN MENTE?",
    contact_heading: "HABLEMOS",
    contact_subheading: "Haz clic en el correo para copiarlo al portapapeles o conéctate en redes.",
    contact_copied: "¡Copiado al portapapeles!",
    contact_rights: "Todos los derechos reservados.",
  },
  en: {
    // Navbar
    nav_work: "WORK",
    nav_about: "ABOUT",
    nav_contact: "CONTACT",
    
    // Hero
    hero_role: "Software Engineer & Full-Stack Developer",
    hero_name_first: "Rolando",
    hero_name_last: "Rivas",
    hero_bio: "Systems Engineering student & Full-Stack Developer building scalable web and desktop applications.",
    hero_location: "Nueva Esparta, VE",
    hero_stack: "Full-Stack",

    // Skills Ticker
    skill_1: "FULL-STACK ARCHITECTURE",
    skill_2: "FASTAPI & PYTHON",
    skill_3: "REACT & VITE",
    skill_4: "ELECTRON & DESKTOP",
    skill_5: "POSTGRESQL & DATABASES",
    skill_6: "DOCKER & CONTAINERIZATION",
    skill_7: "TAILWIND CSS",
    skill_8: "PERFORMANCE OPTIMIZATION",
    skill_9: "SYSTEMS THINKING",
    skill_10: "CLEAN CODE",

    // Work Section
    work_label: "SELECTED PROJECTS",
    work_title: "Work",

    // Project 1
    argus_title: "Computer Equipment Management for Laboratories",
    argus_desc: "Comprehensive desktop application (Electron + React + FastAPI) for inventory control, maintenance, and real-time monitoring of computer stations at UNIMAR.",
    argus_metric1_val: "+60%",
    argus_metric1_lbl: "Operational efficiency",
    argus_metric2_val: "100%",
    argus_metric2_lbl: "Inventory control",

    // Project 2
    admissions_title: "Automated Admissions System",
    admissions_desc: "High-speed portal designed for applicant management, document validation, and admissions workflow automation at Colegio Guayamurí.",
    admissions_metric1_val: "+33%",
    admissions_metric1_lbl: "Applicant capacity growth",
    admissions_metric2_val: "200+",
    admissions_metric2_lbl: "Applications in 2 months",

    // About Section
    about_label: "MY STORY",
    about_title: "About",
    about_p1: "Systems Engineering student (GPA 17 pts, 100% Academic Scholarship) and Full-Stack Developer experienced in building robust solutions with React, FastAPI, Python, Electron, and Docker.",
    about_p2: "I have designed and deployed key platforms such as ARGUS (remote lab monitoring at UNIMAR), teacher performance evaluation tools, and admissions systems at Colegio Guayamurí.",
    about_p3: "I am passionate about clean architecture, analytical problem solving, and building intuitive, scalable distributed systems.",
    about_cv: "VIEW CV",
    about_exp_title: "EXPERIENCE",
    about_exp1_company: "Colegio Guayamurí",
    about_exp1_role: "Full Stack Developer",
    about_exp1_date: "May 2026 – Aug 2026",
    about_exp2_company: "Universidad de Margarita (UNIMAR)",
    about_exp2_role: "Full Stack Developer (ARGUS System)",
    about_exp2_date: "Sep 2025 – Jun 2026",
    about_exp3_company: "Colegio Guayamurí",
    about_exp3_role: "Full Stack Developer (Admissions System)",
    about_exp3_date: "Jan 2026 – Apr 2026",
    about_skills_title: "SKILLS",

    // Contact Section
    contact_label: "HAVE A PROJECT IN MIND?",
    contact_heading: "LET'S TALK",
    contact_subheading: "Click the email to copy it to clipboard or connect on social media.",
    contact_copied: "Copied to clipboard!",
    contact_rights: "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
