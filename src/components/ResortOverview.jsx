import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function ResortOverview({ onOpenBooking }) {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-warm-ivory text-dark-charcoal relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-sand-beige/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-sand-beige/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Aerial Photography (IMAGE 5) */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Frame Border */}
              <div className="hidden sm:block absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-2 border-muted-gold/40 rounded-2xl pointer-events-none" />
              
              {/* Authentic Aerial Image */}
              <div className="relative z-10 overflow-hidden rounded-xl sm:rounded-2xl shadow-luxury bg-sand-beige">
                <img
                  src="/images/resort-aerial.jpg"
                  alt="Aerial overview of Parvat Valley Resort in Pushkar showing the swimming pool, garden lawn, and Rajasthani architecture"
                  className="w-full h-[240px] xs:h-[290px] sm:h-[400px] md:h-[460px] object-cover object-center transform hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Image caption badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-forest-dark/90 backdrop-blur-md px-3.5 py-2 sm:py-2.5 rounded-lg border border-muted-gold/30 text-warm-ivory flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-gold font-medium">
                      Authentic Property View
                    </span>
                    <span className="block text-xs sm:text-sm font-serif truncate">
                      Resort Grounds, Swimming Pool & Valley
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] bg-muted-gold/20 text-sand-beige border border-muted-gold/40 px-2 py-0.5 rounded uppercase font-medium shrink-0">
                    Aerial View
                  </span>
                </div>
              </div>

              {/* Accent card */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 z-20 bg-forest-green text-warm-ivory p-3.5 rounded-xl border border-muted-gold shadow-xl items-center gap-3 max-w-xs">
                <div className="w-9 h-9 rounded-full bg-forest-dark flex items-center justify-center text-muted-gold shrink-0 border border-muted-gold/40">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-sand-beige font-semibold uppercase tracking-wider">Prime Location</p>
                  <p className="text-xs text-warm-ivory/90">At Savitri Mata Mandir base, Kharekhari Road</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 text-left">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="h-px w-6 sm:w-8 bg-muted-gold" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
                Welcome to Parvat Valley
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight leading-tight mb-4 sm:mb-6">
              A Peaceful Stay <span className="block italic font-normal text-muted-gold">in Pushkar</span>
            </h2>

            {/* Editorial Paragraphs */}
            <p className="text-dark-charcoal/85 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-normal">
              Nestled on Kharekhari Road right near the foothills of the sacred Savitri Mata Mandir, 
              <strong> Parvat Valley Resort</strong> welcomes you to a serene retreat away from town crowds, 
              framed by the rugged natural beauty of the Aravalli hills.
            </p>

            <p className="text-dark-charcoal/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-7">
              Constructed in authentic Rajasthani heritage style with decorative arched verandas, a spacious open lawn, 
              and a sparkling blue swimming pool, the resort offers an inviting sanctuary for families, couples, and pilgrims. 
              Enjoy freshly prepared vegetarian fare, clean mountain breezes, and attentive local hospitality.
            </p>

            {/* Verified property highlights list */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3.5 mb-7 sm:mb-8">
              {[
                "Tranquil location near Savitri Temple",
                "Sparkling outdoor swimming pool",
                "Pure vegetarian on-site dining",
                "Expansive lawn & garden seating",
                "Children's outdoor playground",
                "Standard, Deluxe & Luxury rooms"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest-green shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-dark-charcoal/90">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="w-full xs:w-auto bg-forest-green hover:bg-forest-dark text-warm-ivory font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg shadow hover:shadow-md transition-all active:scale-95 touch-manipulation min-h-[44px] cursor-pointer"
              >
                Plan Your Visit
              </button>
              
              <a
                href="#stay"
                className="w-full xs:w-auto text-center text-xs uppercase tracking-widest text-forest-green hover:text-muted-gold font-semibold py-3 px-4 transition-colors inline-flex items-center justify-center gap-1.5 touch-manipulation min-h-[44px]"
              >
                <span>View Accommodations</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
