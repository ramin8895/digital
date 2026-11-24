"use client";
import { createElement, useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

type RevealTag = "div" | "li" | "article" | "figure" | "span";
type RevealVariant = "up" | "scale" | "mask" | "left" | "right";

const settled: Record<RevealVariant, gsap.TweenVars> = {
  up: { opacity: 1, y: 0, filter: "blur(0px)" },
  scale: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  mask: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", filter: "blur(0px)" },
  left: { opacity: 1, x: 0, filter: "blur(0px)" },
  right: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  as?: RevealTag;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.to(el, {
        ...settled[variant],
        duration: variant === "mask" ? 1 : 0.9,
        ease: "power3.out",
        delay: delay / 1000,
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, filter: "none", clipPath: "none" });
    });
    return () => mm.revert();
  }, { scope: ref });

  return createElement(
    as,
    {
      ref: ref as React.RefObject<HTMLElement>,
      className: `reveal reveal--${variant} ${className}`,
    },
    children
  );
}
