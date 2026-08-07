"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#_";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScrambleText({ text, className = "", delay = 0, duration = 1 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let animTimeout: NodeJS.Timeout | undefined;
    let animationFrame: number;
    let frame = 0;
    
    // Hacemos el setState inicial de forma asíncrona para evitar el warning de "cascading renders"
    const initialTimeout = setTimeout(() => {
      setDisplayText(
          text.split('').map(char => 
              char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
          ).join('')
      );

      animTimeout = setTimeout(() => {
        const totalFrames = Math.round((duration * 1000) / 16.66);
        
        const animate = () => {
          frame++;
          const progress = frame / totalFrames;
          
          if (progress >= 1) {
            setDisplayText(text);
            return;
          }

          let result = "";
          for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
              result += " ";
              continue;
            }
            
            const letterProgress = progress * 1.5; 
            const currentLetterThreshold = i / text.length;
            
            if (letterProgress > currentLetterThreshold) {
              result += text[i];
            } else {
              result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
          
          setDisplayText(result);
          animationFrame = requestAnimationFrame(animate);
        };
        
        animate();
      }, delay * 1000);
    }, 0);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(animTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, text, delay, duration]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
