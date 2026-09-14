import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Leaf, MapPinned, MessageCircle, ShieldCheck, Star, TreePine } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { photo, PHOTOS } from "../data/images";
import { SITE } from "../config/site";
import { ArrowLink, CTA, PageHero, Reveal, SectionHead } from "../components/ui";
import { ContactCTA } from "../components/ui/ContactCTA";
import { InstagramIcon, FacebookIcon } from "../components/icons/SocialIcons";
import { RajajiMapViewer } from "../components/RajajiMapViewer";

const VALUES = [
  { icon: MapPinned, title: "Local first", text: "Our planners and driver-guides live in the Rishikesh–Haridwar belt. The advice you get was true on the ground this week — not copied from a directory." },
  { icon: ShieldCheck, title: "Honest by default", text: "We say when a zone is sold out, when a season is wrong, and when a cheaper gate will do. Trust compounds; one-trip gimmicks don't." },
  { icon: MessageCircle, title: "Human conversation", text: "Everything runs through a real coordinator on WhatsApp or phone. No ticketing bots, no black-box checkout." },
  { icon: TreePine, title: "Forest rules, respected", text: "We operate strictly within forest department regulations — registered vehicles, designated tracks, and guides who put the animal before the photograph." },
];

const RESPONSIBLE = [
  "Registered gypsies and forest-authorised guides on every drive — no exceptions.",
  "Designated tracks and time slots only; we never pressure drivers for off-route sightings.",
  "Small groups, quiet vehicles, and no baiting, calling or crowding at sightings.",
  "Local employment first — drivers, guides and stays from the communities beside the forest.",
  "Clear briefing to every group: no litter, no drones, no loud music inside the park.",
];

