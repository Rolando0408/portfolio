"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { ScrambleText } from "@/components/ScrambleText";

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Scroll interactive parallax effects
  const titleY = useTransform(scrollY, [0, 800], [0, 200]); // Más profundidad
  const photoContainerY = useTransform(scrollY, [0, 800], [0, -100]); // Sube el contenedor
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <motion.section 
      id="hero"
      style={{ opacity: heroOpacity }}
      className="relative min-h-screen flex flex-col justify-between px-6 pt-28 pb-12 md:px-12 md:py-12 overflow-hidden"
    >
      {/* Top small title */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-12 md:mt-16"
      >
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
          {t("hero_role")}
        </p>
      </motion.div>

      {/* Main Grid: Bigger Typography on Left, Bigger Photo on Right */}
      <div className="flex-1 flex items-center my-8 md:my-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Big Typography with Parallax */}
          <motion.div style={{ y: titleY }} className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display font-black leading-[0.88] tracking-tighter uppercase text-foreground"
              style={{ fontSize: "clamp(3.8rem, 12vw, 11.5rem)" }}
            >
              <ScrambleText text={t("hero_name_first")} duration={1.2} delay={0.4} />
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-black leading-[0.88] tracking-tighter uppercase text-foreground"
              style={{ fontSize: "clamp(3.8rem, 12vw, 11.5rem)" }}
            >
              <ScrambleText text={t("hero_name_last")} duration={1.2} delay={0.6} />
            </motion.h1>
          </motion.div>

          {/* Right Column: Larger Mask Reveal Photo with Counter-Parallax */}
          <motion.div 
            style={{ y: photoContainerY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end"
          >
            <div className="mr-4 relative group w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[23rem] lg:w-[21rem] lg:h-[26rem] xl:w-[23rem] xl:h-[28rem] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-foreground/15 shadow-2xl bg-foreground/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-emerald-500/10 hover:border-foreground/30 active:scale-[0.98]">
              
              {/* Animated Curtain / Mask Reveal */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="relative w-full h-full"
              >
                <Image 
                  src="/photo_2026-07-26_08-31-16.jpg" 
                  alt="Rolando Rivas" 
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 368px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom section: Clean Info & Location */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end w-full">
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:col-span-8"
        >
          <p className="text-sm md:text-base lg:text-lg text-foreground/70 leading-relaxed max-w-xl font-medium">
            {t("hero_bio")}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="md:col-span-4 flex flex-wrap items-center md:justify-end gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)]"
        >
          <span className="whitespace-nowrap">{t("hero_location")}</span>
          <span>•</span>
          <span className="whitespace-nowrap">{t("hero_stack")}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 pointer-events-none opacity-40"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-foreground rotate-90 origin-center whitespace-nowrap mb-8">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-foreground/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [ -48, 48 ] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-full bg-foreground"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}



