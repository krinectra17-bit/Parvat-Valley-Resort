import React from 'react';
import { Waves, Utensils, Trees, Wifi, Smile, Mountain, Clock, Car } from 'lucide-react';
import { RESORT_FACILITIES } from '../data/resortData';

// Map icon strings to Lucide components
const iconMap = {
  Waves: Waves,
  Utensils: Utensils,
  TreePine: Trees,
  Wifi: Wifi,
  Smile: Smile,
  Mountain: Mountain,
  Clock: Clock,
  Car: Car,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-warm-ivory text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-muted-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              Resort Amenities
            </span>
            <span className="h-px w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Curated For Your Comfort
          </h2>

          <p className="text-base sm:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Thoughtful amenities and verified facilities designed to provide a restful, wholesome stay in the sacred town of Pushkar.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESORT_FACILITIES.map((facility) => {
            const IconComponent = iconMap[facility.icon] || Waves;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl p-6 border border-sand-beige hover:border-muted-gold/80 transition-all duration-300 hover:shadow-elevated group text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-warm-ivory border border-muted-gold/30 flex items-center justify-center text-forest-green mb-5 group-hover:bg-forest-green group-hover:text-warm-ivory transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-forest-dark mb-2 group-hover:text-forest-green transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed font-normal">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-sand-beige/40 flex items-center text-[11px] font-semibold tracking-wider text-muted-gold uppercase">
                  <span>Verified Amenity</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pure Veg Food Note */}
        <div className="mt-12 bg-sand-beige/40 border border-muted-gold/40 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-forest-dark">
            <span className="text-forest-green font-bold">Pure Vegetarian Tradition:</span> In reverence to the sacred ethos of Pushkar, our kitchen exclusively serves delicious, 100% vegetarian meals made with fresh ingredients.
          </p>
        </div>

      </div>
    </section>
  );
}
