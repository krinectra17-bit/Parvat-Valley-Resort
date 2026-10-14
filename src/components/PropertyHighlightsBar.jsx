import React from 'react';
import { MapPin, Waves, Utensils, Clock } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function PropertyHighlightsBar() {
  return (
    <section className="relative z-20 bg-forest-dark border-y border-muted-gold/25 py-6 sm:py-7 text-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Highlight 1: Prime Location */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 py-1">
            <div className="w-10 h-10 rounded-full bg-forest-green/90 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-sand-beige font-semibold">
                Foothills Setting
              </span>
              <span className="block text-xs sm:text-sm text-warm-ivory/85 font-light">
                Near Savitri Mata Mandir
              </span>
            </div>
          </div>

          {/* Highlight 2: Swimming Pool */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 py-1">
            <div className="w-10 h-10 rounded-full bg-forest-green/90 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
              <Waves className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-sand-beige font-semibold">
                Swimming Pool
              </span>
              <span className="block text-xs sm:text-sm text-warm-ivory/85 font-light">
                Panoramic Mountain Vantage
              </span>
            </div>
          </div>

          {/* Highlight 3: Dining */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 py-1 pt-4 md:pt-1">
            <div className="w-10 h-10 rounded-full bg-forest-green/90 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-sand-beige font-semibold">
                Pure Vegetarian
              </span>
              <span className="block text-xs sm:text-sm text-warm-ivory/85 font-light">
                Fresh Traditional Kitchen
              </span>
            </div>
          </div>

          {/* Highlight 4: Timings */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 py-1 pt-4 md:pt-1">
            <div className="w-10 h-10 rounded-full bg-forest-green/90 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-sand-beige font-semibold">
                Check-in / Check-out
              </span>
              <span className="block text-xs sm:text-sm text-warm-ivory/85 font-light">
                {RESORT_INFO.timings.checkIn} / {RESORT_INFO.timings.checkOut}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
