import { ShieldCheck, X } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { MAIN_PRICING, JHILMIL_PRICING, INCLUSIONS, EXCLUSIONS, ADDITIONAL_SERVICES } from "../data/pricing";
import { DISCLAIMERS } from "../config/site";
import { CheckItem, PageHero, Reveal, SectionHead } from "../components/ui";
import { ContactCTA } from "../components/ui/ContactCTA";

export default function PricingPage() {
  useSEO({
    title: "Safari Pricing — Rajaji National Park Safari Rates",
    description:
      "Safari pricing for Rajaji National Park — Indian and foreign nationals, Jhilmil Jheel rates, gypsy charges and government fees. Transparent pricing with no hidden charges.",
    path: "/pricing",
  });

  return (
    <>
      <PageHero
        section="Transparent · Fair · No Hidden Charges"
        crumb="Pricing"
        title={<>What a safari <em className="text-gold">actually costs</em></>}
        lead="All Rajaji National Park safari charges are listed below for Indian and foreign nationals. Contact us to confirm your final quote including any applicable pickup/drop."
      />

      {/* Main Pricing Tables */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <SectionHead
              index="01"
              eyebrow="Safari Charges"
              title={<>Clear rates for <em className="text-natural">your group</em></>}
              lead="The totals below include the 4×4 Gypsy safari charge plus all applicable government entry and per-person charges."
            />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {MAIN_PRICING.map((pricing, pi) => (
              <Reveal key={pricing.type} delay={pi * 100}>
                <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[var(--shadow-card)]">
                  <div className="bg-forest px-5 py-4">
                    <h2 className="text-[12.5px] font-bold tracking-[0.2em] text-sage-200 uppercase">{pricing.type}</h2>
                  </div>

                  {/* Gypsy charge */}
                  <div className="border-b border-ink/10 px-5 py-4">
                    <p className="text-[11.5px] font-bold tracking-[0.14em] text-earth-light uppercase mb-2">4×4 Gypsy Safari</p>
                    {pricing.gypsyCharge.map((tier) => (
                      <div key={tier.duration} className="flex items-center justify-between py-1.5">
                        <span className="text-[14.5px] text-earth">{tier.duration}</span>
                        <span className="font-bold text-forest-deep">{tier.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Government charges */}
                  <div className="border-b border-ink/10 bg-sand/50 px-5 py-4">
                    <p className="text-[11.5px] font-bold tracking-[0.14em] text-earth-light uppercase mb-2">Government Charges (per booking)</p>
                    {pricing.governmentCharges.map((charge) => (
                      <div key={charge.label} className="flex items-center justify-between py-1.5">
                        <span className="text-[14.5px] text-earth">{charge.label}</span>
                        <span className="font-bold text-forest-deep">{charge.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="px-5 py-4">
                    <p className="text-[11.5px] font-bold tracking-[0.14em] text-earth-light uppercase mb-2">Approx. Total (2 hr safari)</p>
                    <ul className="divide-y divide-ink/8">
                      {pricing.totals.map((row) => (
                        <li key={row.guests} className="flex items-center justify-between gap-4 py-2.5 transition-colors hover:bg-sand/60 rounded px-1">
                          <span className="text-[14.5px] font-medium text-earth">{row.guests}</span>
                          <span className="font-serif text-[1.2rem] text-forest-deep">{row.total}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Jhilmil Jheel pricing */}
          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[var(--shadow-card)]">
              <div className="bg-forest-deep px-5 py-4">
                <h2 className="text-[12.5px] font-bold tracking-[0.2em] text-sage-200 uppercase">Jhilmil Jheel Zone — Government Charges</h2>
                <p className="mt-1 text-[12px] text-sage-200/70">Season: 15 Oct – 30 Jun</p>
              </div>
              <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
                {JHILMIL_PRICING.map((tier) => (
                  <div key={tier.type} className="bg-paper px-5 py-4">
                    <p className="text-[13px] font-bold text-forest-deep mb-2">{tier.type}</p>
                    {tier.charges.map((c) => (
                      <div key={c.label} className="flex items-center justify-between py-1.5">
                        <span className="text-[14px] text-earth">{c.label}</span>
                        <span className="font-bold text-forest-deep">{c.price}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Additional services */}
          <Reveal className="mt-5">
            <div className="rounded-xl border border-gold/40 bg-gold/10 px-5 py-4">
              <p className="text-[13.5px] font-bold text-forest-deep">Optional Add-ons</p>
              {ADDITIONAL_SERVICES.map((s) => (
                <div key={s.label} className="mt-2 flex items-center justify-between">
                  <span className="text-[14px] text-earth">{s.label}</span>
                  <span className="font-bold text-forest-deep">{s.price}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="topo-light bg-sand py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHead
              index="02"
              eyebrow="What's included"
              title={<>What you get in <em className="text-natural">your safari</em></>}
            />
            <ul className="mt-6 space-y-2">
              {INCLUSIONS.map((inc) => (
                <CheckItem key={inc}>{inc}</CheckItem>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5">
              <div className="rounded-xl border border-ink/10 bg-paper p-6">
                <p className="text-[14.5px] font-bold tracking-[0.12em] text-earth-light uppercase mb-3">Not included</p>
                <ul className="space-y-2">
                  {EXCLUSIONS.map((exc) => (
                    <li key={exc} className="flex items-start gap-2 text-[14px] text-ink/70">
                      <X className="mt-1 size-3.5 shrink-0 text-ink/30" /> {exc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-ink/10 bg-paper p-6">
                <p className="flex items-center gap-2 text-[15.5px] font-bold text-forest-deep">
                  <ShieldCheck className="size-4.5 text-natural" /> Availability & Confirmation
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-earth">{DISCLAIMERS.availability}</p>
              </div>
              <p className="text-[12.5px] leading-relaxed text-earth-light">{DISCLAIMERS.pricing}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-deep py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-paper text-[clamp(1.5rem,2.6vw,2rem)]">Ready to confirm your booking?</h2>
            <p className="mt-1.5 max-w-xl text-[14.5px] text-sage-200/80">
              Send your dates, group size and nationality — we'll share availability and confirm all charges.
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
