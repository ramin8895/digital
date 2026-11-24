"use client";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK, POINTER_OK } from "./gsap";

const I = {
  video: "M4 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4zM18 10l4-3v10l-4-3",
  web: "M3 5h18v14H3zM3 9h18M7 7h.01",
  ads: "M4 20V10M10 20V4M16 20v-8M22 20H2",
  seo: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  social: "M4 4h16v12H8l-4 4z",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  spark: "M12 3l2.2 6.3L21 12l-6.8 2.7L12 21l-2.2-6.3L3 12l6.8-2.7z",
};

const Ico = ({ d, s = 18 }: { d: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

const nodes: [string, number, number, "l" | "r"][] = [
  [I.ads, 9, 14, "l"], [I.seo, 5, 50, "l"], [I.trend, 9, 86, "l"],
  [I.web, 91, 14, "r"], [I.social, 95, 50, "r"], [I.video, 91, 86, "r"],
];

const curve = (x: number, y: number, side: "l" | "r") => {
  const nx = x * 10, ny = y * 4.2;
  return side === "l"
    ? `M${nx} ${ny} C${nx + 230} ${ny}, 300 210, 470 210`
    : `M${nx} ${ny} C${nx - 230} ${ny}, 700 210, 530 210`;
};

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const follow = useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        el,
        { "--sy": -1 },
        {
          "--sy": 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    });
    mm.add(POINTER_OK, () => {
      follow.current = {
        x: gsap.quickTo(el, "--mx", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(el, "--my", { duration: 0.6, ease: "power3" }),
      };
    });
    return () => {
      follow.current = null;
      mm.revert();
    };
  }, { scope: ref });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    const f = follow.current;
    if (!el || !f || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    f.x((e.clientX - r.left) / r.width - 0.5);
    f.y((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    follow.current?.x(0);
    follow.current?.y(0);
  };

  return (
    <div className="hub" ref={ref} onPointerMove={onMove} onPointerLeave={reset} aria-hidden="true">
      <svg viewBox="0 0 1000 420" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lg" x1="0" x2="1">
            <stop offset="0" stopColor="#ffc7ad" />
            <stop offset=".5" stopColor="#ff8959" />
            <stop offset="1" stopColor="#ffc7ad" />
          </linearGradient>
        </defs>
        {nodes.map(([, x, y, s], i) => (
          <g key={i}>
            <path d={curve(x, y, s)} className="ln" vectorEffect="non-scaling-stroke" />
            <path d={curve(x, y, s)} className="flow" vectorEffect="non-scaling-stroke" style={{ animationDelay: `${i * -0.45}s` }} />
          </g>
        ))}
      </svg>

      <div className="hub__ring" />
      {nodes.map(([d, x, y], i) => (
        <span key={i} className="node" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * -0.6}s` }}>
          <Ico d={d} s={18} />
        </span>
      ))}
      <div className="orb"><Ico d={I.spark} s={26} /></div>

      <div className="float-card float-card--a"><b>+2.4M</b><span>video views</span></div>
      <div className="float-card float-card--b"><b>3.5x</b><span>ad return</span></div>
      <div className="float-card float-card--c"><b>95%</b><span>client satisfaction</span></div>
    </div>
  );
}
