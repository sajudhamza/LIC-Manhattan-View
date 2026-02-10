import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronLeft, MapPin } from 'lucide-react'
import { getExploreBySlug } from '../data/explore'

const ExploreCategoryPage = () => {
  const { slug } = useParams()
  const category = getExploreBySlug(slug)

  if (!category) {
    return <Navigate to="/explore" replace />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-brand-cream border-b border-brand-cream-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/explore"
            className="inline-flex items-center gap-1 text-brand-green font-medium hover:text-brand-green-light transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Explore the Area
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-brand-charcoal mb-2">
          {category.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{category.subtitle}</p>
        <p className="text-gray-600 leading-relaxed mb-12">{category.intro}</p>

        <div className="space-y-10">
          {category.items.map((item, i) => (
            <article key={i} className="border-b border-brand-cream-dark/50 pb-10 last:border-0 last:pb-0">
              <h2 className="font-display text-xl font-semibold text-brand-charcoal mb-2">
                {item.name}
              </h2>
              {item.detail && (
                <p className="flex items-center gap-2 text-brand-green text-sm font-medium mb-2">
                  <MapPin size={16} />
                  {item.detail}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-brand-cream-dark/50">
          <Link
            to="/explore"
            className="inline-flex items-center gap-1 text-brand-green font-semibold hover:text-brand-green-light transition-colors"
          >
            <ChevronLeft size={18} />
            View all Explore categories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ExploreCategoryPage
