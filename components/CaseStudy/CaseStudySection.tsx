"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CaseStudySection as CaseStudySectionType } from "@/lib/caseStudiesData";
import { CaseStudyImageGrid } from "./CaseStudyImageGrid";

interface CaseStudySectionProps {
  section: CaseStudySectionType;
  index: number;
}

export function CaseStudySection({ section, index }: CaseStudySectionProps) {
  return (
    <section className="py-16 md:py-24 border-b border-foreground/10 last:border-b-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Asymmetrical Title / Question */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 sticky top-28"
          >
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-3 block">
              SECTION 0{index + 1}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight text-foreground">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-sm md:text-base font-mono text-foreground/50 mt-3">
                {section.subtitle}
              </p>
            )}
          </motion.div>

          {/* Right Column: Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Text Paragraphs */}
            <div className="space-y-6 text-base md:text-xl font-light leading-relaxed text-foreground/80">
              {section.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Highlight Box if present */}
            {section.highlightBox && (
              <div className="p-6 md:p-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.05] relative overflow-hidden my-8">
                <div className="w-1 h-full bg-[var(--accent)] absolute top-0 left-0" />
                <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                  {section.highlightBox.title}
                </h4>
                <p className="text-sm md:text-base text-foreground/90 font-medium leading-relaxed">
                  {section.highlightBox.text}
                </p>
              </div>
            )}

            {/* Insights 3-column cards if present */}
            {section.insights && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {section.insights.map((insight) => (
                  <div
                    key={insight.number}
                    className="p-5 rounded-xl border border-foreground/10 bg-foreground/[0.02] flex flex-col justify-between"
                  >
                    <span className="font-mono text-xs font-bold text-[var(--accent)] mb-3 block">
                      {insight.number}
                    </span>
                    <div>
                      <h5 className="font-display font-bold text-base text-foreground mb-1">
                        {insight.title}
                      </h5>
                      <p className="text-xs text-foreground/60 leading-normal">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Image Placeholder Grid */}
            {section.imagePlaceholderCount && (
              <CaseStudyImageGrid
                count={section.imagePlaceholderCount}
                cols={section.imageGridCols}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
