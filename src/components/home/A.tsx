import { Link } from "react-router-dom";
import { MapPinned, BadgeCheck, ArrowRight, Navigation } from "lucide-react";
import { photo, PHOTOS } from "../../data/images";
import { RAJAJI_ZONES } from "../../data/safaris";
import { SITE } from "../../config/site";
import { ArrowLink, Reveal, SectionHead } from "../ui";
import { ContactCTA } from "../ui/ContactCTA";
import { RajajiMapViewer } from "../RajajiMapViewer";

/* ══ 1. HERO ═══════════════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950" aria-label="Introduction">
      <img
        src={photo(PHOTOS.heroJeep, 1680, 1050)}
        alt={PHOTOS.heroJeep.alt}
        width={1680}
        height={1050}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      {/* Top-left linear dark gradient overlays to pop white text clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" aria-hidden="true" />

      <div className="wrap relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-8 sm:min-h-[88svh] sm:justify-end sm:py-14 md:min-h-[92svh] md:pt-28 md:pb-16">
        <Reveal>
          {/* Eyebrow Tagline Pill */}
          <div className="inline-flex items-center gap-3.5 rounded-xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
            <div className="flex flex-col text-left">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.22em] text-gold uppercase leading-tight">RAJAJI NATIONAL</span>
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.22em] text-gold uppercase leading-tight">PARK</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex flex-col text-left">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.22em] text-paper/90 uppercase leading-tight">SAFARI</span>
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.22em] text-paper/90 uppercase leading-tight">EXPERIENCES</span>
            </div>
            <div className="hidden h-px w-10 bg-white/25 sm:block" />
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-paper text-balance text-[clamp(2.5rem,7.2vw,4.75rem)] leading-[1.08] tracking-tight">
            Discover the forests of <em className="text-gold italic font-serif">Rajaji</em> with{" "}
            <span className="inline-block rounded-md border-2 border-gold/70 bg-black/20 px-3 py-0.5 backdrop-blur-sm">
              <em className="text-paper italic font-serif">Sukoon Safari</em>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-[1.04rem] sm:text-[1.1rem] leading-relaxed text-paper/90">
            Experienced local drivers, guides and naturalists, carefully curated safari experiences across the park’s diverse zones.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
            <ContactCTA
              type="whatsapp"
              text="Explore Safari Packages"
              message="Hello Sukoon Safari, I would like to explore safari packages and book a safari in Rajaji National Park."
              className="w-full sm:w-auto rounded-xl bg-gold px-7 py-3.5 sm:px-8 sm:py-4 text-[15.5px] sm:text-[16px] font-bold text-forest-deep shadow-lg shadow-gold/25 transition-all hover:bg-[#c4930f] hover:shadow-gold/35 active:scale-[0.98]"
            />
            <a
              href="#safaris"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/35 px-6 py-3.5 sm:py-4 text-[15.5px] sm:text-[16px] font-bold tracking-wide text-paper backdrop-blur-md transition-all hover:bg-black/55 hover:border-white/50 active:scale-[0.98]"
            >
              <span>View Safari Zones</span>
              <ArrowRight className="size-4 text-gold" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ 2. QUICK FACTS (Moving Ticker) ═════════════════════════════════════ */
