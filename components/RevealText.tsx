"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface RevealParagraphsProps {
  paragraphs: string[];
  className?: string;
}

export function RevealParagraphs({ paragraphs, className = "" }: RevealParagraphsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const keyString = paragraphs.join("::");

  useGSAP(() => {
    if (!containerRef.current) return;
    pRefs.current = pRefs.current.slice(0, paragraphs.length);

    // Crear la instancia de SplitText para dividir en líneas y aplicar máscaras
    const split = SplitText.create(pRefs.current.filter(Boolean), {
      type: "lines",
      linesClass: "line-wrapper",
      mask: "lines",
    });

    // Estado inicial oculto (fuera de la máscara)
    gsap.set(split.lines, { yPercent: 100 });

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => playAnimation(),
      onEnterBack: () => playAnimation(),
      onLeave: () => hideAnimation(),
      onLeaveBack: () => hideAnimation(),
    });

    function playAnimation() {
      gsap.to(split.lines, {
        yPercent: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        overwrite: "auto",
      });
    }

    function hideAnimation() {
      gsap.to(split.lines, {
        yPercent: 100,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.in",
        overwrite: "auto",
      });
    }

    return () => {
      st.kill();
      split.revert();
    };
  }, { dependencies: [keyString], scope: containerRef });

  return (
    <div key={keyString} ref={containerRef} className={className}>
      {paragraphs.map((text, idx) => (
        <p
          key={idx}
          ref={(el) => {
            pRefs.current[idx] = el;
          }}
          className="mb-8 last:mb-0 font-light leading-[1.6]"
        >
          {text}
        </p>
      ))}
    </div>
  );
}

// Para uso individual si se llegara a necesitar
export function RevealText({ text, className = "" }: { text: string; className?: string }) {
  return <RevealParagraphs paragraphs={[text]} className={className} />;
}
