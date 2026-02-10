import React from 'react'
import { BOOKING_URL, SECURITY_DEPOSIT_NOTE } from '../constants/booking'

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lobby-hero.png')` }}
      />
      {/* Light gradient overlay for readability – lets the bright image show through */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <p className="text-white/90 text-sm uppercase tracking-[0.25em] mb-4 font-medium">
            Stay with a View – Long Island City Awaits
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-5 leading-tight">
            Timeless Stays, Iconic Views
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mb-2 leading-relaxed">
            LIC Manhattan View Eco-Hotel. A greener way to stay in the city—private balconies
            overlooking the Manhattan skyline, boutique comfort, and a prime location minutes from NYC.
          </p>
          <p className="text-white/80 text-sm mb-8">{SECURITY_DEPOSIT_NOTE}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-charcoal font-semibold rounded-none hover:bg-brand-cream transition-colors"
            >
              For Lowest Fares Book Directly on Hotel Website — Check Availability
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-none hover:bg-white/15 transition-colors"
            >
              Explore Our Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
