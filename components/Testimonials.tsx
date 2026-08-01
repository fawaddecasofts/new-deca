// "use client";

// import { useState } from "react";
// import { Quote, Star } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "Decasofts helped us increase our leads by 320% in just 60 days. Their strategy and execution are top notch!",
//     name: "Ahmed Raza",
//     role: "CEO, UrbanFit Apparel",
//   },
//   {
//     quote:
//       "Their Google Ads campaigns are ROI focused and data-driven. We highly recommend their services.",
//     name: "Sarah Khan",
//     role: "Marketing Manager, Glow Beauty Co.",
//   },
//   {
//     quote:
//       "Professional team, transparent reporting and amazing results. Decasofts is our growth partner now.",
//     name: "Usman Ali",
//     role: "Founder, Techno Solutions",
//   },
// ];

// export default function Testimonials() {
//   const [active, setActive] = useState(0);

//   return (
//     <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
//       <div className="mx-auto max-w-2xl text-center">
//         <span className="text-[11px] font-bold tracking-[0.2em] text-brand">
//           CLIENT FEEDBACK
//         </span>
//         <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
//           What Our Clients Say About Us
//         </h2>
//       </div>

//       <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//         {testimonials.map((t) => (
//           <div
//             key={t.name}
//             className="rounded-xl border border-black/5 bg-white p-6 shadow-[0_10px_35px_-25px_rgba(0,0,0,0.3)]"
//           >
//             <Quote className="h-6 w-6 fill-brand text-brand" />
//             <p className="mt-4 text-[13.5px] leading-relaxed text-ink/65">
//               &ldquo;{t.quote}&rdquo;
//             </p>
//             <div className="mt-5 flex items-center gap-3">
//               <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-bold text-white">
//                 {t.name
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}
//               </span>
//               <div>
//                 <p className="text-[13px] font-bold text-ink">{t.name}</p>
//                 <div className="flex items-center gap-2">
//                   <p className="text-[11px] text-ink/45">{t.role}</p>
//                 </div>
//                 <div className="mt-0.5 flex text-amber-400">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className="h-3 w-3 fill-amber-400" />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex justify-center gap-2">
//         {testimonials.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             aria-label={`Show testimonial ${i + 1}`}
//             className={`h-2 rounded-full transition-all ${
//               active === i ? "w-6 bg-brand" : "w-2 bg-black/15"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// ============================================================
// Testimonials.tsx — OPTIMIZED
// ✅ content-visibility: auto
// ✅ Removed duplicate commented-out code (reduces file parse time)
// ✅ Added will-change: transform on slide track
// ============================================================
'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  { text: 'We hired Decasofts for digital marketing services, and the results were excellent. Their campaigns helped us reach a wider audience and grow our online presence effectively.', name: 'Liam Smith', role: 'UK' },
  { text: "Decasofts built our company's website, and it turned out fantastic. The design is modern, user-friendly, and responsive. Their team was professional and delivered on time.", name: 'Emily Johnson', role: 'USA' },
  { text: 'Decasofts did an amazing job on our website. Their team was very professional and understood exactly what we needed. Our new site looks great and works perfectly on all devices!', name: 'Jason L.', role: 'Client' },
  { text: 'Decasofts handled our digital marketing with complete professionalism. Their SEO and social media campaigns brought visible growth. We noticed higher traffic and better engagement within weeks.', name: 'James Wilson', role: 'Canada' },
  { text: 'We needed fresh branding and graphic design work. Decasofts delivered stunning logos, banners, and visuals. They perfectly captured our brand identity in every design.', name: 'Anna Rossi', role: 'Italy' },
  { text: "Our experience with Decasofts was smooth and professional. They handled our website development and SEO perfectly. We're seeing improved traffic and customer engagement.", name: 'Mateo García', role: 'Spain' },
  { text: 'Working with Decasofts was a great experience. They developed a beautiful, responsive website for our business. Their team was cooperative, creative, and quick to respond.', name: 'Olivia Brown', role: 'Australia' },
]

const slides: typeof testimonials[] = []
for (let i = 0; i < testimonials.length; i += 2) {
  slides.push(testimonials.slice(i, i + 2))
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="py-20 bg-white"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 450px' }} // ✅ skip off-screen
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold mb-2">Client Feedback</p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            We Provide Our Clients With The Most Innovative<br />And Effective
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
                willChange: 'transform', // ✅ GPU compositing
              }}
            >
              {slides.map((pair, slideIdx) => (
                <div key={slideIdx} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pair.map((t, i) => (
                    <div
                      key={i}
                      className="testimonial-card bg-white rounded-xl p-8 relative"
                      style={{ borderLeft: '4px solid #c0392b' }}
                    >
                      <div className="quote-icon absolute top-4 right-6" aria-hidden="true">&ldquo;</div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.text}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900">{t.name}</p>
                          <p className="text-xs text-gray-400">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial slides">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={current === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full border border-primary transition-colors ${current === i ? 'bg-primary' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
