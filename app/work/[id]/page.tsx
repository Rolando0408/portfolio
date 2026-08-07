"use client";

import * as React from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useLenis } from "lenis/react";
import { caseStudiesData } from "@/lib/caseStudiesData";
import { CaseStudyNavigation } from "@/components/CaseStudy/CaseStudyNavigation";
import { CaseStudyHero } from "@/components/CaseStudy/CaseStudyHero";
import { CaseStudySection } from "@/components/CaseStudy/CaseStudySection";

export default function CaseStudyPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "argus";
  const { lang } = useLanguage();
  const lenis = useLenis();

  const studyData = caseStudiesData[lang]?.[id];

  React.useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        lenis.resize();
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [id, lenis]);

  if (!studyData) {
    notFound();
  }

  const nextProjectId = id === "argus" ? "admissions" : "argus";
  const nextProjectTitle = id === "argus" ? "Portal de Admisiones" : "Sistema ARGUS";

  return (
    <main className="relative min-h-screen text-foreground selection:bg-[var(--accent)] selection:text-white">
      {/* Floating Header */}
      <CaseStudyNavigation currentId={id} />

      {/* Hero Header */}
      <CaseStudyHero data={studyData} />

      {/* Sections List */}
      <div className="relative z-10">
        {studyData.sections.map((section, idx) => (
          <CaseStudySection key={section.id} section={section} index={idx} />
        ))}
      </div>

      {/* Next Case Study Footer CTA */}
      <section className="pt-24 pb-44 md:pt-32 md:pb-60 border-t border-foreground/10 bg-foreground/[0.02] relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-foreground/40 uppercase mb-6 block">
            {lang === "es" ? "SIGUIENTE PROYECTO" : "NEXT CASE STUDY"}
          </span>

          <Link
            href={`/work/${nextProjectId}`}
            className="group inline-flex flex-col items-center gap-6 my-4 cursor-pointer"
          >
            <h3 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-foreground group-hover:text-[var(--accent)] transition-colors duration-300">
              {nextProjectTitle}
            </h3>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-foreground/20 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] text-foreground group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg group-hover:scale-110">
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div className="mt-16">
            <Link
              href="/#hero"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-foreground/50 hover:text-[var(--accent)] transition-colors cursor-pointer py-2 px-4 rounded-full border border-foreground/10 hover:border-[var(--accent)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === "es" ? "Volver a la página principal" : "Return to Home Page"}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
