import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BusFront, Car, CheckCircle2, MapPin, MessageCircle, Moon, PenSquare, Phone, Plane, Star, TrainFront, ZoomIn } from "lucide-react";
import { HOME_FAQS } from "../../data/faqs";
import { SAMPLE_REVIEWS } from "../../data/reviews";
import { photo, PHOTOS } from "../../data/images";
import { SITE } from "../../config/site";
import { ArrowLink, Reveal, SectionHead } from "../ui";
import { Accordion } from "../Accordion";
import { ContactCTA } from "../ui/ContactCTA";

/* ══ 3. GALLERY SECTION ════════════════════════════════════════════════ */
const HOME_GALLERY_PHOTOS = [
  {
    p: PHOTOS.elephantForest,
    title: "Elephants in Riverbed Forests",
    zone: "Chilla Zone",
    zoneId: "chilla",
    alt: "Asian elephant moving through dense forest in Chilla range",
    featured: true,
  },
  {
    p: PHOTOS.leopardLogs,
    title: "Leopard in Rocky Shivalik Habitat",
    zone: "Chilla Wali",
    zoneId: "chilla-wali",
    alt: "Leopard resting in natural rocky forest terrain",
  },
  {
    p: PHOTOS.chitalMeadow,
    title: "Swamp Deer in Wetland Habitat",
    zone: "Jhilmil Jheel",
    zoneId: "jhilmil-jheel",
    alt: "Herd of deer in the Jhilmil wetland meadow",
  },
  {
    p: PHOTOS.peacockPortrait,
    title: "Vibrant Avian Diversity",
    zone: "Birds & Wildlife",
    zoneId: "wildlife",
    alt: "Indian peacock with vivid plumage in Rajaji",
  },
  {
    p: PHOTOS.heroJeep,
    title: "4×4 Gypsy Wilderness Trail",
    zone: "Rajaji Safari",
    zoneId: "chilla",
    alt: "4x4 gypsy on a morning forest trail in Rajaji",
  },
  {
    p: PHOTOS.greenRoad,
    title: "Ancient Sal Tree Corridors",
    zone: "Motichur Zone",
    zoneId: "motichur",
    alt: "Lush green tree canopy along Motichur safari track",
  },
];

