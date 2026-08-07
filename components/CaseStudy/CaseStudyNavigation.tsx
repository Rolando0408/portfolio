"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

interface CaseStudyNavigationProps {
  currentId: string;
}

export function CaseStudyNavigation({ currentId }: CaseStudyNavigationProps) {
  const { lang, toggleLang } = useLanguage();

  const nextProjectId = currentId === "argus" ? "admissions" : "argus";
  const nextProjectLabel = currentId === "argus" ? "Admissions Portal" : "ARGUS System";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 pt-4 pointer-events-none">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Back Button */}
        <Link
          href="/#hero"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-md text-xs font-mono tracking-wider uppercase text-foreground hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{lang === "es" ? "VOLVER AL PORTAFOLIO" : "BACK TO HOME"}</span>
        </Link>

        {/* Right actions: Next project & Lang Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={`/work/${nextProjectId}`}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-md text-xs font-mono tracking-wider uppercase text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-all shadow-md"
          >
            <span className="text-foreground/40">{lang === "es" ? "SIGUIENTE:" : "NEXT:"}</span>
            <span className="font-semibold text-foreground">{nextProjectLabel}</span>
          </Link>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-md text-xs font-mono tracking-wider uppercase text-foreground hover:border-[var(--accent)] transition-all shadow-md cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="font-bold">{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
