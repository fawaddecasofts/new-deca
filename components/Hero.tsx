import { Phone, Play, Star } from "lucide-react";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-white pb-16 pt-14 sm:pb-24 sm:pt-20"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-8 lg:px-8">
        {/* Left column */}
        <div>
          <span className="inline-block rounded-md bg-brand px-3 py-1.5 text-[11px] font-bold tracking-wide text-white">
            RESULTS DRIVEN DIGITAL MARKETING AGENCY
          </span>

          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            We Drive Traffic.
            <br />
            You Get
            <br />
            <span className="relative text-brand">
              Real Growth.
              <svg
                className="absolute -bottom-2 left-0 w-40"
                viewBox="0 0 160 10"
                fill="none"
              >
                <path
                  d="M2 7C40 2 100 2 158 7"
                  stroke="#e31e2b"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
            Performance marketing solutions that help your business rank
            higher, get more leads and increase revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://calendly.com/decasofts-appointment/meeting"
              className="flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              GET A FREE STRATEGY CALL
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="http://localhost:3000/case-studies"
              className="flex items-center gap-2 rounded-md border border-black/10 px-6 py-3.5 text-[13px] font-bold text-ink transition hover:border-brand hover:text-brand"
            >
              VIEW CASE STUDIES
              <Play className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C", "D"].map((letter, i) => (
                <span
                  key={letter}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-ink text-[11px] font-bold text-white"
                  style={{ zIndex: 4 - i }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div>
              <p className="text-[13px] font-bold text-ink">
                600+ Happy Clients
              </p>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-ink/50">
                  4.9 (200+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: dashboard mock */}
        <DashboardMock />
      </div>
    </section>
  );
}

