import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Camera,
  Clock,
  Compass,
  IndianRupee,
  Footprints,
  Info,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Sunset,
  Trees,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { photo } from "../data/images";
import { RAJAJI_ZONES } from "../data/safaris";
import { SITE } from "../config/site";
import { PageHero, Reveal, SectionHead, Tag } from "../components/ui";
import { MetaChip } from "../components/cards";
import { ContactCTA } from "../components/ui/ContactCTA";
import { cn } from "../utils/cn";
import { RajajiMapViewer } from "../components/RajajiMapViewer";


const TIMINGS = [
  {
    icon: Sun,
    slot: "Morning Safari",
    periods: [
      { label: "15 Nov – 15 Feb", time: "6:30 AM – 10:00 AM" },
      { label: "16 Feb – 15 Apr", time: "6:00 AM – 9:30 AM" },
      { label: "16 Apr – 15 Jun", time: "5:30 AM – 9:00 AM" },
    ],
    note: "Cooler air, highly active wildlife and fresh tracks. Best light for wildlife and landscape photography.",
  },
  {
    icon: Sunset,
    slot: "Afternoon Safari",
    periods: [
      { label: "15 Nov – 15 Feb", time: "1:30 PM – 5:30 PM" },
      { label: "16 Feb – 15 Apr", time: "2:00 PM – 6:00 PM" },
      { label: "16 Apr – 15 Jun", time: "3:00 PM – 7:00 PM" },
    ],
    note: "Animals frequent waterholes as the day warms. Softer golden-hour lighting across the Shivalik ridgelines.",
  },
];

