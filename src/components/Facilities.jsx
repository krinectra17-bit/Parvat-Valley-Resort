import React from 'react';
import { Waves, Utensils, Trees, Wifi, Smile, Mountain, Clock, Car } from 'lucide-react';
import { RESORT_FACILITIES } from '../data/resortData';

const iconMap = {
  Waves,
  Utensils,
  TreePine: Trees,
  Wifi,
  Smile,
  Mountain,
  Clock,
  Car,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 sm:py-24 bg-warm-ivory text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              Resort Amenities
            </span>
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-3 sm:mb-4">
            Curated For Your Comfort
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Thoughtful amenities and verified facilities designed to provide a restful, wholesome stay in the sacred town of Pushkar.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {RESORT_FACILITIES.map((facility) => {
            const IconComponent = iconMap[facility.icon] || Waves;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl p-5 sm:p-6 border border-sand-beige hover:border-muted-gold/80 transition-all duration-300 hover:shadow-elevated group text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-warm-ivory border border-muted-gold/30 flex items-center justify-center text-forest-green mb-4 group-hover:bg-forest-green group-hover:text-warm-ivory transition-colors">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-dark mb-1.5 group-hover:text-forest-green transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed font-normal">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-sand-beige/40 flex items-center text-[10px] sm:text-[11px] font-semibold tracking-wider text-muted-gold uppercase">
                  <span>Verified Amenity</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pure Veg Food Note */}
        <div className="mt-10 sm:mt-12 bg-sand-beige/40 border border-muted-gold/40 rounded-xl p-5 sm:p-6 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-medium text-forest-dark leading-relaxed">
            <span className="text-forest-green font-bold">Pure Vegetarian Tradition:</span> In reverence to the sacred ethos of Pushkar, our kitchen exclusively serves delicious, 100% vegetarian meals made with fresh ingredients.
          </p>
        </div>

      </div>
    </section>
  );
}
