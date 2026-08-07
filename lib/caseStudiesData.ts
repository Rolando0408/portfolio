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
      title: "Transformando la gestión de laboratorios en un sistema de monitoreo en tiempo real",
      subtitle: "Plataforma integral para el control de inventario, mantenimiento y diagnóstico en tiempo real de estaciones de cómputo universitarias.",
      role: "Full-Stack Lead Architect",
      timeline: "2024 - 2025",
      client: "UDO (Universidad de Oriente)",
      heroImage: "/argus.png",
      bgGradient: "from-emerald-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["FASTAPI", "REACT", "POSTGRESQL", "DOCKER", "WEBSOCKETS"],
      metrics: [
        { value: "+60%", label: "Eficiencia operativa" },
        { value: "100%", label: "Control de inventario" },
        { value: "< 2s", label: "Latencia de telemetría" },
      ],
      overview:
        "ARGUS nació para resolver la falta de visibilidad en el estado físico y lógico de más de 200 computadoras repartidas en múltiples laboratorios universitarios. El resultado fue una arquitectura distribuida de baja latencia que automatiza reportes y alertas tempranas.",
      sections: [
        {
          id: "problem",
          title: "¿Qué impedía la gestión eficiente del equipo de cómputo?",
          paragraphs: [
            "Anteriormente, el personal administrativo dependía de revisiones manuales en papel e informes semanales desacoplados. Esto resultaba en equipos fuera de servicio durante días sin diagnóstico previo.",
            "Identificamos que más del 40% del tiempo de soporte se gastaba clasificando la gravedad de fallas reportadas por usuarios en lugar de resolverlas directamente.",
          ],
          highlightBox: {
            title: "Diagnóstico manual vs. Automatizado",
            text: "Reducción del tiempo de detección de fallas críticas de 48 horas a menos de 5 segundos gracias a agentes ligeros en cada estación.",
          },
        },
        {
          id: "solution",
          title: "Por qué eliminamos los reportes estáticos y creamos un motor de eventos",
          paragraphs: [
            "En lugar de obligar al usuario a llenar formularios detallados, diseñamos un servicio en segundo plano (daemon) que envía pulsos de estado del hardware y software directamente al servidor central.",
            "Esta decisión redujo el margen de error humano a cero y permitió predecir fallas de componentes (como almacenamiento y memoria RAM) antes de que afectaran las sesiones de clase.",
          ],
          insights: [
            {
              number: "01",
              title: "Telemetría en segundo plano",
              description: "Monitoreo silencioso que no interfiere con el uso académico de las estaciones.",
            },
            {
              number: "02",
              title: "Panel centralizado",
              description: "Visualización gráfica interactiva del mapa de cada laboratorio en tiempo real.",
            },
            {
              number: "03",
              title: "Alertas predictivas",
              description: "Notificaciones automáticas basadas en umbrales de temperatura y rendimiento.",
            },
          ],
        },
        {
          id: "architecture",
          title: "Arquitectura y diseño de interfaz centrados en el operador",
          subtitle: "La propuesta de valor principal del sistema",
          paragraphs: [
            "Diseñamos un panel de control con soporte para modo oscuro de alto contraste y mapeo visual exacto de las mesas del laboratorio. Cada estación se representa con un indicador de estado dinámico.",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
        },
        {
          id: "impact",
          title: "Impacto y escalabilidad en producción",
          paragraphs: [
            "El sistema ha gestionado de forma ininterrumpida el inventario completo, logrando una tasa del 100% de trazabilidad de periféricos y reduciendo drásticamente las pérdidas por mantenimiento reactivo.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
        },
      ],
    },
    admissions: {
      id: "admissions",
      title: "Automatización de alto tráfico para admisiones universitarias masivas",
      subtitle: "Portal dinámico de alta velocidad para la gestión de miles de aspirantes simultáneos, validación de documentos y automatización de procesos.",
      role: "Lead Full-Stack Developer",
      timeline: "2024 - 2025",
      client: "UDO (Universidad de Oriente)",
      heroImage: "/admissions.png",
      bgGradient: "from-blue-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE", "EDGE FUNCTIONS"],
      metrics: [
        { value: "+80%", label: "Agilidad en trámites" },
        { value: "10k+", label: "Aspirantes procesados" },
        { value: "99.9%", label: "Uptime en picos de tráfico" },
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
      title: "Transforming Computer Lab Management into a Real-Time Operations System",
      subtitle: "Comprehensive platform for inventory control, maintenance, and real-time monitoring of university computer stations.",
      role: "Full-Stack Lead Architect",
      timeline: "2024 - 2025",
      client: "UDO (Universidad de Oriente)",
      heroImage: "/argus.png",
      bgGradient: "from-emerald-950/40 via-zinc-900/60 to-zinc-950",
      tags: ["FASTAPI", "REACT", "POSTGRESQL", "DOCKER", "WEBSOCKETS"],
      metrics: [
        { value: "+60%", label: "Operational Efficiency" },
        { value: "100%", label: "Inventory Control" },
        { value: "< 2s", label: "Telemetry Latency" },
      ],
      overview:
        "ARGUS was created to solve the lack of visibility into the physical and logical status of over 200 computers spread across multiple university laboratories. The result was a low-latency distributed architecture automating early alerts and reports.",
      sections: [
        {
          id: "problem",
          title: "What prevented efficient management of computer stations?",
          paragraphs: [
            "Previously, administrative staff relied on manual paper inspections and decoupled weekly reports. This resulted in equipment staying out of service for days without prior diagnostics.",
            "We identified that over 40% of support time was spent triaging issue severity reported by users instead of directly resolving them.",
          ],
          highlightBox: {
            title: "Manual vs. Automated Diagnostics",
            text: "Reduced critical failure detection time from 48 hours to under 5 seconds thanks to lightweight background daemons on each machine.",
          },
        },
        {
          id: "solution",
          title: "Why we dropped static reports and built an event-driven engine",
          paragraphs: [
            "Instead of forcing users to fill out detailed forms, we designed a background daemon that sends hardware and software health pulses directly to the central server.",
            "This decision eliminated human error and enabled predicting component failures (such as storage disks and RAM) before they impacted classroom sessions.",
          ],
          insights: [
            {
              number: "01",
              title: "Background Telemetry",
              description: "Silent monitoring that never interferes with academic work.",
            },
            {
              number: "02",
              title: "Centralized Dashboard",
              description: "Interactive visual mapping of every lab workstation in real time.",
            },
            {
              number: "03",
              title: "Predictive Alerts",
              description: "Automatic notifications based on temperature and performance thresholds.",
            },
          ],
        },
        {
          id: "architecture",
          title: "Operator-centric UI design and architecture",
          subtitle: "The core value proposition of the system",
          paragraphs: [
            "We built a high-contrast dark mode control panel with exact visual layout mapping of lab desks. Each workstation is represented by a dynamic status indicator.",
          ],
          imagePlaceholderCount: 4,
          imageGridCols: 2,
        },
        {
          id: "impact",
          title: "Impact and production scalability",
          paragraphs: [
            "The system has seamlessly managed the entire inventory, achieving 100% peripheral traceability and dramatically reducing reactive maintenance costs.",
          ],
          imagePlaceholderCount: 3,
          imageGridCols: 3,
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
