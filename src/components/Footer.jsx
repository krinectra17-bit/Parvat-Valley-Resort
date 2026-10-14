import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Shield } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenBooking }) {

  return (
    <footer className="bg-forest-dark text-warm-ivory border-t border-muted-gold/25 pt-16 pb-24 sm:pb-12 text-left relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-radial-gradient from-forest-green/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Identity (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-muted-gold flex items-center justify-center bg-forest-green text-muted-gold font-serif text-lg font-bold">
                PV
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-wide uppercase text-warm-ivory">
                  Parvat Valley
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-sand-beige uppercase font-semibold">
                  Resort • Pushkar
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-beige/80 leading-relaxed font-light mb-6">
              A tranquil boutique resort nestled on Kharekhari Road at the foothills of Savitri Mata Mandir. 
              Authentic Rajasthani architecture, a serene swimming pool, green lawn spaces, and vegetarian dining in holy Pushkar.
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-gold">
              <Shield className="w-4 h-4" />
              <span>Direct Property Reservation Assurance</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-warm-ivory mb-4 pb-1 border-b border-muted-gold/30 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-sand-beige/80">
              <li>
                <a href="#hero" className="hover:text-muted-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#overview" className="hover:text-muted-gold transition-colors">About Resort</a>
              </li>
              <li>
                <a href="#stay" className="hover:text-muted-gold transition-colors">Accommodations</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-muted-gold transition-colors">Swimming Pool</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-muted-gold transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-muted-gold transition-colors">Property Gallery</a>
              </li>
              <li>
                <a href="#explore" className="hover:text-muted-gold transition-colors">Explore Pushkar</a>
              </li>
            </ul>
          </div>

          {/* Room Categories (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-warm-ivory mb-4 pb-1 border-b border-muted-gold/30 inline-block">
              Accommodations
            </h4>
            <ul className="space-y-3 text-xs text-sand-beige/80">
              <li>
                <button
                  onClick={() => onOpenBooking('Deluxe Room')}
                  className="hover:text-muted-gold transition-colors text-left"
                >
                  <strong className="block text-warm-ivory font-serif text-sm">Deluxe Room</strong>
                  <span className="text-[11px] font-light">Yellow upholstered headboard & wooden panelling</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Luxury Room')}
                  className="hover:text-muted-gold transition-colors text-left"
                >
                  <strong className="block text-warm-ivory font-serif text-sm">Luxury Room</strong>
                  <span className="text-[11px] font-light">Spacious retreat with pool/mountain outlook</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Standard Room')}
                  className="hover:text-muted-gold transition-colors text-left"
                >
                  <strong className="block text-warm-ivory font-serif text-sm">Standard Room</strong>
                  <span className="text-[11px] font-light">Comfortable base for holy Pushkar visits</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-warm-ivory mb-4 pb-1 border-b border-muted-gold/30 inline-block">
              Location & Timings
            </h4>
            <div className="space-y-3 text-xs text-sand-beige/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-muted-gold shrink-0 mt-0.5" />
                <span>Kharekhari Road, near Savitri Mata Mandir, Pushkar, Rajasthan 305022, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-muted-gold shrink-0" />
                <a href={`tel:${RESORT_INFO.contact.phoneRaw}`} className="hover:text-muted-gold">
                  +91 96363 52306
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: +91 96363 52306</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-muted-gold shrink-0" />
                <span>Check-in: 12:00 PM | Check-out: 12:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-beige/60 gap-4">
          <p>© {currentYear} Parvat Valley Resort, Pushkar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Authentic Hospitality in Pushkar, Rajasthan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
