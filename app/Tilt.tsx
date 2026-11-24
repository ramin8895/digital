"use client";
import { useRef } from "react";
import { gsap, useGSAP, POINTER_OK } from "./gsap";

type TiltControls = {
  rx: (v: number) => void;
  ry: (v: number) => void;
  px: (v: number) => void;
  py: (v: number) => void;
};

export default function Tilt({
  children,
  className = "",
  max = 5,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ctl = useRef<TiltControls | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { transformPerspective: 1000 });
    const mm = gsap.matchMedia();
    mm.add(POINTER_OK, () => {
      ctl.current = {
        rx: gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" }),
        ry: gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" }),
        px: gsap.quickSetter(el, "--px", "%") as (v: number) => void,
        py: gsap.quickSetter(el, "--py", "%") as (v: number) => void,
      };
    });
    return () => {
      ctl.current = null;
      mm.revert();
    };
  }, { scope: ref });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const c = ctl.current;
    if (!el || !c || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    c.px(px * 100);
    c.py(py * 100);
    c.ry((px - 0.5) * max);
    c.rx((0.5 - py) * max);
  };

  const reset = () => {
    ctl.current?.rx(0);
    ctl.current?.ry(0);
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </div>
  );
}
