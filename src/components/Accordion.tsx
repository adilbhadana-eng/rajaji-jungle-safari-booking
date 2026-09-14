import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";

export interface AccordionItem {
  q: string;
  a: string;
}

function renderFormattedAnswer(text: string, dark: boolean) {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    if (linkUrl.startsWith("/")) {
      parts.push(
        <Link
          key={match.index}
          to={linkUrl}
          className={cn(
            "font-bold underline transition-colors",
            dark ? "text-gold hover:text-paper" : "text-natural hover:text-forest-deep"
          )}
        >
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-bold underline transition-colors",
            dark ? "text-gold hover:text-paper" : "text-natural hover:text-forest-deep"
          )}
        >
          {linkText}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex === 0) {
    return text;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export function Accordion({
  items,
  dark = false,
  className,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  dark?: boolean;
  className?: string;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("divide-y", dark ? "divide-paper/12 border-y border-paper/12" : "divide-ink/10 border-y border-ink/10", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${i}`}
                id={`acc-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 py-4.5 text-left transition-colors",
                  dark ? "text-paper hover:text-gold" : "text-forest-deep hover:text-natural",
                )}
              >
                <span className="text-[1.05rem] font-semibold text-balance">{item.q}</span>
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? dark
                        ? "rotate-180 border-gold bg-gold text-forest-deep"
                        : "rotate-180 border-forest bg-forest text-paper"
                      : dark
                        ? "border-paper/25 text-paper/70"
                        : "border-ink/20 text-ink/60",
                  )}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={`acc-panel-${i}`}
              role="region"
              aria-labelledby={`acc-btn-${i}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-3xl pb-5 text-[15.5px] leading-relaxed", dark ? "text-sage-200/85" : "text-earth")}>
                  {renderFormattedAnswer(item.a, dark)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
