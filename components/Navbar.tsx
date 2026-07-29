'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'HOME', href: '/' },
  {
    name: 'SERVICES',
    href: '/services',
    subMenu: [
      { name: 'WEB DEVELOPMENT',            href: '/services/web-development' },
      { name: 'DIGITAL MARKETING',          href: '/services/digital-marketing' },
      { name: 'SEARCH ENGINE OPTIMIZATION', href: '/services/seo' },
      { name: 'UI/UX DESIGN',               href: '/services/uiux' },
      { name: 'VIDEOGRAPHY',                href: '/services/videography' },
      { name: 'E-COMMERCE',                 href: '/services/e-commerce' },
    ],
  },
  {
    name: 'CASE STUDIES',
    href: '/case-studies',
    subMenu: [
      { name: 'Social Media Marketing / Meta Ads', href: '/case-studies/social-media-marketing-meta-ads' },
      { name: 'Videography',    href: '/case-studies/videography' },
      { name: 'Graphic Design', href: '/case-studies/graphic-design' },
      { name: 'Logo Design',    href: '/case-studies/logo-design' },
    ],
  },
  {
    name: 'COURSES',
    href: '/courses',
    subMenu: [
      { name: 'WEB DEVELOPMENT',            href: '/courses/web-development' },
      { name: 'DIGITAL MARKETING',          href: '/courses/digital-marketing' },
      { name: 'SEARCH ENGINE OPTIMIZATION', href: '/courses/seo' },
      { name: 'GRAPHIC DESIGN',             href: '/courses/graphic-designing' },
      { name: 'VIDEOGRAPHY',                href: '/courses/videography' },
      { name: 'E-COMMERCE',                 href: '/courses/e-commerce' },
    ],
  },
  { name: 'ABOUT US',   href: '/about-us' },
  { name: 'CONTACT US', href: '/contact-us' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/decasofts',
    icon: (
      <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dec.asofts/',
    icon: (
      <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/deca-softs/',
    icon: (
      <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@decasoft.digital',
    icon: (
      <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null)

  const toggleMobileMenu = useCallback((name: string) =>
    setMobileOpenMenu((prev) => (prev === name ? null : name)), [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const isCoursesPage = pathname.startsWith('/courses')

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Deca_logo.png"
            alt="D'ECASOFT Logo"
            width={200}
            height={100}
            priority
            quality={85}
            className="w-auto h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subMenu ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  {/* ✅ hover-underline sirf <Link> text pe — ChevronDown exclude */}
                  <Link
                    href={link.href}
                    className={`hover-underline hover:text-primary transition-colors ${
                      pathname.startsWith(link.href) && link.href !== '/' ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200 text-gray-500" />
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`hover-underline hover:text-primary transition-colors ${
                    pathname === link.href ? 'text-primary' : ''
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {link.subMenu && (
                <>
                  <div className="absolute top-full left-0 hidden group-hover:block w-full h-3" />
                  <div className="absolute top-[calc(100%+0.75rem)] left-0 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-lg py-2 min-w-[250px] z-50">
                    {link.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`hover-underline block px-4 py-2.5 text-xs font-semibold hover:bg-red-50 hover:text-primary transition-colors border-l-2 ${
                          pathname === sub.href ? 'text-primary bg-red-50 border-primary' : 'border-transparent text-gray-600'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href={isCoursesPage ? '/contact-us' : '/contact-us'}
            className="hidden lg:block bg-primary hover:bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded transition-colors"
          >
            {isCoursesPage ? 'ENROLL NOW' : 'GET A QUOTE'}
          </Link>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
            <span className="block h-0.5 w-5 bg-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99]"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] max-w-[88vw] bg-white z-[100] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-5 py-5 bg-gradient-to-r from-primary to-red-700">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/Deca_logo.png"
              alt="D'ECASOFT Logo"
              width={140}
              height={60}
              loading="lazy"
              className="w-auto h-8 object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="px-4 py-4 flex flex-col gap-1 overflow-y-auto flex-1">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className={`flex justify-between items-center rounded-lg px-3 transition-colors ${mobileOpenMenu === link.name ? 'bg-red-50' : ''}`}>
                <Link
                  href={link.href}
                  className={`flex-1 py-3.5 text-[15px] font-semibold tracking-wide transition-colors ${
                    pathname === link.href ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={() => !link.subMenu && closeMenu()}
                >
                  {link.name}
                </Link>
                {link.subMenu && (
                  <button
                    onClick={() => toggleMobileMenu(link.name)}
                    aria-label={`Toggle ${link.name}`}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-colors"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 text-gray-500 ${mobileOpenMenu === link.name ? 'rotate-180 text-primary' : ''}`}
                    />
                  </button>
                )}
              </div>

              {link.subMenu && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileOpenMenu === link.name ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 pr-1 py-1 flex flex-col gap-0.5 mb-1">
                    {link.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`relative py-2.5 pl-4 pr-3 text-[13px] font-medium rounded-md border-l-2 transition-colors ${
                          pathname === sub.href
                            ? 'text-primary bg-red-50 border-primary font-semibold'
                            : 'border-gray-200 text-gray-500 hover:text-primary hover:bg-red-50 hover:border-primary'
                        }`}
                        onClick={closeMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="px-4 pt-3 pb-2 border-t border-gray-100">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Follow Us
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{ borderRadius: '13px' }}
                className="w-10 h-10 flex items-center justify-center bg-[#bf2227] hover:opacity-85 transition-opacity"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-4 py-4 border-t border-gray-100">
          <Link
            href={isCoursesPage ? '/courses' : '/contact'}
            className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3.5 rounded-lg text-center block shadow-md shadow-red-200 transition-colors"
            onClick={closeMenu}
          >
            {isCoursesPage ? 'ENROLL NOW' : 'GET A QUOTE'}
          </Link>
        </div>
      </div>
    </nav>
  )
}