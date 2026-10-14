import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function LocationContact({ onOpenBooking }) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F4EFE6] text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-muted-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              Location & Contact
            </span>
            <span className="h-px w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Visit Parvat Valley Resort
          </h2>

          <p className="text-base sm:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Conveniently situated along Kharekhari Road, near Savitri Mata Mandir in Pushkar. 
            Reach out directly for reservations, driving directions, or special stay requests.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-warm-ivory rounded-2xl p-7 sm:p-8 border border-sand-beige/90 shadow-luxury flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-sand-beige mb-6">
                <div className="w-12 h-12 rounded-full border border-muted-gold flex items-center justify-center bg-forest-dark text-muted-gold font-serif text-xl font-bold shrink-0">
                  PV
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark">
                    Parvat Valley Resort
                  </h3>
                  <p className="text-xs text-muted-gold font-medium uppercase tracking-wider">
                    Pushkar, Rajasthan
                  </p>
                </div>
              </div>

              {/* Information List */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sand-beige/50 border border-muted-gold/30 flex items-center justify-center text-forest-green shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-forest-green font-bold">
                      Resort Address
                    </h4>
                    <p className="text-sm text-dark-charcoal/90 mt-1 leading-relaxed">
                      Kharekhari Road, near Savitri Mata Mandir,<br />
                      Pushkar, Rajasthan 305022, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sand-beige/50 border border-muted-gold/30 flex items-center justify-center text-forest-green shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-forest-green font-bold">
                      Telephone & WhatsApp
                    </h4>
                    <p className="text-sm font-semibold text-forest-dark mt-1">
                      <a
                        href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                        className="hover:text-muted-gold transition-colors inline-block mr-2"
                      >
                        +91 96363 52306
                      </a>
                    </p>
                    <p className="text-xs text-dark-charcoal/60 mt-0.5">
                      Available for voice calls & WhatsApp messaging
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sand-beige/50 border border-muted-gold/30 flex items-center justify-center text-forest-green shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-forest-green font-bold">
                      Check-in / Check-out
                    </h4>
                    <div className="flex items-center gap-6 mt-1 text-sm text-dark-charcoal/90">
                      <div>
                        <span className="text-xs text-dark-charcoal/60 block">Check-in</span>
                        <span className="font-semibold text-forest-dark">{RESORT_INFO.timings.checkIn}</span>
                      </div>
                      <div>
                        <span className="text-xs text-dark-charcoal/60 block">Check-out</span>
                        <span className="font-semibold text-forest-dark">{RESORT_INFO.timings.checkOut}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-sand-beige mt-8 space-y-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full bg-forest-green hover:bg-forest-dark text-warm-ivory py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow"
              >
                <MessageSquare className="w-4 h-4 text-muted-gold" />
                <span>Enquire via WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                  className="bg-sand-beige hover:bg-sand-beige/80 text-forest-dark py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors border border-muted-gold/40"
                >
                  <Phone className="w-3.5 h-3.5 text-forest-green" />
                  <span>Call Resort</span>
                </a>

                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sand-beige hover:bg-sand-beige/80 text-forest-dark py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors border border-muted-gold/40"
                >
                  <Navigation className="w-3.5 h-3.5 text-forest-green" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map View (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl overflow-hidden border border-sand-beige shadow-luxury flex-grow flex flex-col">
              {/* Map Top Bar */}
              <div className="p-4 bg-warm-ivory border-b border-sand-beige flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-forest-green" />
                  <span className="text-xs font-semibold text-forest-dark uppercase tracking-wider">
                    Savitri Mata Mandir Foothills, Pushkar
                  </span>
                </div>
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-forest-green hover:text-muted-gold inline-flex items-center gap-1"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[360px] sm:h-[420px] flex-grow bg-sand-beige/30">
                <iframe
                  title="Parvat Valley Resort Location Map"
                  src={RESORT_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Driving Note */}
              <div className="p-4 bg-warm-ivory text-xs text-dark-charcoal/70 text-left border-t border-sand-beige">
                <strong>Arrival Note:</strong> Located just off Kharekhari Road near the Savitri Mata Temple base. On-site secure parking is available for guests traveling by car or private taxi.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
