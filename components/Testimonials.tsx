"use client";

import { useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Decasofts helped us increase our leads by 320% in just 60 days. Their strategy and execution are top notch!",
    name: "Ahmed Raza",
    role: "CEO, UrbanFit Apparel",
  },
  {
    quote:
      "Their Google Ads campaigns are ROI focused and data-driven. We highly recommend their services.",
    name: "Sarah Khan",
    role: "Marketing Manager, Glow Beauty Co.",
  },
  {
    quote:
      "Professional team, transparent reporting and amazing results. Decasofts is our growth partner now.",
    name: "Usman Ali",
    role: "Founder, Techno Solutions",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-bold tracking-[0.2em] text-brand">
          CLIENT FEEDBACK
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          What Our Clients Say About Us
        </h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-black/5 bg-white p-6 shadow-[0_10px_35px_-25px_rgba(0,0,0,0.3)]"
          >
            <Quote className="h-6 w-6 fill-brand text-brand" />
            <p className="mt-4 text-[13.5px] leading-relaxed text-ink/65">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-bold text-white">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div>
                <p className="text-[13px] font-bold text-ink">{t.name}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[11px] text-ink/45">{t.role}</p>
                </div>
                <div className="mt-0.5 flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-brand" : "w-2 bg-black/15"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
