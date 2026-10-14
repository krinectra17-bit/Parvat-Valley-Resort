import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { NEARBY_ATTRACTIONS } from '../data/resortData';

export default function ExplorePushkar() {
  return (
    <section id="explore" className="py-16 sm:py-24 bg-warm-ivory text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              The Destination
            </span>
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-3 sm:mb-4">
            Explore Sacred Pushkar
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Parvat Valley Resort is peacefully positioned along Kharekhari Road at the base of the Savitri hills, 
            providing easy access to Pushkar's sacred temples, historic ghats, and vibrant desert dunes.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {NEARBY_ATTRACTIONS.map((attraction, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-sand-beige hover:border-muted-gold/80 transition-all duration-300 hover:shadow-elevated text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-forest-green/10 text-forest-green border border-forest-green/20">
                    {attraction.highlight}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-xs text-muted-gold font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-dark mb-2">
                  {attraction.name}
                </h3>

                <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed font-normal mb-5 sm:mb-6">
                  {attraction.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-sand-beige/60 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs text-dark-charcoal/60 font-medium">From Parvat Valley</span>
                
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${attraction.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-forest-green hover:text-muted-gold font-semibold transition-colors touch-manipulation py-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Pushkar Travel Tip */}
        <div className="mt-8 sm:mt-12 bg-forest-dark text-warm-ivory rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-muted-gold/30 text-left flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-muted-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Local Travel Tip</span>
            </div>
            <h4 className="font-serif text-lg sm:text-2xl font-bold text-warm-ivory">
              Visiting Savitri Mata Temple at Sunrise or Sunset
            </h4>
            <p className="text-xs sm:text-sm text-sand-beige/80 mt-1 max-w-2xl font-light leading-relaxed">
              Because Parvat Valley Resort is located right near the temple base, guests can easily reach the ropeway or walking path early in the morning for magnificent views of the entire Pushkar valley bathed in golden light.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Pushkar+Rajasthan+attractions"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center shrink-0 bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-lg shadow transition-all active:scale-95 touch-manipulation min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            View Map of Pushkar
          </a>
        </div>

      </div>
    </section>
  );
}
