'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const services = [
  { name: 'Web Development',            href: '/services/web-development' },
  { name: 'Digital Marketing',          href: '/services/digital-marketing' },
  { name: 'Search Engine Optimization', href: '/services/seo' },
  { name: 'Videography',                href: '/services/videography' },
  { name: 'E-Commerce',                 href: '/services/e-commerce' },
]
const courses = [
  { name: 'Web Development',            href: '/courses/web-development' },
  { name: 'Digital Marketing',          href: '/courses/digital-marketing' },
  { name: 'Search Engine Optimization', href: '/courses/seo' },
  { name: 'Videography',                href: '/courses/videography' },
  { name: 'E-Commerce',                 href: '/courses/e-commerce' },
]
const company = [
  { name: 'Home',         href: '/' },
  { name: 'About Us',     href: '/about-us' },
  { name: 'Services',     href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
]
const support = [
  { name: 'Contact Us',     href: '/contact-us' },
  // { name: 'Privacy Policy', href: '/privacy' },
  // { name: 'Terms Of Use',   href: '/terms' },
  { name: 'Payments',       href: '/payments' },
]

const social = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/decasofts',
    cls: 'social-fb',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@decasoft.digital',
    cls: 'social-tt',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dec.asofts/',
    cls: 'social-ig',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/deca-softs',
    cls: 'social-li',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

function FooterLink({ name, href, pathname }: { name: string; href: string; pathname: string }) {
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center transition-colors ${isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
    >
      <span className={`inline-block h-px bg-primary mr-0 transition-all duration-300 ease-out ${isActive ? 'w-3 mr-2' : 'w-0 group-hover:w-3 group-hover:mr-2'}`} />
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">{name}</span>
    </Link>
  )
}

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}>

      <style>{`
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d1d5db;
          overflow: hidden;
          border: 2px solid #374151;
          position: relative;
          z-index: 1;
          transition: border-color 0.4s;
        }
        .social-btn svg {
          position: relative;
          z-index: 3;
          transition: color 0.4s, transform 0.5s;
        }
        .social-btn:hover svg {
          color: #fff;
          transform: rotateY(360deg);
        }
        .social-btn::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          transition: top 0.4s ease;
        }
        .social-btn:hover::before { top: 0; }
        .social-btn:hover { border-color: transparent; }

        .social-fb::before { background: #3b5999; }
        .social-tt::before { background: #010101; }
        .social-ig::before { background: #e1306c; }
        .social-li::before { background: #0077b5; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Deca-Logo-white.png"
                alt="D'ECASOFT Logo"
                width={200}
                height={100}
                loading="lazy"
                quality={80}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Decasoft specializes in custom design and front-end development. We love taking on design challenges that require full-on content strategy, thoughtful design, and ongoing marketing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-xs">
              {services.map((s) => <li key={s.name}><FooterLink name={s.name} href={s.href} pathname={pathname} /></li>)}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Courses</h4>
            <ul className="space-y-2 text-xs">
              {courses.map((c) => <li key={c.name}><FooterLink name={c.name} href={c.href} pathname={pathname} /></li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-xs">
              {company.map((c) => <li key={c.name}><FooterLink name={c.name} href={c.href} pathname={pathname} /></li>)}
            </ul>
          </div>

          {/* Support + Social */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-2 text-xs">
                {support.map((s) => <li key={s.name}><FooterLink name={s.name} href={s.href} pathname={pathname} /></li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-4">Follow Us</h4>
              <div className="flex gap-3 flex-wrap">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`social-btn ${s.cls}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            Copyright &copy; 2026{' '}
            <a href="https://www.decasofts.com" target="_blank" rel="noopener noreferrer" className="hover-underline hover:text-primary transition-colors text-primary">
              Decasofts
            </a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}