import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Car, MapPin, MessageCircle, Plane, TrainFront } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { FAQ_CATEGORIES, FAQS } from "../data/faqs";
import { PageHero, Reveal } from "../components/ui";
import { Accordion } from "../components/Accordion";
import { ContactCTA } from "../components/ui/ContactCTA";
import { SITE } from "../config/site";
import { cn } from "../utils/cn";

export default function FAQPage() {
  const [filter, setFilter] = useState<string>("All");

  const groups = useMemo(() => {
    const cats = filter === "All" ? [...FAQ_CATEGORIES] : [filter];
    return cats.map((c) => ({ category: c, items: FAQS.filter((f) => f.category === c) }));
  }, [filter]);

  useSEO({
    title: "Safari FAQ — Rajaji National Park Safari Questions Answered",
    description:
      "Answers to common questions about Rajaji National Park safaris — how to reach, booking process, timings, pricing, permits, documents and what to carry.",
    path: "/faq",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <>
      <PageHero
        section={`${FAQS.length} questions · honest answers`}
        crumb="FAQ"
        title={<>Everything you need to know about <em className="text-gold">Rajaji safaris</em></>}
        lead="Filtered by topic. If your question isn't here, it takes one WhatsApp message to get a direct answer."
      />

      {/* Top Section: How to Reach Quick Guide */}
      <section className="border-b border-ink/10 bg-sand py-10 sm:py-12" aria-label="How to Reach overview">
        <div className="wrap">
          <Reveal>
            <div className="rounded-2xl border border-ink/10 bg-paper p-6 sm:p-8 shadow-[var(--shadow-card)]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded bg-sage-100 px-2.5 py-1 text-[11.5px] font-bold text-natural uppercase tracking-wider">
                    <MapPin className="size-3.5" /> Travel & Connectivity
                  </div>
                  <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-forest-deep">
                    How to Reach <em className="text-natural">Rajaji National Park</em>
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-earth">
                    Centrally located in Uttarakhand between Haridwar, Rishikesh, and Dehradun. Easy access via flights into Jolly Grant Airport (35 km) or trains into Haridwar & Rishikesh stations.
                  </p>
                  
                  {/* Quick Hub Badges */}
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-2.5 rounded-lg border border-ink/8 bg-sand/60 p-2.5 text-[13px]">
                      <Plane className="size-4 shrink-0 text-natural" />
                      <div>
                        <strong className="block text-forest-deep">Airport (DED)</strong>
                        <span className="text-earth-light">≈ 35 km (1 hr)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-lg border border-ink/8 bg-sand/60 p-2.5 text-[13px]">
                      <TrainFront className="size-4 shrink-0 text-natural" />
                      <div>
                        <strong className="block text-forest-deep">Haridwar / Rishikesh</strong>
                        <span className="text-earth-light">≈ 9–18 km</span>
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 rounded-lg border border-ink/8 bg-sand/60 p-2.5 text-[13px]">
                      <Car className="size-4 shrink-0 text-natural" />
                      <div>
                        <strong className="block text-forest-deep">Delhi NCR</strong>
                        <span className="text-earth-light">≈ 230 km (5-6 hrs)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:shrink-0">
                  <Link
                    to="/how-to-reach"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest-deep px-5 py-3 text-[14.5px] font-bold text-paper transition-all hover:bg-forest hover:shadow-md"
                  >
                    <span>Full How to Reach Guide</span>
                    <ArrowRight className="size-4 text-gold" />
                  </Link>
                  <ContactCTA
                    type="whatsapp"
                    text="Ask for Gate Pickup"
                    variant="outline"
                    className="w-full text-center"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-18">
        <div className="wrap">
          {/* Filter chips */}
          <Reveal className="flex flex-wrap gap-2">
            {["All", ...FAQ_CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-[13.5px] font-bold tracking-wide transition-all",
                  filter === c
                    ? "border-forest bg-forest text-paper"
                    : "border-ink/15 bg-paper text-ink/70 hover:border-natural hover:text-natural",
                )}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="mt-10 space-y-12">
            {groups.map((g) => (
              <Reveal key={g.category}>
                <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-12">
                  <h2 className="font-serif text-[1.5rem] text-forest-deep lg:sticky lg:top-28 lg:self-start">
                    {g.category}
                    <span className="block text-[13px] font-sans font-semibold tracking-wide text-earth-light">
                      {g.items.length} questions
                    </span>
                  </h2>
                  <Accordion items={g.items} defaultOpen={null} />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Location & Map Section */}
          <Reveal className="mt-16">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-sand p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
                <div>
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">Our Base & Gate Meeting Points</span>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-forest-deep">Where to Find Us</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-earth">
                    We are conveniently located at the Chilla Road Forest Check Post, right on the eastern corridor of Rajaji National Park. This serves as the primary meeting spot for Chilla and Chilla Wali safaris.
                  </p>
                  <div className="mt-5 space-y-2 text-[14px]">
                    <p className="font-bold text-forest-deep">
                      📍 {SITE.addressLines[0]}, {SITE.addressLines[1]}
                    </p>
                    <p className="text-earth-light">
                      🕒 Open daily: {SITE.hours}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={SITE.googleProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-forest-deep px-4 py-2.5 text-[13.5px] font-bold text-paper transition-all hover:bg-forest hover:shadow-md"
                    >
                      <span>Open in Google Maps</span>
                      <span>↗</span>
                    </a>
                    <ContactCTA type="whatsapp" text="Get Live Location" className="text-forest-deep bg-gold hover:bg-[#c4930f]" />
                  </div>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl border border-ink/10 shadow-md bg-neutral-900">
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
                    className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded bg-white px-2.5 py-1 text-[11.5px] font-bold text-blue-600 shadow-md transition-colors hover:bg-slate-100"
                  >
                    <span>Directions</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-deep py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-paper text-[clamp(1.5rem,2.6vw,2rem)]">Still have a question?</h2>
            <p className="mt-1.5 max-w-xl text-[14.5px] text-sage-200/80">
              A person — not a bot — replies during working hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ContactCTA type="whatsapp" text="Ask on WhatsApp" className="text-forest-deep bg-gold hover:bg-[#c4930f]" />
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I have a question about planning a safari.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-paper/25 px-5 py-2.5 text-[14.5px] font-bold text-paper transition-all hover:border-gold hover:text-gold"
            >
              <MessageCircle className="size-4.5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
