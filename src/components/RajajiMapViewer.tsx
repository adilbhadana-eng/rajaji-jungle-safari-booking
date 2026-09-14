import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  Download,
  MapPin,
  Maximize2,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { ContactCTA } from "./ui/ContactCTA";

interface RajajiMapViewerProps {
  className?: string;
  badge?: string;
  showLegend?: boolean;
}

const DESKTOP_BREAKPOINT = 1024; // Tailwind's `lg`

export function RajajiMapViewer({
  className = "",
  badge = "Official Zonation Map · 820.42 km²",
  showLegend = true,
}: RajajiMapViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  const touchDistanceRef = useRef<number | null>(null);
  const lastTapRef = useRef<number>(0);

  // Needed so createPortal only runs client-side (avoids SSR "document is not defined")
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const openModal = useCallback(() => {
    if (isDesktop) setIsModalOpen(true);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop && isModalOpen) setIsModalOpen(false);
  }, [isDesktop, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoomLevel(1);
      setPan({ x: 0, y: 0 });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 4));
  const handleZoomOut = () =>
    setZoomLevel((prev) => {
      const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        if (zoomLevel > 1) {
          handleResetZoom();
        } else {
          setZoomLevel(2.2);
        }
      }
      lastTapRef.current = now;

      if (zoomLevel > 1) {
        setIsDragging(true);
        setDragStart({
          x: e.touches[0].clientX - pan.x,
          y: e.touches[0].clientY - pan.y,
        });
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistanceRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchDistanceRef.current;
      if (Math.abs(factor - 1) > 0.05) {
        setZoomLevel((prev) => {
          const updated = Math.min(Math.max(prev * factor, 1), 4);
          return Number(updated.toFixed(2));
        });
        touchDistanceRef.current = dist;
      }
    } else if (e.touches.length === 1 && isDragging && zoomLevel > 1) {
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
    setIsDragging(false);
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-neutral-950/98 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Rajaji National Park Zonation Map Viewer"
    >
      {/* Modal Header */}
      <div className="flex items-center justify-between border-b border-white/15 bg-neutral-900/95 px-3 py-2.5 sm:px-6 sm:py-3 select-none">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
          <MapPin className="size-4 sm:size-5 text-gold shrink-0" />
          <div className="min-w-0">
            <h2 className="text-[13.5px] sm:text-[16.5px] font-serif font-semibold text-paper truncate">
              Rajaji National Park — Zonation Map
            </h2>
            <p className="text-[10px] sm:text-[11.5px] text-sage-200/75 truncate hidden xs:block">
              Core Area · Safari Zones (Chilla, Motichur, Ranipur) · Rivers & Corridors
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="flex items-center gap-0.5 rounded-lg border border-white/15 bg-black/50 p-0.5 sm:p-1">
            <button type="button" onClick={handleZoomIn} className="rounded p-1 sm:p-1.5 text-paper/90 transition-colors hover:bg-white/20 active:scale-90" title="Zoom In" aria-label="Zoom In">
              <ZoomIn className="size-3.5 sm:size-4" />
            </button>
            <button type="button" onClick={handleZoomOut} className="rounded p-1 sm:p-1.5 text-paper/90 transition-colors hover:bg-white/20 active:scale-90" title="Zoom Out" aria-label="Zoom Out">
              <ZoomOut className="size-3.5 sm:size-4" />
            </button>
            <button type="button" onClick={handleResetZoom} className="rounded p-1 sm:p-1.5 text-paper/90 transition-colors hover:bg-white/20 active:scale-90" title="Reset Zoom" aria-label="Reset Zoom">
              <RotateCcw className="size-3.5 sm:size-4" />
            </button>
          </div>

          
          <a  href="/rajaji-national-park-zone-map.jpg"
            download="Rajaji-National-Park-Zone-Map.jpg"
            className="inline-flex items-center gap-1 rounded-lg bg-natural px-2.5 py-1.5 text-[11.5px] sm:text-[13px] font-bold text-white transition-all hover:bg-forest active:scale-95"
            title="Download full map"
          >
            <Download className="size-3.5 sm:size-4" />
            <span className="hidden sm:inline">Download</span>
          </a>

          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="rounded-lg border border-white/20 bg-white/10 p-1.5 sm:p-2 text-paper transition-colors hover:bg-white/25 active:scale-90 cursor-pointer"
            aria-label="Close Map Modal"
          >
            <X className="size-4 sm:size-5" />
          </button>
        </div>
      </div>

      {/* Modal Map Canvas */}
      <div
        className={`relative flex-1 overflow-hidden p-2 sm:p-4 flex items-center justify-center select-none touch-none ${
          zoomLevel > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            transform: `scale(${zoomLevel}) translate(${pan.x / zoomLevel}px, ${pan.y / zoomLevel}px)`,
            transition: isDragging ? "none" : "transform 0.12s ease-out",
          }}
          className="max-h-full max-w-full origin-center flex items-center justify-center"
        >
          <img
            src="/rajaji-national-park-zone-map.webp"
            alt="Detailed Zonation Map of Rajaji National Park Uttarakhand"
            width={1200}
            height={900}
            className="max-h-[75vh] xs:max-h-[78vh] sm:max-h-[82vh] max-w-full rounded-md object-contain shadow-2xl"
            draggable={false}
          />
        </div>
      </div>

      {/* Modal Footer */}
      <div className="flex flex-col xs:flex-row items-center justify-between gap-2.5 border-t border-white/15 bg-neutral-900/95 px-3 py-2.5 sm:px-6 sm:py-3">
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-[12px] text-sage-200/85">
          <span className="flex items-center gap-1.5">
            <span className="size-2 sm:size-2.5 rounded-full bg-[#19773e]" /> Core Sanctuary
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 sm:size-2.5 rounded-full bg-[#d4af37]" /> Safari Gates
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 sm:size-2.5 rounded-full bg-[#5a865b]" /> Buffer Corridor
          </span>
        </div>

        <div className="flex items-center gap-2 w-full xs:w-auto justify-center">
          <ContactCTA
            type="whatsapp"
            text="Book Zone Permit"
            message="Hi Sukoon Safari, I'm viewing the Rajaji National Park Map and want to reserve a gypsy permit."
            className="w-full xs:w-auto justify-center px-4 py-1.5 text-[12px] sm:text-[12.5px] font-bold bg-gold text-forest-deep hover:bg-[#c4930f]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      {/* Visual Bold Card */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 bg-neutral-900 shadow-xl transition-all duration-300 hover:border-gold/70 hover:shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/80 px-3.5 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-gold uppercase">
              {badge}
            </span>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="hidden lg:inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] sm:text-[12px] font-bold text-paper transition-all hover:bg-gold hover:text-forest-deep active:scale-95 cursor-pointer"
            aria-label="View fullscreen map"
          >
            <Maximize2 className="size-3.5" />
            <span>Full View</span>
          </button>
        </div>

        <div
          onClick={isDesktop ? openModal : undefined}
          className={`relative aspect-[4/3] xs:aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#faf7f2] p-1.5 sm:p-2.5 transition-transform duration-300 ${
            isDesktop ? "cursor-pointer" : "cursor-default"
          }`}
          title={isDesktop ? "Click to view full map" : undefined}
        >
          <img
            src="/rajaji-national-park-zone-map.webp"
            alt="Rajaji National Park Zonation Map - Core Area, Safari Zones, Gates and River Ganga"
            width={800}
            height={600}
            className="h-full w-full object-contain transition-transform duration-500 lg:hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {showLegend && (
          <div className="border-t border-white/10 bg-neutral-950/90 px-3.5 py-2.5 sm:px-4 sm:py-3">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-[12px] text-paper/90">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-xs bg-[#19773e] shrink-0" /> Core Area
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-xs bg-[#d4af37] shrink-0" /> Safari Zones
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-xs bg-[#5a865b] shrink-0" /> Buffer Area
                </span>
              </div>
              <button
                type="button"
                onClick={openModal}
                className="hidden lg:inline font-bold text-gold hover:underline cursor-pointer"
              >
                Inspect Details →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Portal renders modal directly to <body>, escaping any transformed/animated parent */}
      {mounted && isModalOpen && isDesktop && createPortal(modalContent, document.body)}
    </div>
  );
}