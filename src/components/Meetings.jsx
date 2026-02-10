import React from 'react'
import { MapPin, Mail } from 'lucide-react'
import { RESERVE_EMAIL, ADDRESS_SHORT, CITY_STATE_ZIP } from '../constants/booking'

const Meetings = () => {
  return (
    <section id="meetings" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
              Meetings & Gatherings
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Host your next business meeting or private event at LIC Manhattan View Hotel. 
              We are conveniently located in Long Island City near Manhattan, corporate offices, 
              and transit. Contact us for meeting space availability and customized arrangements.
            </p>
            <a
              href={`mailto:${RESERVE_EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-charcoal text-white font-semibold rounded-none hover:bg-brand-green transition-colors"
            >
              <Mail size={20} />
              Inquire About Events
            </a>
          </div>
          <div className="rounded-none overflow-hidden bg-white shadow-soft p-8 border border-brand-cream-dark/30">
            <h3 className="font-display text-xl font-semibold text-brand-charcoal mb-4">
              Location
            </h3>
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-brand-charcoal">LIC Manhattan View Hotel</p>
                <p>{ADDRESS_SHORT}</p>
                <p>{CITY_STATE_ZIP}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Easy access to Manhattan, subways, and major highways. 
              For lowest fares, book directly on our hotel website.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meetings
