"use client";

import { motion } from "framer-motion";

const skills = [
  "FULL-STACK ARCHITECTURE",
  "NEXT.JS & REACT",
  "TYPESCRIPT",
  "NODE.JS & BACKEND",
  "DESIGN SYSTEMS",
  "TAILWIND CSS",
  "REST & GRAPHQL APIS",
  "PERFORMANCE OPTIMIZATION",
  "SYSTEMS THINKING",
  "CLEAN CODE",
];

export function SkillsTicker() {
  // Multiply items to ensure seamless infinite looping without gaps
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden border-y border-foreground/10 bg-foreground/[0.02] py-4 md:py-5 select-none my-12">
      <div className="animate-marquee pr-8 md:pr-12">
        {items.map((skill, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-12 mr-8 md:mr-12">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors duration-300 font-medium cursor-default">
              {skill}
            </span>
            <span className="text-foreground/30 font-mono text-xs md:text-sm">
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