export default function AboutPage() {
  useSEO({
    title: "About Rajaji National Park & Sukoon Safari — Local Planning Team & Zonation Map",
    description:
      "Learn about Rajaji National Park (820.42 km² Shivalik Tiger Reserve) and Sukoon Safari — local guides, safari zone map, Chilla & Motichur gates, and honest safari planning from Haridwar & Rishikesh.",
    path: "/about",
    image: photo(PHOTOS.heroAlt, 1200, 630),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Rajaji National Park",
        description:
          "An expansive 820.42 sq km Tiger Reserve & Elephant Sanctuary in the Shivalik foothills of Uttarakhand, formed by amalgamating Rajaji, Motichur, and Chilla sanctuaries.",
        url: `${SITE.url}/about`,
        touristType: ["Wildlife Safari", "Eco-Tourism", "Bird Watching", "Nature Photography"],
      },
      {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Rajaji National Park Zonation Map",
        caption: "High-resolution zonation map of Rajaji National Park displaying Core Protected Area, Safari Zones (Chilla, Motichur, Ranipur), Forest Rest Houses, and the Ganga River corridor.",
        contentUrl: `${SITE.url}/rajaji-national-park-zone-map.jpg`,
        url: `${SITE.url}/rajaji-national-park-zone-map.jpg`,
      },
    ],
  });

  return (
    <>
      <PageHero
        section="Local · independent · on the ground"
        crumb="About"
        title={<>The people behind <em className="text-gold">your safari</em></>}
      />

      {/* Story */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <img
              src={photo(PHOTOS.heroAlt, 1000, 1150)}
              alt={PHOTOS.heroAlt.alt}
              width={1000}
              height={1150}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-[5/5]"
            />
            <p className="mt-3 text-[12px] tracking-wide text-earth-light">
              Forest track in the Shivaliks — the everyday office of our driver-guides. Photo: {PHOTOS.heroAlt.credit} / Pexels
            </p>
          </Reveal>
          <Reveal delay={100}>
            <SectionHead index="01" eyebrow="Our story" title={<>Started at the gate, <em className="text-natural">not in a boardroom</em></>} />
            <div className="mt-5 space-y-4 text-[1.04rem] leading-relaxed text-earth">
              <p>
                {SITE.name} began the way most useful travel services do: helping friends of friends figure out
                which Rajaji gate to enter, which permit to ask for, and why their hotel's "package" didn't match
                what the forest actually offers.
              </p>
              <p>
                The Shivalik belt around Rishikesh, Haridwar and Dehradun has world-class wildlife within an hour
                of three busy cities — yet travellers routinely ended up at the wrong gate, on the wrong slot, or
                paying for confusion. We built this service to close that gap: match the traveller's starting
                point to the right zone, write the real price down before money moves, and stay on the thread
                until the drive is done.
              </p>
              <p>
                Today we coordinate safaris across Rajaji National Park, work with a vetted
                circle of local gypsy owners and forest-authorised guides, and keep the whole thing deliberately
                small — because a coordinator who knows your name plans better than a platform that knows your
                order number.
              </p>
            </div>

            {/* Why Uttarakhand */}
            <div className="mt-10 rounded-xl border border-ink/10 bg-sand p-6">
              <h2 className="flex items-center gap-2 text-[13px] font-bold tracking-[0.2em] text-forest-deep uppercase">
                <Leaf className="size-4 text-natural" /> Why Uttarakhand
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-earth">
                Nowhere else in the country puts a premier elephant-and-tiger landscape this close to major
                railheads and hill towns. A traveller can step off a train at Haridwar at noon and watch chital
                graze a Sal riverbed by three. That accessibility is Uttarakhand's gift — and the reason good
                gate-level planning matters so much here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ Detailed Rajaji National Park & Zonation Map Section ═══════ */}
<section className="bg-sand py-16 sm:py-20 md:py-24 border-y border-ink/10" aria-label="About Rajaji National Park Landscape">
  <div className="wrap">
    <Reveal>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHead
          index="02"
          eyebrow="The Sanctuary"
          title={<>Rajaji National Park & <em className="text-natural">Forest Zonation</em></>}
          lead="Spanning 820.42 km² across Haridwar, Dehradun, and Pauri Garhwal districts, Rajaji is one of India's most ecologically significant wildlife corridors."
        />
        <ArrowLink to="/safari" className="text-[14px] font-bold shrink-0">
          View Safari Gates & Rates
        </ArrowLink>
      </div>
    </Reveal>

    <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Left: In-depth Park Heritage & Zoning Description */}
      <Reveal className="lg:col-span-6 space-y-6">
        <div className="rounded-2xl border border-ink/10 bg-paper p-6 sm:p-7 shadow-xs">
          <h3 className="font-serif text-2xl font-medium text-forest-deep">
            History, Geography & Biodiversity
          </h3>
          <div className="mt-4 space-y-3.5 text-[14.5px] sm:text-[15px] leading-relaxed text-earth">
            <p>
              Named after <strong>C. Rajagopalachari (Rajaji)</strong>, the prominent Indian freedom fighter and the last Governor-General of India, the park was established in 1983 by integrating three historic wildlife sanctuaries: <em>Rajaji Sanctuary (est. 1948)</em>, <em>Motichur Sanctuary (est. 1964)</em>, and <em>Chilla Sanctuary (est. 1977)</em>.
            </p>
            <p>
              In April 2015, Rajaji was officially notified as India's <strong>48th Tiger Reserve</strong>. It acts as the northwestern terminus for Asian Elephants and Bengal Tigers in the Indian subcontinent.
            </p>
            <p>
              The holy River Ganga bisects the park across its width, separating the Eastern Chilla and Gohri ranges from the Western Motichur, Ranipur, Kansrao, and Dholkhand ranges.
            </p>
          </div>

          {/* Key Zonation Highlights */}
          <div className="mt-6 pt-5 border-t border-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-sand p-3">
              <span className="text-[12px] font-bold text-forest-deep uppercase tracking-wider block">Core Sanctuary</span>
              <p className="mt-1 text-[13px] text-earth">Inviolate high-protection zones for tiger & elephant breeding (Dholkhand, Satyanarayan, Kansrao).</p>
            </div>
            <div className="rounded-lg bg-sand p-3">
              <span className="text-[12px] font-bold text-forest-deep uppercase tracking-wider block">Eco-Tourism Gates</span>
              <p className="mt-1 text-[13px] text-earth">Controlled 4×4 Gypsy tracks across Chilla, Motichur, Ranipur & Jhilmil Jheel.</p>
            </div>
          </div>
        </div>

        {/* Park Quick Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-ink/10 bg-paper p-3.5 text-center">
            <span className="block font-serif text-xl font-bold text-forest-deep">820 km²</span>
            <span className="text-[10.5px] font-semibold text-earth-light uppercase">Total Area</span>
          </div>
          <div className="rounded-xl border border-ink/10 bg-paper p-3.5 text-center">
            <span className="block font-serif text-xl font-bold text-forest-deep">1983</span>
            <span className="text-[10.5px] font-semibold text-earth-light uppercase">Established</span>
          </div>
          <div className="rounded-xl border border-ink/10 bg-paper p-3.5 text-center">
            <span className="block font-serif text-xl font-bold text-forest-deep">500+</span>
            <span className="text-[10.5px] font-semibold text-earth-light uppercase">Elephants</span>
          </div>
          <div className="rounded-xl border border-ink/10 bg-paper p-3.5 text-center">
            <span className="block font-serif text-xl font-bold text-forest-deep">315+</span>
            <span className="text-[10.5px] font-semibold text-earth-light uppercase">Bird Species</span>
          </div>
        </div>
      </Reveal>

      {/* Right: Map + Big Responsive Gallery Button */}
      <Reveal delay={120} className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/20 via-natural/20 to-gold/20 blur-xl opacity-70" aria-hidden="true" />
          <RajajiMapViewer badge="Rajaji National Park · Zonation Detail" showLegend={true} />
        </div>

        {/* Big Responsive Call-to-Action Button */}
        <Link
          to="/gallery"
          className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-forest-deep/20 bg-forest-deep p-5 sm:p-6 text-paper shadow-md transition-all duration-300 hover:bg-natural hover:shadow-xl active:scale-[0.99]"
        >
          <div className="space-y-1 text-left">
            <span className="block font-serif text-xl sm:text-2xl font-medium tracking-wide text-sand">
              Explore Safari Gallery
            </span>
            <p className="text-[13px] sm:text-[14px] text-paper/80 font-sans">
              View high-resolution wildlife and landscape captures
            </p>
          </div>
          <ArrowRight className="size-8 text-gold transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </div>
  </div>
