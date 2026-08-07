"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useLenis } from "lenis/react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Navbar() {
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string | number) => {
    // Si la url contiene una almohadilla y estamos en home, o si el target es 0 (top)
    const isHome = window.location.pathname === "/";
    if (isHome) {
      e.preventDefault();
      
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        // Fallback en caso de que Lenis falle
        document.querySelector(target as string)?.scrollIntoView({ behavior: "smooth" });
      }

      // Accesibilidad: transferir el foco a la sección destino para navegación por teclado
      if (typeof target === 'string') {
        const targetElement = document.querySelector(target) as HTMLElement | null;
        if (targetElement) {
          // tabIndex=-1 permite recibir foco programáticamente sin afectar el orden natural del tab
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    }
  };

  // 100% continuous scroll-driven interpolation using matching units (px to px)
  // Making the transition slower by stretching it over 250px of scroll instead of 100px.
  const maxWidth = useTransform(scrollY, [0, 250], ["2000px", "800px"]);
  const paddingTop = useTransform(scrollY, [0, 250], ["20px", "12px"]);
  const paddingBottom = useTransform(scrollY, [0, 250], ["20px", "12px"]);
  const paddingLeft = useTransform(scrollY, [0, 250], ["24px", "24px"]);
  const paddingRight = useTransform(scrollY, [0, 250], ["24px", "24px"]);
  const borderRadius = useTransform(scrollY, [0, 250], ["0px", "9999px"]);
  
  // En lugar de marginTop, usamos 'y' para mover la navbar hacia abajo suavemente sin romper el layout
  const y = useTransform(scrollY, [0, 250], [0, 16]);
  
  // Animate the opacity of the glassmorphism background instead of its colors.
  const bgOpacity = useTransform(scrollY, [0, 250], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none pt-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.nav 
        style={{
          maxWidth,
          y,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          borderRadius,
        }}
        className="pointer-events-auto relative flex items-center justify-between w-full mx-auto"
      >
        {/* Animated Glassmorphism Background Layer */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-background/80 dark:bg-background/70 backdrop-blur-xl border border-foreground/10 shadow-lg dark:shadow-2xl/40 rounded-[inherit] pointer-events-none"
        />

        {/* Content Layer - Left */}
        <div className="relative z-10 flex items-center gap-3">
          <Link href="/" onClick={(e) => handleScrollTo(e, 0)} className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase text-foreground">
            rolando
          </Link>
        </div>
        
        {/* Content Layer - Right */}
        <div className="relative z-10 flex items-center gap-4 md:gap-6 text-xs font-medium tracking-widest text-foreground/70">
          <a href="#work" onClick={(e) => handleScrollTo(e, "#work")} className="hover:text-foreground py-2 transition-colors duration-300 hidden md:block cursor-pointer">
            {t("nav_work")}
          </a>
          <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-foreground py-2 transition-colors duration-300 hidden md:block cursor-pointer">
            {t("nav_about")}
          </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="hover:text-foreground py-2 transition-colors duration-300 hidden md:block cursor-pointer">
            {t("nav_contact")}
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className="flex items-center justify-center gap-1.5 px-3 py-2 min-h-[44px] min-w-[44px] rounded-full border border-foreground/15 hover:bg-foreground/10 transition-all text-[11px] tracking-wider text-foreground font-mono"
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-foreground/70" />
            <span className="uppercase font-semibold">{lang === "es" ? "EN" : "ES"}</span>
          </button>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center gap-2 px-4 py-2 min-h-[44px] min-w-[75px] rounded-full border border-foreground/15 hover:bg-foreground/10 transition-all text-[11px] tracking-wider text-foreground font-mono"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              <>
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
              </>
            ) : (
              <span className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </motion.nav>
    </motion.div>
  );
}



