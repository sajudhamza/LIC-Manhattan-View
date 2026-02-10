import React from 'react'
import {
  Wifi,
  Coffee,
  Car,
  Dumbbell,
  MapPin,
  ConciergeBell,
  Shield,
  Accessibility,
  Leaf,
} from 'lucide-react'

const amenities = [
  { icon: Wifi, label: 'Free Wi-Fi', description: 'Stay connected with complimentary high-speed internet throughout the hotel' },
  { icon: Coffee, label: 'Coffee & Tea Station', description: 'Start your day right with a fresh cup' },
  { icon: Car, label: 'On-Site Parking', description: 'Convenient parking options for a hassle-free stay' },
  { icon: Dumbbell, label: 'Fitness Center', description: '24/7 gym access' },
  { icon: MapPin, label: 'Central Location', description: '15 minutes from the airport, two subway stops from Manhattan, walking distance to multiple subway stations' },
  { icon: ConciergeBell, label: '24-Hour Front Desk', description: 'Always here to help' },
  { icon: Shield, label: 'In-Room Safe', description: 'Secure storage for valuables' },
  { icon: Accessibility, label: 'Wheelchair Accessible', description: 'Accessible rooms and facilities' },
  { icon: Leaf, label: 'Eco-Friendly', description: 'Refillable soaps, bamboo mugs, energy-efficient lighting' },
]

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Amenities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need for a comfortable stay in Long Island City. Central location—15 minutes from the airport, two subway stops from Manhattan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex gap-5 p-7 rounded-none bg-white border border-transparent shadow-soft hover:shadow-soft-lg hover:border-brand-green/20 transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-none bg-brand-cream-warm flex items-center justify-center">
                <Icon className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-brand-charcoal mb-1">
                  {label}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-8 md:p-10 rounded-none bg-white border border-brand-cream-dark/50 shadow-soft">
          <h3 className="font-display text-xl font-semibold text-brand-charcoal mb-2">
            A Greener Way to Stay in the City
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At LIC Manhattan View Eco-Hotel, we believe hospitality can go hand in hand with sustainability. 
            From refillable soaps and bamboo mugs to energy-efficient lighting and 90% reused furniture, 
            every detail of your stay reflects our commitment to reducing waste and preserving our planet, 
            without compromising comfort or style.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Amenities
