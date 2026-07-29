import { Infinity as InfinityIcon, Search, Globe2, ArrowRight } from "lucide-react";

const cases = [
  {
    badge: InfinityIcon,
    tag: "META ADS",
    name: "Glow Beauty Co.",
    stats: [
      { value: "8.4x", label: "ROAS" },
      { value: "+520%", label: "Sales Increase" },
      { value: "$120K", label: "Revenue Generated" },
    ],
    chartColor: "#818cf8",
  },
  {
    badge: () => (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.6c2.1-2 3.2-4.8 3.2-8z"/>
        <path fill="#34A853" d="M12 23c3 0 5.4-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.6H2.1v2.8C4 20.5 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.8 14.1c-.2-.7-.4-1.4-.4-2.1s.1-1.4.4-2.1V7.1H2.1C1.4 8.6 1 10.3 1 12s.4 3.4 1.1 4.9l3.7-2.8z"/>
        <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2C17.4 2 15 1 12 1 7.7 1 4 3.5 2.1 7.1l3.7 2.8c.9-2.7 3.3-4.5 6.2-4.5z"/>
      </svg>
    ),
    tag: "GOOGLE ADS",
    name: "UrbanFit Apparel",
    stats: [
      { value: "2100", label: "Leads Generated" },
      { value: "$3.21", label: "Cost Per Lead" },
      { value: "+340%", label: "Conversion Increase" },
    ],
    chartColor: "#60a5fa",
  },
  {
    badge: Search,
    tag: "GEO CAMPAIGN",
    name: "Techno Solutions",
    stats: [
      { value: "#1", label: "Ranking" },
      { value: "+265%", label: "Organic Traffic" },
      { value: "120K", label: "Monthly Visitors" },
    ],
    chartColor: "#e31e2b",
  },
  {
    badge: Globe2,
    tag: "WEB DEVELOPMENT",
    name: "Bistro Cafe",
    stats: [
      { value: "+210%", label: "Online Orders" },
      { value: "+180%", label: "Website Traffic" },
      { value: "95%", label: "Performance Score" },
    ],
    chartColor: "#f59e0b",
    image: true,
  },
];

function MiniSparkline({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 32" className="h-12 w-full" preserveAspectRatio="none">
      <path
        d="M0 26 L15 22 L30 24 L45 14 L60 16 L75 6 L100 2"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-bold tracking-[0.2em] text-brand">
          CASE STUDIES
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          Real Results. <span className="text-brand">Real Impact.</span>
        </h2>
        <p className="mt-3 text-[15px] text-ink/55">
          See how we help our clients achieve measurable growth.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((c) => (
          <div
            key={c.name}
            className="overflow-hidden rounded-xl border border-black/5 bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.25)]"
          >
            {c.image ? (
              <div className="relative h-28 w-full bg-gradient-to-br from-amber-700 to-ink">
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white shadow">
                  <c.badge className="h-4 w-4 text-ink" />
                </span>
              </div>
            ) : (
              <div className="relative px-5 pt-5">
                <span className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-white shadow ring-1 ring-black/5">
                  {typeof c.badge === "function" ? <c.badge /> : null}
                </span>
                <MiniSparkline color={c.chartColor} />
              </div>
            )}

            <div className="p-5 pt-3">
              <p className="text-[10px] font-bold tracking-wider text-ink/40">
                {c.tag}
              </p>
              <h3 className="mt-1 text-[15px] font-bold text-ink">
                {c.name}
              </h3>

              <div className="mt-4 grid grid-cols-3 gap-1">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-sm font-extrabold text-ink">
                      {s.value}
                    </p>
                    <p className="text-[9px] leading-tight text-ink/45">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-[12px] font-bold text-brand"
              >
                VIEW CASE STUDY
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="inline-block rounded-md bg-brand px-7 py-3.5 text-[13px] font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
        >
          VIEW ALL CASE STUDIES
        </a>
      </div>
    </section>
  );
}
