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

const ExploreTheArea = () => {
  return (
    <section id="explore" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
            Explore the Area
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
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
                className="flex gap-5 p-7 rounded-none bg-brand-cream border border-transparent shadow-soft hover:shadow-soft-lg hover:border-brand-green/20 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-none bg-white flex items-center justify-center group-hover:bg-brand-green/10 transition-colors shadow-sm">
                  <Icon className="w-6 h-6 text-brand-green" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-brand-charcoal mb-1 group-hover:text-brand-green transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{category.intro}</p>
                  <span className="inline-block mt-2 text-brand-green font-medium text-sm">
                    Explore →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/explore"
            className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-light transition-colors"
          >
            View all Explore categories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ExploreTheArea
