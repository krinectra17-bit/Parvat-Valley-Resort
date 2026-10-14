import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function ResortOverview({ onOpenBooking }) {
  return (
    <section id="overview" className="py-20 sm:py-28 bg-warm-ivory text-dark-charcoal relative overflow-hidden">
      {/* Subtle traditional Rajasthani background decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand-beige/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand-beige/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Aerial Photography (IMAGE 5) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Frame Border with Rajasthani Arch Inspiration */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-2 border-muted-gold/40 rounded-2xl pointer-events-none -z-0" />
              
              {/* Authentic Aerial Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-luxury bg-sand-beige">
                <img
                  src="/images/resort-aerial.jpg"
                  alt="Aerial overview of Parvat Valley Resort in Pushkar showing the swimming pool, garden lawn, and Rajasthani architecture"
                  className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Image caption badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-forest-dark/90 backdrop-blur-md px-4 py-3 rounded-lg border border-muted-gold/30 text-warm-ivory flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-muted-gold font-medium">Authentic Property View</span>
                    <span className="block text-xs sm:text-sm font-serif">Resort Grounds, Swimming Pool & Pushkar Valley</span>
                  </div>
                  <span className="text-xs bg-muted-gold/20 text-sand-beige border border-muted-gold/40 px-2 py-0.5 rounded text-[10px] uppercase">
                    Aerial View
                  </span>
                </div>
              </div>

              {/* Small accent card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 bg-forest-green text-warm-ivory p-4 rounded-xl border border-muted-gold shadow-xl items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-forest-dark flex items-center justify-center text-muted-gold shrink-0 border border-muted-gold/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-sand-beige font-semibold uppercase tracking-wider">Prime Location</p>
                  <p className="text-xs text-warm-ivory/90">At the base of Savitri Mata Mandir, Kharekhari Road</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 text-left">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-muted-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
                Welcome to Parvat Valley
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight leading-tight mb-6">
              A Peaceful Stay <span className="block italic font-normal text-muted-gold">in Pushkar</span>
            </h2>

            {/* Editorial Paragraphs */}
            <p className="text-dark-charcoal/85 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Nestled on Kharekhari Road right near the foothills of the sacred Savitri Mata Mandir, 
              <strong> Parvat Valley Resort</strong> welcomes you to a serene retreat away from the crowded town lanes, 
              framed by the rugged natural beauty of the Aravalli hills.
            </p>

            <p className="text-dark-charcoal/80 text-sm sm:text-base leading-relaxed mb-8">
              Constructed in authentic Rajasthani heritage style with decorative arched verandas, a spacious open lawn, 
              and a sparkling blue swimming pool, the resort offers an inviting sanctuary for families, couples, and pilgrims. 
              Enjoy freshly prepared vegetarian fare, clean mountain breezes, and attentive local hospitality.
            </p>

            {/* Verified property highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                "Tranquil location near Savitri Temple",
                "Sparkling outdoor swimming pool",
                "Pure vegetarian on-site dining",
                "Expansive lawn & garden seating",
                "Children's outdoor playground",
                "Standard, Deluxe & Luxury rooms"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-green shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-dark-charcoal/90">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-forest-green hover:bg-forest-dark text-warm-ivory font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded shadow hover:shadow-md transition-all active:scale-95"
              >
                Plan Your Visit
              </button>
              
              <a
                href="#stay"
                className="text-xs uppercase tracking-widest text-forest-green hover:text-muted-gold font-semibold py-3.5 px-4 transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Accommodations</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
