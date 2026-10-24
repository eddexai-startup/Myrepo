import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
    title: 'Commercial & Industrial Craft',
    description: 'Active continuous sheetmetal craft on expansive coastal rooflines',
    spec: 'AS/NZS 1562 & C5 Marine Classification',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    title: 'Architectural Standing Seam',
    description: 'Precision mechanical-lock 0.70mm titanium zinc roofing',
    spec: 'Zero Exposed Fastener Penetrations',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80',
    title: 'High-Tensile Structural Re-Roofing',
    description: 'Fortified perimeter tie-downs and heavy-duty acoustic membranes',
    spec: 'Tested for Extreme Cyclonic Up-Lift',
  },
];

const SLIDE_DELAY_MS = 5500;

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DELAY_MS);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (slideTimerRef.current) clearInterval(slideTimerRef.current);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      className="relative min-h-[96vh] flex items-center pt-28 pb-20 overflow-hidden bg-neutral-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Roofing Showcase Gallery"
    >
      {/* 3 Auto-Sliding Roofing Background Images */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className={`w-full h-full object-cover object-center filter grayscale contrast-[1.25] brightness-[0.7] transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Multi-layered Gradients to ensure text remains 100% visible and razor-sharp across all slides */}
        {/* Deep Left Scrim Gradient for Headlines and CTAs */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/92 via-black/75 to-black/35 pointer-events-none" />
        {/* Vertical Transition Gradient from Header to Content */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-neutral-950 via-transparent to-black/60 pointer-events-none" />
        {/* Subtle Architectural Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 z-20 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow Label matching reference */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/90 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
            <span>Welcome to Onshore Roofing</span>
          </div>

          {/* Headline matching reference: "your trusted partner in roofing excellence" */}
          <h1 className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lg:text-7xl text-white tracking-normal leading-[1.08] drop-shadow-md">
            your trusted partner in roofing excellence
          </h1>

          {/* Subtitle matching reference: "Roofing Services in Coastal & Architectural Regions" */}
          <p className="text-sm sm:text-base font-medium text-white/90 tracking-wide font-sans max-w-xl drop-shadow-sm">
            Roofing Services in Coastal &amp; Architectural Regions
          </p>

          {/* Minimalist Wireframe Button matching reference */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-white hover:bg-white hover:text-black font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200 text-center select-none"
            >
              Get In Touch
            </a>

            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200 text-center shadow-lg shadow-teal-500/20 active:scale-95"
            >
              <span>Estimate Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Technical Proof Points Strip */}
          <div className="pt-8 flex flex-wrap items-center gap-6 text-xs text-white/80 font-sans tracking-wider uppercase border-t border-white/15 mt-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Commercial &amp; Residential</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Standing Seam &amp; Coatings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Marine C4/C5 Certified</span>
            </div>
          </div>

        </div>
      </div>

      {/* Auto-Slide Indicator Controls (Bottom Right) */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-30 flex items-center gap-4">
        {/* Current slide caption tag */}
        <div className="hidden md:flex flex-col text-right pr-3 border-r border-white/20">
          <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
          <span className="text-xs text-white/90 font-medium">
            {HERO_SLIDES[currentSlide].title}
          </span>
        </div>

        {/* Slide navigation arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={prevSlide}
            aria-label="Previous roofing image slide"
            className="p-2 border border-white/30 bg-black/50 hover:bg-white hover:text-black text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next roofing image slide"
            className="p-2 border border-white/30 bg-black/50 hover:bg-white hover:text-black text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Indicator Bars */}
        <div className="flex items-center gap-2 pl-2">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={`h-1.5 transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-teal-400'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
