"use client";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

export default function Marquee({
  children,
  className = "",
  duration = 40,
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = track.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const loop = reverse
        ? gsap.fromTo(el, { xPercent: -50 }, { xPercent: 0, duration, ease: "none", repeat: -1 })
        : gsap.fromTo(el, { xPercent: 0 }, { xPercent: -50, duration, ease: "none", repeat: -1 });

      if (!pauseOnHover) return;
      const pause = () => loop.pause();
      const resume = () => loop.play();
      el.addEventListener("pointerenter", pause);
      el.addEventListener("pointerleave", resume);
      return () => {
        el.removeEventListener("pointerenter", pause);
        el.removeEventListener("pointerleave", resume);
      };
    });
    return () => mm.revert();
  }, { scope: track });

  return (
    <div ref={track} className={className}>
      {children}
    </div>
  );
}
