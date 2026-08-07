"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CaseStudyData } from "@/lib/caseStudiesData";

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

export function CaseStudyHero({ data }: CaseStudyHeroProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 text-xs font-mono tracking-wider text-foreground/80 bg-foreground/5 border border-foreground/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tighter uppercase text-foreground mb-8 max-w-6xl"
        >
          {data.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl font-light leading-relaxed text-foreground/70 max-w-3xl mb-12"
        >
          {data.subtitle}
        </motion.p>

        {/* Metadata Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-foreground/10 mb-16"
        >
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-1">
              ROLE
            </span>
            <span className="block text-sm md:text-base font-medium text-foreground">
              {data.role}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-1">
              TIMELINE
            </span>
            <span className="block text-sm md:text-base font-medium text-foreground">
              {data.timeline}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-1">
              CLIENT / ORG
            </span>
            <span className="block text-sm md:text-base font-medium text-foreground">
              {data.client}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-1">
              STATUS
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Ready
            </span>
          </div>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm"
            >
              <span className="block font-display font-black text-4xl md:text-5xl text-[var(--accent)] mb-2">
                {metric.value}
              </span>
              <span className="block text-xs font-mono uppercase tracking-wider text-foreground/60">
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className={`relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden border border-foreground/15 shadow-2xl bg-gradient-to-br ${data.bgGradient} p-4 md:p-8`}
        >
          <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
