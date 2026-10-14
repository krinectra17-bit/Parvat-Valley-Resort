import React from 'react';
import { MapPin, Waves, Utensils, Clock } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function PropertyHighlightsBar() {
  const highlights = [
    {
      icon: MapPin,
      title: 'Foothills Setting',
      desc: 'Near Savitri Mata Mandir',
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      desc: 'Mountain Vantage View',
    },
    {
      icon: Utensils,
      title: 'Pure Vegetarian',
      desc: 'Fresh Traditional Dining',
    },
    {
      icon: Clock,
      title: 'Check-in / Check-out',
      desc: `${RESORT_INFO.timings.checkIn} / ${RESORT_INFO.timings.checkOut}`,
    },
  ];

  return (
    <section className="relative z-20 bg-forest-dark border-y border-muted-gold/25 py-5 sm:py-6 text-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-3.5 p-2 rounded-lg bg-white/[0.02] sm:bg-transparent"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-forest-green/90 border border-muted-gold/40 flex items-center justify-center text-muted-gold shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-sand-beige font-semibold truncate">
                    {item.title}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-warm-ivory/85 font-light truncate">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
