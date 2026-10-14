import React, { useState } from 'react';
import { AUTHENTIC_IMAGES } from '../data/resortData';
import Lightbox from './Lightbox';
import { Eye } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Exterior', 'Rooms', 'Pool', 'Property Views'];

  const filteredImages = activeCategory === 'All'
    ? AUTHENTIC_IMAGES
    : AUTHENTIC_IMAGES.filter((img) => img.category === activeCategory);

  const handleOpenLightbox = (image) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNavigate = (direction) => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F4EFE6] text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              Property Gallery
            </span>
            <span className="h-px w-6 sm:w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-3 sm:mb-4">
            Moments at Parvat Valley
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Explore authentic photographs of our Pushkar retreat—from Rajasthani architectural arches and sunlit swimming pools to cozy guest rooms.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-200 active:scale-95 touch-manipulation cursor-pointer ${
                activeCategory === category
                  ? 'bg-forest-green text-warm-ivory shadow-md'
                  : 'bg-warm-ivory text-dark-charcoal/80 hover:bg-sand-beige border border-sand-beige/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredImages.map((image) => {
            const isWide = image.id === 'exterior-hero' || image.id === 'aerial-view';
            return (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(image)}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-sand-beige cursor-pointer border border-sand-beige/80 shadow-md hover:shadow-luxury-hover transition-all duration-300 touch-manipulation ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Aspect ratio container */}
                <div className={`relative w-full ${isWide ? 'aspect-[16/10] sm:aspect-[21/11]' : 'aspect-[4/3] sm:aspect-[4/3]'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/40 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-left">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-gold font-semibold mb-0.5 sm:mb-1">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-xl font-bold text-warm-ivory line-clamp-1">
                      {image.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-warm-ivory/80 mt-0.5 sm:mt-1 line-clamp-2 font-light">
                      {image.description}
                    </p>

                    <div className="mt-2.5 sm:mt-3 flex items-center gap-1.5 text-xs text-sand-beige font-medium">
                      <Eye className="w-3.5 h-3.5 text-muted-gold" />
                      <span>Tap to enlarge</span>
                    </div>
                  </div>

                  {/* Corner Authentic Photo Badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-forest-dark/80 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-[9px] sm:text-[10px] text-warm-ivory border border-muted-gold/30">
                    Authentic Photo
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-8 sm:mt-12 text-center text-[11px] sm:text-xs text-dark-charcoal/70">
          Showing {filteredImages.length} verified resort photographs &middot; Tap any image to view in high resolution
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!selectedImage}
        onClose={handleCloseLightbox}
        currentImage={selectedImage}
        images={filteredImages}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
