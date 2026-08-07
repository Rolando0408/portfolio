"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Copy, Check, FileText } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef(null);

  const email = "rafaelrivasrolando@gmail.com";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rolando-rafael-rivas-marin-0090a8335",
      icon: LinkedinIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/Rolando0408",
      icon: GithubIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rrrm0408/",
      icon: InstagramIcon,
    },
    {
      name: "CV (PDF)",
      href: "/CV-Rolando-Rivas.pdf",
      icon: FileText,
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 border-t border-foreground/10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col justify-between min-h-[70vh]">
        {/* Section Header */}
        <div>
          <motion.div style={{ y: titleY }} className="flex flex-col md:flex-row md:items-start gap-4 mb-12 md:mb-16 relative z-0 pointer-events-none">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-foreground/50 uppercase mt-4 md:w-48 shrink-0">
              {t("contact_label")}
            </span>
            <h2 className="text-[3.5rem] sm:text-[6rem] md:text-[9rem] lg:text-[13rem] font-display font-black leading-[0.9] tracking-tighter uppercase text-foreground select-none">
              {t("contact_heading")}
            </h2>
          </motion.div>

          {/* Email Trigger Box */}
          <div className="mt-8 md:mt-16 group relative inline-block w-full max-w-4xl z-20">
            <button
              onClick={handleCopyEmail}
              className="w-full text-left p-6 md:p-10 rounded-2xl md:rounded-3xl border border-foreground/15 bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-[var(--accent)] active:scale-[0.98] active:border-[var(--accent)] transition-all duration-300 relative overflow-hidden backdrop-blur-sm cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-foreground/50 font-mono block mb-2">
                    {t("contact_subheading")}
                  </span>
                  <span className="text-[15px] sm:text-2xl md:text-3xl lg:text-4xl font-mono font-medium tracking-tight text-foreground group-hover:text-[var(--accent)] transition-colors break-all">
                    {email}
                  </span>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-foreground/20 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] text-foreground group-hover:text-white transition-all flex items-center justify-center">
                    {copied ? (
                      <Check className="w-5 h-5 md:w-7 md:h-7 text-emerald-400 group-hover:text-white" />
                    ) : (
                      <Copy className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                </div>
              </div>

              {/* Copied Toast Alert */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-4 right-4 md:top-6 md:right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-mono font-semibold flex items-center gap-2 shadow-lg z-20"
                  >
                    <Check className="w-4 h-4" />
                    {t("contact_copied")}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Bottom Social Links & Footer */}
        <div className="mt-20 pt-10 border-t border-foreground/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full border border-foreground/10 hover:border-[var(--accent)] hover:text-[var(--accent)] active:bg-foreground/[0.05] active:scale-[0.98] transition-all text-xs font-mono font-medium tracking-wide uppercase text-foreground/80 hover:bg-foreground/[0.03]"
                >
                  <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              );
            })}
          </div>

          <div className="text-xs font-mono text-foreground/40 flex items-center gap-2">
            <span>© {new Date().getFullYear()} Rolando Rivas.</span>
            <span>{t("contact_rights")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
