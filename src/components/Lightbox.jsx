import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, currentImage, images, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  const currentIndex = images.findIndex((img) => img.id === currentImage.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Top Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-warm-ivory z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted-gold font-medium">
            Parvat Valley Resort Gallery
          </span>
          <span className="text-xs text-white/50">•</span>
          <span className="text-xs text-white/80 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-warm-ivory transition-colors focus:outline-none focus:ring-2 focus:ring-muted-gold"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation: Previous Arrow */}
      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-muted-gold hover:text-forest-dark text-warm-ivory transition-all z-20 focus:outline-none border border-white/20"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[82vh] w-full px-4 sm:px-12 flex flex-col items-center justify-center">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />

        {/* Caption & Category Information */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="inline-block text-[11px] uppercase tracking-widest text-muted-gold font-semibold mb-1">
            {currentImage.category}
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-warm-ivory">
            {currentImage.title}
          </h3>
          <p className="text-xs sm:text-sm text-warm-ivory/70 mt-1 font-light leading-relaxed">
            {currentImage.description}
          </p>
        </div>
      </div>

      {/* Navigation: Next Arrow */}
      <button
        onClick={() => onNavigate('next')}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-muted-gold hover:text-forest-dark text-warm-ivory transition-all z-20 focus:outline-none border border-white/20"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Keyboard Shortcut Note for Desktop */}
      <div className="hidden sm:block absolute bottom-3 text-center text-[10px] text-white/40 tracking-wider">
        Press ESC to close • Left/Right arrow keys to navigate
      </div>
    </div>
  );
}
