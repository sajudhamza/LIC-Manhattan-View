import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronLeft, Check } from 'lucide-react'
import { getRoomBySlug } from '../data/rooms'
import { BOOKING_URL } from '../constants/booking'

const RoomDetailPage = () => {
  const { slug } = useParams()
  const room = getRoomBySlug(slug)

  if (!room) {
    return <Navigate to="/rooms" replace />
  }

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="bg-brand-cream border-b border-brand-cream-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-1 text-brand-green font-medium hover:text-brand-green-light transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Rooms & Suites
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gray-200">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            {room.name}
          </h1>
          <p className="text-brand-green-light text-lg mt-1">{room.beds}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-brand-charcoal mb-4">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {room.description}
            </p>
          </div>
          <div>
            <div className="sticky top-24 p-6 rounded-none bg-brand-cream border border-brand-cream-dark/50 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-brand-charcoal mb-4">
                Room Amenities
              </h3>
              <ul className="space-y-3">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-brand-green flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full py-4 text-center bg-brand-charcoal text-white font-semibold rounded-none hover:bg-brand-green transition-colors"
              >
                Book Now
              </a>
              <p className="text-center text-sm text-gray-500 mt-3">
                Check-in 3:30 PM · Check-out 11:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailPage
