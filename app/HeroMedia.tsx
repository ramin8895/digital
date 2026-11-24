"use client";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK, POINTER_OK } from "./gsap";

type Follow = { x: (v: number) => void; y: (v: number) => void };

export default function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const follow = useRef<Follow | null>(null);

  useGSAP(() => {
    const el = ref.current;
    const media = video.current;
    if (!el || !media) return;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      media.play().catch(() => {});
      gsap.fromTo(
        el,
        { yPercent: -2 },
        {
          yPercent: 2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
        }
      );
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      media.pause();
      media.currentTime = 0;
    });
    mm.add(POINTER_OK, () => {
      follow.current = {
        x: gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" }),
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
    if (!el || !f || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    f.x((e.clientX - r.left) / r.width - 0.5);
    f.y((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    follow.current?.x(0);
    follow.current?.y(0);
  };

  return (
    <div className="hub-media" ref={ref} onPointerMove={onMove} onPointerLeave={reset} aria-hidden="true">
      <video
        ref={video}
        className="hub-media__video"
        src="/hero-hub.mp4"
        poster="/hero-hub-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
    </div>
  );
}
