import React from 'react';
import { Check, Calendar } from 'lucide-react';
import { ROOM_CATEGORIES } from '../data/resortData';

export default function Accommodations({ onOpenBooking }) {
  return (
    <section id="stay" className="py-16 sm:py-24 bg-[#F4EFE6] text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              Accommodations
            </span>
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-3 sm:mb-4">
            Find Your Perfect Stay
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Explore our accommodation options and choose a stay that suits your visit. 
            All rooms are designed for rest and comfort after exploring holy Pushkar.
          </p>

          <div className="mt-4 inline-block bg-warm-ivory border border-muted-gold/40 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] sm:text-xs text-dark-charcoal/75">
            <strong>Authentic Property Notice:</strong> Rates and seasonal availability are confirmed directly via WhatsApp or phone.
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {ROOM_CATEGORIES.map((room) => {
            const isDeluxe = room.id === 'deluxe-room';
            return (
              <div
                key={room.id}
                className={`flex flex-col bg-warm-ivory rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-luxury-hover group ${
                  isDeluxe
                    ? 'border-muted-gold/80 shadow-luxury ring-1 ring-muted-gold/40'
                    : 'border-sand-beige/70 shadow-sm'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-beige/50">
                  <img
                    src={room.image}
                    alt={room.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-forest-dark/85 backdrop-blur-md border border-muted-gold/30 px-2.5 py-1 rounded text-warm-ivory text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                    {room.badge}
                  </div>

                  {isDeluxe && (
                    <div className="absolute bottom-3 left-3 right-3 bg-forest-dark/90 backdrop-blur-md px-3 py-1.5 rounded text-[10px] sm:text-[11px] text-warm-ivory border border-muted-gold/30 flex items-center justify-between">
                      <span className="text-muted-gold font-medium">Authentic Room Photo</span>
                      <span className="text-[10px] text-sand-beige">Property Verified</span>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between text-left">
                  <div>
                    {/* Room Title */}
                    <div className="mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-dark group-hover:text-forest-green transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-xs text-muted-gold font-medium mt-0.5 tracking-wide">
                        {room.tagline}
                      </p>
                    </div>

                    {/* Room Description */}
                    <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed mb-5 font-normal">
                      {room.description}
                    </p>

                    {/* Verified Amenities */}
                    <div className="space-y-2 pt-3.5 border-t border-sand-beige/80 mb-5">
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-forest-green font-semibold">
                        Included Room Amenities
                      </p>
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-muted-gold shrink-0 mt-0.5" />
                          <span className="text-xs text-dark-charcoal/85 leading-snug">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enquiry Action Button */}
                  <div className="pt-4 border-t border-sand-beige/60">
                    <button
                      onClick={() => onOpenBooking(room.name)}
                      className={`w-full py-3.5 px-4 rounded-lg font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 touch-manipulation min-h-[44px] cursor-pointer ${
                        isDeluxe
                          ? 'bg-muted-gold hover:bg-gold-light text-forest-dark shadow-sm'
                          : 'bg-forest-green hover:bg-forest-dark text-warm-ivory'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Enquire About This Room</span>
                    </button>
                    <p className="text-[10px] text-center text-dark-charcoal/60 mt-2">
                      Instant WhatsApp Enquiry &middot; No Online Advance Payment
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Accommodation Honest Note */}
        <div className="mt-10 sm:mt-12 text-center text-[11px] sm:text-xs text-dark-charcoal/70 max-w-2xl mx-auto italic">
          * Interior photograph showcases authentic Deluxe Room styling at Parvat Valley Resort. 
          Please enquire with your check-in and check-out dates for custom room allotment and active rates.
        </div>

      </div>
    </section>
  );
}
