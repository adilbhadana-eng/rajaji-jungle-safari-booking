import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import { cn } from "../utils/cn";

/* ── Scroll reveal ─────────────────────────────────────────────────────── */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "span";
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}

/* ── Section heading block ─────────────────────────────────────────────── */
export function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  dark = false,
  align = "left",
  className,
  as: Component = "h2",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", dark ? "text-sage" : "text-natural", align === "center" && "justify-center")}>
        {index && <span className={cn(dark ? "text-gold" : "text-gold-deep")}>{index}</span>}
        <span>{eyebrow}</span>
      </p>
      <Component
        className={cn(
          "mt-4 font-serif leading-[1.1] text-balance",
          "text-[clamp(1.85rem,3.4vw,2.7rem)]",
          dark ? "text-paper" : "text-forest-deep",
        )}
      >
        {title}
      </Component>
      {lead && (
        <p className={cn("mt-4 text-[1.05rem] leading-relaxed", dark ? "text-sage-200/90" : "text-earth")}>{lead}</p>
      )}
    </div>
  );
}

/* ── Buttons ───────────────────────────────────────────────────────────── */
type BtnVariant = "forest" | "gold" | "outline" | "outlineLight" | "whatsapp";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer";
const btnSizes = {
  md: "px-6 py-3 text-[15px]",
  sm: "px-4 py-2 text-sm",
  lg: "px-7 py-3.5 text-base",
};
const btnVariants: Record<BtnVariant, string> = {
  forest: "bg-forest text-paper hover:bg-forest-deep hover:shadow-[var(--shadow-lift)] active:translate-y-px",
  gold: "bg-gold text-forest-deep hover:bg-[#c4930f] hover:shadow-[var(--shadow-lift)] active:translate-y-px",
  outline: "border border-ink/25 text-ink hover:border-forest hover:text-forest bg-transparent",
  outlineLight: "border border-paper/40 text-paper hover:bg-paper hover:text-forest-deep bg-transparent",
  whatsapp: "bg-[#1f9e53] text-white hover:bg-[#177242] active:translate-y-px",
};

export function CTA({
  to,
  href,
  onClick,
  type,
  variant = "forest",
  size = "md",
  className,
  children,
  external = false,
  disabled = false,
  ariaLabel,
}: {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "submit" | "button";
  variant?: BtnVariant;
  size?: keyof typeof btnSizes;
  className?: string;
  children: ReactNode;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  const cls = cn(btnBase, btnSizes[size], btnVariants[variant], disabled && "opacity-60 pointer-events-none", className);
  if (to)
    return (
      <Link to={to} onClick={onClick} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

/* ── Arrow text link ───────────────────────────────────────────────────── */
export function ArrowLink({
  to,
  href,
  children,
  dark = false,
  className,
  external = false,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(
    "group inline-flex items-center gap-1.5 text-[15px] font-bold tracking-wide",
    dark ? "text-gold" : "text-natural",
    className,
  );
  const inner = (
    <>
      <span className="relative">
        {children}
        <span
          className={cn(
            "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 transition-transform group-hover:scale-x-0",
            dark ? "bg-gold/50" : "bg-natural/40",
          )}
        />
      </span>
      {external ? (
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  );
}

/* ── Small tag pill ────────────────────────────────────────────────────── */
export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase",
        dark ? "bg-paper/10 text-sage-200" : "bg-sage-100 text-natural",
      )}
    >
      {children}
    </span>
  );
}

/* ── Check list item ───────────────────────────────────────────────────── */
export function CheckItem({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className={cn("mt-1 grid size-4.5 shrink-0 place-items-center rounded-full", dark ? "bg-gold/20 text-gold" : "bg-sage-100 text-natural")}>
        <Check className="size-3" strokeWidth={3} />
      </span>
      <span className={cn("text-[15px] leading-relaxed", dark ? "text-paper/85" : "text-ink/80")}>{children}</span>
    </li>
  );
}

/* ── JSON-LD injector ──────────────────────────────────────────────────── */
export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ── Inner page hero with breadcrumbs ──────────────────────────────────── */
export function PageHero({
  section,
  title,
  lead,
  crumb,
}: {
  section: string;
  title: ReactNode;
  lead?: string;
  crumb: string;
}) {
  return (
    <header className="topo relative overflow-hidden bg-forest-deep">
      <div className="wrap relative pt-32 pb-14 sm:pt-40 sm:pb-20">
        <nav aria-label="Breadcrumb" className="eyebrow text-sage">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span aria-hidden="true" className="text-sage/50">
            /
          </span>
          <span className="text-gold">{crumb}</span>
          <span aria-hidden="true" className="ml-1 hidden text-sage/60 normal-case tracking-normal sm:inline">
            {section}
          </span>
        </nav>
        <h1 className="mt-5 max-w-3xl font-serif text-paper text-balance text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.08]">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-[1.06rem] leading-relaxed text-sage-200/85">{lead}</p>}
        <div className="pointer-events-none absolute right-6 bottom-4 hidden items-center gap-2 text-sage/30 lg:flex">
          <MapPin className="size-4" />
          <span className="text-xs font-bold tracking-[0.28em] uppercase">Uttarakhand · India</span>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-gold via-sage to-natural" aria-hidden="true" />
    </header>
  );
}
