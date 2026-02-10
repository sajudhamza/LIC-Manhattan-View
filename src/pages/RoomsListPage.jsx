import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { rooms } from '../data/rooms'
import { BOOKING_URL } from '../constants/booking'

const RoomsListPage = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-14 md:mb-20">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Rooms & Suites
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Perched in the heart of Long Island City, our rooms offer an intimate retreat with private balconies
            overlooking the iconic Manhattan skyline. A boutique stay with timeless charm, minutes from NYC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <article
              key={room.slug}
              className="rounded-none overflow-hidden bg-white shadow-soft hover:shadow-soft-lg transition-all border border-transparent hover:border-brand-green/10"
            >
              <Link to={`/rooms/${room.slug}`} className="block aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-brand-charcoal mb-1">
                  <Link to={`/rooms/${room.slug}`} className="hover:text-brand-green transition-colors">
                    {room.name}
                  </Link>
                </h2>
                <p className="text-brand-green font-medium text-sm mb-3">{room.beds}</p>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{room.description}</p>
                <Link
                  to={`/rooms/${room.slug}`}
                  className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm hover:text-brand-green-light transition-colors"
                >
                  View details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-charcoal text-white font-semibold rounded-none hover:bg-brand-green transition-colors"
          >
            Check Availability — Book Direct
          </a>
          <p className="text-sm text-gray-500 mt-3">Show Accessible Rooms when booking</p>
        </div>
      </div>
    </div>
  )
}

export default RoomsListPage
