---
name: Portafolio Rolando Rivas
description: Full-Stack Developer Portfolio
colors:
  primary: "#172DE2"
  neutral-bg: "#09090b"
  neutral-fg: "#fafafa"
typography:
  display:
    fontFamily: "var(--font-outfit), ui-sans-serif, system-ui, sans-serif"
    letterSpacing: "tracking-tight"
  body:
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif"
rounded:
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
  full: "9999px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  card-container:
    backgroundColor: "color-mix(in srgb, {colors.neutral-fg} 2%, transparent)"
    rounded: "{rounded.2xl}"
    padding: "1.5rem"
  button-outline:
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
---

# Design System: Portafolio Rolando Rivas

## Overview

**Creative North Star: "El Canvas Cyber-Técnico"**

Minimalismo crudo, tipografía contundente y fluidez absoluta. Todo está en reposo hasta que la interacción despierta la interfaz con transiciones hiper-pulidas y brillos de acento. El sistema actúa como un lienzo oscuro y altamente optimizado que permite que las proezas de ingeniería (animaciones avanzadas, cursores dinámicos, scroll suave) hablen por sí solas. 

**Key Characteristics:**
- **Oscuridad Estructural:** Uso casi absoluto del `Zinc Abisal` como fondo, permitiendo que los elementos interactivos resalten.
- **Interacción como Recompensa:** Los elementos son planos y tenues por defecto, pero revelan bordes luminosos y sombras al hacer hover.
- **Micro-interacciones Fluidas:** Nada es estático; cada botón, tarjeta o enlace tiene una transición cuidadosamente orquestada.

## Colors

Una paleta oscura, contenida y de alto contraste, donde el color primario se reserva estrictamente para la interacción y el énfasis.

### Primary
- **Cobalto Eléctrico** (#172DE2): Utilizado como el acento luminoso (glow, bordes activos, texto destacado) para guiar la atención y denotar interactividad. 

### Neutral
- **Zinc Abisal** (#09090b): El fondo absoluto de la interfaz y lienzos primarios.
- **Blanco Estelar** (#fafafa): Texto principal, títulos e iconografía. Se utiliza frecuentemente con opacidades (ej: `foreground/70`, `foreground/15`) para generar jerarquía sin añadir nuevos colores.

**The One Voice Rule.** El Cobalto Eléctrico se usa en ≤10% de cualquier vista. Su rareza es lo que le otorga el poder de guiar el ojo humano de manera efectiva.

## Typography

**Display Font:** Outfit (con fallback a system-ui)
**Body Font:** Inter (con fallback a system-ui)

**Character:** Un equilibrio entre la geometría limpia de Outfit para titulares contundentes, y la extrema legibilidad pragmática de Inter para el contenido técnico extenso.

### Hierarchy
- **Display**: Titulares principales (`h1`, `h2`), con tracking ajustado (`tracking-tight`) para dar sensación editorial y compacta.
- **Body**: Texto descriptivo, párrafos de casos de estudio.
- **Label**: Botones, etiquetas de tecnologías (`text-xs font-mono tracking-wider uppercase`). Aporta el toque "Cyber-Técnico".

**The Technical Monospace Rule.** Los metadatos, tags y elementos de interfaz de usuario de bajo nivel utilizan fuentes monoespaciadas y en mayúsculas para reforzar el aura de "herramienta de desarrollador".

## Layout

Contenedores anchos (`max-w-7xl`) con mucho margen negativo para dar respiro. Las cuadrículas (grids) asimétricas se utilizan para mostrar los casos de estudio. El layout es completamente fluido y se apoya fuertemente en flexbox para la alineación perfecta de componentes internos.

## Elevation & Depth

**The Flat-By-Default Rule.** Superficies planas en reposo. Los elementos descansan con bordes sutiles de baja opacidad (`foreground/15`), pero al interactuar se elevan utilizando sombras fuertes (`shadow-2xl`), glows de acento y bordes marcados.

### Shadow Vocabulary
- **Ambient Glow:** Sombras coloreadas (`shadow-emerald-500/10` o el color de acento) que aparecen detrás de las tarjetas al interactuar.
- **Hover Lift:** `shadow-xl` o `shadow-2xl` combinado con una sutil traslación hacia arriba (`-translate-y-1.5` o `-translate-y-2`) para dar sensación de peso físico.

## Shapes

Las formas predominantes son extremadamente redondeadas en elementos de interacción directa (pastillas/botones con `rounded-full`), contrastadas con contenedores de información de radios amplios pero rectangulares (`rounded-2xl` y `rounded-3xl`). 

## Components

### Botones y Etiquetas (Pills)
- **Shape:** `rounded-full` (9999px).
- **Primary:** Contornos delgados con texto monoespaciado (`border-[var(--accent)] text-[var(--accent)]`).
- **Hover:** Fondo sólido del color de acento, texto en blanco, transición de colores.

### Cards / Contenedores de Casos de Estudio
- **Corner Style:** `rounded-2xl` a `rounded-[2.5rem]` dependiendo del tamaño en pantalla.
- **Background:** `bg-foreground/[0.02]` a `bg-foreground/5` (Zinc translúcido).
- **Border:** `border-foreground/10` a `border-foreground/15`. Al hacer hover, se ilumina a `border-foreground/30` o `border-[var(--accent)]`.

## Do's and Don'ts

### Do:
- **Do** usar opacidades sobre el `Blanco Estelar` (`foreground/70`, `foreground/40`) para crear jerarquía textual en lugar de colores grises planos.
- **Do** incluir transiciones de larga duración (`duration-300`, `duration-500`, `duration-700`) en transformaciones de tarjetas para lograr una sensación premium.
- **Do** mantener el fondo de la página limpio (`bg-[var(--background)]`) usando orbes/gradientes desenfocados como textura sutil.

### Don't:
- **Don't** aplicar el `Cobalto Eléctrico` a fondos grandes o contenedores enteros; debe reservarse para contornos, texto e iconos.
- **Don't** usar sombras duras o sin desenfoque amplio; todas las sombras deben sentirse como fuentes de luz difusas (`shadow-2xl`).
