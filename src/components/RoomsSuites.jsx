import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { rooms } from '../data/rooms'
import { BOOKING_URL } from '../constants/booking'

// Show first 6 rooms in carousel; rest are on /rooms page
const roomsInCarousel = rooms.slice(0, 6)

const RoomsSuites = () => {
  const [current, setCurrent] = useState(0)
  const roomsList = roomsInCarousel

  const next = () => setCurrent((c) => (c + 1) % roomsList.length)
  const prev = () => setCurrent((c) => (c - 1 + roomsList.length) % roomsList.length)

  return (
    <section id="rooms" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Perched in the heart of Long Island City, our rooms offer an intimate retreat with private balconies
            overlooking the iconic Manhattan skyline. A boutique stay with timeless charm, minutes from NYC.
            Whether you&apos;re here to explore, work, or unwind under the city lights, every moment here is framed by a stunning view.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] min-h-[320px] md:min-h-[400px] rounded-none overflow-hidden bg-gray-100 shadow-soft">
              <Link to={`/rooms/${roomsList[current].slug}`} className="block w-full h-full">
                <img
                  src={roomsList[current].image}
                  alt={roomsList[current].name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button
                  type="button"
                  onClick={prev}
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  aria-label="Previous room"
                >
                  <ChevronLeft size={24} className="text-brand-charcoal" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  aria-label="Next room"
                >
                  <ChevronRight size={24} className="text-brand-charcoal" />
                </button>
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                {roomsList.map((_, i) => (
                  <button
                    key={roomsList[i].slug}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-brand-green' : 'bg-white/60'
                    }`}
                    aria-label={`View ${roomsList[i].name}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-brand-charcoal mb-2">
                <Link to={`/rooms/${roomsList[current].slug}`} className="hover:text-brand-green transition-colors">
                  {roomsList[current].name}
                </Link>
              </h3>
              <p className="text-brand-green font-medium mb-4">{roomsList[current].beds}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {roomsList[current].description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/rooms/${roomsList[current].slug}`}
                  className="inline-flex items-center gap-1 px-6 py-3 bg-brand-charcoal text-white font-semibold rounded-none hover:bg-brand-green transition-colors"
                >
                  View details
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-brand-charcoal text-brand-charcoal font-semibold rounded-none hover:bg-brand-charcoal/5 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-none bg-brand-cream border border-brand-cream-dark/50">
          <h4 className="font-display text-lg font-semibold text-brand-charcoal mb-3">
            Explore Our Rooms — All Room Types
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            We offer {rooms.length} room types including Manhattan Suite, Executive Suite, Premium Suite,
            Classic and Deluxe rooms—many with private balconies. Show Accessible Rooms when booking.
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-1 text-brand-green font-semibold text-sm hover:text-brand-green-light transition-colors"
          >
            View all rooms & suites
            <ArrowRight size={16} />
          </Link>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Show Accessible Rooms · Check-in 3:30 PM · Check-out 11:00 AM
        </p>
      </div>
    </section>
  )
}

export default RoomsSuites
