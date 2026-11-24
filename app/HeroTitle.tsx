"use client";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

export default function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const lines = el.querySelectorAll(".line > span");
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.from(lines, {
        yPercent: 110,
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.14,
        delay: 0.2,
      });
    });
    return () => mm.revert();
  }, { scope: ref });

  return (
    <h1 className="hero__title" ref={ref}>
      <span className="line"><span>Your video, website and ads</span></span>
      <span className="line"><span>as one <em className="grad">growth engine</em></span></span>
    </h1>
  );
}
