# Documento de Requisitos del Producto (PRD) - Portafolio Personal

## 1. Visión General y Objetivo
Crear un portafolio web personal minimalista, enfocado en la tipografía y de temática oscura (Dark Mode), diseñado para exhibir perfiles de ingeniería de software. El objetivo principal es estructurar la información en formato de "Casos de Estudio" (Case Studies), permitiendo demostrar no solo el resultado final, sino la capacidad de resolución de problemas, el diseño de arquitecturas escalables y el dominio del stack tecnológico.

## 2. Lineamientos de Diseño y Experiencia de Usuario (UX)
*   **Estética:** Dark mode por defecto. Alto contraste entre el fondo oscuro y tipografía clara (blanca/gris claro). Uso de fuentes sans-serif modernas y de gran tamaño para los encabezados.
*   **Interacciones:** 
    *   Animaciones de scroll (aparición gradual de elementos o *fade-in/slide-up*).
    *   Transiciones suaves entre la página principal y el detalle de los proyectos.
    *   Efectos sutiles de *hover* en botones y tarjetas de proyectos.
*   **Estructura Técnica Recomendada (Para el desarrollo del portafolio):** Next.js o React (usando Vite y pnpm), Tailwind CSS para los estilos utilitarios, componentes de shadcn/ui para consistencia, y Framer Motion para las animaciones de scroll.

---

## 3. Arquitectura de la Información (Estructura de la Página)

La página será principalmente una experiencia de una sola página (Single Page Application) con rutas dinámicas para los detalles de cada proyecto.

### Sección 1: Hero (Encabezado Principal)
**Objetivo:** Dar una primera impresión fuerte, directa y profesional.
*   **Estructura de Datos a Mostrar:**
    *   **Nombre:** Rolando Rafael Rivas Marín (Mostrado en tipografía gigante/Display).
    *   **Subtítulo / Rol:** Ingeniero de sistemas | Full-Stack Developer.
    *   **Pitch (Resumen):** "Desarrollo aplicaciones web robustas, enfocándome en arquitecturas escalables y rendimiento."
    *   **Status Badge (Insignia):** Un indicador visual (ej. un punto verde parpadeante) con el texto "Disponible para nuevos proyectos".
    *   **Navegación:** Menú minimalista superior (Work, About, Contact) y enlaces a GitHub/LinkedIn.

### Sección 2: Work (Listado de Proyectos)
**Objetivo:** Mostrar los proyectos de mayor impacto como un catálogo visual.
*   **Diseño de la Información (Por cada tarjeta de proyecto):**
    *   **Imagen Destacada (Thumbnail):** Un mockup limpio (ej. una pantalla de laptop o móvil sobre un fondo de color sólido).
    *   **Etiqueta / Categoría:** (Ej. *Web App, Desktop App, System Architecture*).
    *   **Título del Proyecto:** Un título descriptivo enfocado en el valor (Ej. *Gestor de torneos automatizado*).
    *   **Métricas de Impacto (Opcional pero recomendado):** 1 o 2 datos numéricos destacados (Ej. "+50% rendimiento", "Arquitectura escalable").
    *   **Enlace:** Botón discreto o la tarjeta entera clickeable que lleve al "Case Study".

### Sección 3: About (Sobre Mí)
**Objetivo:** Humanizar el perfil y listar competencias técnicas.
*   **Estructura de Datos a Mostrar:**
    *   **Filosofía de Trabajo:** "Disfruto el paso a paso de ir estructurando una solución a medida para un problema real, siendo gratificante el momento en el que se encuentra culminado el objetivo."
    *   **Sección de Skills (Listado estructurado):**
        *   *Frontend:* React, Next.js, Tailwind CSS, shadcn, Vite.
        *   *Backend & APIs:* FastAPI, PHP, Docker, PostgreSQL, Supabase.
        *   *Arquitectura & Testing:* Pytest, Swagger, UML, Mermaid, PlantUML, D2.

### Sección 4: Case Study (Plantilla dinámica para proyectos)
**Objetivo:** Una vista detallada cuando el usuario hace clic en un proyecto de la sección "Work". Debe contar la historia del desarrollo.
*   **Diseño de la Información (Flujo vertical):**
    1.  **Cabecera del Proyecto:** Título gigante, año, rol desempeñado y stack tecnológico específico utilizado.
    2.  **El Contexto / El Problema:** Texto descriptivo sobre qué necesidad real se estaba cubriendo.
    3.  **El Enfoque (Arquitectura):** Espacio ideal para insertar diagramas de casos de uso o de componentes generados (ej. diagramas de PlantUML o D2).
    4.  **La Solución / Desarrollo:** Explicación del paso a paso de la estructuración.
    5.  **Galería Visual:** Espacios para múltiples capturas de pantalla, fragmentos de código limpios (con sintaxis resaltada) o interfaces de usuario.
    6.  **Resultados / Conclusión:** El impacto final o lo aprendido al culminar el objetivo.

### Sección 5: Contacto (Footer)
**Objetivo:** Facilitar la comunicación directa.
*   **Estructura de Datos a Mostrar:**
    *   **Call to Action (CTA) Gigante:** "Say hi! Let's talk" (O su equivalente en español "¡Hablemos!").
    *   **Correo electrónico:** Enlace directo (mailto).
    *   **Redes:** Enlaces a repositorios de código o perfiles profesionales.

---

## 4. Próximos Pasos para la Ejecución
1.  **Inicializar el repositorio:** Levantar el entorno base (Next.js/React + Tailwind).
2.  **Desarrollar el Layout Principal:** Construir la estructura estática del Home (Hero, Work grid vacía, About, Contact).
3.  **Implementar Animaciones:** Integrar Framer Motion para asegurar que la información aparezca con los efectos de scroll deseados.
4.  **Poblar los Datos:** Una vez que la estructura (este PRD) esté programada, se inyectarán los textos finales, las imágenes y se seleccionarán los proyectos estrella para llenar los "Case Studies".
