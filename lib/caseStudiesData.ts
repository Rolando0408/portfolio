export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyInsight {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  metrics?: CaseStudyMetric[];
  insights?: CaseStudyInsight[];
  imagePlaceholderCount?: number;
  imageGridCols?: number;
  images?: string[];
  highlightBox?: {
    title: string;
    text: string;
  };
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  client: string;
  heroImage: string;
  bgGradient: string;
  tags: string[];
  metrics: CaseStudyMetric[];
  overview: string;
  sections: CaseStudySection[];
}

export const caseStudiesData: Record<"es" | "en", Record<string, CaseStudyData>> = {
  es: {
    argus: {
      id: "argus",
      title: "Sistema de Gestión y Telemetría de Laboratorios UNIMAR (ARGUS)",
      subtitle: "Plataforma centralizada de control de acceso, monitoreo de sesiones y auditoría automática de hardware/software para entornos académicos.",
      role: "Desarrollador Full-Stack / Creador (Tesis de Grado)",
      timeline: "Abril 2026 – Presente",
      client: "Universidad de Margarita (UNIMAR)",
      heroImage: "/Portada-Argus.png",
      bgGradient: "from-emerald-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["REACT", "TYPESCRIPT", "ELECTRON", "TAILWIND CSS", "SHADCN/UI", "FASTAPI", "POSTGRESQL", "DOCKER"],
      metrics: [
        { value: "100%", label: "Reducción de accesos no autorizados" },
        { value: "Automático", label: "Levantamiento de inventario" },
        { value: "< 5%", label: "Consumo de CPU/RAM en background" },
      ],
      overview:
        "El sistema fue diseñado para centralizar y automatizar el control de los recursos informáticos en los laboratorios de la UNIMAR. Su propósito principal es mitigar el uso no autorizado de los equipos mediante una estricta política de 'bloqueo total' que se libera únicamente cuando el estudiante se autentica. Simultáneamente, el sistema funciona como un agente silencioso que recaba telemetría, realiza auditoría de componentes en tiempo real y facilita la gestión remota masiva para los administradores.",
      sections: [
        {
          id: "problem",
          title: "¿Cómo asegurar y auditar los recursos informáticos públicos sin interrumpir el aprendizaje?",
          paragraphs: [
            "En los laboratorios académicos, los equipos de cómputo están expuestos a un uso constante por múltiples usuarios. Antes del sistema, era muy difícil rastrear quién utilizaba cada máquina en un momento dado, o qué problemas técnicos y modificaciones (robo de hardware o software no autorizado) ocurrían.",
            "Esto derivaba en una nula trazabilidad ante incidentes, mantenimientos reactivos tardíos y un alto riesgo de uso indebido de los recursos de la institución.",
          ],
          highlightBox: {
            title: "El Reto Principal",
            text: "Lograr vincular cada sesión física a un estudiante verificado, manteniendo al agente corriendo en segundo plano sin que perjudicara el rendimiento de los programas que necesitan los estudiantes.",
          },
        },
        {
          id: "solution",
          title: "Agente nativo robusto con Electron y telemetría asíncrona mediante FastAPI",
          paragraphs: [
            "Se desarrolló una arquitectura cliente-servidor. En la capa de cliente, una aplicación de escritorio nativa asume el control del entorno de Windows impidiendo el uso de la máquina hasta lograr una autenticación exitosa contra el servidor.",
            "En la capa de backend, una API RESTful asíncrona de alto rendimiento procesa eficientemente los eventos, las sesiones y los snapshots de inventario emitidos por múltiples terminales en simultáneo.",
          ],
          insights: [
            {
              number: "01",
              title: "Bloqueo a Nivel OS (Kiosk Mode)",
              description: "El cliente de Electron restringe atajos críticos del sistema (Alt+Tab, Alt+F4, Ctrl+Shift+Esc), forzando un registro de sesión institucional inviolable antes de liberar la PC.",
            },
            {
              number: "02",
              title: "Auto-Auditoría de Shadow IT",
              description: "Un worker en segundo plano detecta automáticamente los seriales de componentes (CPU, RAM, Almacenamiento) y el software instalado, sincronizándolos dinámicamente.",
            },
            {
              number: "03",
              title: "API Asíncrona de Alta Capacidad",
              description: "El uso de FastAPI (Python) permite gestionar la telemetría simultánea de todos los equipos del laboratorio, habilitando acciones remotas como apagados masivos sin cuellos de botella.",
            },
          ],
          imagePlaceholderCount: 1,
          imageGridCols: 1,
          images: ["/Dashboard.png"],
        },
        {
          id: "ux-ui",
          title: "Minimalismo no intrusivo: Seguridad que no estorba al estudiante",
          subtitle: "Enfoque de diseño centrado en cero fricción operativa",
          paragraphs: [
            "La interfaz de React se empaquetó para actuar a pantalla completa durante la fase de validación (Modo Candado). Tras un login exitoso, transiciona fluidamente a un widget lateral derecho (tipo PC Manager) con una zona de arrastre personalizada y se ancla al System Tray.",
            "Este enfoque de diseño le devuelve el control del sistema operativo al usuario con cero fricción, proporcionándole accesos rápidos para reportar incidencias de hardware/software sin interrumpir su flujo de estudio.",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
          images: ["/Login.png", "/Widget.png", "/Auditoria.png", "/Reportes.png"],
        },
        {
          id: "impact",
          title: "Trazabilidad del 100% y gestión remota centralizada en tiempo real",
          paragraphs: [
            "Con la implementación de este proyecto, la institución académica transforma un control manual e ineficiente de activos en un ecosistema auditable en tiempo real.",
            "Los administradores ahora pueden realizar un apagado programado del laboratorio con un solo clic, identificar con exactitud qué estudiante estaba operando un equipo en caso de pérdida de hardware, y recibir reportes centralizados, garantizando la preservación del parque tecnológico universitario.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
          images: ["/Detalles.png", "/Componentes.png", "/Alertas.png"],
        },
      ],
    },
    admissions: {
      id: "admissions",
      title: "Admisiones Guayamurí",
      subtitle: "Centralización y automatización del proceso de admisiones escolares mediante una arquitectura API-first.",
      role: "Desarrollador Full-Stack FrontEnd",
      timeline: "2025 - 2026",
      client: "Colegio Guayamurí",
      heroImage: "/DashboardG.png",
      bgGradient: "from-blue-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["REACT", "VITE", "TAILWIND CSS", "SHADCN/UI", "FASTAPI", "PYTHON", "POSTGRESQL", "AWS S3", "DOCKER"],
      metrics: [
        { value: "100%", label: "Eliminación de formularios en papel" },
        { value: "0", label: "Contraseñas requeridas para padres (Magic Links)" },
        { value: "4", label: "Niveles estrictos de validación automatizada (RBAC)" },
      ],
      overview:
        "El Colegio Guayamurí necesitaba digitalizar su complejo proceso de admisiones, el cual dependía de hojas de cálculo, correos y documentos físicos. Desarrollamos una plataforma web unificada compuesta por un portal público sin fricción para los padres y un robusto dashboard administrativo. Esta solución automatiza la recepción de solicitudes, revoluciona el agendamiento de entrevistas y aplica estrictas reglas de negocio, transformando un proceso propenso a errores en un embudo auditable, eficiente y transparente.",
      sections: [
        {
          id: "problem",
          title: "¿Por qué colapsaba el proceso manual de admisiones?",
          paragraphs: [
            "El flujo original de admisiones era manual, fragmentado y altamente dependiente del papel. Los padres debían entregar expedientes físicos o enviar hilos interminables de correos con adjuntos, lo que obligaba al personal administrativo a transcribir datos manualmente. Esto generaba pérdida de información, errores humanos y la imposibilidad de tener una base de datos centralizada.",
            "Además, coordinar entrevistas entre familias, coordinadores, psicólogos, el director y la junta directiva resultaba ser una pesadilla logística que dejaba a los padres en un \"agujero negro\" de comunicación sin saber el estatus de sus hijos.",
          ],
          highlightBox: {
            title: "El Cuello de Botella",
            text: "La falta de un sistema integral impedía que la junta directiva (Promotora) recibiera expedientes filtrados y completos, haciendo ineficiente la toma de decisiones finales.",
          },
        },
        {
          id: "solution",
          title: "Arquitectura automatizada como \"Gatekeeper\" institucional",
          paragraphs: [
            "Para resolver este caos operativo, diseñamos un monorepo con dos micro-frontends en React (Portal Público y Admin Dashboard) impulsados por una API en FastAPI.",
            "Nuestra filosofía fue delegar el cumplimiento de las reglas institucionales a la base de datos, creando un motor de estado estricto que impide que una solicitud avance de nivel sin las autorizaciones y entrevistas previas completadas y justificadas.",
          ],
          insights: [
            {
              number: "01",
              title: "Portal \"Passwordless\"",
              description: "Implementamos un flujo sin inicio de sesión basado en Magic Links JWT para los padres. Esto eliminó la fatiga de contraseñas y los tickets de soporte, permitiéndoles subir requisitos directamente (almacenados en AWS S3) de forma segura.",
            },
            {
              number: "02",
              title: "Enrutamiento Inteligente y RBAC",
              description: "Al verificar una solicitud, el sistema la asigna automáticamente al coordinador del nivel correspondiente (Preescolar, Básica, etc.). Un estricto control de acceso asegura la privacidad de los datos y mantiene limpios los espacios de trabajo de cada rol.",
            },
            {
              number: "03",
              title: "Motor de Entrevistas Autónomo",
              description: "Desacoplamos las entrevistas de la solicitud general. El sistema propone fechas (presenciales o virtuales), gestiona zonas horarias automáticamente y permite a los padres confirmar o solicitar reprogramación a través de enlaces seguros, eliminando por completo las cadenas de correos.",
            },
          ],
        },
        {
          id: "ux-ui",
          title: "Diseño enfocado en la observabilidad y eficiencia operativa",
          subtitle: "Minimalismo responsivo y feedback inmediato",
          paragraphs: [
            "La interfaz, construida con Shadcn UI y Tailwind, está diseñada para darle al personal una vista clara de \"quién me está esperando\". El dashboard combina tarjetas KPI, gráficos de distribución y un registro de actividad en tiempo real.",
            "Estandarizamos las listas de datos con esqueletos de carga (skeletons), feedback visual inmediato para acciones en segundo plano y protección contra colisiones de horarios familiares, asegurando una navegación intuitiva e inclusiva (accesibilidad y soporte teclado-lector de pantalla).",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
          images: ["/Form.png", "/DashboardG.png", "/DetallesS.png", "/Entrevista.png"],
        },
        {
          id: "impact",
          title: "De la incertidumbre del papel a una máquina de estados auditable",
          paragraphs: [
            "La implementación del sistema transformó radicalmente el flujo de trabajo del Colegio Guayamurí. El personal ahora opera bajo un marco estructurado que previene saltos en el proceso, mientras que las familias disfrutan de comunicación instantánea y transparente en cada hito.",
            "La automatización del agendamiento y la digitalización de los expedientes han ahorrado incontables horas administrativas, garantizando además un rastro de auditoría inmutable (justificaciones obligatorias) en cada decisión crítica.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
          images: ["/Audit.png", "/Filtro.png", "/Estados.png"],
        },
      ],
    },
  },
  en: {
    argus: {
      id: "argus",
      title: "UNIMAR Computer Lab Management & Telemetry System",
      subtitle: "Centralized platform for access control, session monitoring, and automated hardware/software auditing for academic environments.",
      role: "Full-Stack Developer / Creator (Bachelor Thesis)",
      timeline: "April 2026 – Present",
      client: "Universidad de Margarita (UNIMAR)",
      heroImage: "/Portada-Argus.png",
      bgGradient: "from-emerald-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["REACT", "TYPESCRIPT", "ELECTRON", "TAILWIND CSS", "SHADCN/UI", "FASTAPI", "POSTGRESQL", "DOCKER"],
      metrics: [
        { value: "100%", label: "Unauthorized access reduction" },
        { value: "Automatic", label: "Inventory discovery" },
        { value: "< 5%", label: "Background CPU/RAM usage" },
      ],
      overview:
        "The system was engineered to centralize and automate IT resource management across UNIMAR computer laboratories. Its core objective is to prevent unauthorized workstation usage through a strict 'total lock' policy that unlocks only upon student authentication. Concurrently, it operates as a silent background agent gathering real-time telemetry, component audits, and remote administrative management.",
      sections: [
        {
          id: "problem",
          title: "How to secure and audit public computer assets without disrupting learning?",
          paragraphs: [
            "In academic laboratories, workstations face constant use from hundreds of students. Prior to this platform, tracking who used a machine at any given time or identifying technical incidents and unauthorized hardware/software modifications was nearly impossible.",
            "This caused zero traceability during incidents, delayed reactive maintenance, and high security risks regarding institutional hardware assets.",
          ],
          highlightBox: {
            title: "The Main Challenge",
            text: "Bind every physical workstation session to a verified student while maintaining a background agent that does not degrade performance for heavy software like AutoCAD.",
          },
        },
        {
          id: "solution",
          title: "Robust native Electron agent with asynchronous FastAPI telemetry",
          paragraphs: [
            "A client-server architecture was developed. On the client side, a native desktop application assumes control of the Windows environment, locking the OS until successful authentication against the server.",
            "On the backend layer, a high-performance asynchronous RESTful API efficiently handles concurrent session events, telemetry pulses, and inventory snapshots from multiple terminals.",
          ],
          insights: [
            {
              number: "01",
              title: "OS-Level Lock (Kiosk Mode)",
              description: "The Electron client restricts critical OS shortcuts (Alt+Tab, Alt+F4, Ctrl+Shift+Esc), enforcing institutional login before granting PC access.",
            },
            {
              number: "02",
              title: "Shadow IT Auto-Audit",
              description: "A background worker automatically detects hardware serials (CPU, RAM, Storage) and installed software, dynamically syncing with the database.",
            },
            {
              number: "03",
              title: "High-Capacity Async API",
              description: "FastAPI (Python) enables handling simultaneous lab telemetry and remote administrative actions like bulk shutdowns without network bottlenecks.",
            },
          ],
          imagePlaceholderCount: 1,
          imageGridCols: 1,
          images: ["/Dashboard.png"],
        },
        {
          id: "ux-ui",
          title: "Non-intrusive minimalism: Security that doesn't hinder students",
          subtitle: "Design approach focused on zero friction",
          paragraphs: [
            "The React interface operates fullscreen during validation (Lock Mode). Upon successful login, it smoothly transitions to a compact right-hand widget (PC Manager style) and anchors to the System Tray.",
            "This design returns full OS control to the user with zero friction, providing quick shortcuts to report hardware/software issues without breaking their study flow.",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
          images: ["/Login.png", "/Widget.png", "/Auditoria.png", "/Reportes.png"],
        },
        {
          id: "impact",
          title: "100% Traceability and real-time centralized remote control",
          paragraphs: [
            "By deploying this project, the academic institution transformed inefficient manual asset control into an auditable, real-time ecosystem.",
            "Administrators can now schedule one-click lab shutdowns, pinpoint exact user sessions during hardware incidents, and receive centralized reports, ensuring long-term hardware preservation.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
          images: ["/Detalles.png", "/Componentes.png", "/Alertas.png"],
        },
      ],
    },
    admissions: {
      id: "admissions",
      title: "ARGUS / Admisiones Guayamurí",
      subtitle: "Centralization and automation of the school admissions process through an API-first architecture.",
      role: "FrontEnd Full-Stack Developer",
      timeline: "2023 - 2024",
      client: "Colegio Guayamurí",
      heroImage: "/admissions.png",
      bgGradient: "from-blue-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["REACT", "VITE", "TAILWIND CSS", "SHADCN/UI", "FASTAPI", "PYTHON", "POSTGRESQL", "AWS S3", "DOCKER"],
      metrics: [
        { value: "100%", label: "Elimination of paper forms" },
        { value: "0", label: "Passwords required for parents (Magic Links)" },
        { value: "4", label: "Strict levels of automated validation (RBAC)" },
      ],
      overview:
        "Colegio Guayamurí needed to digitize its complex admissions process, which relied on spreadsheets, emails, and physical documents. We developed a unified web platform consisting of a frictionless public portal for parents and a robust administrative dashboard. This solution automates the reception of applications, revolutionizes interview scheduling, and applies strict business rules, transforming an error-prone process into an auditable, efficient, and transparent funnel.",
      sections: [
        {
          id: "problem",
          title: "Why was the manual admissions process collapsing?",
          paragraphs: [
            "The original admissions workflow was manual, fragmented, and highly dependent on paper. Parents had to submit physical files or send endless email threads with attachments, forcing administrative staff to transcribe data manually. This led to information loss, human errors, and the inability to maintain a centralized database.",
            "Furthermore, coordinating interviews between families, coordinators, psychologists, the principal, and the board of directors proved to be a logistical nightmare, leaving parents in a communication \"black hole\" unaware of their children's status.",
          ],
          highlightBox: {
            title: "The Bottleneck",
            text: "The lack of an integrated system prevented the board of directors from receiving filtered and complete files, making final decision-making highly inefficient.",
          },
        },
        {
          id: "solution",
          title: "Automated architecture as an institutional \"Gatekeeper\"",
          paragraphs: [
            "To resolve this operational chaos, we designed a monorepo featuring two React micro-frontends (Public Portal and Admin Dashboard) powered by a FastAPI backend.",
            "Our philosophy was to delegate institutional rule compliance to the database, creating a strict state engine that prevents any application from advancing without prior completed and justified authorizations and interviews.",
          ],
          insights: [
            {
              number: "01",
              title: "\"Passwordless\" Portal",
              description: "We implemented a login-free flow based on JWT Magic Links for parents. This eliminated password fatigue and support tickets, allowing them to securely upload requirements (stored in AWS S3) directly.",
            },
            {
              number: "02",
              title: "Smart Routing & RBAC",
              description: "Upon verifying an application, the system automatically assigns it to the corresponding level coordinator (Preschool, Elementary, etc.). Strict access control ensures data privacy and keeps workspaces clean for each role.",
            },
            {
              number: "03",
              title: "Autonomous Interview Engine",
              description: "We decoupled interviews from the general application. The system proposes dates (in-person or virtual), manages time zones automatically, and allows parents to confirm or request rescheduling via secure links, entirely eliminating email chains.",
            },
          ],
        },
        {
          id: "ux-ui",
          title: "Design focused on observability and operational efficiency",
          subtitle: "Responsive minimalism and immediate feedback",
          paragraphs: [
            "The interface, built with Shadcn UI and Tailwind, is designed to give staff a clear view of \"who is waiting for me\". The dashboard combines KPI cards, distribution charts, and a real-time activity log.",
            "We standardized data lists using loading skeletons, immediate visual feedback for background actions, and protection against family schedule collisions, ensuring an intuitive and inclusive navigation experience (accessibility and screen-reader support).",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
          images: ["/Form.png", "/Dashboard.png", "/DetallesS.png", "/Entrevista.png"],
        },
        {
          id: "impact",
          title: "From paper uncertainty to an auditable state machine",
          paragraphs: [
            "The implementation of the system radically transformed Colegio Guayamurí's workflow. Staff now operate under a structured framework that prevents process skipping, while families enjoy instant and transparent communication at every milestone.",
            "Scheduling automation and file digitization have saved countless administrative hours, simultaneously guaranteeing an immutable audit trail (mandatory justifications) for every critical decision.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
          images: ["/Audit.png", "/Filtro.png", "/Estados.png"],
        },
      ],
    },
  },
};
