import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter, MapPin, X, ZoomIn } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { photo } from "../data/images";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../data/gallery";
import { PageHero, Reveal } from "../components/ui";
import { ContactCTA } from "../components/ui/ContactCTA";
import { cn } from "../utils/cn";

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const zoneParam = searchParams.get("zone") || "all";

  const [activeFilter, setActiveFilter] = useState<string>(zoneParam);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Sync state when URL search param changes
  useEffect(() => {
    const currentZone = searchParams.get("zone") || "all";
    setActiveFilter(currentZone);
  }, [searchParams]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    if (filterId === "all") {
      searchParams.delete("zone");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ zone: filterId });
    }
  };

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.zoneId === activeFilter);
  }, [activeFilter]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const stepLightbox = useCallback(
    (direction: number) => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        const total = filteredItems.length;
        return (prev + direction + total) % total;
      });
    },
    [filteredItems.length]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
    touchStartRef.current = null;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Swiped Left -> Next Photo
        stepLightbox(1);
      } else {
        // Swiped Right -> Previous Photo
        stepLightbox(-1);
      }
    } else if (diffY < -90 && Math.abs(diffY) > Math.abs(diffX)) {
      // Swiped Down -> Close
      closeLightbox();
    }
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, stepLightbox]);

  useSEO({
    title: "Rajaji Safari Photo Gallery — Sukoon Safari",
    description:
      "Explore wildlife, landscape and safari photos from Rajaji National Park. View photographs from Chilla, Chilla Wali, Ranipur, Jhilmil Jheel and Motichur zones.",
    path: "/gallery",
  });

  return (
    <>
      <PageHero
        section="Wilderness Moments · Captured"
        crumb="Gallery"
        title={<>The forests of Rajaji <em className="text-gold">in photographs</em></>}
        lead="Explore real moments captured across all five safari zones of Rajaji National Park. Filter by zone to preview your upcoming adventure."
      />

      <section className="bg-paper py-14 sm:py-18">
        <div className="wrap">
          {/* Filter Bar */}
          <Reveal className="flex flex-wrap items-center gap-2 border-b border-ink/10 pb-6">
            <span className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-earth-light mr-2">
              <Filter className="size-3.5 text-natural" /> Filter Zone:
            </span>
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              const count =
                cat.id === "all"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((i) => i.zoneId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleFilterChange(cat.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13.5px] font-bold tracking-wide transition-all",
                    isActive
                      ? "border-forest bg-forest text-paper shadow-sm"
                      : "border border-ink/15 bg-paper text-ink/75 hover:border-natural hover:text-natural"
                  )}
                >
                  {cat.label}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.2 text-[11px] font-medium",
                      isActive ? "bg-gold text-forest-deep" : "bg-sand text-earth-light"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </Reveal>

          {/* Gallery Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 6) * 60}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-ink/10 bg-sand transition-all hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
                    <img
                      src={photo(item.photo, 800, 600)}
                      alt={item.photo.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

                    <span className="absolute top-3 left-3 rounded-md bg-forest-deep/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sage-200 backdrop-blur-sm">
                      <MapPin className="inline-block size-3 mr-1 text-gold" />
                      {item.zoneName}
                    </span>

                    <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-paper/80 text-forest-deep opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                      <ZoomIn className="size-4" />
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
                      <p className="text-[11.5px] font-bold uppercase tracking-widest text-gold">
                        {item.category}
                      </p>
                      <h3 className="mt-1 font-serif text-[1.25rem] leading-snug text-paper">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-sage-200/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="mt-12 rounded-xl border border-dashed border-ink/20 p-12 text-center">
              <p className="font-serif text-2xl text-forest-deep">No photos in this category yet</p>
              <button
                onClick={() => handleFilterChange("all")}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-forest px-5 py-2.5 text-[14px] font-bold text-paper transition hover:bg-forest-deep"
              >
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[95] flex flex-col bg-forest-deep/95 backdrop-blur-md select-none touch-pan-y"
          role="dialog"
          aria-modal="true"
          aria-label="Photo Viewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            aria-label="Close viewer"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default"
          />

          {/* Main Photo Area */}
          <div className="pointer-events-none relative flex flex-1 items-center justify-center p-4 sm:p-8">
            <img
              key={filteredItems[lightboxIndex].id}
              src={photo(filteredItems[lightboxIndex].photo, 1600, 1100)}
              alt={filteredItems[lightboxIndex].photo.alt}
              width={1600}
              height={1100}
              className="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all"
            />
          </div>

          {/* Mobile Swipe Hint */}
          <div className="relative z-10 text-center text-[11.5px] font-semibold text-sage-200/70 sm:hidden">
            ← Swipe left or right to change photo →
          </div>

          {/* Controls and Caption Bar */}
          <div className="relative z-10 border-t border-paper/10 bg-forest-deep/90 px-6 py-4 text-paper">
            <div className="wrap-wide flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-gold px-2 py-0.5 text-[11px] font-bold uppercase text-forest-deep">
                    {filteredItems[lightboxIndex].zoneName}
                  </span>
                  <span className="text-[12px] font-semibold text-sage-200">
                    {filteredItems[lightboxIndex].category}
                  </span>
                </div>
                <h4 className="mt-1 font-serif text-xl text-paper">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="mt-1 text-[13.5px] text-sage-200/80">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-serif text-lg text-gold mr-2">
                  {lightboxIndex + 1}{" "}
                  <span className="text-sm text-paper/50">/ {filteredItems.length}</span>
                </span>
                <button
                  onClick={() => stepLightbox(-1)}
                  aria-label="Previous photo"
                  className="grid size-10 place-items-center rounded-full border border-paper/30 transition-colors hover:bg-paper hover:text-forest-deep"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => stepLightbox(1)}
                  aria-label="Next photo"
                  className="grid size-10 place-items-center rounded-full border border-paper/30 transition-colors hover:bg-paper hover:text-forest-deep"
                >
                  <ChevronRight className="size-5" />
                </button>
                <button
                  onClick={closeLightbox}
                  aria-label="Close"
                  className="grid size-10 place-items-center rounded-full bg-gold text-forest-deep transition-colors hover:bg-[#c4930f]"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Safari CTA */}
      <section className="bg-forest-deep py-14">
        <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-paper text-[clamp(1.5rem,2.6vw,2rem)]">
              Experience these sights in person
            </h2>
            <p className="mt-1.5 max-w-xl text-[14.5px] text-sage-200/80">
              Book your Rajaji National Park safari with local drivers and naturalists who know the forest inside out.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ContactCTA type="whatsapp" text="Book a Safari on WhatsApp" className="text-forest-deep bg-gold hover:bg-[#c4930f]" />
          </div>
        </div>
      </section>
    </>
  );
}
