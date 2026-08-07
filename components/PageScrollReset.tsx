"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

export function PageScrollReset() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash === "#hero" || hash === "") {
      // Force Lenis smooth scroll engine to position 0 immediately
      lenis.scrollTo(0, { immediate: true });
    } else if (hash) {
      // If there's an anchor like #work or #contact, scroll to it directly using selector string
      lenis.scrollTo(hash, { immediate: true });
    }
  }, [lenis]);

  return null;
}
