import { Search, Puzzle, Rocket, SlidersHorizontal, Users } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 01",
    title: "Discover",
    desc: "We analyze your business, audience and competitors.",
  },
  {
    icon: Puzzle,
    step: "Step 02",
    title: "Strategy",
    desc: "We create a custom strategy based on data and insights.",
  },
  {
    icon: Rocket,
    step: "Step 03",
    title: "Campaign Launch",
    desc: "We launch high-performing campaigns that convert.",
  },
  {
    icon: SlidersHorizontal,
    step: "Step 04",
    title: "Optimize",
    desc: "We continuously test and optimize for better results.",
  },
  {
    icon: Users,
    step: "Step 05",
    title: "Scale",
    desc: "We scale what works and maximize your ROI.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(227,30,43,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 text-center lg:px-8">
        <span className="text-[11px] font-bold tracking-[0.2em] text-brand">
          OUR PROCESS
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          How We <span className="text-brand">Drive Your Success</span>
        </h2>

        <div className="relative mt-16 grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          <div className="absolute left-[10%] right-[10%] top-8 hidden border-t border-dashed border-white/15 lg:block" />
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={title} className="relative flex flex-col items-center">
              <span className="relative grid h-16 w-16 place-items-center rounded-full border border-brand/40 bg-ink text-brand">
                <span className="absolute inset-0 rounded-full border border-brand/20 [mask-image:linear-gradient(black,transparent)]" />
                <Icon className="h-6 w-6" />
              </span>
              <span className="mt-4 text-[10px] font-bold tracking-widest text-brand/80">
                {step}
              </span>
              <h3 className="mt-1 text-[15px] font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-[10rem] text-[12px] leading-relaxed text-white/50">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

