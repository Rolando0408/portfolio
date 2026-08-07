"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function BackgroundOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalizamos la posición del ratón de -1 a 1 respecto al centro de la ventana
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Orbe 1: Sigue el ratón fuertemente
      gsap.to(orb1Ref.current, {
        x: x * 200,
        y: y * 200,
        ease: "power2.out",
        duration: 1.5,
      });

      // Orbe 2: Movimiento invertido y más lento
      gsap.to(orb2Ref.current, {
        x: x * -150,
        y: y * -150,
        ease: "power3.out",
        duration: 2,
      });

      // Orbe 3: Movimiento más amplio, asimétrico
      gsap.to(orb3Ref.current, {
        x: x * 100,
        y: y * -200,
        ease: "power1.out",
        duration: 2.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]"
    >
      {/* Orbe 1 - Color Accent (Azul eléctrico) */}
      <div 
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-40 md:opacity-20 will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Orbe 2 - Blanco Estelar con muy baja opacidad para dar volumen sutil */}
      <div 
        ref={orb2Ref}
        className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full opacity-30 md:opacity-15 will-change-transform"
        style={{
          background: "radial-gradient(circle, color-mix(in srgb, var(--foreground) 15%, transparent) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Orbe 3 - Acento muy diluido para la esquina opuesta */}
      <div 
        ref={orb3Ref}
        className="absolute bottom-1/4 left-1/3 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-20 md:opacity-10 will-change-transform"
        style={{
          background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 30%, transparent) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
