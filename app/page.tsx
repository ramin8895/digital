import Link from "next/link";
import Reveal from "./Reveal";
import Counter from "./Counter";
import ContactForm from "./ContactForm";
import Header from "./Header";
import Footer from "./Footer";
import PageExtras from "./PageExtras";
import HeroVisual from "./HeroVisual";
import HeroMedia from "./HeroMedia";
import { HERO_MODE } from "./heroConfig";
import HeroTitle from "./HeroTitle";
import Ticker from "./Ticker";
import Marquee from "./Marquee";
import Tilt from "./Tilt";
import Magnetic from "./Magnetic";
import { services } from "./data";

const P = {
  video: "M4 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4zM18 10l4-3v10l-4-3",
  web: "M3 5h18v14H3zM3 9h18M7 7h.01",
  ads: "M4 20V10M10 20V4M16 20v-8M22 20H2",
  seo: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  social: "M4 4h16v12H8l-4 4z",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  spark: "M12 3l2.2 6.3L21 12l-6.8 2.7L12 21l-2.2-6.3L3 12l6.8-2.7z",
  arrow: "M5 12h14M12 5l7 7-7 7",
  check: "M20 6 9 17l-5-5",
};
const Ico = ({ d, s = 22 }: { d: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

const tools = [["Pr", "Premiere Pro"], ["Ae", "After Effects"], ["Fg", "Figma"], ["N", "Next.js"], ["Ads", "Google Ads"], ["GA", "Analytics 4"], ["SC", "Search Console"], ["TM", "Tag Manager"]];
const steps = [
  ["Discovery", "We clarify the goal, the audience and the budget."],
  ["Strategy", "We write the roadmap, the KPIs and a precise timeline."],
  ["Execution", "Video production, website launch and campaigns."],
  ["Growth", "Monthly reporting and continuous optimization."],
];
const work = [
  ["Video", "Fashion brand teaser", "+2.4M views", "linear-gradient(135deg,#3a2a22,#241c17)", "/work-video.jpg"],
  ["Website", "Home goods online store", "+180% sales", "linear-gradient(135deg,#2f2a24,#1e1c18)", "/work-store.jpg"],
  ["Google Ads", "Aesthetics clinic campaign", "60% lower cost per lead", "linear-gradient(135deg,#4a2c1f,#2a1c15)", "/work-ads.jpg"],
];
const plans = [
  { n: "Starter", d: "For new businesses", f: ["Landing page design", "Core SEO setup", "4 short videos per month"], hot: false },
  { n: "Growth", d: "Most popular", f: ["Website + monthly SEO", "Google Ads management", "8 videos per month", "Monthly reporting"], hot: true },
  { n: "Custom", d: "For larger brands", f: ["Full strategy", "Dedicated team", "Unlimited production", "Weekly calls"], hot: false },
];
const reviews = [
  ["Within three months our cost per lead was cut in half, and the reporting was always transparent.", "Online store manager"],
  ["The videos captured exactly the feel of our brand. Delivery was always on time.", "Marketing manager"],
  ["The new site is much faster and our Google rankings improved. Working with the team was easy.", "Clinic operations manager"],
  ["It was the first time video, web and ads moved forward in sync from one place.", "Startup founder"],
  ["The monthly reports made it clear exactly where the budget was going.", "Digital manager"],
  ["Reels doubled our page engagement and we started getting more sales messages.", "Fashion brand owner"],
];
const faqs = [
  ["How long does a project take?", "A video edit usually takes 3–7 days, a website 2–4 weeks, and SEO and ads results can be tracked from the first month."],
  ["Can I hire just one service?", "Yes. Every service stands on its own, but combining them delivers better results."],
  ["How are reports delivered?", "Every month we send a transparent report with the numbers and the next steps."],
  ["How does pricing work?", "After a free consultation we send a clear quote with no hidden fees."],
];
const serviceNames = [...services.map((s) => s.title), "Multiple services / not sure"];

function Art({ slug }: { slug: string }) {
  if (slug === "video-editing") return (
    <div className="art"><div className="mc"><small>Video timeline</small>
      <div className="track"><span style={{ width: "62%" }} /><span style={{ width: "24%" }} /></div>
      <div className="track"><span style={{ width: "30%", marginInlineStart: "18%" }} /><span style={{ width: "40%" }} /></div>
      <div className="track"><span style={{ width: "76%" }} /></div></div></div>
  );
  if (slug === "web-design") return (
    <div className="art"><div className="mc mc--web"><div className="dots"><i /><i /><i /></div><b /><span /><span /><div className="blk"><i /><i /><i /></div></div></div>
  );
  if (slug === "google-ads") return (
    <div className="art art--stack">
      {[["Clicks", "+12%"], ["Cost per lead", "−30%"], ["Ad return", "3.5x"]].map(([l, v], i) => (
        <div key={l} className="srow" style={{ transform: `scale(${0.88 + i * 0.06})`, zIndex: i }}><span>{l}</span><b>{v}</b></div>
      ))}
    </div>
  );
  if (slug === "seo") return (
    <div className="art art--stripe"><div className="sbar"><span>Best … near me</span><em>Rank #1</em></div></div>
  );
  return (
    <div className="art"><div className="orb-s"><Ico d={P.social} s={26} /></div>
      {[[P.video, "12%", "18%"], [P.ads, "78%", "14%"], [P.seo, "14%", "74%"], [P.web, "80%", "72%"]].map(([d, x, y]) => (
        <span key={d} className="satel" style={{ insetInlineStart: x, top: y }}><Ico d={d} s={16} /></span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PageExtras />
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="hero container">
          <Reveal className="hero__text">
            <span className="tag"><span className="tag__ico"><Ico d={P.video} s={12} /><Ico d={P.ads} s={12} /><Ico d={P.seo} s={12} /></span>Video, web, ads and SEO in one system</span>
            <HeroTitle />
            <p className="lead">Video editing, web design, Google Ads and SEO in one team — so every part passes the customer on to the next.</p>
            <div className="hero__actions">
              <Magnetic><Link href="/#contact" className="btn btn--purple btn--lg">Talk to our team <Ico d={P.arrow} s={18} /></Link></Magnetic>
              <Link href="/#work" className="btn btn--ghost btn--lg">See our work</Link>
            </div>
            <div className="hero__proof">
              <span className="proof__av" aria-hidden="true"><span>N</span><span>A</span><span>M</span><span>S</span></span>
              <span>40+ brands growing with us</span>
            </div>
          </Reveal>

          <Reveal delay={150} className="hero__visual">
            {HERO_MODE === "video" ? <HeroMedia /> : <HeroVisual />}
            <div className="trio">
              {[[P.video, "Video editing", "Content people actually watch and remember."], [P.web, "Web & SEO", "A fast site that gets found on Google."], [P.ads, "Google Ads", "Campaigns where every dollar is accounted for."]].map(([d, t, s]) => (
                <div key={t}><span className="trio__i"><Ico d={d} s={18} /></span><b>{t}</b><p>{s}</p></div>
              ))}
            </div>
          </Reveal>
        </section>

        <Ticker />

        {/* STATEMENT */}
        <section className="container stmt">
          <Reveal className="stmt__main">
            <p>
              Instead of just making a <i className="chip"><Ico d={P.video} s={18} /></i> video, designing a <i className="chip"><Ico d={P.web} s={18} /></i> website, running <i className="chip"><Ico d={P.ads} s={18} /></i> ads, doing <i className="chip"><Ico d={P.seo} s={18} /></i> SEO and creating <i className="chip"><Ico d={P.social} s={18} /></i> content — we turn all of it into one sales machine
            </p>
          </Reveal>
          <Reveal className="stmt__trust">
            <small>Numbers, not claims</small>
            <div className="nums">
              {[[150, "+", "", 0, "Projects delivered"], [3.5, "", "x", 1, "Average ad return"], [40, "+", "", 0, "Brands on board"], [95, "", "%", 0, "Client retention"]].map(([n, p, s, d, l]) => (
                <div key={String(l)}><strong><Counter to={n as number} prefix={p as string} suffix={s as string} decimals={d as number} /></strong><span>{l}</span></div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PIPELINE */}
        <section className="section container pipe">
          <Reveal><h2 className="center">From scattered effort to predictable growth</h2></Reveal>
          <Reveal>
            <div className="pipe__row" aria-hidden="true">
              <div className="rail">{[P.ads, P.trend, P.seo].map((d) => <span key={d} className="node node--s"><Ico d={d} s={16} /></span>)}</div>
              <div className="pie"><div className="pie__bg" /><div className="orb"><Ico d={P.spark} s={26} /></div>
                <b className="lbl lbl--t">Video</b><b className="lbl lbl--l">Google Ads</b><b className="lbl lbl--r">SEO</b><b className="lbl lbl--b">Website</b></div>
              <div className="rail">{[P.social, P.web, P.video].map((d) => <span key={d} className="node node--s"><Ico d={d} s={16} /></span>)}</div>
            </div>
            <p className="sub center">Growth doesn't happen by itself. We turn scattered channels into one closed loop: attract with video and ads, convert with your website, retain with SEO and reporting.</p>
          </Reveal>
        </section>

        {/* SERVICES BENTO */}
        <section id="services" className="container">
          <Reveal><span className="eyebrow">01 — Services</span><h2>Everything you need to be seen and to sell</h2></Reveal>
          <div className="bento">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80} variant="scale" className={`bc ${i === 3 ? "bc--wide" : ""}`}>
                <Tilt className="bc__in">
                  <Art slug={s.slug} />
                  <h3>{s.title}</h3><p>{s.short}</p>
                  <Link href={`/services/${s.slug}`} className="b__more">Learn more →</Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TOOLS */}
        <section className="section container center">
          <Reveal><h2 className="center">We work with the tools the industry trusts</h2><p className="sub center">From editing and design to advertising and analytics — everything runs on platforms the industry relies on.</p></Reveal>
          <ul className="tiles">{tools.map(([a, n], i) => <Reveal as="li" key={n} delay={i * 45} variant="scale"><span dir="ltr">{a}</span><small dir="ltr">{n}</small></Reveal>)}</ul>
        </section>

        {/* WORK */}
        <section id="work" className="container">
          <Reveal><span className="eyebrow">02 — Selected work</span><h2>Results that speak for themselves</h2></Reveal>
          <div className="work">
            {work.map(([tag, title, res, bg, img], i) => (
              <Reveal key={title} delay={i * 100} variant="mask">
                <a href="#contact" className="w">
                  <div className="w__img" style={{ background: bg }}>
                    <img src={img} alt={`${title} — ${tag} case study`} width={1200} height={900} loading="lazy" />
                    <span className="w__tag">{tag}</span>
                    <span className="w__view">View case →</span>
                  </div>
                  <h3>{title}</h3><p>{res}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section container process">
          <Reveal><span className="eyebrow">03 — Process</span><h2>Four steps to results</h2></Reveal>
          <ol>{steps.map(([t, d], i) => (<Reveal as="li" key={t} delay={i * 80}><b>0{i + 1}</b><div><h3>{t}</h3><p>{d}</p></div></Reveal>))}</ol>
        </section>

        {/* TEAM */}
        <section id="team" className="container">
          <Reveal><span className="eyebrow">04 — Team</span><h2>The people behind the results</h2></Reveal>
          <div className="team">
            {[["N", "Team member", "Project lead"], ["A", "Team member", "Senior video editor"], ["M", "Team member", "Web developer"], ["S", "Team member", "Google Ads & SEO specialist"]].map(([a, n, r], i) => (
              <Reveal key={r} delay={i * 80} variant="scale" className="member"><span>{a}</span><b>{n}</b><small>{r}</small></Reveal>
            ))}
          </div>
        </section>

        {/* COMPARE */}
        <section className="section container">
          <Reveal><span className="eyebrow">05 — The difference</span><h2>One team instead of several disconnected vendors</h2></Reveal>
          <Reveal>
            <div className="tablewrap"><table className="cmp">
              <thead><tr><th scope="col">Feature</th><th scope="col">Northline</th><th scope="col">Separate vendors</th></tr></thead>
              <tbody>{[["Video, website and ads in sync", true, false], ["One point of contact for everything", true, false], ["A single monthly report", true, false], ["Transparent pricing before we start", true, true], ["No forced long-term contracts", true, false]].map(([f, a, b]) => (
                <tr key={String(f)}><th scope="row">{f}</th><td>{a ? <span className="yes">✓</span> : "—"}</td><td>{b ? <span className="yes">✓</span> : "—"}</td></tr>
              ))}</tbody>
            </table></div>
          </Reveal>
        </section>

        {/* PRICING */}
        <section id="pricing" className="container">
          <Reveal><span className="eyebrow">06 — Pricing</span><h2>Simple choices, no hidden costs</h2></Reveal>
          <div className="plans">
            {plans.map((p, i) => (
              <Reveal key={p.n} delay={i * 100} variant="scale" className={`plan ${p.hot ? "plan--hot" : ""}`}>
                {p.hot && <span className="plan__tag">Recommended</span>}
                <h3>{p.n}</h3><p className="plan__d">{p.d}</p>
                <ul>{p.f.map((f) => <li key={f}><Ico d={P.check} s={16} />{f}</li>)}</ul>
                <a href="#contact" className={`btn ${p.hot ? "btn--purple" : "btn--dark"}`}>Get pricing</a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* REVIEWS MARQUEE */}
        <section className="section rv">
          <Reveal><h2 className="center">What our clients say</h2><p className="sub center">Transparent reporting, on-time delivery and measurable results.</p></Reveal>
          {[0, 1].map((row) => (
            <div key={row} className="rv__row" aria-hidden={row === 1}>
              <Marquee className={`rv__in ${row ? "rv__in--rev" : ""}`} duration={70} reverse={row === 1}>
                {[...reviews, ...reviews].map(([q, r], i) => (
                  <figure key={i}><blockquote>{q}</blockquote><figcaption><span className="av">{r[0]}</span><div><b>Client name</b><small>{r}</small></div></figcaption></figure>
                ))}
              </Marquee>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section id="faq" className="container faq">
          <Reveal><span className="eyebrow">07 — FAQ</span><h2>Before we start</h2></Reveal>
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}><details><summary>{q}</summary><p>{a}</p></details></Reveal>
          ))}
        </section>

        {/* CTA */}
        <section id="contact" className="container" style={{ marginTop: "3rem" }}>
          <Reveal className="cta">
            <div><h2>Let's start your project</h2><p>Fill in the form — we reply within 24 hours.</p></div>
            <ContactForm services={serviceNames} />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
