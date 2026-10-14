import React from 'react';
import { Waves, Mountain, Sun, Calendar } from 'lucide-react';

export default function PoolExperience({ onOpenBooking }) {
  return (
    <section id="experiences" className="py-20 sm:py-28 bg-forest-dark text-warm-ivory relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-[#132f22] to-forest-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-muted-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-sand-beige font-semibold">
              The Swimming Pool Experience
            </span>
            <span className="h-px w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-ivory tracking-tight mb-4">
            Relax. Refresh. Reconnect.
          </h2>

          <p className="text-base sm:text-lg text-sand-beige/90 font-light leading-relaxed">
            Take a break from the everyday and enjoy a refreshing stay in Pushkar. 
            Framed by the rugged Aravalli mountains, our swimming pool is an oasis of calm.
          </p>
        </div>

        {/* Feature Cinematic Image Showcase (IMAGE 2) */}
        <div className="relative rounded-2xl overflow-hidden border border-muted-gold/40 shadow-2xl group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[560px] w-full overflow-hidden bg-forest-green">
            <img
              src="/images/resort-pool-mountain.jpg"
              alt="Sparkling swimming pool with majestic mountain background at Parvat Valley Resort Pushkar"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle contrast gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-black/30" />

            {/* Overlaid Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-forest-dark/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-muted-gold/40 text-warm-ivory text-xs flex items-center gap-2">
              <Waves className="w-3.5 h-3.5 text-muted-gold" />
              <span className="font-medium tracking-wide">Outdoor Swimming Pool</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div className="max-w-xl text-left">
                <span className="text-xs uppercase tracking-widest text-muted-gold font-semibold">
                  Savitri Mountain Views
                </span>
                <p className="text-sm sm:text-base text-warm-ivory/95 mt-1 font-light leading-snug">
                  Immerse yourself in clean mountain air and calm waters, with the peaks of Pushkar rising in the backdrop.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded shadow-lg transition-all active:scale-95 shrink-0 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire For Poolside Stay</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Experience Highlights Under Pool */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-forest-green/50 border border-muted-gold/25 rounded-xl p-6 text-left hover:border-muted-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-forest-dark flex items-center justify-center text-muted-gold mb-4 border border-muted-gold/30">
              <Mountain className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-warm-ivory mb-2">Majestic Hill Vantage</h3>
            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light">
              Enjoy unobstructed views of the surrounding Pushkar hills and Ratnagiri mountain right from the pool edge.
            </p>
          </div>

          <div className="bg-forest-green/50 border border-muted-gold/25 rounded-xl p-6 text-left hover:border-muted-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-forest-dark flex items-center justify-center text-muted-gold mb-4 border border-muted-gold/30">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-warm-ivory mb-2">Sun & Garden Ambience</h3>
            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light">
              The poolside connects seamlessly to open green lawn spaces where you can bask in Rajasthan's golden sun and fresh air.
            </p>
          </div>

          <div className="bg-forest-green/50 border border-muted-gold/25 rounded-xl p-6 text-left hover:border-muted-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-forest-dark flex items-center justify-center text-muted-gold mb-4 border border-muted-gold/30">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-warm-ivory mb-2">Authentic Heritage Details</h3>
            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light">
              Adorned with traditional Rajasthani painted parapet walls and chhatri pavilions capturing Pushkar's regional charm.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
