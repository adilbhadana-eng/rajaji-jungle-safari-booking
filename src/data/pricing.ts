export interface PricingTier {
  duration: string;
  price: string;
}

export interface PricingNationality {
  type: string;
  gypsyCharge: PricingTier[];
  governmentCharges: {
    label: string;
    price: string;
  }[];
  totals: {
    guests: string;
    total: string;
  }[];
}

export const MAIN_PRICING: PricingNationality[] = [
  {
    type: "Indian Nationals",
    gypsyCharge: [
      { duration: "Safari up to 2 hours", price: "₹3,000" },
      { duration: "Safari for 3–4 hours", price: "₹3,500" },
    ],
    governmentCharges: [
      { label: "Gypsy Entry", price: "₹250" },
      { label: "Per Person", price: "₹150" },
    ],
    totals: [
      { guests: "1 Person", total: "₹3,400" },
      { guests: "2 Persons", total: "₹3,550" },
      { guests: "3 Persons", total: "₹3,700" },
      { guests: "4 Persons", total: "₹3,850" },
      { guests: "5 Persons", total: "₹4,000" },
      { guests: "6 Persons", total: "₹4,150" },
    ]
  },
  {
    type: "Foreign Nationals",
    gypsyCharge: [
      { duration: "Safari up to 2 hours", price: "₹3,000" },
      { duration: "Safari for 3–4 hours", price: "₹3,500" },
    ],
    governmentCharges: [
      { label: "Entry per booking", price: "₹500" },
      { label: "Per Person", price: "₹600" },
    ],
    totals: [
      { guests: "1 Person", total: "₹4,100" },
      { guests: "2 Persons", total: "₹4,700" },
      { guests: "3 Persons", total: "₹5,300" },
      { guests: "4 Persons", total: "₹5,900" },
      { guests: "5 Persons", total: "₹6,500" },
      { guests: "6 Persons", total: "₹7,100" },
    ]
  }
];

export const JHILMIL_PRICING = [
  {
    type: "Indian Nationals",
    charges: [
      { label: "Per Person", price: "₹200" },
      { label: "Gypsy Entry", price: "₹300" },
    ]
  },
  {
    type: "Foreign Nationals",
    charges: [
      { label: "Per Person", price: "₹800" },
      { label: "Gypsy Entry", price: "₹400" },
    ]
  }
];

export const ADDITIONAL_SERVICES = [
  { label: "Professional Guide / Naturalist", price: "₹1,000 extra (Optional)" }
];

export const INCLUSIONS = [
  "4×4 Gypsy Safari",
  "Experienced Safari Driver",
  "Applicable Safari Permit & Gypsy Entry Charges",
  "Wildlife exploration assistance"
];

export const EXCLUSIONS = [
  "Pickup & Drop (available at additional charge)",
  "Drinking Water",
  "Safari Gate Transfer (if guests arrange own transport)",
  "Personal expenses & services not mentioned"
];