export default function SafariPage() {
  const location = useLocation();

  // Scroll to hash target on load / change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [location.hash]);

  useSEO({
    title: "Safari Zones — Rajaji National Park Safari Zones, Locations & Timings",
    description:
      "Explore the five safari zones of Rajaji National Park: Chilla, Chilla Wali, Ranipur, Jhilmil Jheel and Motichur. Exact gate locations, wildlife sightings, timings, and pricing.",
    path: "/safari",
  });

  return (
    <>
      <PageHero
        section="Chilla · Chilla Wali · Ranipur · Jhilmil Jheel · Motichur"
        crumb="Safari Zones"
        title={<>Explore Rajaji<em className="text-gold"> zone by zone</em></>}
        lead="Each zone of Rajaji National Park offers a distinct landscape, wildlife sighting profile, and entry gate. Browse the zone profiles, gate locations, and rates below."
      />

      {/* Quick Zone Navigation Pills */}
      <section className="sticky top-16 z-30 border-b border-ink/10 bg-paper/95 py-3 backdrop-blur shadow-xs">
        <div className="wrap flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="shrink-0 text-[12px] font-bold uppercase tracking-wider text-earth-light mr-1">
            Jump to Zone:
          </span>
          {RAJAJI_ZONES.map((zone) => (
            <a
              key={zone.id}
              href={`#${zone.id}`}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition-all",
                location.hash === `#${zone.id}`
                  ? "bg-forest-deep text-gold"
                  : "bg-sand text-ink hover:bg-beige"
              )}
            >
              {zone.name}
            </a>
          ))}
          <Link
            to="/pricing"
            className="ml-auto shrink-0 inline-flex items-center gap-1 rounded-full bg-gold/15 px-3.5 py-1.5 text-[13px] font-bold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep"
          >
            <IndianRupee  className="size-3.5" /> Full Price List →
          </Link>
        </div>
      </section>

      {/* Zone detail blocks */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap space-y-18">
          {RAJAJI_ZONES.map((zone, i) => (
            <Reveal key={zone.id}>
              <article
                id={zone.id}
                className="scroll-mt-32 rounded-2xl border border-ink/10 bg-sand/40 p-6 sm:p-8 lg:p-10 transition-all hover:border-natural/30 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Photo & Badge */}
                  <div className={cn(i % 2 === 1 && "lg:order-2")}>
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 h-full w-full rounded-xl border border-beige" aria-hidden="true" />
                      <img
                        src={photo(zone.photo, 1000, 700)}
                        alt={zone.name}
                        width={1600}
                        height={1100}
                        loading="lazy"
                        decoding="async"
                        className="relative aspect-[16/11] w-full rounded-xl object-cover shadow-sm"
                      />
                      {zone.popular && (
                        <div className="absolute top-4 right-4 rounded-md bg-gold px-3 py-1.5 text-[11.5px] font-bold tracking-wider text-forest-deep uppercase shadow-md">
                          Recommended
                        </div>
                      )}
                    </div>

                    {/* Zone Quick Highlights Box */}
                    <div className="mt-5 rounded-xl border border-ink/10 bg-paper p-4 shadow-xs">
                      <div className="grid grid-cols-2 gap-3 text-[13px]">
                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-earth-light">Safari Track</span>
                          <span className="font-semibold text-forest-deep flex items-center gap-1 mt-0.5">
                            <Compass className="size-3.5 text-natural" /> {zone.trackLength}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[11px] font-bold uppercase tracking-wider text-earth-light">Duration</span>
                          <span className="font-semibold text-forest-deep flex items-center gap-1 mt-0.5">
                            <Clock className="size-3.5 text-natural" /> {zone.duration}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-ink/8">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-earth-light">Terrain & Landscape</span>
                        <p className="text-[13px] font-medium text-earth mt-0.5 flex items-start gap-1.5">
                          <Trees className="size-3.5 text-natural mt-0.5 shrink-0" /> {zone.terrain}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-ink/8">
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-earth-light">Key Wildlife Seen</span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {zone.keyWildlife.map((wildlife) => (
                            <span
                              key={wildlife}
                              className="inline-flex items-center gap-1 rounded bg-sand px-2 py-0.5 text-[11.5px] font-medium text-forest-deep"
                            >
                              <Footprints className="size-3 text-natural" /> {wildlife}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zone Information */}
                  <div className={cn(i % 2 === 1 && "lg:order-1")}>
                    {/* Header Area with View Photos link placed at the top near zone title */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="eyebrow text-natural">
                        <span className="text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                        <span>Safari Zone Profile</span>
                      </p>
                      <Link
                        to={`/gallery?zone=${zone.id}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-natural/30 bg-sage-100/80 px-3 py-1 text-[12px] font-bold text-natural transition-all hover:bg-natural hover:text-white shadow-xs"
                      >
                        <Camera className="size-3.5" />
                        <span>View {zone.name} Photos →</span>
                      </Link>
                    </div>

                    <h2 className="mt-2 font-serif text-forest-deep text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
                      {zone.name}
                    </h2>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      <MetaChip icon="clock">{zone.duration}</MetaChip>
                      <MetaChip icon="map"><MapPin className="inline-block size-3" /> Season: {zone.season}</MetaChip>
                    </div>

                    <p className="mt-4 text-[1.02rem] leading-relaxed text-earth">{zone.detail}</p>

                    {/* Exact Gate Location & Access */}
                    <div className="mt-5 rounded-xl border border-ink/10 bg-paper p-4 shadow-xs">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 size-4.5 text-gold-deep shrink-0" />
                        <div>
                          <h4 className="text-[13.5px] font-bold text-forest-deep">Gate Location & Access:</h4>
                          <p className="mt-0.5 text-[13px] text-earth">{zone.location}</p>
                          <p className="mt-1 text-[12px] font-semibold text-natural tracking-wide">
                            {zone.distances}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-ink/8 flex items-center justify-between">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${zone.mapQuery}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-natural hover:text-forest-deep transition-colors"
                        >
                          <Navigation className="size-3.5" /> Get Gate Directions on Google Maps →
                        </a>
                      </div>
                    </div>

                    {/* Best For Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {zone.bestFor.map((b) => (
                        <Tag key={b}>{b}</Tag>
                      ))}
                    </div>

                    {/* Action Buttons: Side-by-side on mobile and desktop */}
                    <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                      <ContactCTA
                        type="whatsapp"
                        text={`Book ${zone.name}`}
                        message={`Hello Sukoon Safari, I would like to book a safari drive for ${zone.name}.`}
                        className="w-full sm:w-auto text-white bg-natural hover:bg-forest font-bold px-2.5 sm:px-5 py-2.5 text-[12.5px] sm:text-[14.5px] justify-center text-center shadow-xs"
                      />
                      <Link
                        to={zone.id === "jhilmil-jheel" ? "/pricing#jhilmil" : "/pricing"}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 rounded-md border-2 border-gold bg-gold/10 px-2.5 sm:px-4 py-2.5 text-[12.5px] sm:text-[14.5px] font-bold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep shadow-xs text-center"
                      >
                        <IndianRupee  className="size-3.5 sm:size-4 shrink-0" />
                        <span className="truncate">View Pricing →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing Redirection Banner */}
      <section className="bg-forest-deep py-16 text-paper" aria-label="Safari Pricing">
        <div className="wrap">
          <div className="rounded-2xl border border-gold/30 bg-forest p-8 sm:p-12 shadow-[var(--shadow-lift)]">
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider text-forest-deep">
                  <Sparkles className="size-3.5" /> Transparent Rates
                </span>
                <h2 className="mt-3 font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight text-paper">
                  Want exact rates for your group size?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-sage-200/90 max-w-xl">
                  Check our detailed rate breakdown including 4×4 Gypsy hire, forest entry permits, guide fees, and total package costs for Indian and foreign nationals.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-[13px] font-semibold text-paper/85">
                  <span className="flex items-center gap-1.5">✓ 4×4 Gypsy Safari</span>
                  <span className="flex items-center gap-1.5">✓ Forest Department Permits</span>
                  <span className="flex items-center gap-1.5">✓ Certified Naturalist Guide</span>
                  <span className="flex items-center gap-1.5">✓ No Hidden Surcharges</span>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4">
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-[16px] font-bold text-forest-deep transition-all hover:bg-[#c4930f] hover:shadow-lg shadow-gold/20"
                >
                  <IndianRupee  className="size-5" /> View Complete Price List
                </Link>
                <p className="text-[13px] text-sage-200/70">
                  Custom pickup/drop rates available from Haridwar, Rishikesh & Dehradun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Satellite Park Gates & Location Map */}
      <section className="bg-sand py-16 sm:py-20" aria-label="Park Gate Locations Map">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="02"
              eyebrow="Live Satellite Map"
              title={<>Rajaji National Park <em className="text-natural">Gates & Locations</em></>}
              lead="Explore real-time satellite imagery of all safari gates across Haridwar, Rishikesh, and Dehradun corridors."
            />
          </Reveal>
          {/* // Interactive Map */}
          <div className="relative mt-8">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/20 via-natural/20 to-gold/20 blur-xl opacity-70" aria-hidden="true" />
            <RajajiMapViewer badge="Rajaji National Park · Zonation Detail" showLegend={true} />
          </div>
          {/* // iframe map */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-[var(--shadow-lift)]">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-neutral-900">
              <iframe
                title="Sukoon Safari & Rajaji Safari Gates Map"
                src={SITE.googleMapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />
              <a
                href={SITE.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded bg-white px-3 py-1.5 text-[12px] font-bold text-blue-600 shadow-md transition-colors hover:bg-slate-100"
              >
                <span>Open in Maps</span>
                <span className="text-[11px]">↗</span>
              </a>
              <span className="absolute bottom-3 right-3 z-10 rounded bg-black/80 px-2.5 py-1 text-[11px] font-bold text-gold backdrop-blur-xs">
                Interactive Map
              </span>
            </div>
            <div className="p-6 sm:p-8 bg-paper">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-[13.5px]">
                <div className="rounded-lg border border-ink/8 bg-sand/60 p-3.5">
                  <span className="text-[11px] font-bold uppercase text-gold-deep">Chilla & Chilla Wali</span>
                  <p className="font-bold text-forest-deep mt-0.5">Chilla Gate (Ganga East)</p>
                  <p className="text-[12px] text-earth mt-1">12 km from Haridwar · 18 km from Rishikesh</p>
                </div>
                <div className="rounded-lg border border-ink/8 bg-sand/60 p-3.5">
                  <span className="text-[11px] font-bold uppercase text-gold-deep">Ranipur Zone</span>
                  <p className="font-bold text-forest-deep mt-0.5">Ranipur Gate (BHEL)</p>
                  <p className="text-[12px] text-earth mt-1">8 km from Haridwar · 32 km from Rishikesh</p>
                </div>
                <div className="rounded-lg border border-ink/8 bg-sand/60 p-3.5">
                  <span className="text-[11px] font-bold uppercase text-gold-deep">Motichur Zone</span>
                  <p className="font-bold text-forest-deep mt-0.5">Motichur Gate (NH-58)</p>
                  <p className="text-[12px] text-earth mt-1">9 km from Haridwar · 14 km from Rishikesh</p>
                </div>
                <div className="rounded-lg border border-ink/8 bg-sand/60 p-3.5">
                  <span className="text-[11px] font-bold uppercase text-gold-deep">Jhilmil Jheel Zone</span>
                  <p className="font-bold text-forest-deep mt-0.5">Ransoo / Tantwala Gate</p>
                  <p className="text-[12px] text-earth mt-1">22 km from Haridwar · 42 km from Rishikesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timings */}
      <section id="timings" className="topo-light bg-sand py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="03"
              eyebrow="Safari timings"
              title={<>Two slots a day, <em className="text-natural">set by the sun</em></>}
              lead="Gate timings follow daylight and shift through the season. All timings apply to the Chilla, Chilla Wali, Ranipur and Motichur zones (Nov–Jun). Jhilmil Jheel runs Oct–Jun."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {TIMINGS.map((t, i) => (
              <Reveal key={t.slot} delay={i * 100}>
                <div className="h-full rounded-xl border border-ink/10 bg-paper p-6 shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-md bg-sage-100 text-natural">
                      <t.icon className="size-5" />
                    </span>
                    <h3 className="font-serif text-[1.4rem] text-forest-deep">{t.slot}</h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    {t.periods.map((p) => (
                      <div key={p.label} className="flex items-center justify-between rounded-md bg-sand px-3.5 py-2.5">
                        <span className="text-[12px] font-bold tracking-[0.1em] text-earth-light uppercase">{p.label}</span>
                        <span className="flex items-center gap-1.5 text-[14px] font-bold text-forest-deep">
                          <Clock className="size-3.5 text-gold-deep" /> {p.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3.5 text-[13.5px] leading-relaxed text-earth">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 flex items-start gap-2.5 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3.5 text-[13.5px] leading-relaxed text-earth">
              <Info className="mt-0.5 size-4 shrink-0 text-gold-deep" />
              Safari timings and seasonal dates are subject to forest department regulations and may change annually. We always verify for your specific date before confirming any booking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-forest-deep py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-paper text-[clamp(1.5rem,2.6vw,2rem)]">Ready to book your safari?</h2>
            <p className="mt-1.5 max-w-xl text-[14.5px] text-sage-200/80">
              Message us on WhatsApp or call — we'll confirm availability, zone and timing for your dates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ContactCTA type="whatsapp" text="Book on WhatsApp" className="text-forest-deep bg-gold hover:bg-[#c4930f]" />
            <ContactCTA type="phone" text="Call Us" variant="outline" className="text-paper border-paper hover:bg-paper hover:text-forest-deep" />
          </div>
        </div>
      </section>
    </>
  );
}
