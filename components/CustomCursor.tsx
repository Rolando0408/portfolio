"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for exact mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible((prev) => (prev ? prev : true));
    };

    const onMouseOver = (e: MouseEvent) => {
      // Check if mouse is hovering over an interactive element only when entering new elements
      const target = e.target as Element | null;
      if (target && typeof target.closest === "function") {
        const isInteractive = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer")
        );
        setIsHovered((prev) => (prev !== isInteractive ? isInteractive : prev));
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.8 : 1,
          borderColor: isHovered
            ? "var(--accent)"
            : "color-mix(in srgb, var(--foreground) 35%, transparent)",
          backgroundColor: isHovered
            ? "color-mix(in srgb, var(--accent) 15%, transparent)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border shadow-sm"
      />

      {/* Inner Immediate Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "var(--accent)" : "var(--foreground)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-sm"
      />
    </div>
  );
}
