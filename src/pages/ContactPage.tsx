import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BusFront, Car, Clock, Mail, MapPin, UserIcon, MessageCircle, Phone, Plane, TrainFront } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { SITE } from "../config/site";
import { CTA, PageHero, Reveal, SectionHead } from "../components/ui";
import { ContactCTA } from "../components/ui/ContactCTA";
import { InstagramIcon, FacebookIcon  } from "../components/icons/SocialIcons";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp (Bookings)",
    value: SITE.whatsappDisplay,
    note: "Fastest response. Send your dates, group size and zone preferences.",
    href: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I'd like to plan a safari.")}`,
    external: true,
    highlight: true,
  },
  {
    icon: Phone,
    label: "Phone (Direct Call)",
    value: SITE.phoneDisplay,
    note: `Available daily (${SITE.hours}) for calls and enquiries.`,
    href: `tel:${SITE.phoneHref}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Alternate Helpline",
    value: SITE.phoneDisplaySecondary,
    note: "Alternate helpline for booking inquiries and coordinator support.",
    href: `tel:${SITE.phoneHrefSecondary}`,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    note: "For detailed queries, corporate bookings, itineraries and invoices.",
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@adil_on_safari",
    note: "Follow daily safari sightings, tiger & leopard clips, and forest stories.",
    href: SITE.social.instagram,
    external: true,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "@safariwithAadil",
    note: "Join our community for guest reviews, photo updates and event news.",
    href: SITE.social.facebook,
    external: true,
  }
];

const REACH_HUBS = [
  {
    icon: Plane,
    title: "Nearest Airport",
    hub: "Jolly Grant (DED), Dehradun",
    dist: "≈ 35 km (1 hr drive)",
    note: "Regular flights from Delhi, Mumbai & Bangalore. Airport pickup available.",
  },
  {
    icon: TrainFront,
    title: "Nearest Railheads",
    hub: "Haridwar Junction & Yog Nagari Rishikesh",
    dist: "≈ 9–18 km from gates",
    note: "Direct overnight trains from Delhi, Lucknow, Kolkata & Mumbai.",
  },
  {
    icon: Car,
    title: "Self Drive / Road",
    hub: "NH-58 via Meerut & Roorkee",
    dist: "≈ 220–250 km from Delhi NCR",
    note: "Smooth 4–5 lane highway. Scenic foothills drive directly to Chilla.",
  },
  {
    icon: BusFront,
    title: "Bus & State Transit",
    hub: "ISBT Haridwar / Rishikesh",
    dist: "Frequent UTC & AC buses",
    note: "Regular bus services running from Delhi Anand Vihar ISBT.",
  },
];

export default function ContactPage() {
  useSEO({
    title: "Contact Sukoon Safari — Book a Rajaji National Park Safari",
    description:
      "Contact Sukoon Safari for Rajaji National Park safari bookings. Reach us by WhatsApp, phone or email. Located at Chilla Road Forest Check Post, Haridwar, Uttarakhand with full travel directions.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        section="Phone · WhatsApp · Email · Social"
        crumb="Contact"
        title={<>Reach us to <em className="text-gold">plan your safari</em></>}
        lead="No booking forms, no automated systems — just a direct conversation with our team about your safari dates, group and preferences."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Channels */}
          <div>
            <Reveal className="grid gap-4 sm:grid-cols-2">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group flex h-full flex-col rounded-xl border p-5 transition-all hover:shadow-[var(--shadow-card)] ${c.highlight
                      ? "border-[#1f9e53]/40 bg-[#f0fdf4]"
                      : "border-ink/10 bg-paper hover:border-natural/40"
                    }`}
                >
                  <span className="flex items-center justify-between">
                    <span className={`grid size-10 place-items-center rounded-md transition-colors group-hover:text-paper ${c.highlight ? "bg-[#1f9e53] text-paper" : "bg-sage-100 text-natural group-hover:bg-forest"
                      }`}>
                      <c.icon className="size-4.5" />
                    </span>
                    <ArrowUpRight className="size-4 text-ink/25 transition-colors group-hover:text-natural" />
                  </span>
                  <p className="mt-4 text-[12px] font-bold tracking-[0.18em] text-earth-light uppercase">{c.label}</p>
                  <p className="mt-1 text-[15.5px] font-bold break-all text-forest-deep">{c.value}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-earth">{c.note}</p>
                </a>
              ))}
            </Reveal>

            {/* Address + hours */}
            <Reveal delay={100}>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-ink/10 bg-sand p-5">
                  <p className="flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] text-earth-light uppercase">
                    <MapPin className="size-4 text-gold-deep" /> Business address
                  </p>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed font-semibold text-forest-deep">
                    {SITE.addressLines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </p>
                  <a
                    href={SITE.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-natural transition-colors hover:text-forest-deep"
                  >
                    Open in Google Maps <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
                <div className="rounded-xl border border-ink/10 bg-sand p-5">
                  <p className="flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] text-earth-light uppercase">
                    <Clock className="size-4 text-gold-deep" /> Contact hours
                  </p>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed font-semibold text-forest-deep">{SITE.hours}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-earth">
                    WhatsApp messages left overnight are answered first thing in the morning.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Map embed */}
            <Reveal delay={140}>
              <div className="mt-4 overflow-hidden rounded-xl border border-ink/10 relative">
                <iframe
                  title="Sukoon Safari Location Map"
                  src={SITE.googleMapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full sm:h-[340px] border-0"
                  allowFullScreen
                />
                <a
                  href={SITE.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded bg-white px-2.5 py-1 text-[11.5px] font-bold text-blue-600 shadow-md transition-colors hover:bg-slate-100"
                >
                  <span>Open in Google Maps</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </Reveal>
            {/* Developer Card */}
            <Reveal delay={180}>
              <div className="mt-4 rounded-xl border border-ink/10 bg-sand p-5">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-md bg-forest-deep text-gold">
                    <UserIcon className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold tracking-[0.18em] text-earth-light uppercase">
                      Website Developer
                    </p>

                    <h3 className="mt-1 text-[17px] font-bold text-forest-deep">
                      {SITE.devInfo.name}
                    </h3>

                    <p className="mt-1 text-[13px] leading-relaxed text-earth">
                      Website designed & developed by Samarpan Web Solutions.
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <a
                        href={SITE.devInfo.url.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-forest-deep px-3 py-2 text-[12.5px] font-bold text-paper transition-colors hover:bg-forest"
                      >
                        Know More
                        <ArrowUpRight className="size-3.5 text-gold" />
                      </a>

                      <a
                        href={SITE.devInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-paper px-3 py-2 text-[12.5px] font-bold text-forest-deep transition-colors hover:border-natural hover:text-natural"
                      >
                        GitHub
                        <ArrowUpRight className="size-3.5" />
                      </a>

                      <a
                        href={`tel:${SITE.devInfo.phone}`}
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-paper px-3 py-2 text-[12.5px] font-bold text-forest-deep transition-colors hover:border-natural hover:text-natural"
                      >
                        <Phone className="size-3.5" />
                        Call
                      </a>

                      <a
                        href={`whatsapp://send?phone=${SITE.devInfo.phone}&text=Hello! I'm here to discuss about website development for my business.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 bg-paper px-3 py-2 text-[12.5px] font-bold text-forest-deep transition-colors hover:border-natural hover:text-natural"
                      >
                        <MessageCircle className="size-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* WhatsApp CTA panel */}
          <Reveal delay={120}>
            <div className="topo flex h-full flex-col rounded-xl bg-forest-deep p-7 text-paper lg:sticky lg:top-28">
              <p className="eyebrow text-sage">
                <span className="text-gold">Book a Safari</span>
                <span>Simple & Direct</span>
              </p>
              <h2 className="mt-4 font-serif text-[1.8rem] leading-tight">Plan your safari on WhatsApp</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-sage-200/85">
                Just send us a message with these details and we'll get back to you with availability and pricing:
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13.5px]">
                {["Your name", "Date of visit", "Group size", "Preferred zone", "Nationality", "Contact number"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-paper/85">
                    <span className="size-1.5 rounded-full bg-gold" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8 space-y-3">
                <ContactCTA type="whatsapp" text="Open WhatsApp Chat" className="w-full text-forest-deep bg-gold hover:bg-[#c4930f]" />
                <ContactCTA type="phone" text="Call Us Instead" variant="outline" className="w-full text-paper border-paper/30 hover:border-gold hover:text-gold" />
                <p className="text-center text-[12px] text-paper/55">
                  No online payment — all bookings confirmed via WhatsApp or phone.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to Reach Section on Contact Page */}
      <section className="topo-light bg-sand py-16 sm:py-20 border-t border-ink/10" aria-label="How to reach us and safari gates">
        <div className="wrap">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead
              index="02"
              eyebrow="Location & Transit"
              title={<>How to reach <em className="text-natural">our base & safari gates</em></>}
              lead="Located right at Chilla Road Forest Check Post, our office is the direct gateway to Rajaji's top safari tracks."
            />
            <Link
              to="/how-to-reach"
              className="inline-flex items-center gap-2 rounded-lg bg-forest-deep px-5 py-3 text-[14px] font-bold text-paper transition-all hover:bg-forest hover:shadow-md"
            >
              <span>Full How to Reach Guide</span>
              <ArrowRight className="size-4 text-gold" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REACH_HUBS.map((hub, i) => (
              <Reveal key={hub.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-ink/10 bg-paper p-5 transition-all hover:shadow-[var(--shadow-card)]">
                  <span className="grid size-10 place-items-center rounded-md bg-sage-100 text-natural">
                    <hub.icon className="size-5" />
                  </span>
                  <p className="mt-4 text-[12px] font-bold tracking-[0.18em] text-earth-light uppercase">{hub.title}</p>
                  <h3 className="mt-1 text-[16px] font-bold text-forest-deep">{hub.hub}</h3>
                  <p className="mt-1 font-semibold text-natural text-[13.5px]">{hub.dist}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-earth">{hub.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-ink/10 bg-paper p-6 sm:flex-row sm:items-center">
              <div>
                <h4 className="font-bold text-forest-deep text-[16px]">Need hotel or station pickup?</h4>
                <p className="mt-1 text-[14px] text-earth">
                  We arrange direct Gypsy & taxi transfers from Rishikesh, Haridwar, Dehradun & Jolly Grant Airport.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/how-to-reach"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-natural hover:text-forest-deep transition-colors"
                >
                  View Route Cards <ArrowRight className="size-3.5" />
                </Link>
                <ContactCTA type="whatsapp" text="Book Transfer" variant="outline" className="px-4 py-2 text-[13.5px]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ note */}
      <section className="border-t border-ink/10 bg-paper py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <SectionHead
            index="03"
            eyebrow="Have questions?"
            title={<>Browse our <em className="text-natural">FAQ page</em></>}
            lead="Answers to common questions about safari zones, timings, pricing and documents — all in one place."
          />
          <CTA variant="outline" to="/faq" className="shrink-0">View FAQs</CTA>
        </div>
      </section>
    </>
  );
}
