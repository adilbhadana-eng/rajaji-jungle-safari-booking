import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { BUSINESS_AREA, SITE, DISCLAIMERS } from "../config/site";
import { FOOTER_NAV } from "../data/navigation";
import { LogoMark, Wordmark } from "./Navbar";
import { ContactCTA } from "./ui/ContactCTA";
import { InstagramIcon, FacebookIcon } from "./icons/SocialIcons";

export function Footer() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I'd like to plan a safari.")}`;
  const phoneLink = `tel:${SITE.phoneHref}`;

  return (
    <footer className="topo relative overflow-hidden bg-forest-deep text-paper" aria-label="Footer">
      <div className="wrap relative pt-16 pb-28 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          {/* Brand + contact */}
          <div>
            <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} — home`}>
              <LogoMark className="size-11" />
              <Wordmark light />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-sage-200/80">{SITE.description}</p>

            <ul className="mt-6 space-y-2.5 text-[14.5px]">
              <li>
                <a href={phoneLink} className="flex items-center gap-2.5 font-semibold text-paper transition-colors hover:text-gold">
                  <Phone className="size-4 text-gold" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneHrefSecondary}`} className="flex items-center gap-2.5 font-semibold text-paper transition-colors hover:text-gold">
                  <Phone className="size-4 text-gold" /> {SITE.phoneDisplaySecondary}
                </a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <MessageCircle className="size-4 text-gold" /> WhatsApp {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Mail className="size-4 text-gold" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-paper/75">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <a
                  href={SITE.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {SITE.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={SITE.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-paper/25 px-3.5 py-2 text-[13px] font-bold tracking-wide transition-colors hover:border-gold hover:text-gold"
              >
                <Star className="size-3.5 text-gold" /> Google Business & Reviews <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @adil_on_safari"
                title="Instagram @adil_on_safari"
                className="grid size-9 place-items-center rounded-md border border-paper/25 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook @safariwithAadil"
                title="Facebook @safariwithAadil"
                className="grid size-9 place-items-center rounded-md border border-paper/25 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4" aria-label="Footer navigation">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <h3 className="text-[12px] font-bold tracking-[0.22em] text-gold uppercase">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href === "__google__" ? (
                        <a
                          href={SITE.googleProfileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14.5px] text-paper/75 transition-colors hover:text-gold"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link to={l.href} className="text-[14.5px] text-paper/75 transition-colors hover:text-gold">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 mt-2 flex flex-col gap-4 border-t border-paper/12 pt-5 sm:col-span-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase">Plan your safari</p>
                <p className="mt-1 font-serif text-xl text-paper">Tell us when you want to head into the forest.</p>
                <p className="mt-1 text-[13px] text-sage-200/70">Serving {BUSINESS_AREA}</p>
              </div>
              <ContactCTA type="whatsapp" text="Start on WhatsApp" className="text-forest-deep bg-gold hover:bg-[#c4930f] hover:shadow-[var(--shadow-lift)]" />
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-paper/12 pt-6">
          <p className="max-w-3xl text-[12.5px] leading-relaxed text-paper/50">{DISCLAIMERS.assistance} {DISCLAIMERS.wildlife}</p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-[13px] text-paper/60 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
              <span className="hidden sm:inline text-paper/30">•</span>
              <span>
                Site developed by{" "}
                <a
                  href={SITE.devInfo.url.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold hover:underline transition-colors"
                >
                  {SITE.devInfo.name}
                </a>
              </span>
            </div>
            <p className="flex items-center gap-2">
              <span className="inline-block size-1.5 rounded-full bg-gold" aria-hidden="true" />
              {SITE.hours}
            </p>
          </div>
        </div>

        {/* Watermark */}
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 font-serif text-[17vw] leading-none tracking-tight whitespace-nowrap text-paper/[0.045] select-none lg:text-[10.5rem]">
          SUKOON SAFARI
        </div>
      </div>
    </footer>
  );
}