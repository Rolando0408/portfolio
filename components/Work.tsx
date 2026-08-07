"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

function parseMetricString(str: string) {
  const match = str.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);
  if (match) {
    return {
      prefix: match[1],
      number: parseFloat(match[2].replace(/,/g, '')),
      suffix: match[3],
    };
  }
  return { prefix: '', number: 0, suffix: str };
}

function MetricCounter({ valString }: { valString: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { prefix, number, suffix } = parseMetricString(valString);
  const [displayVal, setDisplayVal] = React.useState(0);

  React.useEffect(() => {
    if (isInView && number > 0) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayVal(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, number]);

  if (number === 0) return <span>{valString}</span>;

  return (
    <span ref={ref}>
      {prefix}{displayVal}{suffix}
    </span>
  );
}

export function Work() {
  const { t } = useLanguage();
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const titleY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const projects = [
    {
      id: "argus",
      number: "01",
      meta: "ARGUS System / 2025",
      titleKey: "argus_title",
      descKey: "argus_desc",
      tags: ["FASTAPI", "REACT", "POSTGRESQL", "DOCKER"],
      metrics: [
        { valueKey: "argus_metric1_val", labelKey: "argus_metric1_lbl" },
        { valueKey: "argus_metric2_val", labelKey: "argus_metric2_lbl" },
      ],
      image: "/argus.png",
      bgGradient: "from-emerald-950/20 to-zinc-900/40",
    },
    {
      id: "admissions",
      number: "02",
      meta: "Admission Portal / 2025",
      titleKey: "admissions_title",
      descKey: "admissions_desc",
      tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE"],
      metrics: [
        { valueKey: "admissions_metric1_val", labelKey: "admissions_metric1_lbl" },
        { valueKey: "admissions_metric2_val", labelKey: "admissions_metric2_lbl" },
      ],
      image: "/admissions.png",
      bgGradient: "from-blue-950/20 to-zinc-900/40",
    },
  ];

  return (
    <section ref={ref} id="work" className="relative min-h-screen px-6 py-20 md:px-12 md:py-28">
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <motion.div style={{ y: titleY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-foreground/50 mb-3">
              {t("work_label")}
            </p>
            <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-foreground">
              {t("work_title")}
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

interface Metric {
  valueKey: string;
  labelKey: string;
}

interface Project {
  id: string;
  number: string;
  meta: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  metrics: Metric[];
  image: string;
  bgGradient: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      className="group relative border-t border-foreground/15 py-12 md:py-16 first:border-t-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Project Info */}
        <motion.div style={{ y: textY }} className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between h-full">
          <div>
            {/* Number & Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs md:text-sm font-semibold text-foreground/40">
                {project.number}
              </span>
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
              <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-foreground/50">
                {project.meta}
              </span>
            </div>

            {/* Title with Underline Animation on Hover */}
            <Link href={`/work/${project.id}`} className="block group/title">
              <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-foreground mb-4 relative inline-block group-hover/title:text-[var(--accent)] transition-colors duration-300">
                {t(project.titleKey)}
                {/* Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[var(--accent)] transition-all duration-500 ease-out group-hover/title:w-full" />
              </h3>
            </Link>

            <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6 font-medium max-w-lg">
              {t(project.descKey)}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] md:text-xs font-mono tracking-wider text-foreground/70 bg-foreground/5 border border-foreground/10 rounded-full group-hover:border-foreground/30 group-hover:text-foreground transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
            {project.metrics.map((metric: Metric, i: number) => (
              <div key={i}>
                <span className="block font-display font-black text-2xl md:text-3xl text-foreground transition-colors duration-300 delay-75">
                  <MetricCounter valString={t(metric.valueKey)} />
                </span>
                <span className="block text-[11px] md:text-xs font-mono text-foreground/50 uppercase tracking-wider mt-1">
                  {t(metric.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Image Card */}
        <motion.div style={{ y: imageY }} className="lg:col-span-6 xl:col-span-7">
          <Link href={`/work/${project.id}`} className="block relative group/image">
            <div className={`relative w-full aspect-[16/10] rounded-2xl md:rounded-[2rem] overflow-hidden border border-foreground/15 shadow-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:border-foreground/30 bg-gradient-to-br ${project.bgGradient} p-4 sm:p-6 md:p-8 flex items-center justify-center`}>
              
              {/* Image Mockup with Scale Effect */}
              <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-background/10 group-hover/image:bg-transparent transition-colors duration-500" />
              </div>

              {/* Arrow Action Button */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-11 h-11 md:w-14 md:h-14 rounded-full bg-background/90 backdrop-blur-md border border-foreground/15 flex items-center justify-center text-foreground shadow-lg transition-transform duration-500 group-hover/image:scale-110 group-hover/image:bg-foreground group-hover/image:text-background">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover/image:translate-x-0.5 group-hover/image:-translate-y-0.5" />
              </div>

            </div>
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
}
