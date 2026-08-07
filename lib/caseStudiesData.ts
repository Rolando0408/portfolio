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
      title: "Sistema de Gestión y Telemetría de Laboratorios UNIMAR",
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
      title: "Automatización de alto tráfico para admisiones universitarias masivas",
      subtitle: "Portal dinámico de alta velocidad para la gestión de miles de aspirantes simultáneos, validación de documentos y automatización de procesos.",
      role: "Lead Full-Stack Developer",
      timeline: "Ene 2026 – Abr 2026",
      client: "Colegio Guayamurí",
      heroImage: "/admissions.png",
      bgGradient: "from-blue-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["REACT", "VITE", "TAILWIND CSS", "FASTAPI", "DOCKER"],
      metrics: [
        { value: "+33%", label: "Crecimiento de capacidad" },
        { value: "200+", label: "Solicitudes en 2 meses" },
        { value: "100%", label: "Estabilidad operativa" },
      ],
      overview:
        "Los procesos de inscripción tradicionales colapsaban ante picos de concurrencia de miles de estudiantes tratando de cargar requisitos al mismo tiempo. Diseñamos un portal resiliente basado en Next.js y Serverless Edge Functions.",
      sections: [
        {
          id: "problem",
          title: "¿Por qué colapsaban las convocatorias anteriores?",
          paragraphs: [
            "El cuello de botella principal radicaba en la carga sincrónica de archivos pesados de soporte y la consulta de bases de datos relacionales sin capas de caché.",
            "Durante las primeras 2 horas de apertura, el sistema procesaba más de 5,000 peticiones simultáneas, causando caídas de servidor y pérdida de solicitudes.",
          ],
          highlightBox: {
            title: "Optimización de Edge & Carga Asíncrona",
            text: "Separamos la carga de adjuntos directamente a almacenamiento distribuido mediante URLs firmadas, liberando la carga directa sobre el servidor principal.",
          },
        },
        {
          id: "solution",
          title: "Rediseño enfocado en velocidad y transparencia para el aspirante",
          paragraphs: [
            "Implementamos un flujo guiado paso a paso con guardado automático de progreso local y feedback visual instantáneo en cada documento validado.",
            "El panel administrativo permite a los revisores validar requisitos a velocidad récord mediante atajos de teclado y vista previa integrada de PDFs.",
          ],
          insights: [
            {
              number: "01",
              title: "Validación Instantánea",
              description: "Revisión pre-envío del formato y tamaño de documentos antes de iniciar la subida.",
            },
            {
              number: "02",
              title: "Cola de Procesamiento",
              description: "Gestión asíncrona de asignación de cupos y verificación de identidad.",
            },
            {
              number: "03",
              title: "Notificaciones Multicanal",
              description: "Actualizaciones de estado en tiempo real para los postulantes vía correo e interfaz.",
            },
          ],
        },
        {
          id: "design-system",
          title: "Diseño de la experiencia y flujo de usuario",
          subtitle: "Minimalismo responsivo pensado para uso móvil intensivo",
          paragraphs: [
            "Más del 70% de los aspirantes accedían desde smartphones. La interfaz fue creada desde cero bajo el enfoque Mobile-First, priorizando tipografías legibles y controles táctiles amplios.",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
        },
        {
          id: "results",
          title: "Resultados finales del despliegue",
          paragraphs: [
            "Se logró procesar con éxito a más de 10,000 postulantes en tiempo récord, reduciendo el periodo total de admisión de 3 semanas a solo 4 días hábiles.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
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
      title: "High-Traffic Automation for University Admissions",
      subtitle: "High-speed dynamic portal designed for applicant management, document validation, and admissions workflow automation.",
      role: "Lead Full-Stack Developer",
      timeline: "2024 - 2025",
      client: "UDO (Universidad de Oriente)",
      heroImage: "/admissions.png",
      bgGradient: "from-blue-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE", "EDGE FUNCTIONS"],
      metrics: [
        { value: "+80%", label: "Processing Speed" },
        { value: "10k+", label: "Processed Applicants" },
        { value: "99.9%", label: "Uptime During Spikes" },
      ],
      overview:
        "Traditional admission registration crashed under concurrency spikes of thousands of students trying to upload documents simultaneously. We designed a resilient portal powered by Next.js and Serverless Edge Functions.",
      sections: [
        {
          id: "problem",
          title: "Why did previous admission rounds crash?",
          paragraphs: [
            "The main bottleneck was synchronous heavy file uploads and querying un-cached relational database queries.",
            "During the first 2 hours of opening, the system handled over 5,000 concurrent requests, resulting in server downtime and lost submissions.",
          ],
          highlightBox: {
            title: "Edge Optimization & Async Storage",
            text: "We offloaded file attachments directly to distributed storage via signed URLs, freeing the main app server from heavy payload processing.",
          },
        },
        {
          id: "solution",
          title: "Redesign focused on applicant speed and transparency",
          paragraphs: [
            "We implemented a step-by-step guided flow with automatic local progress saving and instant visual feedback for every validated document.",
            "The admin portal allowed reviewers to process submissions at record speeds using keyboard shortcuts and integrated PDF previews.",
          ],
          insights: [
            {
              number: "01",
              title: "Instant Pre-Validation",
              description: "File type and size checks before upload begins.",
            },
            {
              number: "02",
              title: "Processing Queue",
              description: "Asynchronous identity verification and slot allocation.",
            },
            {
              number: "03",
              title: "Multi-Channel Notifications",
              description: "Real-time status updates for applicants via email and dashboard.",
            },
          ],
        },
        {
          id: "design-system",
          title: "User Experience and Flow Design",
          subtitle: "Responsive minimalism crafted for mobile-first access",
          paragraphs: [
            "Over 70% of applicants accessed the system from smartphones. The interface was engineered Mobile-First, prioritizing legible typography and spacious touch targets.",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
        },
        {
          id: "results",
          title: "Final Deployment Results",
          paragraphs: [
            "Successfully processed over 10,000 applicants in record time, reducing the total admissions cycle from 3 weeks down to 4 business days.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
        },
      ],
    },
  },
};
