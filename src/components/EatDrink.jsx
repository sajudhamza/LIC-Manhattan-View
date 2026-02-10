import React from 'react'

/**
 * Dining section kept empty — previous on-site restaurant is no longer there.
 * Content can be added when a new dining option is available.
 */
const EatDrink = () => {
  return (
    <section id="eat-drink" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-charcoal mb-4 tracking-tight">
          Dining
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Dining options will be announced soon. In the meantime, explore the many restaurants,
          cafés, and bars in Long Island City and nearby Manhattan—all easily reached from the hotel.
        </p>
      </div>
    </section>
  )
}

export default EatDrink
