import type { ReactNode } from "react";
import { useSEO } from "../hooks/useSEO";
import { SITE } from "../config/site";
import { ArrowLink, PageHero, Reveal } from "../components/ui";

function LegalShell({
  crumb,
  section,
  title,
  updated,
  children,
}: {
  crumb: string;
  section: string;
  title: ReactNode;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero section={section} crumb={crumb} title={title} />
      <section className="bg-paper py-14 sm:py-18">
        <div className="wrap max-w-3xl">
          <Reveal>
            <p className="rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-[13px] font-semibold text-earth">
              Last updated: {updated} · {SITE.name} · {SITE.addressLines.join(", ")}
            </p>
            <div className="mt-8 space-y-8">{children}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="flex items-baseline gap-3 font-serif text-[1.35rem] text-forest-deep">
        <span className="text-[1rem] text-gold-deep">{n}</span> {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-earth">{children}</div>
    </div>
  );
}

/* ── Terms ─────────────────────────────────────────────────────────────── */
export function TermsPage() {
  useSEO({
    title: "Terms & Conditions — Sukoon Safari",
    description: `Terms and conditions governing safari bookings, park rules and wildlife experiences with ${SITE.name}.`,
    path: "/terms",
  });
  return (
    <LegalShell crumb="Terms" section="The agreement, in plain language" updated="February 2026" title={<>Terms & <em className="text-gold">Conditions</em></>}>
      <Block n="01" title="Agreement & Park Regulations">
        <p>
          By booking an experience with {SITE.name}, guests agree to follow the rules and regulations of Rajaji National Park and the relevant Forest Department authorities.
        </p>
        <p>
          {SITE.name} is an independent safari operator and assistance service for Rajaji National Park. We follow all applicable Forest Department guidelines for vehicle registration, guide deployment and visitor safety.
        </p>
      </Block>
      <Block n="02" title="Permits, Allocations & Operations">
        <p>
          Safari permits, vehicle allocation, entry timings, zones and other park-related arrangements are subject to government regulations, availability and operational conditions.
        </p>
      </Block>
      <Block n="03" title="Wildlife Sightings">
        <p>
          Wildlife sightings are completely natural and cannot be guaranteed. Our team focuses on providing a knowledgeable, authentic and responsible experience while respecting wildlife and its habitat.
        </p>
      </Block>
      <Block n="04" title="Guest Code of Conduct">
        <p>
          Guests are expected to respect wildlife, maintain appropriate distances, follow the instructions of guides and drivers, and avoid any activity that may disturb animals or damage the environment. Littering, smoking, loud noise and feeding animals are strictly prohibited inside the forest.
        </p>
      </Block>
      <Block n="05" title="Modifications & Safety">
        <p>
          {SITE.name} reserves the right to modify, reschedule or cancel an experience when required due to park closures, weather conditions, government restrictions, safety concerns or other circumstances beyond our control.
        </p>
      </Block>
      <Block n="06" title="Guest Responsibility & IDs">
        <p>
          Guests are responsible for providing accurate booking information and arriving at the designated meeting point or safari gate on time. Original photo IDs (matching the booking details) must be carried during the safari as per Forest Department regulations.
        </p>
      </Block>
      <Block n="07" title="Contact">
        <p>
          For any questions regarding these terms, contact us at{" "}
          <a className="font-bold text-natural underline underline-offset-2" href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
          or WhatsApp/call{" "}
          <a className="font-bold text-natural underline underline-offset-2" href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> /{" "}
          <a className="font-bold text-natural underline underline-offset-2" href={`tel:${SITE.phoneHrefSecondary}`}>{SITE.phoneDisplaySecondary}</a>.
        </p>
      </Block>
    </LegalShell>
  );
}

/* ── Privacy ───────────────────────────────────────────────────────────── */
export function PrivacyPage() {
  useSEO({
    title: "Privacy Policy — Sukoon Safari",
    description: `How ${SITE.name} handles your contact information and booking details.`,
    path: "/privacy-policy",
  });
  return (
    <LegalShell crumb="Privacy" section="Your details, plainly handled" updated="February 2026" title={<>Privacy <em className="text-gold">Policy</em></>}>
      <Block n="01" title="What information we collect">
        <p>
          When you contact us via WhatsApp, phone, or email to enquire about or book a safari, we collect only the necessary details required to coordinate your trip: your name, contact number, preferred date, group size, nationality and preferred safari zone.
        </p>
      </Block>
      <Block n="02" title="How we use your information">
        <p>
          Your information is used solely for the purpose of checking safari availability, arranging forest entry permits, assigning guides and drivers, and communicating with you regarding your safari.
        </p>
        <p>
          We do not sell, rent, or share your personal details with third-party marketing companies.
        </p>
      </Block>
      <Block n="03" title="Permit & Forest Department Requirements">
        <p>
          Visitor names and ID details are submitted to the Forest Department permit portal strictly as required by law for issuing official Rajaji National Park entry permits.
        </p>
      </Block>
      <Block n="04" title="Contact & Data Removal">
        <p>
          You may contact us at any time at{" "}
          <a className="font-bold text-natural underline underline-offset-2" href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
          to ask questions about your data or request deletion of your contact records.
        </p>
      </Block>
    </LegalShell>
  );
}

/* ── Cancellation ──────────────────────────────────────────────────────── */
export function CancellationPage() {
  useSEO({
    title: "Cancellation & Refund Policy — Sukoon Safari",
    description: `Cancellation, refund and rescheduling terms for safaris booked with ${SITE.name} at Rajaji National Park.`,
    path: "/cancellation-policy",
  });
  return (
    <LegalShell crumb="Cancellation" section="Cancellation & Refund Terms" updated="February 2026" title={<>Cancellation & <em className="text-gold">Refund Policy</em></>}>
      <Block n="01" title="Cancellation Eligibility">
        <p>
          Cancellation and refund eligibility depends on the type of safari, permit status and booking arrangements made for the guest.
        </p>
      </Block>
      <Block n="02" title="Guest Cancellation">
        <p>
          Cancellation charges may apply depending on how close the cancellation request is to the scheduled safari date. Specific cancellation charges and refund terms will be communicated and confirmed at the time of booking.
        </p>
      </Block>
      <Block n="03" title="No-Show or Late Arrival">
        <p>
          Generally, no refund will be provided for missed safaris due to late arrival or failure to appear at the designated meeting point or safari gate on time.
        </p>
      </Block>
      <Block n="04" title="Park Closure or Government Restrictions">
        <p>
          If a safari is cancelled because of an official park closure, Forest Department order, weather emergency or circumstances beyond our control, {SITE.name} will assist with rescheduling or applicable refund options, subject to the terms of the relevant permit and operator rules.
        </p>
      </Block>
      <Block n="05" title="Weather Conditions">
        <p>
          Safari operations may occasionally be affected by severe weather or safety conditions. Any refund or rescheduling will be subject to applicable park and permit rules.
        </p>
      </Block>
      <Block n="06" title="Wildlife Sightings">
        <p>
          Refunds will not be provided because a particular animal or bird was not sighted. Wildlife sightings are entirely natural and subject to forest conditions.
        </p>
      </Block>
      <Block n="07" title="How to Request Cancellation or Rescheduling">
        <p>
          For cancellation, refund or rescheduling requests, guests should contact {SITE.name} as early as possible with their booking details via WhatsApp/Phone (+91 73029 33425 / +91 94561 51130) or email ({SITE.email}).
        </p>
      </Block>
      <div className="border-t border-ink/10 pt-6">
        <ArrowLink to="/faq">Read the FAQ</ArrowLink>
      </div>
    </LegalShell>
  );
}
