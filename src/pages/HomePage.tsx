import { useSEO } from "../hooks/useSEO";
import { photo, PHOTOS } from "../data/images";
import { SITE } from "../config/site";
import { HOME_FAQS } from "../data/faqs";
import { Hero, QuickFacts, SafariZones, AboutPreview } from "../components/home/A";
import { SafariTimings, PricingPreview, WhyChooseUs, PickupDrop } from "../components/home/B";
import { Reviews, FaqPreview, HowToReach, HomeGallery, HomeContactBox, FinalCTA } from "../components/home/C";

export default function HomePage() {
  useSEO({
    title: "Sukoon Safari — Rajaji National Park Safari Booking & Zone Map",
    description:
      "Book 4×4 jeep safaris in Rajaji National Park. Explore official zone map, safari gates (Chilla, Motichur, Ranipur, Jhilmil Jheel), honest pricing, and local driver-guides.",
    path: "/",
    image: photo(PHOTOS.heroJeep, 1200, 630),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        inLanguage: "en-IN",
      },
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Rajaji National Park & Tiger Reserve",
        description:
          "An 820.42 sq km protected wildlife reserve in Uttarakhand spanning Haridwar, Dehradun, and Pauri Garhwal. Renowned for Asian elephants, Royal Bengal tigers, leopards, and over 315 bird species across 5 safari zones.",
        url: `${SITE.url}/safari`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Haridwar & Rishikesh",
          addressRegion: "Uttarakhand",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "29.956",
          longitude: "78.188",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        name: "Rajaji National Park Zonation Map",
        caption: "Official zonation map of Rajaji National Park showing core sanctuary areas, safari zones, gates, forest rest houses, and river corridors.",
        contentUrl: `${SITE.url}/rajaji-national-park-zone-map.jpg`,
        url: `${SITE.url}/rajaji-national-park-zone-map.jpg`,
        description: "Map showing Chilla, Motichur, Ranipur, Kansrao, Dholkhand, Satyanarayan, Phandowala zones and entry gates in Rajaji National Park.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: HOME_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  return (
    <>
      <Hero />
      <QuickFacts />
      <SafariZones />
      <AboutPreview />
      <HomeGallery />
      <SafariTimings />
      <PricingPreview />
      <WhyChooseUs />
      <PickupDrop />
      <Reviews />
      <FaqPreview />
      <HowToReach />
      <HomeContactBox />
      <FinalCTA />
    </>
  );
}