</section>

      {/* ══ Meet the Founder — Aadil Bhadana ═══════════════════════════ */}
      <section className="bg-paper py-16 sm:py-20" aria-label="About Aadil Bhadana, Founder">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="02"
              eyebrow="Meet your naturalist"
              title={<>Aadil Bhadana <em className="text-natural">— founder & lead naturalist</em></>}
            />
          </Reveal>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* Photo */}
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -top-3 -left-3 h-full w-full rounded-xl border border-beige" aria-hidden="true" />
                <img
                  src="/aadil-bhadana.webp"
                  alt="Aadil Bhadana, wildlife naturalist and founder of Sukoon Safari, at Rajaji National Park"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="relative aspect-[5/5] w-full rounded-xl object-cover shadow-sm"
                />
              </div>

              {/* Social links right under the photo */}
              <div className="mt-4 flex flex-wrap gap-2.5">
                
                <a  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-sand px-3 py-1.5 text-[12.5px] font-bold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep"
                >
                  <InstagramIcon className="size-3.5 text-[#E1306C]" />
                  @adil_on_safari
                </a>
                
                <a href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-sand px-3 py-1.5 text-[12.5px] font-bold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep"
                >
                  <FacebookIcon className="size-3.5 text-natural" />
                  @safariwithAadil
                </a>

                < Link to={"/contact"} className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-sand px-3 py-1.5 text-[12.5px] font-bold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep">
                  Contact us 
                  <ArrowUpRight className="size-4.5 shrink-0 text-natural" />
                </Link>
                
              </div>
            </Reveal>

            {/* Bio */}
            <Reveal delay={100}>
              <div className="space-y-4 text-[1.02rem] leading-relaxed text-earth">
                <p>
                  Aadil Bhadana is a wildlife naturalist and conservation practitioner with over seven years of
                  field experience in and around the forests of Rajaji National Park, Uttarakhand. As a member
                  of the Van Gujjar community, his work is deeply connected to the landscape, its wildlife and
                  the traditional knowledge of communities living alongside the forest.
                </p>
                <p>
                  His professional journey includes work on Human–Elephant Conflict (HEC), Swamp Deer
                  conservation, nature education and environmental awareness. He has also contributed to
                  culture conservation through <strong>Samvaad by Tata Steel Foundation</strong>, supporting
                  efforts that recognise the importance of indigenous knowledge, cultural heritage and
                  community participation in conservation.
                </p>
                <p>
                  For Aadil, conservation is not limited to protecting wildlife — it is about creating a
                  stronger relationship between people, forests and wildlife. His field experience has given
                  him an understanding of the challenges faced by both wildlife and forest-dependent
                  communities, and the importance of responsible coexistence.
                </p>
                <p>
                  Through Sukoon Safari, Aadil aims to turn wildlife tourism into an opportunity for
                  conservation awareness, nature education and appreciation of local culture. Every experience
                  is designed to encourage visitors to understand Rajaji more deeply and travel with greater
                  respect for its wildlife, forests and communities.
                </p>
              </div>

              {/* Expertise tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Wildlife Conservation",
                  "Human–Wildlife Coexistence",
                  "Nature Education",
                  "Community Knowledge",
                  "Cultural Conservation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-natural/30 bg-sage-100/80 px-3.5 py-1.5 text-[12.5px] font-bold text-natural"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick credential strip */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-ink/10 bg-sand p-3.5 text-center">
                  <span className="block font-serif text-xl font-bold text-forest-deep">7+ yrs</span>
                  <span className="text-[10.5px] font-semibold text-earth-light uppercase">Field Experience</span>
                </div>
                <div className="rounded-xl border border-ink/10 bg-sand p-3.5 text-center">
                  <span className="block font-serif text-xl font-bold text-forest-deep">HEC</span>
                  <span className="text-[10.5px] font-semibold text-earth-light uppercase">Conflict Mitigation</span>
                </div>
                <div className="rounded-xl border border-ink/10 bg-sand p-3.5 text-center">
                  <span className="block font-serif text-xl font-bold text-forest-deep">Van Gujjar</span>
                  <span className="text-[10.5px] font-semibold text-earth-light uppercase">Community</span>
                </div>
                <div className="rounded-xl border border-ink/10 bg-sand p-3.5 text-center">
                  <span className="block font-serif text-xl font-bold text-forest-deep">Tata Steel</span>
                  <span className="text-[10.5px] font-semibold text-earth-light uppercase">Samvaad Contributor</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="topo-light bg-paper py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHead index="04" eyebrow="Local experience" title={<>How we <em className="text-natural">work</em></>} />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-ink/10 bg-paper p-6">
                  <span className="grid size-11 place-items-center rounded-md bg-sage-100 text-natural">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-[16.5px] font-bold text-forest-deep">{v.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-earth">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>



          {/* Social Connect Banner */}
          <Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-forest-deep to-forest p-6 sm:p-8 text-paper shadow-[var(--shadow-card)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Live from the Forest</span>
                  <h3 className="mt-1 font-serif text-2xl text-paper">Follow Our Safari Sightings</h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-sage-200/85">
                    Catch daily wildlife sightings, tiger & leopard movements, guest experiences and forest updates directly from Aadil on Instagram and Facebook.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-paper px-4 py-2.5 text-[13.5px] font-bold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep"
                  >
                    <InstagramIcon className="size-4 text-[#E1306C]" />
                    <span>Instagram (@adil_on_safari)</span>
                  </a>
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-paper/30 bg-paper/10 px-4 py-2.5 text-[13.5px] font-bold text-paper backdrop-blur-xs transition-all hover:border-gold hover:text-gold"
                  >
                    <FacebookIcon className="size-4 text-gold" />
                    <span>Facebook (@safariwithAadil)</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Responsible tourism */}
      <section className="topo bg-forest-deep py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHead
              dark
              index="04"
              eyebrow="Responsible tourism"
              title={<>The forest is the <em className="text-gold">host</em></>}
              lead="Safaris exist because these forests are protected. Our practices are the price of admission — we hold them without exception."
            />
          </Reveal>
          <Reveal delay={120}>
            <ol className="space-y-5">
              {RESPONSIBLE.map((r, i) => (
                <li key={r} className="flex gap-4">
                  <span className="font-serif text-[1.5rem] leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[15px] leading-relaxed text-sage-200/85">{r}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-xl font-serif text-forest-deep text-balance text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.12]">
              Why travellers choose us? <em className="text-natural">Ask them, not us.</em>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-earth">
              Our reviews live on our Google Business Profile — the one place we can't edit them. Have questions or want to speak with us?
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ContactCTA type="whatsapp" text="Book a Safari" className="text-forest-deep bg-gold hover:bg-[#c4930f]" />
              <CTA to="/contact" variant="forest">
                Contact Page & Details
              </CTA>
              <CTA variant="outline" href="/#reviews">
                <Star className="mr-1.5 size-4 text-gold fill-gold inline-block" />
                Google reviews ✓
              </CTA>
            </div>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[14px]">
              <ArrowLink href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I'd like to know more about your team before booking.")}`} external>Chat with the team first</ArrowLink>
              <span className="text-ink/30">•</span>
              <ArrowLink to="/contact">View Office Address & Contacts</ArrowLink>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
