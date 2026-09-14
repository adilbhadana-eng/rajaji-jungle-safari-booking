import { ClipboardCheck, Compass, Handshake, MapPinned, MessageCircle, ShieldCheck } from "lucide-react";
import { MAIN_PRICING } from "../../data/pricing";
import { DISCLAIMERS } from "../../config/site";
import { ArrowLink, Reveal, SectionHead } from "../ui";
import { ContactCTA } from "../ui/ContactCTA";

/* ══ 5. SAFARI TIMINGS ════════════════════════════════════════════════ */
export function SafariTimings() {
  return (
    <section id="timings" className="bg-paper py-20 sm:py-24" aria-label="Safari Timings">
      <div className="wrap">
        <Reveal>
          <SectionHead
            index="04"
            eyebrow="Safari Timings"
            title={<>Know when the <em className="text-natural">forest opens</em></>}
            lead="Safari timings at Rajaji vary according to the season and zone. We follow the timings and entry regulations applicable to each respective forest zone."
          />
        </Reveal>
        
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal delay={100} className="rounded-xl border border-ink/10 bg-sand p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-serif text-2xl text-forest-deep">Chilla, Chilla Wali, Ranipur & Motichur</h3>
            <p className="mt-2 text-[14px] font-bold text-earth-light uppercase tracking-wide">Season: 15 Nov – 15 Jun</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-bold text-natural text-[15px]">15 November – 15 February</h4>
                <div className="mt-2 grid grid-cols-2 gap-4 text-[14px] text-earth">
                  <div><strong className="text-forest-deep block">Morning</strong> 6:30 AM – 10:00 AM</div>
                  <div><strong className="text-forest-deep block">Evening</strong> 1:30 PM – 5:30 PM</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-natural text-[15px]">16 February – 15 April</h4>
                <div className="mt-2 grid grid-cols-2 gap-4 text-[14px] text-earth">
                  <div><strong className="text-forest-deep block">Morning</strong> 6:00 AM – 9:30 AM</div>
                  <div><strong className="text-forest-deep block">Evening</strong> 2:00 PM – 6:00 PM</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-natural text-[15px]">16 April – 15 June</h4>
                <div className="mt-2 grid grid-cols-2 gap-4 text-[14px] text-earth">
                  <div><strong className="text-forest-deep block">Morning</strong> 5:30 AM – 9:00 AM</div>
                  <div><strong className="text-forest-deep block">Evening</strong> 3:00 PM – 7:00 PM</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="rounded-xl border border-ink/10 bg-sand p-6 sm:p-8 shadow-[var(--shadow-card)] h-fit">
            <h3 className="font-serif text-2xl text-forest-deep">Jhilmil Jheel Zone</h3>
            <p className="mt-2 text-[14px] font-bold text-earth-light uppercase tracking-wide">Season: 15 Oct – 30 Jun</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-bold text-natural text-[15px]">Afternoon Safari</h4>
                <div className="mt-2 text-[14px] text-earth">
                  <strong className="text-forest-deep block">Entry & Exit</strong> 
                  10:00 AM – 3:00 PM
                </div>
                <p className="mt-4 text-[13px] text-earth-light">Morning and evening timings at Jhilmil Jheel are subject to the applicable forest department schedule and seasonal regulations.</p>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg bg-paper p-4 text-[12.5px] leading-relaxed text-earth">
              <strong>Important Notice:</strong> {DISCLAIMERS.availability}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══ 6. PRICING PREVIEW ════════════════════════════════════════════════ */
export function PricingPreview() {
  const indianPricing = MAIN_PRICING[0];
  
  return (
    <section id="pricing-preview" className="topo-light bg-sand py-20 sm:py-24" aria-label="Pricing preview">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHead
            index="05"
            eyebrow="Pricing"
            title={<>Clear pricing for <em className="text-natural">your group</em></>}
            lead="Safari rates in Rajaji depend on your group size, duration, and nationality. We provide all the details upfront so you can plan your trip without surprises."
          />
          <ul className="mt-7 space-y-4">
            <li className="flex gap-4">
              <span className="font-serif text-[1.3rem] leading-none text-gold-deep">01</span>
              <div>
                <p className="text-[15.5px] font-bold text-forest-deep">4×4 Gypsy Safari</p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-earth">₹3,000 for up to 2 hours or ₹3,500 for 3-4 hours.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-serif text-[1.3rem] leading-none text-gold-deep">02</span>
              <div>
                <p className="text-[15.5px] font-bold text-forest-deep">Government Charges</p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-earth">Includes Gypsy Entry (₹250) and Per Person (₹150) for Indians.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-serif text-[1.3rem] leading-none text-gold-deep">03</span>
              <div>
                <p className="text-[15.5px] font-bold text-forest-deep">Foreign Nationals & Jhilmil</p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-earth">Different government charges apply for foreign nationals and Jhilmil Jheel.</p>
              </div>
            </li>
          </ul>
          <div className="mt-7">
            <ArrowLink to="/pricing">View detailed pricing tables</ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between bg-forest px-5 py-3.5">
              <p className="text-[12px] font-bold tracking-[0.2em] text-sage-200 uppercase">Indian Nationals</p>
              <p className="text-[12px] font-bold tracking-[0.2em] text-sage-200 uppercase">Approx Total</p>
            </div>
            <ul className="divide-y divide-ink/8">
              {indianPricing.totals.slice(0, 4).map((p) => (
                <li key={p.guests} className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-sand/60">
                  <div>
                    <p className="text-[15.5px] font-bold text-forest-deep">{p.guests}</p>
                    <p className="mt-0.5 text-[12.5px] font-medium text-earth-light">
                      Includes ₹3,000 Gypsy + Govt. Charges
                    </p>
                  </div>
                  <p className="text-right">
                    <span className="font-serif text-[1.3rem] text-forest-deep">{p.total}</span>
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t border-ink/10 bg-sand/70 px-5 py-4">
              <p className="text-[12.5px] leading-relaxed text-earth">{DISCLAIMERS.pricing}</p>
              <ContactCTA type="whatsapp" text="Check Availability" variant="ghost" className="mt-2 px-0 py-1" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ 7. WHY CHOOSE US ══════════════════════════════════════════════════ */
const REASONS = [
  { icon: MapPinned, title: "Authentic Rajaji Experience", text: "Explore Rajaji National Park with a team that knows its forests, wildlife and landscapes from the ground up." },
  { icon: Compass, title: "Local Knowledge", text: "Our guides and drivers include members of the Van Gujjar community, offering a genuine connection to the forest." },
  { icon: ShieldCheck, title: "Expert Wildlife Team", text: "From tracking wildlife to identifying birds and understanding animal behaviour, we help make every safari insightful." },
  { icon: MessageCircle, title: "Explore Beyond Ordinary", text: "Leopard photography, elephant encounters, birding, nature walks, and authentic tribal experiences." },
  { icon: Handshake, title: "Responsible Tourism", text: "We promote respectful and responsible experiences that value wildlife, forests and local communities." },
  { icon: ClipboardCheck, title: "A Journey to Remember", text: "With Sukoon Safari, you don't simply visit Rajaji—you experience its wilderness, stories and soul." },
];

export function WhyChooseUs() {
  return (
    <section className="topo bg-forest-deep py-20 sm:py-24" aria-label="Why choose us">
      <div className="wrap">
        <Reveal>
          <SectionHead
            dark
            index="06"
            eyebrow="Why choose us"
            title={<>Experienced local <em className="text-gold">drivers & guides</em></>}
            lead="We believe a safari is more than simply spotting wildlife. It is about slowing down, observing nature, and experiencing the wilderness with respect."
          />
        </Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-md border border-paper/15 bg-paper/8 text-sage">
                  <r.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[16.5px] font-bold text-paper">{r.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-sage-200/75">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ 8. PICKUP & DROP ═════════════════════════════════════════════════ */
export function PickupDrop() {
  return (
    <section className="topo-light bg-sand py-20 sm:py-24" aria-label="Pickup & Drop Service">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHead
            index="07"
            eyebrow="Pickup & Drop"
            title={<>Convenient transfers to <em className="text-natural">the gate</em></>}
            lead="For your convenience, Sukoon Safari offers pickup and drop services from nearby locations."
          />
          <ContactCTA type="whatsapp" text="Ask about transfers" className="mt-8 text-white bg-natural hover:bg-forest" />
        </Reveal>
        
        <Reveal delay={100}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/10 bg-paper p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[16px] text-forest-deep flex items-center gap-2">
                <MapPinned className="size-4.5 text-natural" /> Locations
              </h3>
              <ul className="mt-3 space-y-2 text-[14.5px] text-earth">
                <li>• Haridwar</li>
                <li>• Rishikesh</li>
                <li>• Dehradun</li>
                <li>• Airport & Hotels</li>
              </ul>
              <p className="mt-4 text-[13px] text-earth-light">Arranged by 4×4 Gypsy or private taxi. Additional charges apply.</p>
            </div>
            
            <div className="rounded-xl border border-ink/10 bg-paper p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[16px] text-forest-deep flex items-center gap-2">
                <Compass className="size-4.5 text-natural" /> Safari Gate
              </h3>
              <p className="mt-3 text-[14.5px] text-earth">
                Pickup and drop from the designated Safari Gate is available without any additional pickup/drop charge.
              </p>
              <p className="mt-4 text-[13px] text-earth-light">Applicable charges will be communicated at the time of booking.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
