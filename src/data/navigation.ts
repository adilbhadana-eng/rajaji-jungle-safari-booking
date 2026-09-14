export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; note?: string }[];
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Safari",
    href: "/safari",
    children: [
      { label: "Jhilmil Jheel", href: "/safari#jhilmil-jheel", note: "Swamp deer & wetland birding" },
      { label: "Ranipur Zone", href: "/safari#ranipur", note: "Near Haridwar & rocky hills" },
      { label: "Chilla Zone", href: "/safari#chilla", note: "Classic safari & elephant herds" },
      { label: "Chilla Wali", href: "/safari#chilla-wali", note: "Leopard photography & ridges" },
      { label: "Motichur Zone", href: "/safari#motichur", note: "Sal forest corridor & NH-58" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "How to Reach", href: "/how-to-reach" },
];

export const FOOTER_NAV = [
  {
    title: "Safari",
    links: [
      { label: "Safari Zones", href: "/safari" },
      { label: "Pricing", href: "/pricing" },
      { label: "Photo Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Plan Your Trip",
    links: [
      { label: "How to Reach", href: "/how-to-reach" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Google Reviews", href: "/#reviews" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cancellation Policy", href: "/cancellation-policy" },
    ],
  },
];
