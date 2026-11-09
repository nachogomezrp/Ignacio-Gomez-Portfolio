"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

// Todas las animaciones se registran solo si el usuario no pidió reducir movimiento
export default function Animations() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-hero]", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.09,
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const dir = el.dataset.reveal;
        gsap.from(el, {
          opacity: 0,
          x: dir === "left" ? -24 : dir === "right" ? 24 : 0,
          y: dir === "up" ? 24 : 0,
          duration: 0.7,
          ease: "power2.out",
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
