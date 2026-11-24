"use client";
import { useRef } from "react";
import { gsap, useGSAP, POINTER_OK } from "./gsap";

type Follow = { x: (v: number) => void; y: (v: number) => void };

export default function Magnetic({ children, strength = 12 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const follow = useRef<Follow | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(POINTER_OK, () => {
      follow.current = {
        x: gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" }),
      };
    });
    return () => {
      follow.current = null;
      mm.revert();
    };
  }, { scope: ref });

  const onMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    const f = follow.current;
    if (!el || !f || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    f.x(((e.clientX - r.left) / r.width - 0.5) * 2 * strength);
    f.y(((e.clientY - r.top) / r.height - 0.5) * 2 * strength);
  };

  const reset = () => {
    follow.current?.x(0);
    follow.current?.y(0);
  };

  return (
    <span ref={ref} className="magnetic" onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </span>
  );
}
