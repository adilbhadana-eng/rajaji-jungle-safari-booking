import { ArrowUpRight, BusFront, Car, MapPin, Plane, TrainFront } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { ARRIVAL_HUBS, STARTING_POINTS, TRANSPORT_OPTIONS } from "../data/routes";
import { PageHero, Reveal, SectionHead } from "../components/ui";
import { RouteCard } from "../components/cards";
import { ContactCTA } from "../components/ui/ContactCTA";

const TRANSPORT_ICONS = [Car, TrainFront, Plane, BusFront];

const RAJAJI_GATES = [
  { name: "Chilla Gate", nearest: "Rishikesh ≈ 18 km", mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chilla+Gate+Rajaji+National+Park" },
  { name: "Chilla Wali", nearest: "Rishikesh ≈ 20 km", mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chilla+Gate+Rajaji+National+Park" },
  { name: "Ranipur Gate", nearest: "Haridwar ≈ 9 km", mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ranipur+Gate+Rajaji+National+Park" },
  { name: "Motichur Gate", nearest: "Haridwar ≈ 10 km", mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Motichur+Gate+Rajaji+National+Park" },
  { name: "Jhilmil Jheel", nearest: "Haridwar ≈ 25 km", mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jhilmil+Jheel+Conservation+Reserve" },
];

export default function HowToReachPage() {

  useSEO({
    title: "How to Reach Rajaji National Park — Routes from Rishikesh, Haridwar, Dehradun & Delhi",
    description:
      "Route guide to Rajaji National Park gates from Rishikesh, Haridwar, Dehradun and Delhi — distances, travel times, nearest airport, railway stations and Google Maps directions.",
    path: "/how-to-reach",
  });


  return (
    <>
      <PageHero
        section="By road · rail · air"
        crumb="How to Reach"
        title={<>Getting to <em className="text-gold">the gate</em></>}
        lead="Approximate road distances, the nearest airport and railheads, gate-by-gate directions — everything verified again when we confirm your booking."
      />

      {/* Starting points */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="01"
              eyebrow="From your city"
              title={<>Route cards for <em className="text-natural">every starting point</em></>}
              lead="Figures are approximate road values to the recommended gate — traffic on festival weekends can add time."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STARTING_POINTS.map((r, i) => (
              <Reveal key={r.from} delay={i * 70}>
                <RouteCard r={r} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arrival hubs */}
      <section className="topo-light bg-sand py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="02"
              eyebrow="Air & rail"
              title={<>Arriving by <em className="text-natural">plane or train</em></>}
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ARRIVAL_HUBS.map((h, i) => (
              <Reveal key={h.label} delay={i * 70}>
                <div className="flex h-full flex-col rounded-xl border border-ink/10 bg-paper p-5">
                  <p className="flex items-start gap-2.5 text-[15.5px] font-bold text-forest-deep">
                    <MapPin className="mt-0.5 size-4.5 shrink-0 text-gold-deep" /> {h.label}
                  </p>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-earth">{h.detail}</p>
                  <a href={h.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-natural transition-colors hover:text-forest-deep">
                    Get directions <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Transport options */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRANSPORT_OPTIONS.map((t, i) => {
              const Icon = TRANSPORT_ICONS[i];
              return (
                <Reveal key={t.title} delay={i * 70}>
                  <div className="h-full rounded-xl border border-ink/10 bg-paper p-5">
                    <span className="grid size-10 place-items-center rounded-md bg-sage-100 text-natural">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-3 text-[15px] font-bold text-forest-deep">{t.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-earth">{t.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gate quick reference */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="03"
              eyebrow="Gate directory"
              title={<>Every gate, <em className="text-natural">one tap away</em></>}
              lead="Direction links open Google Maps navigation straight to the gate. Your permit always names the gate — check it the day before."
            />
          </Reveal>
          <div className="mt-10">
            <h3 className="font-serif text-[1.45rem] text-forest-deep">Rajaji National Park</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {RAJAJI_GATES.map((g) => (
                <li key={g.name} className="flex flex-col rounded-lg border border-ink/10 bg-sand p-4">
                  <p className="text-[14.5px] font-bold text-forest-deep">{g.name}</p>
                  <p className="mt-0.5 text-[12.5px] font-semibold text-natural">{g.nearest}</p>
                  <a href={g.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 pt-2.5 text-[12.5px] font-bold text-gold-deep transition-colors hover:text-forest-deep">
                    Navigate <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-deep py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-paper text-[clamp(1.5rem,2.6vw,2rem)]">Need pickup to the gate?</h2>
            <p className="mt-1.5 max-w-xl text-[14.5px] text-sage-200/80">
              Add hotel, station or airport pickup to your safari — just ask us via WhatsApp.
            </p>
          </div>
          <ContactCTA type="whatsapp" text="Ask about pickup" className="text-forest-deep bg-gold hover:bg-[#c4930f]" />
        </div>
      </section>
    </>
  );
}
