import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { BOOKING_URL, PHONE, RESERVE_EMAIL, ADDRESS_SHORT, CITY_STATE_ZIP, LOGO_URL } from '../constants/booking'

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="LIC Manhattan View Hotel"
              className="h-12 w-auto mb-3 object-contain"
            />
            <h3 className="font-display text-2xl font-semibold text-white mb-3">
              LIC Manhattan View Hotel
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-md mb-4">
              Timeless stays, iconic views. A greener way to stay in the city. For lowest fares, book directly on our hotel website.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-green-light font-semibold hover:text-brand-green transition-colors"
            >
              Book Direct
              <ExternalLink size={16} />
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Contact
            </h4>
            <div className="flex items-start gap-3 text-white/80 text-sm">
              <MapPin className="w-4 h-4 text-brand-green-light flex-shrink-0 mt-0.5" />
              <div>
                <p>{ADDRESS_SHORT}</p>
                <p>{CITY_STATE_ZIP}</p>
              </div>
            </div>
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="mt-3 inline-flex items-center gap-2 text-white/80 text-sm hover:text-brand-green-light transition-colors"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <a
              href={`mailto:${RESERVE_EMAIL}`}
              className="mt-2 block inline-flex items-center gap-2 text-white/80 text-sm hover:text-brand-green-light transition-colors"
            >
              <Mail size={16} />
              {RESERVE_EMAIL}
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rooms" className="text-white/80 hover:text-brand-green-light transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <a href="/#amenities" className="text-white/80 hover:text-brand-green-light transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="/#eat-drink" className="text-white/80 hover:text-brand-green-light transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="/#meetings" className="text-white/80 hover:text-brand-green-light transition-colors">
                  Meetings
                </a>
              </li>
              <li>
                <Link to="/explore" className="text-white/80 hover:text-brand-green-light transition-colors">
                  Explore the Area
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-brand-green-light transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} LIC Manhattan View Hotel. All rights reserved.</p>
          <p>Check-in 3:30 PM · Check-out 11:00 AM</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
