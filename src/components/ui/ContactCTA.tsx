import { SITE } from "../../config/site";
import { cn } from "../../utils/cn";

interface ContactCTAProps {
  type?: "whatsapp" | "phone";
  text?: string;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  message?: string;
}

export function ContactCTA({ 
  type = "whatsapp", 
  text, 
  className, 
  variant = "solid",
  message = "Hello Sukoon Safari, I would like to enquire about a Rajaji National Park safari."
}: ContactCTAProps) {
  const isWhatsApp = type === "whatsapp";
  const defaultText = isWhatsApp ? "Book on WhatsApp" : "Call Now";
  const label = text || defaultText;
  
  const href = isWhatsApp 
    ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
    : `tel:${SITE.phoneHref}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-natural focus-visible:ring-offset-2";
  
  const variants = {
    solid: "bg-natural text-white hover:bg-forest shadow-sm",
    outline: "border-2 border-natural text-natural hover:bg-natural hover:text-white",
    ghost: "text-natural hover:bg-natural/10"
  };

  const sizes = "px-5 py-3 text-[15px]";

  return (
    <a 
      href={href}
      target={isWhatsApp ? "_blank" : undefined}
      rel={isWhatsApp ? "noopener noreferrer" : undefined}
      className={cn(baseStyles, variants[variant], sizes, className)}
    >
      {isWhatsApp ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )}
      {label}
    </a>
  );
}
