import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MessageSquare } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Stay', href: '#stay' },
    { name: 'Pool & Lawn', href: '#experiences' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Explore Pushkar', href: '#explore' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-dark/95 backdrop-blur-md shadow-lg py-3 border-b border-muted-gold/20'
            : 'bg-gradient-to-b from-forest-dark/90 via-forest-dark/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Heading */}
            <a href="#hero" className="group flex items-center gap-3 text-left focus:outline-none">
              <div className="w-10 h-10 rounded-full border border-muted-gold/60 flex items-center justify-center bg-forest-green/60 text-muted-gold font-serif text-xl shadow-inner group-hover:border-muted-gold transition-colors">
                PV
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl tracking-wider text-warm-ivory uppercase font-semibold leading-tight group-hover:text-muted-gold transition-colors">
                  Parvat Valley
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-sand-beige uppercase font-medium">
                  Resort • Pushkar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-warm-ivory/90 hover:text-muted-gold transition-colors font-medium py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-muted-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-warm-ivory/90 hover:text-muted-gold px-3 py-2 rounded transition-colors"
                title="Call resort directly"
              >
                <Phone className="w-3.5 h-3.5 text-muted-gold" />
                <span>+91 96363 52306</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 bg-muted-gold hover:bg-gold-light text-forest-dark text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-muted-gold text-forest-dark text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded flex items-center gap-1.5"
                aria-label="Book enquiry"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>
              
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded text-warm-ivory hover:text-muted-gold hover:bg-forest-green/40 focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-muted-gold" />
                ) : (
                  <Menu className="w-6 h-6 text-warm-ivory" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-forest-dark border-l border-muted-gold/20 p-6 flex flex-col justify-between shadow-2xl animate-fade-in overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-muted-gold flex items-center justify-center bg-forest-green text-muted-gold font-serif text-sm">
                    PV
                  </div>
                  <div>
                    <span className="block font-serif text-lg tracking-wider text-warm-ivory uppercase font-semibold">
                      Parvat Valley
                    </span>
                    <span className="block text-[9px] tracking-widest text-sand-beige uppercase">
                      Pushkar, Rajasthan
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-warm-ivory/80 hover:text-muted-gold"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base text-warm-ivory hover:text-muted-gold transition-colors font-medium tracking-wide py-2 border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-muted-gold/40 text-xs">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs tracking-widest uppercase py-3 rounded flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <a
                href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                className="w-full bg-forest-green hover:bg-emerald-accent text-warm-ivory text-xs tracking-wider uppercase py-3 rounded flex items-center justify-center gap-2 border border-muted-gold/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-muted-gold" />
                <span>Call +91 96363 52306</span>
              </a>

              <a
                href={`https://wa.me/${RESORT_INFO.contact.whatsappNumber}?text=${encodeURIComponent('Hello Parvat Valley Resort, I would like to enquire about room availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 text-xs tracking-wider uppercase py-2.5 rounded flex items-center justify-center gap-2 border border-[#25D366]/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Quick WhatsApp Enquiry</span>
              </a>

              <p className="text-[11px] text-warm-ivory/60 text-center pt-2">
                Kharekhari Road, near Savitri Mata Mandir, Pushkar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
