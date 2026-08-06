"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Navbar() {
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // 100% continuous scroll-driven interpolation using matching units (px to px)
  // Making the transition slower by stretching it over 250px of scroll instead of 100px.
  const maxWidth = useTransform(scrollY, [0, 250], ["2000px", "800px"]);
  const paddingTop = useTransform(scrollY, [0, 250], ["24px", "12px"]);
  const paddingBottom = useTransform(scrollY, [0, 250], ["24px", "12px"]);
  const paddingLeft = useTransform(scrollY, [0, 250], ["32px", "24px"]);
  const paddingRight = useTransform(scrollY, [0, 250], ["32px", "24px"]);
  const borderRadius = useTransform(scrollY, [0, 250], ["0px", "9999px"]);
  const marginTop = useTransform(scrollY, [0, 250], ["0px", "16px"]);
  
  // Animate the opacity of the glassmorphism background instead of its colors.
  const bgOpacity = useTransform(scrollY, [0, 250], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 md:pt-4 px-4 md:px-8 pointer-events-none"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.nav 
        style={{
          maxWidth,
          marginTop,
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
          className="absolute inset-0 bg-background/70 dark:bg-background/60 backdrop-blur-xl border border-foreground/10 shadow-lg dark:shadow-2xl/40 rounded-[inherit] pointer-events-none"
        />

        {/* Content Layer - Left */}
        <div className="relative z-10 flex items-center gap-3">
          <Link href="/" className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase text-foreground">
            rolando
          </Link>
        </div>
        
        {/* Content Layer - Right */}
        <div className="relative z-10 flex items-center gap-6 md:gap-8 text-xs font-medium tracking-widest text-foreground/70">
          <Link href="#work" className="hover:text-foreground transition-colors duration-300 hidden md:block">
            WORK
          </Link>
          <Link href="#about" className="hover:text-foreground transition-colors duration-300 hidden md:block">
            ABOUT
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors duration-300 hidden md:block">
            CONTACT
          </Link>
          
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-foreground/15 hover:bg-foreground/10 transition-all min-w-[75px] text-[11px] tracking-wider text-foreground font-mono"
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



