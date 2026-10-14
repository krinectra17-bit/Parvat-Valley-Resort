import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Requested Navigation Items: Home, Stay, Experiences, Gallery, Location
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Stay', href: '#stay' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-dark/95 backdrop-blur-md shadow-lg py-3.5 border-b border-muted-gold/20'
            : 'bg-gradient-to-b from-forest-dark/80 via-forest-dark/30 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: New PARVAT VALLEY Wordmark */}
            <a
              href="#hero"
              className="group focus:outline-none transition-transform hover:opacity-90 text-left"
              aria-label="Parvat Valley Resort Pushkar Home"
            >
              <BrandLogo
                variant="light"
                size={isScrolled ? 'sm' : 'md'}
                className="transition-all duration-300"
              />
            </a>

            {/* Center: Clean Sophisticated Navigation */}
            <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.22em] text-warm-ivory/90 hover:text-muted-gold transition-colors font-medium py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-muted-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Primary BOOK YOUR STAY CTA (no cluttered phone number in header) */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => onOpenBooking()}
                className="bg-muted-gold hover:bg-gold-light text-forest-dark text-xs font-semibold uppercase tracking-[0.2em] px-6 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                Book Your Stay
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center space-x-2.5">
              <button
                onClick={() => onOpenBooking()}
                className="bg-muted-gold text-forest-dark text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1.5"
                aria-label="Book your stay"
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
                  <X className="w-5 h-5 text-muted-gold" />
                ) : (
                  <Menu className="w-5 h-5 text-warm-ivory" />
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
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-forest-dark border-l border-muted-gold/20 p-6 flex flex-col justify-between shadow-2xl animate-fade-in overflow-y-auto">
            <div>
              {/* Header with New Brand Wordmark */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <BrandLogo variant="light" size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-warm-ivory/80 hover:text-muted-gold"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest text-warm-ivory hover:text-muted-gold transition-colors font-medium py-2.5 border-b border-white/5 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-muted-gold/40 text-xs">&rarr;</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Action */}
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

              <p className="text-[10px] text-warm-ivory/60 text-center tracking-wider uppercase pt-2">
                Kharekhari Road &middot; Pushkar, Rajasthan
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
