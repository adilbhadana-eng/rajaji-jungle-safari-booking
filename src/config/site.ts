/**
 * ─────────────────────────────────────────────────────────────────────────
 * CENTRAL SITE CONFIG — single source of truth for business details.
 * ─────────────────────────────────────────────────────────────────────────
 */
export const SITE = {
  name: "Sukoon Safari",
  tagline: "Rajaji National Park Safari Experiences",
  description:
    "Sukoon Safari curates immersive wildlife and nature experiences across the diverse zones of Rajaji National Park. From majestic tigers, leopards and elephants to rare birds and authentic Van Gujjar tribal experiences.",

  /** Production URL — update to https://rajajijunglesafaribooking.com once domain is purchased */
  url: "https://owsam22-safari.vercel.app",

  /** Contact Numbers */
  phoneDisplay: "+91 73029 33425",
  phoneHref: "+917302933425",
  phoneDisplaySecondary: "+91 94561 51130",
  phoneHrefSecondary: "+919456151130",

  /** WhatsApp numbers */
  whatsapp: "919456151130",
  whatsappDisplay: "+91 94561 51130",


  /** Enquiry inbox */
  email: "adilbhadana@gmail.com",

  /** Registered business address */
  addressLines: ["Chilla Road Forest Check Post", "Haridwar, Uttarakhand 249408, India"],

  hours: "Open daily · 6:00 AM – 11:00 PM",

  /** Google Business Profile & Maps links */
  googleProfileUrl: "https://maps.app.goo.gl/qoa4DeQkJPp1XHxy9",
  googleMapsPlaceUrl:
    "https://www.google.com/maps/place/Sukoon+Safari/@29.9713747,78.2079411,754m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3909416fa1d208c9:0xb122f3bdfae87f83!8m2!3d29.9713747!4d78.210516!16s%2Fg%2F11zfj8xkmt?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D",
  googleMapEmbedUrl:
    "https://maps.google.com/maps?q=29.9713747,78.210516+(Sukoon+Safari)&t=m&z=15&ie=UTF8&iwloc=&output=embed",

  /** Social profiles */
  social: {
    instagram: "https://www.instagram.com/adil_on_safari",
    facebook: "https://www.facebook.com/safariwithAadil",
    youtube: "#",
  },

  /**Developer */

  devInfo: {
    name: "Samarpan Jayswal ~ @owsam22",
    url: {
      portfolio: "https://portfolio.owsam22.com",
      website:"https://www.owsam22.com"
    },
    email: "22.samarpan@gmail.com",
    phone: "+916203771648",
    social: {
      instagram: "https://www.instagram.com/samarpanhere",
      github: "https://github.com/owsam22",
      linkedin: "https://linkedin.com/in/owsam22",
    },
  }

} as const;

export const BUSINESS_AREA = "Haridwar · Rishikesh · Dehradun";

/** Small print reused in several places — keeps wording consistent. */
export const DISCLAIMERS = {
  availability:
    "Safari timings, entry windows, operating dates and access are subject to Forest Department regulations and may change due to weather, wildlife management, safety requirements or official orders.",
  pricing:
    "Safari and government charges are subject to applicable regulations and may vary. Final pricing will be confirmed at the time of booking.",
  wildlife:
    "Wildlife sightings are completely natural and cannot be guaranteed. Our team focuses on providing a knowledgeable and responsible experience.",
  assistance:
    "~ We are a private safari assistance service and promote respectful and responsible experiences that value wildlife, forests and local communities.",
};

/** Schema.org base for Organization / LocalBusiness JSON-LD */
export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: [SITE.phoneHref, SITE.phoneHrefSecondary],
  email: SITE.email,
  areaServed: ["Haridwar", "Rishikesh", "Dehradun", "Rajaji National Park"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chilla Road Forest Check Post",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    postalCode: "249408",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 05:00-22:00",
  priceRange: "₹₹",
};
