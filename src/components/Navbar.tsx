import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  X,
} from "lucide-react";
import { cn } from "../utils/cn";
import { SITE, BUSINESS_AREA } from "../config/site";
import { MAIN_NAV, type NavItem } from "../data/navigation";
import { ContactCTA } from "./ui/ContactCTA";
import { InstagramIcon, FacebookIcon } from "./icons/SocialIcons";

/* ── Brand mark ────────────────────────────────────────────────────────── */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <rect width="44" height="44" rx="10" fill="#163126" />
      <circle cx="30.5" cy="14.5" r="4.5" fill="#D4A017" />
      <path d="M6 30 L17.5 14 L26 24.5 L30 19.5 L38 30 Z" fill="#F5F0E6" />
      <path d="M6 33.5 H38" stroke="#52B788" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 37.5 H32" stroke="#52B788" strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={cn("text-[17px] font-extrabold tracking-[0.14em]", light ? "text-paper" : "text-forest-deep")}>
        SUKOON
      </span>
      <span className={cn("mt-1 text-[10px] font-bold tracking-[0.42em]", light ? "text-gold" : "text-gold-deep")}>
        SAFARI
      </span>
    </span>
  );
}

/* ── Top utility bar ───────────────────────────────────────────────────── */
function TopBar() {
  const phoneLink = `tel:${SITE.phoneHref}`;
  const phoneLinkSecondary = `tel:${SITE.phoneHrefSecondary}`;

  return (
    <div className="hidden bg-forest-deep text-paper/90 lg:block">
      <div className="wrap-wide flex h-9 items-center justify-between text-[12.5px] font-medium tracking-wide">
        <div className="flex items-center gap-2.5">
          <MapPin className="size-3.5 text-gold shrink-0" />
          <span className="font-bold tracking-[0.18em] uppercase">{SITE.name}</span>
          <span className="text-paper/40">|</span>
          <span className="text-paper/70">{BUSINESS_AREA}</span>
          <span className="text-paper/40">|</span>
          <div className="flex items-center gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-paper/85 transition-colors hover:text-gold"
            >
              <InstagramIcon className="size-3.5 text-gold" />
              <span className="text-[11.5px]">Instagram</span>
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-paper/85 transition-colors hover:text-gold"
            >
              <FacebookIcon className="size-3.5 text-gold" />
              <span className="text-[11.5px]">Facebook</span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href={phoneLink} className="flex items-center gap-1.5 transition-colors hover:text-gold">
            <Phone className="size-3.5" /> Call: {SITE.phoneDisplay}
          </a>
          <a href={phoneLinkSecondary} className="flex items-center gap-1.5 transition-colors hover:text-gold">
            <Phone className="size-3.5" /> {SITE.phoneDisplaySecondary}
          </a>
          <a href="/#reviews" className="flex items-center gap-1.5 transition-colors hover:text-gold">
            <Star className="size-3.5 text-gold" /> Google Reviews
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Desktop dropdown ──────────────────────────────────────────────────── */
function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-1 rounded-sm px-3.5 py-2 text-[15px] font-bold tracking-wide transition-colors",
            isActive ? "text-natural" : "text-ink/80 hover:text-forest",
          )
        }
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setOpen(false);
        }}
      >
        {item.label}
        <ChevronDown className={cn("size-3.5 transition-transform duration-200", open && "rotate-180 text-natural")} />
      </NavLink>
      <div
        className={cn(
          "absolute top-full left-1/2 w-72 -translate-x-1/2 pt-2 transition-all duration-200 z-50",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[var(--shadow-lift)]">
          <div className="h-0.5 bg-gradient-to-r from-gold via-sage to-natural" />
          <div className="px-4 py-2 bg-sand/60 border-b border-ink/8 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-earth-light">Explore 5 Safari Zones</span>
            <span className="text-[10.5px] font-semibold text-natural">Rajaji Park</span>
          </div>
          <ul className="py-1.5 divide-y divide-ink/5">
            {item.children!.map((c) => (
              <li key={c.label}>
                <Link
                  to={c.href}
                  onClick={() => setOpen(false)}
                  onFocus={() => setOpen(true)}
                  className="group flex flex-col px-4 py-2.5 transition-colors hover:bg-sand"
                >
                  <span className="text-[14px] font-bold text-forest-deep group-hover:text-natural flex items-center justify-between">
                    <span>{c.label}</span>
                    <span className="text-natural opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs">→</span>
                  </span>
                  {c.note && <span className="text-[12px] text-earth-light group-hover:text-earth">{c.note}</span>}
                </Link>
              </li>
            ))}
            <li className="p-2 bg-sand/40">
              <Link
                to="/safari"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md bg-forest px-3 py-2 text-[12.5px] font-bold text-paper transition-colors hover:bg-forest-deep"
              >
                <span>View All Zones & Full Guide</span>
                <span className="text-gold">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile drawer ─────────────────────────────────────────────────────── */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
    touchStartRef.current = null;

    // Swiped left on drawer -> close
    if (diffX > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      onClose();
    }
  };

  const handleNavClick = (href: string) => {
    onClose();
    if (href === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const phoneLink = `tel:${SITE.phoneHref}`;

  return (
    <div className={cn("fixed inset-0 z-[80] lg:hidden", !open && "pointer-events-none")}>
      <div
        className={cn("absolute inset-0 bg-forest-deep/60 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute top-0 left-0 flex h-full w-[86%] max-w-sm flex-col bg-forest-deep transition-transform duration-300 ease-out touch-pan-y",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        role="dialog"
        aria-label="Menu"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center justify-between border-b border-paper/10 px-5 py-4">
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2.5"
          >
            <LogoMark className="size-9" />
            <Wordmark light />
          </Link>
          <button onClick={onClose} aria-label="Close menu" className="grid size-9 place-items-center rounded-full border border-paper/25 text-paper">
            <X className="size-4.5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
          <ul className="divide-y divide-paper/8">
            {MAIN_NAV.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      aria-expanded={expanded === item.label}
                      className="flex w-full items-center justify-between py-3.5 text-[16px] font-bold text-paper"
                    >
                      {item.label}
                      <ChevronDown className={cn("size-4 text-sage transition-transform", expanded === item.label && "rotate-180")} />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300",
                        expanded === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <ul className="overflow-hidden">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link
                              to={c.href}
                              onClick={() => handleNavClick(c.href)}
                              className="block py-2 pl-4 text-[15px] font-medium text-sage-200/85 transition-colors hover:text-gold"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                        <li className="pb-2">
                          <Link
                            to={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className="block py-2 pl-4 text-[15px] font-bold text-gold"
                          >
                            View all →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block py-3.5 text-[16px] font-bold text-paper"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-5 w-full flex flex-col gap-3">
            <ContactCTA type="whatsapp" text="Book on WhatsApp" className="w-full text-forest-deep hover:text-forest-deep border-none bg-gold hover:bg-[#c4930f] hover:shadow-[var(--shadow-lift)]" />
          </div>

          {/* Unified Contact, Social & Live Location Card */}
          <div className="mt-6 overflow-hidden rounded-xl border border-paper/15 bg-paper/5 shadow-md">
            {/* Contact & Hours */}
            <div className="p-4 space-y-2.5 text-[13.5px] text-paper/85">
              <p className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase mb-1">Contact & Support</p>
              <a href={phoneLink} className="flex items-center gap-2.5 font-semibold text-paper transition-colors hover:text-gold">
                <Phone className="size-4 text-gold shrink-0" /> {SITE.phoneDisplay}
              </a>
              <a href={`tel:${SITE.phoneHrefSecondary}`} className="flex items-center gap-2.5 font-semibold text-paper transition-colors hover:text-gold">
                <Phone className="size-4 text-gold shrink-0" /> {SITE.phoneDisplaySecondary}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                <Mail className="size-4 text-gold shrink-0" /> {SITE.email}
              </a>
              <p className="flex items-center gap-2.5 text-paper/75">
                <Clock className="size-4 text-gold shrink-0" /> {SITE.hours}
              </p>
            </div>

            {/* Follow & Connect */}
            <div className="border-t border-paper/10 bg-black/20 p-4">
              <p className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">Follow & Connect</p>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-paper/15 bg-paper/10 px-3 py-2 text-[12.5px] font-bold text-paper transition-all hover:border-gold hover:text-gold"
                >
                  <InstagramIcon className="size-3.5 text-gold shrink-0" />
                  <span className="truncate">Instagram</span>
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-paper/15 bg-paper/10 px-3 py-2 text-[12.5px] font-bold text-paper transition-all hover:border-gold hover:text-gold"
                >
                  <FacebookIcon className="size-3.5 text-gold shrink-0" />
                  <span className="truncate">Facebook</span>
                </a>
              </div>
              <a
                href={SITE.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-2 rounded-lg border border-gold/40 bg-gold/15 px-3 py-2 text-[12.5px] font-bold text-gold transition-all hover:bg-gold hover:text-forest-deep"
              >
                <Star className="size-3.5 fill-gold shrink-0 text-gold" />
                <span>Google Reviews & Directions</span>
              </a>
            </div>

            {/* Live Map & Location */}
            <div className="border-t border-paper/10">
              <div className="relative aspect-[16/10] w-full bg-neutral-900">
                <iframe
                  title="Sukoon Safari Google Map Location"
                  src={SITE.googleMapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
                <a
                  href={SITE.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 rounded bg-white px-2.5 py-1 text-[11.5px] font-bold text-blue-600 shadow-md transition-colors hover:bg-slate-100"
                >
                  <span>Open in Maps</span>
                  <span className="text-[10px]">↗</span>
                </a>
                <span className="absolute bottom-2.5 right-2.5 z-10 rounded bg-black/75 px-2 py-0.5 text-[10px] font-bold text-gold backdrop-blur-xs">
                  Live GPS
                </span>
              </div>
              <div className="bg-forest-deep/90 p-3 text-[12px] border-t border-paper/10 text-paper">
                <p className="font-bold text-paper">{SITE.name}</p>
                <p className="mt-0.5 text-[11px] text-sage-200/80">{SITE.addressLines[0]} · {SITE.addressLines[1]}</p>
              </div>
            </div>
            {/* Developer credit */}
            <a
              href={SITE.devInfo.url.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 mb-2 block text-center text-[11.5px] font-medium tracking-wide text-sage-200/60 transition-colors hover:text-gold"
            >
              Site developed by <span className="font-semibold text-sage-200/80">Samarpan Jayswal</span>{" "}
              <span className="text-gold/70">~owsam22</span>
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
}

/* ── Header ────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const closeDrawer = () => {
    setDrawer(false);

    requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  };

  useEffect(() => {
  if (!drawer) {
    requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  }
}, [drawer]);

  useEffect(() => {
    
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      // hysteresis: only turn ON past 64px, only turn OFF below 24px
      setScrolled((prev) => {
        if (!prev && y > 64) return true;
        if (prev && y < 24) return false;
        return prev;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Global swipe gesture from left half of screen to open / close hamburger menu on mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const isLeftHalf = touchStartX <= (window.innerWidth * 0.55);

      // Swiping right from left half of screen -> Open drawer
      if (!drawer && isLeftHalf && diffX > 45 && Math.abs(diffX) > Math.abs(diffY)) {
        setDrawer(true);
      }
      // Swiping left when drawer is open -> Close drawer
      else if (drawer && diffX < -45 && Math.abs(diffX) > Math.abs(diffY)) {
        setDrawer(false);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [drawer]);

  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I'd like to plan a safari.")}`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* TopBar collapses away on scroll — main row below never moves */}
        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100",
          )}
        >
          <TopBar />
        </div>

        <div
          className={cn(
            "border-b bg-paper/95 backdrop-blur transition-shadow duration-300",
            scrolled ? "border-ink/10 shadow-[var(--shadow-card)]" : "border-transparent",
          )}
        >
          <div className="wrap-wide flex h-16 items-center justify-between gap-3 lg:h-[68px]">
            {/* Mobile: menu */}
            <button
              ref={menuButtonRef}
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-md border border-ink/15 text-forest-deep lg:hidden"
            >
              <Menu className="size-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2.5"
              aria-label={`${SITE.name} — home`}
            >
              <LogoMark className="size-10" />
              <Wordmark />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center lg:flex" aria-label="Primary">
              {MAIN_NAV.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    onClick={() => {
                      if (item.href === "/" && location.pathname === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={({ isActive }) =>
                      cn(
                        "rounded-sm px-3 py-2 text-[15px] font-bold tracking-wide transition-colors",
                        isActive ? "text-natural" : "text-ink/80 hover:text-forest",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2.5">
              {/* Mobile: WhatsApp quick action — subtle outline matching menu button on left */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="grid size-10 place-items-center rounded-md border border-natural/40 bg-paper text-natural transition-colors hover:bg-sage-100/50 active:scale-95 lg:hidden"
              >
                <MessageCircle className="size-5" />
              </a>
              <div className="hidden sm:block">
                <ContactCTA type="whatsapp" text="Book on WhatsApp" className="rounded-md bg-gold px-5 py-2.5 text-[14.5px] font-bold tracking-wide text-forest-deep transition-all hover:bg-[#c4930f] hover:shadow-[var(--shadow-lift)]" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer — keeps page content from sliding under the fixed header,
          and shrinks in sync with the TopBar collapsing */}
      <div className={cn("transition-[height] duration-300", scrolled ? "h-16 lg:h-[68px]" : "h-16 lg:h-[104px]")} />

      <MobileDrawer open={drawer} onClose={closeDrawer} />
    </>
  );
}

/* ── Sticky mobile CTA bar ─────────────────────────────────────────────── */
export function MobileCTA() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I'd like to plan a safari.")}`;
  const phoneLink = `tel:${SITE.phoneHref}`;

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-paper pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_-12px_rgb(22_49_38/0.4)] lg:hidden"
    >
      <a href={phoneLink} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[12px] font-bold tracking-wider text-forest-deep border-r border-ink/10">
        <Phone className="size-4.5 text-natural" /> CALL NOW
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[12px] font-bold tracking-wider text-paper bg-[#1f9e53]"
      >
        <MessageCircle className="size-4.5" /> WHATSAPP
      </a>
    </nav>
  );
}
