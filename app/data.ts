export type Service = {
  slug: string; title: string; short: string; intro: string; duration: string; kpi: string;
  deliverables: string[]; steps: [string, string][]; tools: string[]; faq: [string, string][];
};

export const services: Service[] = [
  {
    slug: "video-editing", title: "Video Editing", short: "Reels, teasers and brand films with rhythm, motion and professional sound design.",
    intro: "Video is the fastest way to get attention. We turn your raw footage into content that gets watched to the last second and drives action — a purchase, a call, a sign-up.",
    duration: "3–7 days", kpi: "View-through and click rate",
    deliverables: ["Reels and shorts for Instagram and YouTube", "Ad teasers for campaigns", "Motion graphics and logo animation", "Persian and English subtitles", "Color grading and sound mixing", "Multiple formats (9:16, 1:1, 16:9)"],
    steps: [["Brief & references", "We define the goal, the audience and the video style."], ["First cut", "The first version is delivered with rhythm and a story structure."], ["Review", "Up to two rounds of revisions based on your feedback."], ["Final delivery", "Optimized exports for every platform."]],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro"],
    faq: [["Do you also shoot the footage?", "Our focus is editing. If you need it, we can introduce a trusted film crew."], ["How many revisions do you include?", "Every project includes two full rounds of revisions."]],
  },
  {
    slug: "web-design", title: "Web Design", short: "Fast, minimal websites built with Next.js — ready to sell and ready for SEO.",
    intro: "Your website is your hardest-working salesperson, 24 hours a day. We build with Next.js so it loads fast, feels great on mobile and is ready for Google from day one.",
    duration: "2–4 weeks", kpi: "Speed, conversion rate and ranking",
    deliverables: ["Custom UI/UX design (no templates)", "Development with Next.js and TypeScript", "Fully responsive and accessible", "Technical SEO (meta, sitemap, structured data)", "Forms, CMS and CRM integration", "Analytics and conversion event setup"],
    steps: [["Architecture & wireframes", "We design the page structure and the user journey."], ["Visual design", "A full Figma preview, approved by you."], ["Development", "Coding, data integration and testing across devices."], ["Launch & support", "Deployment, training and support after launch."]],
    tools: ["Next.js", "TypeScript", "Figma", "Vercel", "GA4"],
    faq: [["Do you build online stores too?", "Yes — stores with checkout and order management are fully supported."], ["Do you offer support after launch?", "Yes, one support period is free, with optional monthly maintenance."]],
  },
  {
    slug: "google-ads", title: "Google Ads", short: "Search and remarketing campaigns focused on lowering your cost per lead.",
    intro: "Every click costs money. We build campaigns so your budget only goes to buyers' searches, and improve them every week based on the data.",
    duration: "Live in 7 days", kpi: "Cost per acquisition (CPA) and ROAS",
    deliverables: ["Keyword research and account structure", "Search, display and remarketing campaigns", "Ad copy and A/B testing", "Landing page and conversion rate optimization", "Conversion tracking with GA4 and Tag Manager", "Monthly report and action plan"],
    steps: [["Audit & goals", "We review the current account and your sales goals."], ["Launch", "Campaign build and precise conversion tracking."], ["Weekly optimization", "Cut wasted keywords and double down on winners."], ["Scaling", "With proven results, we scale the budget intelligently."]],
    tools: ["Google Ads", "GA4", "Tag Manager", "Looker Studio"],
    faq: [["What's the minimum budget?", "It depends on the industry; in a free consultation we'll give you a realistic number."], ["Is ad spend billed separately?", "Yes — ad spend goes directly to your Google account and our fee is separate."]],
  },
  {
    slug: "seo", title: "SEO & Content", short: "Technical SEO, content and link building for rankings that last.",
    intro: "SEO is a long-term investment: traffic that doesn't disappear when you pause the budget. We strengthen your site technically, editorially and in authority.",
    duration: "First results in 2–3 months", kpi: "Organic traffic and keyword rankings",
    deliverables: ["Full technical site audit", "Keyword research and content map", "Content production and optimization", "On-page SEO and internal linking", "White-hat link building", "Monthly ranking and traffic reports"],
    steps: [["Audit", "We find technical issues and growth opportunities."], ["Content map", "Topics based on what your audience actually searches for."], ["Production & optimization", "Publish quality content and fix existing pages."], ["Authority & tracking", "Link building and month-by-month tracking."]],
    tools: ["Search Console", "Semrush", "Ahrefs", "Screaming Frog"],
    faq: [["How long until I see results?", "Usually 2–6 months; nobody can honestly promise instant results."], ["Do you guarantee the #1 spot?", "No. Guaranteed rankings aren't honest; we commit to measurable growth."]],
  },
  {
    slug: "social-media", title: "Social Media", short: "Content calendars, post design and full page management.",
    intro: "A page that publishes organized, purposeful content builds trust. We manage everything from the idea to publishing and analysis.",
    duration: "Live in 5 days", kpi: "Audience growth and engagement",
    deliverables: ["Monthly content calendar", "Post, story and cover design", "Copywriting and hashtags", "Consistency with your reels", "Community replies and comment management", "Monthly engagement report"],
    steps: [["Brand discovery", "We define the tone and the target audience."], ["Content calendar", "A monthly plan for your approval."], ["Production & publishing", "Design and publish on schedule."], ["Analysis", "Review results and adjust the direction."]],
    tools: ["Canva", "Figma", "Meta Business Suite", "Later"],
    faq: [["Do you manage the page yourselves?", "Yes, with manager access; we never need your password."], ["Do you also run Instagram ads?", "Yes, available separately and easy to combine with page management."]],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
