import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, ORG_SCHEMA } from "../config/site";
import { photo, PHOTOS } from "../data/images";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object | object[];
}

function setTag(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Route-level SEO: unique title, meta description, canonical URL,
 * Open Graph / Twitter cards and optional page-level JSON-LD.
 */
export function useSEO({ title, description, path, image, jsonLd }: SeoProps) {
  useEffect(() => {
    const full = `${title} | ${SITE.name}`;
    const url = `${SITE.url}${path}`;
    const ogImage = image ?? photo(PHOTOS.heroJeep, 1200, 630);

    document.title = full;
    setTag('meta[name="description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    setTag('link[rel="canonical"]', "href", url, () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });

    const og: Record<string, string> = {
      "og:title": full,
      "og:description": description,
      "og:url": url,
      "og:type": "website",
      "og:site_name": SITE.name,
      "og:image": ogImage,
      "twitter:card": "summary_large_image",
      "twitter:title": full,
      "twitter:description": description,
      "twitter:image": ogImage,
    };
    Object.entries(og).forEach(([key, value]) => {
      const isTwitter = key.startsWith("twitter:");
      const selector = isTwitter ? `meta[name="${key}"]` : `meta[property="${key}"]`;
      setTag(selector, "content", value, () => {
        const m = document.createElement("meta");
        m.setAttribute(isTwitter ? "name" : "property", key);
        return m;
      });
    });

    // Page-level structured data (org schema is always included)
    const blocks = [ORG_SCHEMA, ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [])];
    const scripts: HTMLScriptElement[] = blocks.map((block) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seo = "route";
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
      return s;
    });
    return () => scripts.forEach((s) => s.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, JSON.stringify(jsonLd)]);
}

/** Scrolls to top on route change and to #anchors when a hash is present. */
export function RouteScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a tick for the target page to render
      const t = window.setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0 });
      }, 60);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}
