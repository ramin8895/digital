"use client";
import { useState } from "react";

const links = [["/#services", "Services"], ["/#work", "Work"], ["/#pricing", "Pricing"], ["/#faq", "FAQ"]];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav id="mnav" className={`mnav ${open ? "is-open" : ""}`} aria-label="Mobile menu">
        {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
        <a href="/#contact" className="btn btn--purple" onClick={() => setOpen(false)}>Book a free call</a>
      </nav>
    </>
  );
}
