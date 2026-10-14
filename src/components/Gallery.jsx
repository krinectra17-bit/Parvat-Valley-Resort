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
    <section id="gallery" className="py-20 sm:py-28 bg-[#F4EFE6] text-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-muted-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-forest-green font-semibold">
              Property Gallery
            </span>
            <span className="h-px w-8 bg-muted-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-dark tracking-tight mb-4">
            Moments at Parvat Valley
          </h2>

          <p className="text-base sm:text-lg text-dark-charcoal/80 font-light leading-relaxed">
            Explore authentic photographs of our Pushkar retreat—from Rajasthani architectural arches and sunlit swimming pools to cozy guest rooms.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 active:scale-95 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((image) => {
            // Give specific images editorial prominence in grid
            const isWide = image.id === 'exterior-hero' || image.id === 'aerial-view';
            return (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(image)}
                className={`group relative overflow-hidden rounded-2xl bg-sand-beige cursor-pointer border border-sand-beige/80 shadow-md hover:shadow-luxury-hover transition-all duration-300 ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Aspect ratio container */}
                <div className={`relative w-full ${isWide ? 'aspect-[16/10] sm:aspect-[21/11]' : 'aspect-[4/3] sm:aspect-[4/3]'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Elegant Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    <span className="text-[11px] uppercase tracking-widest text-muted-gold font-semibold mb-1">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-warm-ivory">
                      {image.title}
                    </h3>
                    <p className="text-xs text-warm-ivory/80 mt-1 line-clamp-2 font-light">
                      {image.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-sand-beige font-medium">
                      <Eye className="w-4 h-4 text-muted-gold" />
                      <span>Click to enlarge</span>
                    </div>
                  </div>

                  {/* Corner Authentic Photo Badge */}
                  <div className="absolute top-3 right-3 bg-forest-dark/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-warm-ivory border border-muted-gold/30">
                    Authentic Photo
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center text-xs text-dark-charcoal/70">
          Showing {filteredImages.length} verified resort photographs • Click any image to view in high resolution
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
