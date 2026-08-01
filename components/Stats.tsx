// import { Briefcase, Users, DollarSign, TrendingUp, Trophy } from "lucide-react";

// const stats = [
//   { icon: Briefcase, value: "600+", label: "Projects Delivered" },
//   { icon: Users, value: "450+", label: "Happy Clients" },
//   { icon: DollarSign, value: "15M+", label: "Ad Spend Managed" },
//   { icon: TrendingUp, value: "200%", label: "Average ROAS" },
//   { icon: Trophy, value: "7+", label: "Years Experience" },
// ];

// export default function Stats() {
//   return (
//     <section className="mx-auto -mt-1 max-w-7xl px-5 lg:px-8">
//       <div className="grid grid-cols-2 gap-6 rounded-2xl border border-black/5 bg-white px-8 py-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] sm:grid-cols-3 lg:grid-cols-5">
//         {stats.map(({ icon: Icon, value, label }) => (
//           <div key={label} className="flex items-center gap-3">
//             <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
//               <Icon className="h-5 w-5" />
//             </span>
//             <div>
//               <p className="text-xl font-extrabold text-ink">{value}</p>
//               <p className="text-[11px] font-medium text-ink/50">{label}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, DollarSign, TrendingUp, Trophy } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "600+", label: "Projects Delivered" },
  { icon: Users, value: "450+", label: "Happy Clients" },
  { icon: DollarSign, value: "15M+", label: "Ad Spend Managed" },
  { icon: TrendingUp, value: "200%", label: "Average ROAS" },
  { icon: Trophy, value: "7+", label: "Years Experience" },
];

/** Splits "600+" -> { target: 600, prefix: "", suffix: "+" } etc. */
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw };
  const [, prefix, num, suffix] = match;
  return { prefix, target: parseFloat(num), suffix };
}

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  icon: Icon,
  value,
  label,
  active,
}: {
  icon: typeof Briefcase;
  value: string;
  label: string;
  active: boolean;
}) {
  const { prefix, target, suffix } = parseValue(value);
  const isDecimal = target % 1 !== 0;
  const current = useCountUp(target, active);
  const displayNum = isDecimal ? current.toFixed(1) : Math.round(current).toString();

  return (
    <div className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xl font-extrabold text-ink">
          {prefix}
          {displayNum}
          {suffix}
        </p>
        <p className="text-[11px] font-medium text-ink/50">{label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto -mt-1 max-w-7xl px-5 lg:px-8">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-black/5 bg-white px-8 py-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </section>
  );
}
