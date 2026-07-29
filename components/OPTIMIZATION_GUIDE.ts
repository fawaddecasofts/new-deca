// ============================================================
// FILE 1: next.config.js — paste this in your project root
// ============================================================
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Enable WebP/AVIF conversion for all Next.js Images
  images: {
    formats: ['image/avif', 'image/webp'],
    // ✅ Add Unsplash to allowed domains (you're already using it)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // ✅ Defines breakpoints — smaller = less data on mobile
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
  },

  // ✅ Compress all responses (HTML/JS/CSS)
  compress: true,

  // ✅ Enables React strict mode — better hydration warnings
  reactStrictMode: true,
}

module.exports = nextConfig


// ============================================================
// FILE 2: app/layout.tsx (or pages/_document.tsx)
// Add these to your <head> — CRITICAL for mobile score
// ============================================================

/*
  Inside your RootLayout <head>:

  1. ✅ PRELOAD hero background image (biggest LCP fix!)
     <link rel="preload" as="image" href="/hero-bg.jpg" fetchpriority="high" />

  2. ✅ Load Font Awesome ASYNC — stops it from blocking render
     Replace your current FA script with:
     <link
       rel="preload"
       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
       as="style"
       onLoad="this.onload=null;this.rel='stylesheet'"
     />
     <noscript>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
     </noscript>

  3. ✅ If using Google Fonts in CSS/link tag — switch to next/font:
     // In layout.tsx:
     import { Inter } from 'next/font/google'
     const inter = Inter({ subsets: ['latin'], display: 'swap' })
     // Then: <html className={inter.className}>

  4. ✅ Add viewport meta (Next.js adds this automatically, but verify):
     <meta name="viewport" content="width=device-width, initial-scale=1" />

  5. ✅ DNS prefetch for external resources:
     <link rel="dns-prefetch" href="//images.unsplash.com" />
     <link rel="dns-prefetch" href="//wa.me" />
     <link rel="preconnect" href="https://images.unsplash.com" />
*/


// ============================================================
// FILE 3: Summary of ALL changes made
// ============================================================

/*
COMPONENT ISSUES FOUND & FIXED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 BrandsMarquee.tsx — BIGGEST ISSUE (was killing mobile score)
   Problem:  84 images loading simultaneously (42 × 2 copies)
   Fix:      Reduced to 40 images (20 × 2), added loading="lazy",
             added will-change: transform for GPU acceleration,
             added content-visibility: auto

🔴 Stats.tsx — HEAVY JS BUNDLE
   Problem:  framer-motion imported (~30KB gzipped) just for counter animation
   Fix:      Replaced with lightweight IntersectionObserver + setInterval
             Saves ~30KB JS = faster TTI on mobile

🟡 AboutUs.tsx — MISSING lazy loading + wrong image sizes
   Problem:  Images had no loading="lazy" or sizes prop
             Mobile was downloading desktop-sized images
   Fix:      Added loading="lazy", sizes prop, q=75 (saves 20% size)

🟡 Projects.tsx — MISSING lazy loading + sizes
   Problem:  Same as AboutUs — oversized images on mobile
   Fix:      Added loading="lazy", sizes="(max-width: 768px) 90vw, 33vw"

🟡 Hero.tsx — needs preload in layout <head>
   Problem:  Hero background (CSS background-image) not preloaded
             This is the LCP element — must load first!
   Fix:      Add <link rel="preload" as="image" href="/hero-bg.jpg"> in layout

🟡 Font Awesome — render blocking
   Problem:  If FA loaded via <link> in <head>, it blocks rendering
   Fix:      Load async (see FILE 2 above)

✅ Navbar.tsx    — Good (Image has priority, sticky nav is fine)
✅ Footer.tsx    — Good (logo image fine, links good)
✅ Testimonials  — Good (no images, JS is minimal)
✅ WhatsappFloat — Good (SVG inline = no external request)
✅ CTABanner     — Good (no images, pure CSS)
✅ TechStack     — Good (no images, icons via FA)
✅ Services      — Good (no images)

EXPECTED SCORE IMPROVEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Before: Mobile 56
After:  Mobile 85-92 (estimated)

Main gains:
  +15 pts — BrandsMarquee fix (image count reduction)
  +8  pts — Stats.tsx framer-motion removal (JS reduction)
  +7  pts — lazy loading + sizes on AboutUs/Projects
  +5  pts — Hero preload + FA async loading
*/
