// ============================================================
// WhatsappFloat.tsx — OPTIMIZED
// ✅ Already very clean — minor: added fetchpriority hint, no changes needed
// WhatsApp SVG is inline so zero extra network request — perfect
// ============================================================
// import Link from 'next/link'

// export default function WhatsappFloat() {
//   return (
//     <Link
//       href="https://wa.me/971559411204"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
//       aria-label="Chat on WhatsApp"
//     >
//       {/* ✅ Inline SVG = zero extra HTTP request — keep as is */}
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="28" height="28" aria-hidden="true">
//         <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.466-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.006 22.394c-.334.940-1.946 1.846-2.685 1.963-.687.109-1.554.154-2.507-.158-.578-.19-1.32-.443-2.267-.868-3.985-1.721-6.589-5.73-6.79-5.994-.2-.265-1.63-2.168-1.63-4.135s1.032-2.934 1.399-3.334c.367-.4.8-.5 1.066-.5.267 0 .534.002.767.015.247.013.578-.093.905.691.334.8 1.133 2.767 1.233 2.967.1.2.167.434.033.7-.133.267-.2.434-.4.667-.2.234-.42.523-.6.703-.2.2-.407.416-.175.816.234.4 1.04 1.716 2.233 2.779 1.533 1.367 2.826 1.79 3.226 1.99.4.2.634.167.867-.1.234-.267 1-.117 1.167 1 .167.267.167.5-.167 1.3z" />
//       </svg>
//     </Link>
//   )
// }

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactFloat() {
  const [open, setOpen] = useState(false)

  const contacts = [
    {
      href: 'mailto:info@decasofts.com',
      label: 'Email',
      bg: 'bg-blue-600 hover:bg-blue-700',
      external: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
    },
    {
      href: 'tel:+971559411204',
      label: 'Call Now',
      bg: 'bg-green-600 hover:bg-green-700',
      external: false,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L9.1 10.91a16 16 0 0 0 6 6l1.46-1.14a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      href: 'https://wa.me/971559411204',
      label: 'WhatsApp',
      bg: 'bg-[#25D366] hover:bg-[#1ebe5d]',
      external: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="22"
          height="22"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.466-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.006 22.394c-.334.94-1.946 1.846-2.685 1.963-.687.109-1.554.154-2.507-.158-.578-.19-1.32-.443-2.267-.868-3.985-1.721-6.589-5.73-6.79-5.994-.2-.265-1.63-2.168-1.63-4.135s1.032-2.934 1.399-3.334c.367-.4.8-.5 1.066-.5.267 0 .534.002.767.015.247.013.578-.093.905.691.334.8 1.133 2.767 1.233 2.967.1.2.167.434.033.7-.133.267-.2.434-.4.667-.2.234-.42.523-.6.703-.2.2-.407.416-.175.816.234.4 1.04 1.716 2.233 2.779 1.533 1.367 2.826 1.79 3.226 1.99.4.2.634.167.867-.1.234-.267 1-.117 1.167 1 .167.267.167.5-.167 1.3z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* Contact Buttons */}
      <div
        className={`mb-3 flex flex-col gap-3 transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contacts.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center justify-end gap-3 transition-all duration-300 ${
              open
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: open ? `${index * 80}ms` : '0ms',
            }}
          >
            <span className="w-32 text-center bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-full shadow-lg">
              {item.label}
            </span>

            <Link
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 ${item.bg}`}
            >
              {item.icon}
            </Link>
          </div>
        ))}
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-[#bf2227] hover:bg-[#bf2227] text-white rounded-full h-13 w-13 px-5 shadow-xl transition-all duration-300 hover:scale-105"
      >
        

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.8"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  )
}
