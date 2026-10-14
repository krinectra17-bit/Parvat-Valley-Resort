import React from 'react';
import { Calendar, Compass, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92svh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-36 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Background Hero Image - Cinematic Aravalli Mountain Landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pushkar-mountain-hero.jpg"
          alt="Dramatic Aravalli mountain peaks and lush green Pushkar valley during golden hour"
          className="w-full h-full object-cover object-[50%_35%] sm:object-[center_38%] scale-100 transform transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft, natural ambient overlays for text readability without darkening or discoloring the scenery */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/45" />
        <div className="absolute inset-0 bg-forest-dark/15" />
      </div>

      {/* Main Spacious Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center justify-center text-center my-auto">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
            <span className="h-[1px] w-4 sm:w-8 bg-muted-gold/80" />
            <span className="text-[9px] xs:text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.32em] text-warm-ivory uppercase">
              A TRANQUIL RETREAT IN PUSHKAR, RAJASTHAN
            </span>
            <span className="h-[1px] w-4 sm:w-8 bg-muted-gold/80" />
          </div>

          {/* Main Refined Heading */}
          <h1 className="text-center tracking-tight mb-4 sm:mb-6 drop-shadow-md">
            <span className="block font-serif font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-warm-ivory/95 tracking-wide mb-1 sm:mb-2">
              Discover the
            </span>
            <span className="block font-serif italic font-normal text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sand-beige leading-[1.12]">
              Beauty of Pushkar.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-warm-ivory/90 leading-relaxed font-light max-w-xs sm:max-w-lg md:max-w-xl mx-auto mb-6 sm:mb-9 drop-shadow px-2">
            Discover the charm of Rajasthan with a relaxing stay surrounded by the natural beauty of Pushkar.
          </p>

          {/* Refined CTA Buttons: Stacked on Mobile, Inline on Desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto px-2 sm:px-0 max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-3.5 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 touch-manipulation min-h-[48px] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-forest-dark" />
              <span>BOOK YOUR STAY</span>
            </button>

            <a
              href="#overview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black/25 hover:bg-black/45 text-warm-ivory border border-warm-ivory/60 hover:border-warm-ivory text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-3.5 sm:py-4 rounded-lg backdrop-blur-sm transition-all duration-300 active:scale-95 touch-manipulation min-h-[48px] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-muted-gold" />
              <span>DISCOVER THE RESORT</span>
            </a>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center mt-4 sm:mt-6">
        <a
          href="#overview"
          className="flex flex-col items-center text-warm-ivory/80 hover:text-muted-gold transition-colors focus:outline-none group"
          aria-label="Scroll down to explore resort"
        >
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-medium mb-1 opacity-80 group-hover:opacity-100">
            Scroll to explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-muted-gold" />
        </a>
      </div>
    </section>
  );
}
