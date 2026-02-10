import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { BOOKING_URL, LOGO_URL } from '../constants/booking'

const navLinks = [
  { label: 'Rooms & Suites', href: '/rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Dining', href: '/#eat-drink' },
  { label: 'Meetings', href: '/#meetings' },
  { label: 'Explore the Area', href: '/explore' },
  { label: 'Gallery', href: '/gallery' },
]

const Navbar = () => {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onEscape = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const isHome = location.pathname === '/'

  const useLightNav = scrolled || !isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useLightNav ? 'bg-white/98 shadow-soft backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
              <img
                src={LOGO_URL}
                alt="LIC Manhattan View Hotel"
                className="h-9 md:h-10 w-auto object-contain"
              />
              <span
                className={`font-display text-xl md:text-2xl font-semibold tracking-tight ${
                  useLightNav ? 'text-brand-charcoal' : 'text-white'
                }`}
              >
                LIC Manhattan View Hotel
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:inline-flex items-center px-5 py-2.5 font-semibold text-sm rounded-none transition-colors ${
                  useLightNav
                    ? 'bg-brand-charcoal text-white hover:bg-brand-green'
                    : 'bg-white text-brand-charcoal hover:bg-brand-cream'
                }`}
              >
                Book Now
              </a>
              <button
                type="button"
                className={`p-2 rounded transition-colors ${
                  useLightNav
                    ? 'text-brand-charcoal hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="main-menu-overlay"
              >
                {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="main-menu-overlay"
        className={`fixed inset-0 z-[100] bg-white transition-all duration-300 ease-out ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="min-h-full flex flex-col">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8 shrink-0">
            <Link
              to="/"
              className="flex items-center gap-3 font-display text-xl md:text-2xl font-semibold text-brand-charcoal tracking-tight"
              onClick={closeMenu}
            >
              <img
                src={LOGO_URL}
                alt="LIC Manhattan View Hotel"
                className="h-9 md:h-10 w-auto object-contain"
              />
              LIC Manhattan View Hotel
            </Link>
            <button
              type="button"
              className="p-2 text-brand-charcoal hover:bg-gray-100 rounded transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8" aria-label="Menu links">
            <ul className="w-full max-w-md space-y-1 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                    <Link
                      to={link.href}
                      className="block py-4 text-lg md:text-xl font-medium text-brand-charcoal hover:text-brand-green transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="block py-4 text-lg md:text-xl font-medium text-brand-charcoal hover:text-brand-green transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6 md:p-8 border-t border-gray-100">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto py-4 text-center bg-brand-charcoal text-white font-semibold text-lg rounded-none hover:bg-brand-green transition-colors"
              onClick={closeMenu}
            >
              Check Availability
            </a>
            <p className="text-center text-gray-500 text-sm mt-3">
              For lowest fares, book directly on our hotel website.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
