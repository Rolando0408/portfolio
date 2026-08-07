"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";

interface CaseStudyImageGridProps {
  count: number;
  cols?: number;
  images?: string[];
}

export function CaseStudyImageGrid({ count = 2, cols = 2, images = [] }: CaseStudyImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const items = Array.from({ length: count });

  const gridColsClass =
    cols === 1
      ? "grid-cols-1"
      : cols === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <>
      <div className={`grid ${gridColsClass} gap-6 my-8`}>
        {items.map((_, i) => {
          const imgSrc = images[i];

          if (imgSrc) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedImage(imgSrc)}
                className="relative group aspect-[16/10] cursor-pointer rounded-2xl border border-foreground/15 overflow-hidden shadow-xl bg-foreground/5 p-2"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-background">
                  <Image
                    src={imgSrc}
                    alt={`Project screen ${i + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group aspect-[16/10] rounded-2xl border border-foreground/15 bg-foreground/[0.03] overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner hover:border-foreground/30 transition-colors"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10 w-12 h-12 rounded-full border border-foreground/20 bg-background/80 flex items-center justify-center text-foreground/40 group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors mb-3">
                <ImageIcon className="w-5 h-5" />
              </div>

              <span className="relative z-10 text-xs font-mono font-medium tracking-wider text-foreground/50 uppercase">
                Mockup / Captura {i + 1}
              </span>
              <span className="relative z-10 text-[10px] font-mono text-foreground/30 mt-1">
                Coloca la imagen en public/ y añade la ruta en caseStudiesData
              </span>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-full rounded-lg overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded project screen"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
