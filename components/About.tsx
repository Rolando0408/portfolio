"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { RevealParagraphs } from "@/components/RevealText";
import { ScrambleText } from "@/components/ScrambleText";

export function About() {
  const { t } = useLanguage();
  const ref = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Efecto de parallax inverso: el título baja a medida que se hace scroll hacia abajo
  const titleY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} id="about" className="relative py-24 md:py-32 px-4 md:px-8 border-t border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div style={{ y: titleY }} className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-start gap-4 relative z-0 pointer-events-none">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-foreground/50 uppercase mt-4 md:w-32 shrink-0">
            {t("about_label")}
          </span>
          <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] font-display font-black leading-[0.9] tracking-tighter uppercase text-foreground">
            <ScrambleText text={t("about_title")} duration={1.2} />
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-20">
          
          {/* Left Column: Summary & CV Button */}
          <div className="lg:col-span-6 xl:col-span-5 lg:col-start-1">
            <div className="text-xl md:text-2xl font-light leading-[1.6] text-foreground/80 mb-12">
              <RevealParagraphs paragraphs={[t("about_p1"), t("about_p2"), t("about_p3")]} />
            </div>
            
            <a 
              href="/CV-Rolando-Rivas.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white active:bg-[var(--accent)] active:text-white active:scale-[0.98] transition-all text-xs font-semibold tracking-widest uppercase group text-[var(--accent)]"
            >
              {t("about_cv")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Experience & Skills */}
          <div className="lg:col-span-5 lg:col-start-8 space-y-24">
            
            {/* Experience Section */}
            <div>
              <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-foreground/50 uppercase mb-8">
                {t("about_exp_title")}
              </h3>
              <div className="flex flex-col">
                <ExperienceItem 
                  company={t("about_exp1_company")}
                  role={t("about_exp1_role")}
                  date={t("about_exp1_date")}
                  isFirst
                />
                <ExperienceItem 
                  company={t("about_exp2_company")}
                  role={t("about_exp2_role")}
                  date={t("about_exp2_date")}
                />
                <ExperienceItem 
                  company={t("about_exp3_company")}
                  role={t("about_exp3_role")}
                  date={t("about_exp3_date")}
                />
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-foreground/50 uppercase mb-8">
                {t("about_skills_title")}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  t("skill_1"), t("skill_2"), t("skill_3"), t("skill_4"),
                  t("skill_5"), t("skill_6"), t("skill_7"), t("skill_8"),
                  t("skill_9"), t("skill_10")
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 min-h-[44px] rounded-full border border-foreground/15 text-xs md:text-sm text-foreground/70 bg-foreground/5 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] active:bg-[var(--accent)] active:text-white active:scale-[0.98] transition-all cursor-default whitespace-nowrap shadow-sm flex items-center justify-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ company, role, date, isFirst = false }: { company: string, role: string, date: string, isFirst?: boolean }) {
  return (
    <div className={`py-6 flex items-start justify-between gap-4 border-b border-foreground/10 ${isFirst ? 'border-t' : ''} group hover:bg-foreground/[0.02] active:bg-foreground/[0.04] active:scale-[0.99] transition-all -mx-4 px-4 rounded-xl cursor-pointer`} onClick={() => {}}>
      <div>
        <h4 className="text-base md:text-lg font-medium text-foreground mb-1 group-hover:text-foreground transition-colors">{company}</h4>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
      <span className="text-[10px] md:text-xs text-foreground/50 tracking-wider mt-1.5 shrink-0 whitespace-nowrap">{date}</span>
    </div>
  );
}
