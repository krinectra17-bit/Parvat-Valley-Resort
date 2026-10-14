import React from 'react';
import { Calendar, Compass, MapPin, ChevronDown, Phone, Waves, Utensils, Mountain } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden">
      {/* Background Hero Image - Authentic IMAGE 1: Resort Exterior */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/resort-exterior.jpg"
          alt="Parvat Valley Resort Pushkar exterior architecture, Rajasthani arches, and green gardens"
          className="w-full h-full object-cover object-center sm:object-[center_35%] scale-100 transform transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Thoughtful layered overlays for high contrast text readability while keeping the building and PARVAT VALLEY sign crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest-dark/40 to-forest-dark/95" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Decorative Top Accent */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-16 flex-grow flex items-center">
        <div className="max-w-3xl text-left">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-dark/70 border border-muted-gold/50 backdrop-blur-md mb-4 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 text-muted-gold" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-sand-beige uppercase">
              Pushkar, Rajasthan • Near Savitri Mata Mandir
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-ivory leading-[1.1] tracking-tight mb-4 sm:mb-6 drop-shadow-md">
            Your Peaceful Escape <span className="block italic font-normal text-muted-gold">in Pushkar</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-warm-ivory/90 leading-relaxed font-light max-w-2xl mb-8 sm:mb-10 drop-shadow">
            Discover a relaxing stay near Savitri Mata Mandir, surrounded by the natural beauty of Pushkar, Rajasthan. Traditional Rajasthani architecture, mountain views, and genuine hospitality.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center gap-2.5 bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
            >
              <Calendar className="w-4 h-4 text-forest-dark group-hover:scale-110 transition-transform" />
              <span>Book Your Stay</span>
            </button>

            <a
              href="#overview"
              className="inline-flex items-center justify-center gap-2.5 bg-forest-dark/60 hover:bg-forest-dark/90 text-warm-ivory border border-muted-gold/50 hover:border-muted-gold text-xs sm:text-sm uppercase tracking-widest px-7 py-4 rounded backdrop-blur-md transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-muted-gold" />
              <span>Explore The Resort</span>
            </a>

            <a
              href={`tel:${RESORT_INFO.contact.phoneRaw}`}
              className="inline-flex sm:hidden items-center justify-center gap-2 text-warm-ivory/90 hover:text-muted-gold text-xs tracking-wider uppercase py-2"
            >
              <Phone className="w-3.5 h-3.5 text-muted-gold" />
              <span>Direct Call: +91 96363 52306</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Highlights Strip & Scroll Indicator */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-forest-dark/85 backdrop-blur-md border border-muted-gold/30 rounded-xl p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Highlight 1 */}
            <div className="flex items-center gap-3 justify-center md:justify-start px-2 py-1">
              <div className="w-9 h-9 rounded-full bg-forest-green/80 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
                <Mountain className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-sand-beige font-semibold">Location</span>
                <span className="block text-xs text-warm-ivory/80 font-light truncate">Savitri Temple Foothills</span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="flex items-center gap-3 justify-center md:justify-start px-2 py-1">
              <div className="w-9 h-9 rounded-full bg-forest-green/80 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
                <Waves className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-sand-beige font-semibold">Swimming Pool</span>
                <span className="block text-xs text-warm-ivory/80 font-light">With Mountain View</span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-center gap-3 justify-center md:justify-start px-2 py-1 pt-3 md:pt-1">
              <div className="w-9 h-9 rounded-full bg-forest-green/80 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-sand-beige font-semibold">Dining</span>
                <span className="block text-xs text-warm-ivory/80 font-light">Pure Vegetarian Food</span>
              </div>
            </div>

            {/* Highlight 4 */}
            <div className="flex items-center gap-3 justify-center md:justify-start px-2 py-1 pt-3 md:pt-1">
              <div className="w-9 h-9 rounded-full bg-forest-green/80 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-sand-beige font-semibold">Check-in / Out</span>
                <span className="block text-xs text-warm-ivory/80 font-light">12:00 PM / 12:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Restrained Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#overview"
            className="flex flex-col items-center text-sand-beige/70 hover:text-muted-gold transition-colors focus:outline-none"
            aria-label="Scroll down to overview"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-muted-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
