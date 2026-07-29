import { Briefcase, Users, DollarSign, TrendingUp, Trophy } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "600+", label: "Projects Delivered" },
  { icon: Users, value: "450+", label: "Happy Clients" },
  { icon: DollarSign, value: "15M+", label: "Ad Spend Managed" },
  { icon: TrendingUp, value: "200%", label: "Average ROAS" },
  { icon: Trophy, value: "7+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="mx-auto -mt-1 max-w-7xl px-5 lg:px-8">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-black/5 bg-white px-8 py-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xl font-extrabold text-ink">{value}</p>
              <p className="text-[11px] font-medium text-ink/50">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
