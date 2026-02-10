import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Wine, Bus, Film, Activity, Compass } from 'lucide-react'
import { exploreCategories } from '../data/explore'

const iconMap = {
  MapPin,
  Wine,
  Bus,
  Film,
  Activity,
  Compass,
}

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-14 md:mb-20">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Explore the Area
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Long Island City is just two subway stops from Manhattan. Discover attractions, bars,
            transportation, entertainment, activities, and tours nearby.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreCategories.map((category) => {
            const Icon = iconMap[category.icon] || MapPin
            return (
              <Link
                key={category.slug}
                to={`/explore/${category.slug}`}
                className="flex gap-5 p-7 rounded-none bg-white shadow-soft border border-transparent hover:border-brand-green/20 hover:shadow-soft-lg transition-all group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-none bg-brand-cream flex items-center justify-center group-hover:bg-brand-green/10 transition-colors">
                  <Icon className="w-7 h-7 text-brand-green" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-xl font-semibold text-brand-charcoal group-hover:text-brand-green transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{category.intro}</p>
                  <span className="inline-block mt-2 text-brand-green font-medium text-sm">
                    Explore →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
