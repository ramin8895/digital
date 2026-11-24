"use client";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

const format = (n: number, decimals: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const render = (v: number) => {
      el.textContent = `${prefix}${format(v, decimals)}${suffix}`;
    };
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const state = { v: 0 };
      render(0);
      gsap.to(state, {
        v: to,
        duration: 1.6,
        ease: "power2.out",
        snap: { v: decimals > 0 ? 1 / 10 ** decimals : 1 },
        onUpdate: () => render(state.v),
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });
    return () => mm.revert();
  }, { scope: ref });

  return <span ref={ref}>{prefix}{format(to, decimals)}{suffix}</span>;
}
