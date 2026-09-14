import type { RouteInfo } from "../lib/types";

/**
 * ⚠️ Approximate public-route figures (marked "approx." in the UI) —
 * verify with the operator's local knowledge before publishing.
 */
export const STARTING_POINTS: RouteInfo[] = [
  {
    from: "Rishikesh",
    to: "Rajaji National Park · Chilla Gate",
    distance: "≈ 18 km",
    driveTime: "≈ 45 min",
    recommendedGate: "Chilla Gate",
    pickup: "Hotel, Tapovan & station pickups available",
    tips: ["Easiest quality safari from Rishikesh", "Combine with rafting or Ganga aarti the same day", "Morning slots pair well with an early start"],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Rishikesh&destination=Chilla+Gate+Rajaji+National+Park",
  },
  {
    from: "Haridwar",
    to: "Rajaji National Park · Ranipur / Motichur / Chilla",
    distance: "≈ 9–28 km",
    driveTime: "≈ 25–60 min",
    recommendedGate: "Ranipur or Motichur Gate",
    pickup: "Hotel & Haridwar Junction pickups available",
    tips: ["Three gates within an hour of the city", "Jhilmil Jheel (swamp deer) is also close by", "Safari + evening Ganga aarti makes a full day"],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Haridwar&destination=Ranipur+Gate+Rajaji+National+Park",
  },
  {
    from: "Dehradun",
    to: "Rajaji National Park · Mohand / Asarori Gate",
    distance: "≈ 25 km",
    driveTime: "≈ 40 min",
    recommendedGate: "Mohand / Asarori Gate",
    pickup: "Hotel, ISBT & Jolly Grant airport pickups available",
    tips: ["The quiet Doon-side ranges", "Easy add-on to a Mussoorie trip", "Good half-day plan before an evening flight"],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Dehradun&destination=Mohand+Gate+Rajaji+National+Park",
  },
  {
    from: "Mussoorie",
    to: "Rajaji National Park via Dehradun",
    distance: "≈ 60 km",
    driveTime: "≈ 2 hrs",
    recommendedGate: "Mohand / Asarori Gate",
    pickup: "Hotel pickups on request",
    tips: ["Drive down via Dehradun to the Doon-side gates", "Start early for the morning slot", "A strong addition to a hill-station stay"],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Mussoorie&destination=Mohand+Gate+Rajaji+National+Park",
  },
  {
    from: "Delhi NCR",
    to: "Rajaji National Park",
    distance: "≈ 220–250 km",
    driveTime: "≈ 5–6 hrs",
    recommendedGate: "Chilla (Rajaji)",
    pickup: "Outstation transfers & railway pickups on request",
    tips: ["Trains to Haridwar are convenient overnight options", "Plan one night near the park — morning drives start early", "We coordinate both safari and stay"],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=New+Delhi&destination=Chilla+Gate+Rajaji+National+Park",
  },
];

/** Arrival hubs (air / rail) for the How to Reach page. */
export const ARRIVAL_HUBS = [
  {
    label: "Jolly Grant Airport (DED), Dehradun",
    detail: "The nearest airport for Rajaji — roughly 35–40 km from Chilla gate, about an hour by road. Daily flights from Delhi and other metros.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Jolly+Grant+Airport+Dehradun&destination=Chilla+Gate+Rajaji+National+Park",
  },
  {
    label: "Yog Nagari Rishikesh Railway Station",
    detail: "The closest railhead for the Chilla range — a short drive from the gate. Trains connect via Haridwar.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Yog+Nagari+Rishikesh+Railway+Station&destination=Chilla+Gate+Rajaji+National+Park",
  },
  {
    label: "Haridwar Junction (HW)",
    detail: "The major railhead for the region — well connected to Delhi, Lucknow, Kolkata and Mumbai. Ranipur and Motichur gates are 25–40 minutes away.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Haridwar+Junction&destination=Ranipur+Gate+Rajaji+National+Park",
  },
];

export const TRANSPORT_OPTIONS = [
  { title: "Self-drive / taxi", text: "Well-paved state highways reach every gate. Hill sections near Mussoorie and Mohand need unhurried driving." },
  { title: "Train", text: "Overnight and day trains to Haridwar and Ramnagar; a smaller halt at Rishikesh. We pick up from any of them." },
  { title: "Flight", text: "Jolly Grant (Dehradun) for Rajaji; Pantnagar airport for the Corbett side. Delhi remains the main gateway." },
  { title: "Bus", text: "Frequent UTC and private buses to Rishikesh, Haridwar, Dehradun and Ramnagar from Delhi's ISBT Anand Vihar." },
];
