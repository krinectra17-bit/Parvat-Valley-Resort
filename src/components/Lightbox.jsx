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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Top Header Controls */}
      <div className="absolute top-0 left-0 right-0 p-3 sm:p-6 flex items-center justify-between text-warm-ivory z-30 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-gold font-medium truncate max-w-[180px] sm:max-w-none">
            Parvat Valley Gallery
          </span>
          <span className="text-xs text-white/50">&middot;</span>
          <span className="text-xs text-white/80 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-warm-ivory transition-colors focus:outline-none focus:ring-2 focus:ring-muted-gold touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation: Previous Arrow */}
      <button
        onClick={() => onNavigate('prev')}
        className="absolute left-1.5 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-muted-gold hover:text-forest-dark text-warm-ivory transition-all z-30 focus:outline-none border border-white/20 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full px-2 sm:px-12 flex flex-col items-center justify-center my-auto">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[55vh] xs:max-h-[60vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />

        {/* Caption & Category Information */}
        <div className="mt-3 sm:mt-4 text-center max-w-xl px-3">
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-gold font-semibold mb-0.5 sm:mb-1">
            {currentImage.category}
          </span>
          <h3 className="font-serif text-base sm:text-xl font-bold text-warm-ivory line-clamp-1">
            {currentImage.title}
          </h3>
          <p className="text-[11px] sm:text-sm text-warm-ivory/70 mt-0.5 sm:mt-1 font-light leading-snug line-clamp-2">
            {currentImage.description}
          </p>
        </div>
      </div>

      {/* Navigation: Next Arrow */}
      <button
        onClick={() => onNavigate('next')}
        className="absolute right-1.5 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-muted-gold hover:text-forest-dark text-warm-ivory transition-all z-30 focus:outline-none border border-white/20 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Desktop Keyboard Tip */}
      <div className="hidden sm:block absolute bottom-3 text-center text-[10px] text-white/40 tracking-wider">
        Press ESC to close &middot; Left/Right arrow keys to navigate
      </div>
    </div>
  );
}
