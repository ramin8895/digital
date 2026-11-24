import Marquee from "./Marquee";

const items = ["Video Editing", "Web Design", "Google Ads", "SEO", "Social Media", "Motion Graphics", "Data Analytics", "Brand Growth"];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <Marquee className="ticker__in" duration={34}>
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}<i /></span>
        ))}
      </Marquee>
    </div>
  );
}
