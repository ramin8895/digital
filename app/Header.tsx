"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav__in">
        <Link href="/" className="logo"><i />Northline</Link>
        <nav aria-label="Main menu" className="nav__links">
          <Link href="/#services">Services</Link><Link href="/#work">Work</Link><Link href="/#pricing">Pricing</Link><Link href="/#faq">FAQ</Link>
        </nav>
        <Link href="/#contact" className="btn btn--purple nav__cta">Book a free call</Link>
        <MobileMenu />
      </div>
    </header>
  );
}
