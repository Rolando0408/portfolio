"use client";

import * as React from "react";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useLenis } from "lenis/react";

interface ImageLightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ImageLightbox({ src, alt = "Vista previa de imagen", onClose }: ImageLightboxProps) {
  const isMounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);
  const lenis = useLenis();

  const onCloseRef = React.useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
      }
    };
    if (src) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [src, lenis]);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {src && (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          data-lenis-prevent
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-3 sm:p-6 md:p-8 cursor-zoom-out"
          style={{ willChange: "opacity" }}
        >
          {/* Top Control Bar with High Visibility Close Button */}
          <div
            className="w-full max-w-6xl flex items-center justify-between z-[10000] pointer-events-auto pt-2 pb-2 px-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-wider bg-zinc-900/90 px-3 py-1.5 rounded-full border border-zinc-800">
              <ZoomOut className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Vista previa</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Cerrar imagen"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-red-400/30"
            >
              <X className="w-5 h-5 text-white" />
              <span>Cerrar</span>
            </button>
          </div>

          {/* Center Image Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl flex-1 my-2 rounded-2xl overflow-hidden flex items-center justify-center bg-zinc-950/60 border border-white/10 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain p-2 md:p-6 select-none"
              sizes="(max-width: 1200px) 100vw, 1152px"
              quality={90}
              priority
            />
          </motion.div>

          {/* Bottom Hint / Action for Mobile Accessibility */}
          <div
            className="w-full max-w-6xl flex items-center justify-center z-[10000] pointer-events-auto pt-1 pb-2 sm:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl active:scale-98 transition-all"
            >
              <X className="w-4 h-4 text-red-400" />
              <span>Toca aquí para cerrar</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
