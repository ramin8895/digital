import Link from "next/link";
import { services } from "./data";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__top">
        <div><Link href="/" className="logo"><i />Northline</Link><p>Digital marketing agency — video, web, ads and SEO.</p></div>
        <nav aria-label="Services"><b>Services</b>{services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</nav>
        <nav aria-label="Company"><b>Company</b><Link href="/#work">Work</Link><Link href="/#team">Team</Link><Link href="/#pricing">Pricing</Link><Link href="/#faq">FAQ</Link></nav>
        <div><b>Contact</b><a href="mailto:hello@northline.co">hello@northline.co</a><a href="tel:+10000000000" dir="ltr">+1 000 000 0000</a></div>
      </div>
      <div className="footer__bot">© {new Date().getFullYear()} Northline. All rights reserved.</div>
      <div className="footer__brand" aria-hidden="true">Northline</div>
    </footer>
  );
}
