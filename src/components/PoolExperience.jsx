import React from 'react';
import { Waves, Mountain, Sun, Calendar } from 'lucide-react';

export default function PoolExperience({ onOpenBooking }) {
  return (
    <section id="experiences" className="py-16 sm:py-24 bg-forest-dark text-warm-ivory relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-[#132f22] to-forest-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-sand-beige font-semibold">
              The Swimming Pool Experience
            </span>
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-warm-ivory tracking-tight mb-3 sm:mb-4">
            Relax. Refresh. Reconnect.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-sand-beige/90 font-light leading-relaxed">
            Take a break from the everyday and enjoy a refreshing stay in Pushkar. 
            Framed by the rugged Aravalli mountains, our swimming pool is an oasis of calm.
          </p>
        </div>

        {/* Feature Cinematic Image Showcase (IMAGE 2) */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-muted-gold/40 shadow-2xl group">
          <div className="relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[560px] w-full overflow-hidden bg-forest-green">
            <img
              src="/images/resort-pool-mountain.jpg"
              alt="Sparkling swimming pool with majestic mountain background at Parvat Valley Resort Pushkar"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Contrast gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/30 to-black/30" />

            {/* Overlaid Badge */}
            <div className="absolute top-3 sm:top-5 left-3 sm:left-6 bg-forest-dark/85 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-muted-gold/40 text-warm-ivory text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2">
              <Waves className="w-3.5 h-3.5 text-muted-gold" />
              <span className="font-medium tracking-wide">Outdoor Swimming Pool</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 sm:bottom-7 left-3 sm:left-7 right-3 sm:right-7 flex flex-col md:flex-row items-start md:items-end justify-between gap-3 sm:gap-4">
              <div className="max-w-xl text-left">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-gold font-semibold">
                  Savitri Mountain Views
                </span>
                <p className="text-xs sm:text-sm md:text-base text-warm-ivory/95 mt-0.5 sm:mt-1 font-light leading-snug">
                  Immerse yourself in clean mountain air and calm waters, with the peaks of Pushkar rising in the backdrop.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs uppercase tracking-widest px-5 py-3 rounded-lg shadow-lg transition-all active:scale-95 shrink-0 flex items-center justify-center gap-2 touch-manipulation min-h-[44px] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire For Poolside Stay</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Experience Highlights Under Pool */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div className="bg-forest-green/50 border border-muted-gold/25 rounded-xl p-5 sm:p-6 text-left hover:border-muted-gold/50 transition-colors">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-forest-dark flex items-center justify-center text-muted-gold mb-3.5 border border-muted-gold/30">
              <Mountain className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-warm-ivory mb-1.5">Majestic Hill Vantage</h3>
            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light">
              Enjoy unobstructed views of the surrounding Pushkar hills and Ratnagiri mountain right from the pool edge.
            </p>
          </div>

          <div className="bg-forest-green/50 border border-muted-gold/25 rounded-xl p-5 sm:p-6 text-left hover:border-muted-gold/50 transition-colors">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-forest-dark flex items-center justify-center text-muted-gold mb-3.5 border border-muted-gold/30">
              <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-warm-ivory mb-1.5">Sun & Garden Ambience</h3>
            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light">
              The poolside connects seamlessly to open green lawn spaces where you can bask in Rajasthan's golden sun and fresh air.
            </p>
          </div>

          <div className="bg-forest-green/50 border border-muted-gold/25 rounded-xl p-5 sm:p-6 text-left hover:border-muted-gold/50 transition-colors">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-forest-dark flex items-center justify-center text-muted-gold mb-3.5 border border-muted-gold/30">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-warm-ivory mb-1.5">Authentic Heritage Details</h3>
            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light">
              Adorned with traditional Rajasthani painted parapet walls and chhatri pavilions capturing Pushkar's regional charm.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
