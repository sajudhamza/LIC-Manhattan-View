import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, X } from 'lucide-react'
import { galleryImages } from '../data/gallery'

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-brand-cream border-b border-brand-cream-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-brand-green font-medium hover:text-brand-green-light transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-14 md:mb-20">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take a look around LIC Manhattan View Hotel and our Manhattan skyline views. Click any image to view full size.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              type="button"
              className="relative aspect-[4/3] rounded-none overflow-hidden group focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 shadow-soft"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-colors" />
            </button>
          ))}
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
    </div>
  )
}

export default GalleryPage