export function QuickFacts() {
  const facts = [
    "Rajaji National Park",
    "4×4 Gypsy",
    "Up to 6 Adults + 1 Child",
    "Multiple Safari Zones",
    "Haridwar / Rishikesh / Dehradun Pickup Available",
  ];

  return (
    <section
      className="relative overflow-hidden border-y border-ink/10 bg-paper py-3.5 sm:py-4 select-none"
      aria-label="Quick Safari Facts"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
          {/* Repeated items for seamless infinite loop */}
          {[...facts, ...facts, ...facts, ...facts].map((fact, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 text-[13px] sm:text-[14.5px] font-bold tracking-wider text-forest-deep uppercase"
            >
              <span className="size-2 sm:size-2.5 rounded-full bg-gold shadow-xs" />
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ 3. SAFARI ZONES (Placed First) ═════════════════════════════════════ */
export function SafariZones() {
  return (
    <section id="safaris" className="topo-light bg-sand py-20 sm:py-24" aria-label="Safari Zones">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead
            index="01"
            eyebrow="Explore Rajaji"
            title={<>Five zones, one wild <em className="text-natural">experience</em></>}
            lead="Every zone of Rajaji offers a different perspective of the wilderness. Click any zone to view complete details, locations, and pricing."
          />
          <ArrowLink to="/safari" className="pb-1">
            View all zone details
          </ArrowLink>
        </Reveal>
        
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RAJAJI_ZONES.map((zone, i) => (
            <Reveal key={zone.id} delay={i * 80} className="flex">
              <div className="group flex w-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-300 hover:border-natural/30 hover:shadow-[var(--shadow-card)]">
                <Link to={`/safari#${zone.id}`} className="relative aspect-[4/3] overflow-hidden block">
                  <img
                    src={photo(zone.photo, 600, 450)}
                    alt={zone.name}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  {zone.popular && (
                    <div className="absolute top-3 right-3 rounded bg-gold px-2.5 py-1 text-[11px] font-bold tracking-wider text-forest-deep uppercase shadow-sm">
                      Recommended
                    </div>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-md bg-forest-deep/85 px-2.5 py-1 text-[11.5px] font-semibold text-paper opacity-0 backdrop-blur-xs transition-all group-hover:opacity-100">
                    View Zone Details →
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <Link to={`/safari#${zone.id}`} className="group/title flex items-center justify-between">
                    <h3 className="font-serif text-xl font-medium text-forest-deep transition-colors group-hover/title:text-natural">
                      {zone.name}
                    </h3>
                    <ArrowRight className="size-4 text-natural opacity-0 -translate-x-1 transition-all group-hover/title:opacity-100 group-hover/title:translate-x-0" />
                  </Link>
                  <p className="mt-2 text-[14px] leading-relaxed text-earth">{zone.blurb}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {zone.bestFor.slice(0, 2).map((b) => (
                      <span key={b} className="rounded bg-sage-100 px-2 py-0.5 text-[11px] font-bold text-natural uppercase">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 flex items-center justify-between gap-2 border-t border-ink/5 mt-4">
                    <Link
                      to={`/safari#${zone.id}`}
                      className="text-[13px] font-bold text-natural hover:text-forest-deep transition-colors"
                    >
                      Details & Rates →
                    </Link>
                    <ContactCTA type="whatsapp" text="Enquire" variant="outline" message={`Hi Sukoon Safari, I would like to enquire about booking the ${zone.name}.`} className="px-3.5 py-1.5 text-[13px]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* 6th Card: Real Google Map Location */}
          <Reveal delay={450} className="flex">
            <div className="flex w-full flex-col overflow-hidden rounded-xl border border-gold/40 bg-paper text-ink shadow-[var(--shadow-card)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <iframe
                  title="Sukoon Safari Location Map"
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
                <span className="absolute bottom-2.5 right-2.5 z-10 rounded bg-black/75 px-2 py-0.5 text-[10.5px] font-bold text-gold backdrop-blur-xs">
                  Live Map
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-medium text-forest-deep">{SITE.name} Office & Map</h3>
                  <span className="rounded bg-sage-100 px-2 py-0.5 text-[11px] font-bold text-natural uppercase">Live GPS</span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-earth">
                  Located at Chilla Road Forest Check Post. Direct GPS access for Chilla, Motichur, Ranipur & Jhilmil Jheel gates.
                </p>

                <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-ink/8 mt-4">
                  <Link
                    to="/how-to-reach"
                    className="text-[13px] font-bold text-natural hover:text-forest-deep transition-colors"
                  >
                   <MapPinned className="size-3.5" /> Route & Gate Guide →
                  </Link>
                  <a
                    href={SITE.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-gold px-3.5 py-1.5 text-[13px] font-bold text-forest-deep transition-all hover:bg-[#c4930f]"
                  >
                    <Navigation className="size-3.5" /> Directions
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══ 4. ABOUT PREVIEW (Who We Are + Rajaji Zone Map) ═══════════════════ */
export function AboutPreview() {
  return (
    <section className="bg-paper py-16 sm:py-20 md:py-24" aria-label="Who we are & Rajaji National Park Overview">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Story & SEO Content */}
        <Reveal className="lg:col-span-6">
          <SectionHead
            index="02"
            eyebrow="Who we are"
            title={
              <>
                Experience <em className="text-gold italic font-serif">Rajaji National Park</em> with{" "}
                <em className="text-natural">Sukoon Safari</em>
              </>
            }
          />
          <div className="mt-5 space-y-4 text-[15px] sm:text-[16.5px] leading-relaxed text-earth">
            <p>
              We are a dedicated local wildlife safari and nature team based in the Shivalik foothills of Rishikesh and Haridwar. We arrange official 4×4 Gypsy safaris across all sectors of <strong>Rajaji National Park</strong> (820.42 km² Tiger & Elephant Reserve).
            </p>
            <p>
              With experienced driver-guides from the local Van Gujjar community, we help you choose the best safari zone—from high elephant densities in <em>Chilla</em> to dense Sal forests of <em>Motichur</em>, rocky ridges of <em>Ranipur</em>, and the rare Barasingha wetlands of <em>Jhilmil Jheel</em>.
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-[14.5px] font-medium text-ink/85">
            {[
              "Official Forest Gypsy Permits",
              "Local Van Gujjar Naturalists",
              "Tiger & Elephant Corridors",
              "Haridwar & Rishikesh Transfers",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <BadgeCheck className="size-4.5 shrink-0 text-natural" /> {t}
              </li>
            ))}
          </ul>

          {/* Quick Stat Badges */}
          <div className="mt-7 grid grid-cols-3 gap-2.5 rounded-xl border border-ink/10 bg-sand p-3 sm:p-4 text-center">
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-forest-deep">820 km²</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-earth-light uppercase tracking-wider">Park Area</span>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-forest-deep">500+</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-earth-light uppercase tracking-wider">Wild Elephants</span>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold text-forest-deep">5 Zones</span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-earth-light uppercase tracking-wider">Safari Gates</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <ArrowLink to="/about">Read Our Full Story</ArrowLink>
            <Link
              to="/safari"
              className="text-[14px] font-bold text-forest-deep underline decoration-gold decoration-2 underline-offset-4 hover:text-natural transition-colors"
            >
              Explore Safari Zones →
            </Link>
          </div>
        </Reveal>

        {/* Right Column: Bold, Shouting Zonation Map */}
        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/20 via-natural/20 to-gold/20 blur-xl opacity-70" aria-hidden="true" />
            <RajajiMapViewer badge="Rajaji National Park · Zonation Map" showLegend={true} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
