import { Clock, MapPin, Navigation, Quote, Users } from "lucide-react";
import { cn } from "../utils/cn";
import type { Destination, RouteInfo, Safari, SafariType } from "../lib/types";
import type { Review } from "../data/reviews";
import { photo } from "../data/images";
import { ArrowLink, Tag } from "./ui";
import { ContactCTA } from "./ui/ContactCTA";

/* ── Shared image treatment ────────────────────────────────────────────── */
export function CardImage({
  src,
  alt,
  className,
  eager = false,
  width = 800,
  height = 500,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div className={cn("overflow-hidden bg-forest-deep", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover saturate-[0.96] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
    </div>
  );
}

/* ── Destination card ──────────────────────────────────────────────────── */
export function DestinationCard({ d }: { d: Destination }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
      <div className="relative">
        <CardImage src={photo(d.photo, 1100, 700)} alt={d.photo.alt} className="aspect-[16/10]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-forest-deep/70 to-transparent" aria-hidden="true" />
        <p className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.18em] text-paper/95 uppercase">
          <MapPin className="size-3.5 text-gold" /> {d.region}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-[1.65rem] leading-tight text-forest-deep">{d.name}</h3>
        <p className="mt-2.5 line-clamp-3 text-[15px] leading-relaxed text-earth">{d.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.bestFor.slice(0, 3).map((b) => (
            <Tag key={b}>{b}</Tag>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-4 [margin-top:auto]">
          <span className="text-[12.5px] font-semibold tracking-wide text-earth-light">{d.gates.length} entry gates · {d.landscape.split("·")[0].trim()}</span>
          <ArrowLink to={`/destinations#${d.id}`}>Explore</ArrowLink>
        </div>
      </div>
    </article>
  );
}

/* ── Safari type card ──────────────────────────────────────────────────── */
export function SafariTypeCard({ t }: { t: SafariType }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
      <div className="relative">
        <CardImage src={photo(t.photo, 800, 500)} alt={t.photo.alt} className="aspect-[16/9]" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Tag dark>{t.group}</Tag>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[1.35rem] text-forest-deep">{t.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[14.5px] leading-relaxed text-earth">{t.blurb}</p>
        <p className="mt-3 flex items-center gap-1.5 text-[12.5px] font-bold tracking-wide text-natural uppercase">
          <Clock className="size-3.5" /> {t.duration}
        </p>
        <div className="mt-3 border-t border-ink/10 pt-3">
          <ArrowLink to={`/safari-types#${t.id}`}>Details</ArrowLink>
        </div>
      </div>
    </article>
  );
}

/* ── Popular safari card ───────────────────────────────────────────────── */
export function SafariCard({ s }: { s: Safari }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
      <div className="relative">
        <CardImage src={photo(s.photo, 900, 560)} alt={s.photo.alt} className="aspect-[16/10]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-forest-deep/70 to-transparent" aria-hidden="true" />
        <p className="absolute bottom-3 left-4 text-[11.5px] font-bold tracking-[0.18em] text-paper uppercase">
          {s.destination}
        </p>
        {s.popular && (
          <span className="absolute top-3 right-3 rounded-full bg-gold px-2.5 py-1 text-[10.5px] font-extrabold tracking-[0.14em] text-forest-deep uppercase">
            Popular
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-[12px] font-bold tracking-[0.14em] text-natural uppercase">
          <MapPin className="size-3.5" /> {s.zone}
        </p>
        <h3 className="mt-1.5 font-serif text-[1.5rem] leading-tight text-forest-deep">{s.name}</h3>
        <p className="mt-2 line-clamp-3 text-[14.5px] leading-relaxed text-earth">{s.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {s.bestFor.map((b) => (
            <Tag key={b}>{b}</Tag>
          ))}
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-earth">
          <Clock className="size-3.5 text-natural" /> {s.duration}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-ink/10 pt-4">
          <ContactCTA type="whatsapp" text="Enquire" variant="outline" className="px-4 py-1.5 text-[13px]" />
          <ArrowLink to="/safari">View zones</ArrowLink>
        </div>
      </div>
    </article>
  );
}

/* ── Route card (Coming From / How to Reach) ───────────────────────────── */
export function RouteCard({ r, detailed = false }: { r: RouteInfo; detailed?: boolean }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-ink/10 bg-paper p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11.5px] font-bold tracking-[0.18em] text-natural uppercase">Coming from</p>
          <h3 className="mt-1 font-serif text-[1.45rem] text-forest-deep">{r.from}</h3>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sage-100 text-natural">
          <Navigation className="size-4.5" />
        </span>
      </div>
      <p className="mt-1 text-[13.5px] font-semibold text-earth">{r.to}</p>

      <div className="mt-3 flex flex-wrap gap-2 text-[12.5px] font-bold text-forest-deep">
        <span className="rounded-md bg-sand px-2.5 py-1">{r.distance}</span>
        <span className="rounded-md bg-sand px-2.5 py-1">{r.driveTime}</span>
      </div>

      <ul className="mt-3.5 space-y-1.5 text-[13.5px] text-earth">
        <li className="flex items-start gap-2">
          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gold" />
          Recommended gate: <strong className="font-bold text-ink">{r.recommendedGate}</strong>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-gold" />
          {r.pickup}
        </li>
        {detailed &&
          r.tips.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-sage" />
              {t}
            </li>
          ))}
      </ul>

      <div className="mt-auto pt-4">
        <ArrowLink href={r.mapsUrl} external>
          Get directions
        </ArrowLink>
      </div>
    </article>
  );
}

/* ── Review card ───────────────────────────────────────────────────────── */
export function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-ink/10 bg-paper p-6">
      <Quote className="size-6 text-gold" aria-hidden="true" />
      <blockquote className="mt-3 flex-1 font-serif text-[1.1rem] leading-relaxed text-forest-deep italic">
        {r.text}
      </blockquote>
      <figcaption className="mt-4 border-t border-ink/10 pt-3">
        <p className="text-[14px] font-bold text-ink">{r.name}</p>
        <p className="text-[12.5px] font-semibold tracking-wide text-earth-light uppercase">{r.trip}</p>
      </figcaption>
    </figure>
  );
}

/* ── Meta chip used on detail pages ────────────────────────────────────── */
export function MetaChip({ icon, children }: { icon: "clock" | "users" | "pin" | "map"; children: React.ReactNode }) {
  const Icon = icon === "clock" ? Clock : icon === "users" ? Users : MapPin;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-sand px-2.5 py-1 text-[12.5px] font-bold text-forest-deep">
      {icon !== "map" && <Icon className="size-3.5 text-natural" />} {children}
    </span>
  );
}
