import type { MetadataRoute } from "next";
import { services } from "./data";
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site, lastModified: new Date() }, ...services.map((s) => ({ url: `${site}/services/${s.slug}`, lastModified: new Date() }))];
}
