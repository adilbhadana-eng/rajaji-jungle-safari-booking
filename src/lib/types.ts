/** Shared domain types — data files in /src/data implement these. */

export interface Photo {
  id: number;
  ext?: "jpeg" | "png";
  alt: string;
  credit: string;
  /** Natural image width — used for width/height attrs to prevent CLS */
  width?: number;
  /** Natural image height — used for width/height attrs to prevent CLS */
  height?: number;
}

export interface Gate {
  name: string;
  nearest: string;
  note: string;
  mapsUrl: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  summary: string;
  overview: string[];
  photo: Photo;
  landscape: string;
  bestFor: string[];
  bestTime: string;
  seasonNote: string;
  wildlife: { name: string; note: string }[];
  gates: Gate[];
  safariOptions: string[];
  nearby: { place: string; detail: string }[];
}

export interface SafariType {
  id: string;
  name: string;
  blurb: string;
  detail: string;
  duration: string;
  group: string;
  bestFor: string[];
  photo: Photo;
}

export interface Safari {
  id: string;
  name: string;
  destination: string;
  zone: string;
  blurb: string;
  duration: string;
  bestFor: string[];
  photo: Photo;
  popular?: boolean;
}

export interface PricingRow {
  id: string;
  label: string;
  park: string;
  unit: string;
  duration: string;
  /** null → displayed as "On enquiry" (client fills real rates before launch) */
  startingAt: number | null;
  inclusions: string[];
  exclusions: string[];
  note: string;
}

export type FaqCategory = "Booking" | "Safari" | "Pricing" | "Travel" | "Documents" | "Cancellation";

export interface Faq {
  category: FaqCategory;
  q: string;
  a: string;
}

export interface RouteInfo {
  from: string;
  to: string;
  distance: string;
  driveTime: string;
  recommendedGate: string;
  pickup: string;
  tips: string[];
  mapsUrl: string;
}
