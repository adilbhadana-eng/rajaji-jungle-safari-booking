import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, MobileCTA } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RouteScrollManager, useSEO } from "./hooks/useSEO";
import HomePage from "./pages/HomePage";
import SafariPage from "./pages/SafariPage";
import GalleryPage from "./pages/GalleryPage";
import PricingPage from "./pages/PricingPage";
import HowToReachPage from "./pages/HowToReachPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { CancellationPage, PrivacyPage, TermsPage } from "./pages/LegalPages";

import { Link } from "react-router-dom";
import { Compass, MapPin, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { photo, PHOTOS } from "./data/images";
import { ContactCTA } from "./components/ui/ContactCTA";

function NotFound() {
  useSEO({
    title: "404 - Safari Trail Not Found | Sukoon Safari Rajaji",
    description: "The page you were looking for doesn't exist — head back to explore Rajaji National Park safari packages, zones, and permits.",
    path: "/404",
  });

  return (
    <section className="relative isolate overflow-hidden bg-forest-deep min-h-[85vh] flex items-center py-20">
      {/* Background Image */}
      <img
        src={photo(PHOTOS.heroAlt, 1400, 900)}
        alt="Misty forest road inside Rajaji National Park"
        width={1400}
        height={900}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/88" aria-hidden="true" />
      <div className="topo absolute inset-0" aria-hidden="true" />

      <div className="wrap relative w-full text-center py-12">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/40 px-4 py-1.5 backdrop-blur-md">
          <Compass className="size-4 text-gold animate-spin-slow" />
          <span className="text-[12px] font-bold tracking-[0.2em] text-gold uppercase">404 · Safari Trail Not Found</span>
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl font-serif text-paper text-balance text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]">
          Looking for a <em className="text-gold italic font-serif">Rajaji Safari?</em>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-paper/85">
          The exact trail address you requested does not exist or has been moved. Don't worry — all safari zones in Rajaji National Park are open and waiting!
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-[15px] font-bold text-forest-deep transition-all hover:bg-[#c4930f] hover:shadow-lg active:scale-95"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="size-4 text-forest-deep" />
          </Link>
          <ContactCTA
            type="whatsapp"
            text="Chat on WhatsApp"
            className="px-6 py-3.5 text-[15px] text-paper border border-paper/40 hover:bg-paper hover:text-forest-deep"
          />
        </div>

        {/* Quick Navigation Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto text-left">
          <Link
            to="/safari"
            className="group rounded-xl border border-white/12 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold/50 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-gold/20 text-gold group-hover:bg-gold group-hover:text-forest-deep transition-colors">
                <Compass className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-paper text-[15px]">Safari Zones</h3>
                <p className="text-[12.5px] text-sage-200/70">Chilla, Motichur & Ranipur</p>
              </div>
            </div>
          </Link>

          <Link
            to="/pricing"
            className="group rounded-xl border border-white/12 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold/50 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-gold/20 text-gold group-hover:bg-gold group-hover:text-forest-deep transition-colors">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-paper text-[15px]">Permit Pricing</h3>
                <p className="text-[12.5px] text-sage-200/70">Jeep, permit & guide rates</p>
              </div>
            </div>
          </Link>

          <Link
            to="/how-to-reach"
            className="group rounded-xl border border-white/12 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold/50 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-gold/20 text-gold group-hover:bg-gold group-hover:text-forest-deep transition-colors">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-paper text-[15px]">How to Reach</h3>
                <p className="text-[12.5px] text-sage-200/70">Delhi, Haridwar & Rishikesh</p>
              </div>
            </div>
          </Link>

          <Link
            to="/faq"
            className="group rounded-xl border border-white/12 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold/50 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-gold/20 text-gold group-hover:bg-gold group-hover:text-forest-deep transition-colors">
                <HelpCircle className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold text-paper text-[15px]">Safari FAQs</h3>
                <p className="text-[12.5px] text-sage-200/70">Timings, rules & tips</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScrollManager />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/safari" element={<SafariPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/how-to-reach" element={<HowToReachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/cancellation-policy" element={<CancellationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </BrowserRouter>
  );
}
