"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
}

export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ctx2d = ctx;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Soporte para pantallas Retina / High DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx2d.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx2d.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    window.addEventListener("resize", handleResize);

    // Detección de tema
    const isDark = document.documentElement.classList.contains("dark");
    const dotColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)";
    const lineBase = isDark ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, ";
    
    // Color acento
    const accentLineBase = "rgba(23, 45, 226, "; // Cobalto

    // Menos partículas en móvil para rendimiento perfecto
    const density = width < 768 ? 20000 : 15000;
    const particleCount = Math.min(Math.floor((width * height) / density), 100);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        baseX: x,
        baseY: y,
      });
    }

    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchend", handleMouseLeave);

    const updateAndDraw = () => {
      ctx2d.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Fricción suave para estabilizar
        p.vx *= 0.999;
        p.vy *= 0.999;
        
        // Empuje aleatorio para mantener movimiento
        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.02;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.02;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.vx -= Math.cos(angle) * force * 0.05;
          p.vy -= Math.sin(angle) * force * 0.05;
        }

        ctx2d.beginPath();
        ctx2d.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx2d.fillStyle = dotColor;
        ctx2d.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distanceX = p.x - p2.x;
          const distanceY = p.y - p2.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          const maxDist = 150;
          if (distance < maxDist) {
            // Relación con el ratón
            const mouseDx = mouse.x - (p.x + p2.x) / 2;
            const mouseDy = mouse.y - (p.y + p2.y) / 2;
            const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
            
            let opacity = (1 - distance / maxDist);
            
            ctx2d.beginPath();
            ctx2d.moveTo(p.x, p.y);
            ctx2d.lineTo(p2.x, p2.y);
            
            if (mouseDistance < mouse.radius * 1.2) {
                // Glow cibernético al acercar el cursor
                opacity *= 0.6;
                ctx2d.strokeStyle = `${accentLineBase}${opacity})`;
                ctx2d.lineWidth = 1.2;
            } else {
                opacity *= 0.15;
                ctx2d.strokeStyle = `${lineBase}${opacity})`;
                ctx2d.lineWidth = 0.8;
            }
            
            ctx2d.stroke();
          }
        }
      }
    };

    gsap.ticker.add(updateAndDraw);

    return () => {
      gsap.ticker.remove(updateAndDraw);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, [theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
       <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-[0.06] dark:opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <canvas key="canvas-v2" ref={canvasRef} className="block w-full h-full opacity-60 dark:opacity-80 transition-opacity duration-1000" />
    </div>
  );
}
