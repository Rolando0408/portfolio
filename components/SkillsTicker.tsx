"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function SkillsTicker() {
  const { t } = useLanguage();

  const skillKeys = [
    "skill_1",
    "skill_2",
    "skill_3",
    "skill_4",
    "skill_5",
    "skill_6",
    "skill_7",
    "skill_8",
    "skill_9",
    "skill_10",
  ];

  // Multiply items to ensure seamless infinite looping without gaps
  const items = [...skillKeys, ...skillKeys, ...skillKeys, ...skillKeys];

  return (
    <div className="w-full overflow-hidden border-y border-foreground/10 bg-foreground/[0.02] py-4 md:py-5 select-none my-12">
      <div className="animate-marquee pr-8 md:pr-12">
        {items.map((skillKey, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-12 mr-8 md:mr-12">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors duration-300 font-medium cursor-default">
              {t(skillKey)}
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