export function HomeGallery() {
  return (
    <section id="gallery" className="bg-sand py-20 sm:py-24" aria-label="Photo gallery">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead
            index="03"
            eyebrow="Wildlife & Landscapes"
            title={<>Captured in the <em className="text-natural">wild of Rajaji</em></>}
            lead="Real photographs from safari drives across Chilla, Chilla Wali, Ranipur, Jhilmil Jheel and Motichur."
          />
          <ArrowLink to="/gallery" className="pb-1">
            Explore complete gallery (5 Zones)
          </ArrowLink>
        </Reveal>

        {/* Gallery Cards Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_GALLERY_PHOTOS.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <a
                href={`/gallery?zone=${item.zoneId}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-ink/10 bg-forest-deep transition-all duration-300 hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={photo(item.p, 800, 600)}
                  alt={item.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

                <span className="absolute top-3 left-3 rounded bg-forest-deep/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sage-200 backdrop-blur-xs">
                  {item.zone}
                </span>

                <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-paper/85 text-forest-deep opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                  <ZoomIn className="size-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
                  <h3 className="font-serif text-[1.25rem] leading-snug text-paper group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-sage-200/80">
                    Click to filter {item.zone} photos →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ 8. REVIEWS ═══════════════════════════════════════════════════════ */
export function Reviews() {
  return (
    <section id="reviews" className="topo-light bg-sand/80 py-20 sm:py-28 overflow-hidden relative" aria-label="Guest Reviews">
      <div className="wrap">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHead
            index="08"
            eyebrow="Guest Experiences"
            title={<>What our travellers <em className="text-natural">say</em></>}
            lead="Authentic reviews and wildlife encounters from guests who explored Rajaji National Park with our local guides."
          />
          
          {/* Trust box & CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-xl border border-ink/10 bg-paper p-4 shadow-xs shrink-0">
            <div className="flex items-center gap-2.5 pr-2">
              <span className="grid size-9 place-items-center rounded-full bg-forest-deep text-paper font-sans font-bold text-sm">
                G
              </span>
              <div>
                <div className="flex items-center gap-1 text-gold text-xs">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-gold text-gold" />
                  ))}
                  <span className="ml-1 font-bold text-forest-deep text-sm">4.9 / 5.0</span>
                </div>
                <p className="text-[11.5px] font-semibold text-earth-light">Verified Google Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-ink/10 sm:pl-3">
              <a
                href={SITE.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-md bg-sand px-3.5 py-2 text-[12.5px] font-bold text-forest-deep hover:bg-beige transition-colors"
              >
                Read Reviews <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href={SITE.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-md bg-gold px-3.5 py-2 text-[12.5px] font-bold text-forest-deep hover:bg-gold-deep hover:text-paper shadow-xs transition-colors"
              >
                <PenSquare className="size-3.5" /> Make a Review
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full width Marquee slider with slower timing (--duration: 46s) */}
      <div className="relative mt-12 w-full overflow-hidden">
        <div className="group flex overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] flex-row [--duration:46s]">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIndex) => (
              SAMPLE_REVIEWS.map((review, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="group/card relative flex flex-col justify-between rounded-xl border border-ink/10 bg-paper text-forest-deep shadow-[var(--shadow-card)] p-5 sm:p-6 w-[310px] sm:w-[360px] shrink-0 transition-all duration-300 hover:border-gold/50 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1"
                >
                  <div>
                    {/* Stars & Zone Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="size-4 fill-gold text-gold"
                          />
                        ))}
                      </div>
                      <span className="rounded-full bg-sand px-2.5 py-0.5 text-[11px] font-bold text-natural tracking-wide uppercase">
                        {review.tag || review.trip.split(",")[0]}
                      </span>
                    </div>

                    {/* Review quote */}
                    <p className="font-serif text-[15px] sm:text-[15.5px] leading-relaxed text-forest-deep/90 italic">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="mt-5 flex items-center gap-3 border-t border-ink/8 pt-4">
                    {review.avatar ? (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        className="size-11 shrink-0 rounded-full object-cover border border-forest/15 ring-2 ring-gold/20"
                      />
                    ) : (
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sand-2 font-bold text-xs text-forest-deep ring-2 ring-gold/20">
                        {review.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    )}
                    <div className="flex flex-col items-start min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-[14px] font-bold leading-tight text-forest-deep truncate">
                          {review.name}
                        </h4>
                        <span title="Verified Traveller" className="inline-flex shrink-0">
                          <CheckCircle2 className="size-3.5 text-natural" />
                        </span>
                      </div>
                      <p className="text-[12px] font-medium text-earth-light truncate">
                        {review.trip}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>

        {/* Gradient edge fades for light theme */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 md:w-36 bg-gradient-to-r from-sand via-sand/60 to-transparent sm:block z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-20 md:w-36 bg-gradient-to-l from-sand via-sand/60 to-transparent sm:block z-10" />
      </div>
    </section>
  );
}

/* ══ 9. FAQ PREVIEW ═══════════════════════════════════════════════════ */
export function FaqPreview() {
  return (
    <section id="faq" className="topo-light bg-sand py-20 sm:py-24" aria-label="Frequently asked questions">
      <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.3fr] lg:gap-16">
        <Reveal>
          <SectionHead
            index="09"
            eyebrow="FAQ"
            title={<>Straight answers, <em className="text-natural">no fine print</em></>}
            lead="Common questions we get about safaris in Rajaji National Park."
          />
          <div className="mt-7">
            <ArrowLink to="/faq">View all FAQs</ArrowLink>
          </div>
          <div className="mt-8 rounded-xl border border-ink/10 bg-paper p-5">
            <p className="flex items-center gap-2 text-[15px] font-bold text-forest-deep">
              <MessageCircle className="size-4.5 text-[#177242]" /> Still deciding?
            </p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-earth">
              Send us your dates and group size — a planner replies personally during working hours.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Accordion items={HOME_FAQS.slice(0, 5)} />
        </Reveal>
      </div>
    </section>
  );
}

/* ══ 10. HOW TO REACH ══════════════════════════════════════════════════ */
export function HowToReach() {
  return (
    <section className="bg-paper py-20 sm:py-24" aria-label="How to reach">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <div className="rounded-xl border border-ink/10 bg-sand p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-serif text-2xl text-forest-deep">Reaching Rajaji</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-earth">
              Rajaji National Park is highly accessible from major cities in North India. Located between Haridwar, Rishikesh, and Dehradun, it makes for a perfect weekend getaway.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Plane className="mt-1 size-5 text-natural" />
                <div>
                  <h4 className="font-bold text-forest-deep">By Air</h4>
                  <p className="text-[14px] text-earth">Jolly Grant Airport (Dehradun) is just 35 km away. Taxis are easily available to reach the park gates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrainFront className="mt-1 size-5 text-natural" />
                <div>
                  <h4 className="font-bold text-forest-deep">By Train</h4>
                  <p className="text-[14px] text-earth">Haridwar Railway Station (9 km) and Rishikesh Railway Station (18 km) are the nearest railheads.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="mt-1 size-5 text-natural" />
                <div>
                  <h4 className="font-bold text-forest-deep">By Road</h4>
                  <p className="text-[14px] text-earth">Well connected by NH-58. Delhi is approximately 230 km (5-6 hours drive) via Meerut and Roorkee.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BusFront className="mt-1 size-5 text-natural" />
                <div>
                  <h4 className="font-bold text-forest-deep">By Bus</h4>
                  <p className="text-[14px] text-earth">Regular ISBT / UTC buses operate between Delhi and Haridwar/Rishikesh.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHead
            index="10"
            eyebrow="How to reach"
            title={<>Easy access from <em className="text-natural">major hubs</em></>}
            lead="Whether you're driving down from Delhi or taking a train to Haridwar, getting to Rajaji National Park is simple and straightforward."
          />
          <div className="mt-7">
            <ArrowLink to="/how-to-reach">Full route guide</ArrowLink>
          </div>
          <div className="mt-8">
              <img
                src={photo(PHOTOS.greenRoad, 800, 600)}
                alt="Road leading to Rajaji National Park through green Sal forest"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="rounded-xl object-cover h-64 w-full shadow-md"
              />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ 11. CONTACT TEASER (Direct Link to Contact Page) ══════════════════ */
export function HomeContactBox() {
  return (
    <section id="contact-preview" className="topo-light bg-sand py-16 sm:py-20" aria-label="Contact information">
      <div className="wrap">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper p-6 sm:p-9 shadow-[var(--shadow-card)]">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] items-center">
              <div>
                <SectionHead
                  index="11"
                  eyebrow="Get in touch"
                  as="h3"
                  title={<>Plan with a local <em className="text-natural">safari coordinator</em></>}
                  lead="Have questions about safari permits, vehicle options, timings or custom group itineraries? Reach out to our local planning desk."
                />
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[14px]">
                  <span className="flex items-center gap-2 font-semibold text-forest-deep">
                    <Phone className="size-4 text-natural" /> {SITE.phoneDisplay}
                  </span>
                  <span className="text-ink/25">•</span>
                  <span className="flex items-center gap-2 font-semibold text-forest-deep">
                    <MapPin className="size-4 text-gold-deep" /> {SITE.addressLines[0]}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end justify-center gap-3.5 border-t border-ink/8 pt-6 lg:border-t-0 lg:pt-0">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-forest-deep px-6 py-3.5 text-[15px] font-bold text-paper transition-all hover:bg-forest hover:shadow-md"
                >
                  <span>Visit Contact Page & Map</span>
                  <ArrowRight className="size-4 text-gold" />
                </Link>
                <div className="flex w-full sm:w-auto items-center gap-3">
                  <ContactCTA
                    type="whatsapp"
                    text="WhatsApp Us"
                    className="flex-1 sm:flex-none text-forest-deep bg-gold hover:bg-[#c4930f] px-5 py-2.5 text-[13.5px]"
                  />
                  <ContactCTA
                    type="phone"
                    text="Call Us"
                    variant="outline"
                    className="flex-1 sm:flex-none px-5 py-2.5 text-[13.5px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ 12. FINAL CTA ═════════════════════════════════════════════════════ */
export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden" aria-label="Book your safari">
      <img
        src={photo(PHOTOS.tigerRoad, 1800, 900)}
        alt={PHOTOS.tigerRoad.alt}
        width={1800}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/78" aria-hidden="true" />
      <div className="topo absolute inset-0" aria-hidden="true" />
      <div className="wrap relative py-24 text-center sm:py-28">
        <Reveal>
          <p className="eyebrow justify-center text-sage">
            <span className="text-gold">Ready when you are</span>
          </p>
          <h3 className="mx-auto mt-4 max-w-2xl font-serif text-paper text-balance text-[clamp(2rem,4.6vw,3.3rem)] leading-[1.08]">
            Ready to explore Rajaji?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-paper/80">
            Tell us when you're travelling and what kind of safari you're looking for.
            We'll help you plan the perfect experience in Rajaji National Park.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ContactCTA type="whatsapp" text="Book on WhatsApp" className="text-forest-deep bg-gold hover:bg-[#c4930f] px-8 py-3 text-[16px]" />
            <ContactCTA type="phone" text="Call Us" variant="outline" className="text-paper border-paper hover:bg-paper hover:text-forest-deep px-8 py-3 text-[16px]" />
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-[12.5px] font-semibold tracking-wide text-paper/60">
            <Moon className="size-3.5 text-gold" /> Replies within working hours · {SITE.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
