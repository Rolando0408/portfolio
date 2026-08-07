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
    nav_work: "WORK",
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
    about_p1: "Ingeniero de Sistemas y Desarrollador Full-Stack con experiencia creando soluciones escalables, desde plataformas para laboratorios hasta sistemas de admisión universitaria de alto tráfico.",
    about_p2: "Mi enfoque se basa en la resolución analítica. Quiero comprender exactamente por qué los usuarios y el negocio necesitan una solución antes de escribir la primera línea de código.",
    about_p3: "Me encargo de todo el ciclo de desarrollo, desde la base de datos y la API hasta la interfaz final. Disfruto trabajar en equipos donde las decisiones arquitectónicas se debaten y se construyen con excelencia técnica.",
    about_cv: "VER CV",
    about_exp_title: "EXPERIENCIA",
    about_exp1_company: "Desarrollador Independiente",
    about_exp1_role: "Full-Stack Engineer",
    about_exp1_date: "2022 - Presente",
    about_exp2_company: "UDO (Universidad de Oriente)",
    about_exp2_role: "Desarrollador de Sistemas",
    about_exp2_date: "2020 - 2022",
    about_exp3_company: "Agencia Digital",
    about_exp3_role: "Frontend Developer",
    about_exp3_date: "2018 - 2020",
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
    hero_bio: "Systems Engineer focused on building scalable architectures and high-impact web experiences.",
    hero_location: "Nueva Esparta, VE",
    hero_stack: "Full-Stack",

    // Skills Ticker
    skill_1: "FULL-STACK ARCHITECTURE",
    skill_2: "NEXT.JS & REACT",
    skill_3: "TYPESCRIPT",
    skill_4: "NODE.JS & BACKEND",
    skill_5: "DESIGN SYSTEMS",
    skill_6: "TAILWIND CSS",
    skill_7: "REST & GRAPHQL APIS",
    skill_8: "PERFORMANCE OPTIMIZATION",
    skill_9: "SYSTEMS THINKING",
    skill_10: "CLEAN CODE",

    // Work Section
    work_label: "SELECTED PROJECTS",
    work_title: "Work",

    // Project 1
    argus_title: "Computer Equipment Management for Laboratories",
    argus_desc: "Comprehensive platform for inventory control, maintenance, and real-time monitoring of computer stations in university labs.",
    argus_metric1_val: "+60%",
    argus_metric1_lbl: "Operational efficiency",
    argus_metric2_val: "100%",
    argus_metric2_lbl: "Inventory control",

    // Project 2
    admissions_title: "Automated University Admissions System",
    admissions_desc: "High-speed dynamic portal designed for applicant management, document validation, and admissions workflow automation.",
    admissions_metric1_val: "+80%",
    admissions_metric1_lbl: "Processing speed",
    admissions_metric2_val: "10k+",
    admissions_metric2_lbl: "Processed applicants",

    // About Section
    about_label: "MY STORY",
    about_title: "About",
    about_p1: "Systems Engineer and Full-Stack Developer with experience building scalable solutions, from laboratory management platforms to high-traffic university admissions systems.",
    about_p2: "My process is deeply analytical. I want to understand exactly why users and businesses need a solution before writing the first line of code.",
    about_p3: "I own the full development scope, from the database and API to the final interface. I enjoy working in teams where architectural decisions get debated properly and built with technical excellence.",
    about_cv: "VIEW CV",
    about_exp_title: "EXPERIENCE",
    about_exp1_company: "Independent Developer",
    about_exp1_role: "Full-Stack Engineer",
    about_exp1_date: "2022 - Present",
    about_exp2_company: "UDO (Universidad de Oriente)",
    about_exp2_role: "Systems Developer",
    about_exp2_date: "2020 - 2022",
    about_exp3_company: "Digital Agency",
    about_exp3_role: "Frontend Developer",
    about_exp3_date: "2018 - 2020",
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
