import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  // Requested Navigation Items: Home, Stay, Experiences, Gallery, Location, and Contact
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Stay', href: '#stay' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#contact' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-forest-dark/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3.5 border-b border-muted-gold/20'
            : 'bg-gradient-to-b from-forest-dark/85 via-forest-dark/35 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: New PARVAT VALLEY Wordmark */}
            <a
              href="#hero"
              className="group focus:outline-none transition-transform hover:opacity-95 text-left py-1 shrink-0"
              aria-label="Parvat Valley Resort Pushkar Home"
            >
              <BrandLogo
                variant="light"
                size={isScrolled ? 'sm' : 'md'}
                className="transition-all duration-300"
              />
            </a>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-warm-ivory/90 hover:text-muted-gold transition-colors font-medium py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-muted-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Primary BOOK YOUR STAY CTA (Desktop) */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => onOpenBooking()}
                className="bg-muted-gold hover:bg-gold-light text-forest-dark text-xs font-semibold uppercase tracking-[0.2em] px-6 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Book Your Stay
              </button>
            </div>

            {/* Mobile Controls (Quick Book + Clean Hamburger) */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-muted-gold text-forest-dark text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm active:scale-95 touch-manipulation cursor-pointer"
                aria-label="Book your stay"
              >
                <Calendar className="w-3.5 h-3.5 text-forest-dark" />
                <span>Book</span>
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-warm-ivory hover:text-muted-gold hover:bg-forest-green/40 focus:outline-none touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
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

      {/* Mobile Drawer Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop with touch dismiss */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-[85%] max-w-xs bg-forest-dark border-l border-muted-gold/25 p-5 sm:p-6 flex flex-col justify-between shadow-2xl animate-fade-in overflow-y-auto">
            <div>
              {/* Header with Brand Wordmark & Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <BrandLogo variant="light" size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-warm-ivory hover:text-muted-gold focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center touch-manipulation"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links with generous tap area */}
              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavLinkClick}
                    className="text-sm uppercase tracking-widest text-warm-ivory hover:text-muted-gold hover:bg-forest-green/20 px-3 py-3 rounded-lg transition-colors font-medium border-b border-white/5 flex items-center justify-between touch-manipulation"
                  >
                    <span>{link.name}</span>
                    <span className="text-muted-gold/50 text-xs">&rarr;</span>
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
                className="w-full bg-muted-gold hover:bg-gold-light text-forest-dark font-semibold text-xs tracking-widest uppercase py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 touch-manipulation cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay</span>
              </button>

              <p className="text-[10px] text-warm-ivory/60 text-center tracking-wider uppercase pt-1">
                Kharekhari Road &middot; Pushkar, Rajasthan
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
