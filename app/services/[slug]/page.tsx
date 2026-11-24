import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../Header";
import Footer from "../../Footer";
import Reveal from "../../Reveal";
import ContactForm from "../../ContactForm";
import PageExtras from "../../PageExtras";
import { services, getService } from "../../data";

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? { title: s.title, description: s.intro, alternates: { canonical: `/services/${s.slug}` } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  const ld = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.intro, provider: { "@type": "ProfessionalService", name: "Northline" } };
  return (
    <>
      <PageExtras />
      <Header />
      <main id="main">
        <section className="container sp-hero">
          <nav aria-label="Breadcrumb" className="crumbs"><Link href="/">Home</Link><span>/</span><Link href="/#services">Services</Link><span>/</span><b>{s.title}</b></nav>
          <Reveal>
            <h1>{s.title}</h1>
            <p className="lead">{s.intro}</p>
            <div className="meta">
              <div><small>Delivery time</small><b>{s.duration}</b></div>
              <div><small>Success metric</small><b>{s.kpi}</b></div>
              <div><small>Tools</small><b>{s.tools.slice(0, 2).join(", ")}</b></div>
            </div>
          </Reveal>
        </section>

        <section className="section container">
          <Reveal><span className="eyebrow">What you get</span><h2>Clear, measurable deliverables</h2></Reveal>
          <ul className="deliver">
            {s.deliverables.map((d, i) => <Reveal as="li" key={d} delay={i * 60} variant="scale"><b>{String(i + 1).padStart(2, "0")}</b>{d}</Reveal>)}
          </ul>
        </section>

        <section className="section container process">
          <Reveal><span className="eyebrow">How we work</span><h2>How {s.title} runs</h2></Reveal>
          <ol>{s.steps.map(([t, d], i) => <Reveal as="li" key={t} delay={i * 80}><b>0{i + 1}</b><div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</ol>
          <Reveal><ul className="chips" aria-label="Tools">{s.tools.map((t) => <li key={t}>{t}</li>)}</ul></Reveal>
        </section>

        <section className="section container faq">
          <Reveal><span className="eyebrow">About this service</span><h2>Frequently asked questions</h2></Reveal>
          {s.faq.map(([q, a], i) => <Reveal key={q} delay={i * 60}><details><summary>{q}</summary><p>{a}</p></details></Reveal>)}
        </section>

        <section className="container">
          <h2 className="more__t">Other services</h2>
          <div className="more">{others.map((o) => <Link key={o.slug} href={`/services/${o.slug}`} className="b"><h3>{o.title}</h3><p>{o.short}</p><span className="b__more">Learn more →</span></Link>)}</div>
        </section>

        <section id="contact" className="container" style={{ marginTop: "3rem" }}>
          <Reveal className="cta">
            <div><h2>Let's talk about {s.title}</h2><p>A free consultation — we reply within 24 hours.</p></div>
            <ContactForm services={services.map((x) => x.title)} />
          </Reveal>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
