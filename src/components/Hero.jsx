import React from 'react';
import { Calendar, Compass, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Background Hero Image - Breathtaking Aravalli Mountain Landscape */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pushkar-mountain-hero.jpg"
          alt="Dramatic Aravalli mountain peaks and lush green Pushkar valley during golden hour"
          className="w-full h-full object-cover object-[center_40%] scale-100 transform transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Soft, natural ambient overlays - delicate gradient for crystal clear text readability without darkening or discoloring the scenery */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/45" />
        <div className="absolute inset-0 bg-forest-dark/15" />
      </div>

      {/* Main Spacious Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 mb-5 sm:mb-7 animate-fade-in">
            <span className="h-[1px] w-6 sm:w-10 bg-muted-gold/80" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.32em] text-warm-ivory uppercase">
              A HIDDEN ESCAPE IN PUSHKAR, RAJASTHAN
            </span>
            <span className="h-[1px] w-6 sm:w-10 bg-muted-gold/80" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-warm-ivory tracking-tight leading-[1.1] mb-6 sm:mb-8 drop-shadow-md">
            Escape to the <br />
            <span className="italic font-light text-sand-beige">Beauty of Nature.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-lg md:text-xl text-warm-ivory/95 leading-relaxed font-light max-w-2xl mx-auto mb-10 sm:mb-12 drop-shadow">
            Discover peaceful moments, mountain scenery and a relaxing stay at Parvat Valley Resort, Pushkar.
          </p>

          {/* Refined Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs sm:text-sm uppercase tracking-[0.22em] px-9 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group"
            >
              <Calendar className="w-4 h-4 text-forest-dark group-hover:scale-110 transition-transform" />
              <span>BOOK YOUR STAY</span>
            </button>

            <a
              href="#overview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black/25 hover:bg-black/45 text-warm-ivory border border-warm-ivory/60 hover:border-warm-ivory text-xs sm:text-sm uppercase tracking-[0.22em] px-8 py-4 rounded backdrop-blur-sm transition-all duration-300 active:scale-95"
            >
              <Compass className="w-4 h-4 text-muted-gold" />
              <span>DISCOVER THE RESORT</span>
            </a>
          </div>

        </div>
      </div>

      {/* Minimal, Restrained Scroll Indicator */}
      <div className="relative z-10 w-full flex justify-center mt-6">
        <a
          href="#overview"
          className="flex flex-col items-center text-warm-ivory/80 hover:text-muted-gold transition-colors focus:outline-none group"
          aria-label="Scroll down to explore resort"
        >
          <span className="text-[9px] uppercase tracking-[0.35em] font-medium mb-1.5 opacity-80 group-hover:opacity-100">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-muted-gold" />
        </a>
      </div>
    </section>
  );
}
