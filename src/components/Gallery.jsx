import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryImages } from '../data/gallery'

const AUTOPLAY_INTERVAL_MS = 4500

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index) => {
    setCurrentIndex((index + galleryImages.length) % galleryImages.length)
  }, [])

  const goNext = useCallback(() => {
    goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [isPaused, currentIndex, goNext])

  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a look around LIC Manhattan View Hotel and our Manhattan skyline views.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative rounded-none overflow-hidden bg-gray-100 shadow-soft"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-inset z-0"
                style={{
                  transform: `translateX(${(i - currentIndex) * 100}%)`,
                  zIndex: i === currentIndex ? 10 : 0,
                }}
                onClick={() => setLightbox(i)}
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-charcoal/0 hover:bg-brand-charcoal/10 transition-colors" />
              </button>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-brand-charcoal shadow-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-brand-charcoal shadow-lg transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-brand-green' : 'w-2 bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          Click any image to view full size · Carousel pauses on hover
        </p>
        <div className="text-center mt-6">
          <Link
            to="/gallery"
            className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-light transition-colors"
          >
            View full gallery (all images)
          </Link>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 text-white hover:text-brand-green-light transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
