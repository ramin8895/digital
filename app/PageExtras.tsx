"use client";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

export default function PageExtras() {
  const bar = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useGSAP(() => {
    const el = bar.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { scaleX: 0 },
      { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } }
    );

    ScrollTrigger.create({
      start: 400,
      end: "max",
      onToggle: (self) => setOn(self.isActive),
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, { scope: bar });

  return (
    <>
      <div className="progress" aria-hidden="true" ref={bar} />
      <button
        className={`totop ${on ? "is-on" : ""}`}
        aria-label="Back to top"
        tabIndex={on ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </>
  );
}
