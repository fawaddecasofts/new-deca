"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  LayoutGrid,
  Megaphone,
  Target,
  Settings2,
  ArrowUpRight,
} from "lucide-react";

const revenueData = [
  { m: "May 1", v: 92 },
  { m: "May 8", v: 105 },
  { m: "May 15", v: 118 },
  { m: "May 22", v: 146.58 },
  { m: "May 30", v: 138 },
];

const leadsData = [
  { m: "1", v: 20 },
  { m: "2", v: 34 },
  { m: "3", v: 28 },
  { m: "4", v: 45 },
  { m: "5", v: 40 },
];

const roasData = [
  { m: "1", v: 5.2 },
  { m: "2", v: 6.1 },
  { m: "3", v: 7.4 },
  { m: "4", v: 6.8 },
  { m: "5", v: 8.7 },
];

const trafficData = [
  { name: "Paid Search", value: 45, color: "#e31e2b" },
  { name: "Paid Social", value: 32, color: "#f4a3a8" },
  { name: "Organic Search", value: 18, color: "#f7c9cc" },
  { name: "Direct", value: 5, color: "#2b2d33" },
];

export default function DashboardMock() {
  return (
    <div className="relative mx-auto flex max-w-2xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_30px_80px_-25px_rgba(227,30,43,0.35)]">
      {/* side rail */}
      <div className="hidden w-14 flex-col items-center gap-6 bg-brand py-6 sm:flex">
        <LayoutGrid className="h-4.5 w-4.5 text-white/90" size={18} />
        <div className="grid h-8 w-8 place-items-center rounded-md bg-white/15">
          <LayoutGrid className="h-4 w-4 text-white" />
        </div>
        <Megaphone className="h-4 w-4 text-white/70" />
        <Target className="h-4 w-4 text-white/70" />
        <Settings2 className="h-4 w-4 text-white/70 mt-auto" />
      </div>

      <div className="flex-1 p-4 sm:p-5">
        {/* top row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3 rounded-xl border border-black/5 p-3 sm:col-span-1">
            <p className="text-[11px] font-medium text-ink/50">
              Total Revenue
            </p>
            <p className="mt-1 text-xl font-extrabold text-ink">$146,580</p>
            <p className="text-[11px] font-semibold text-emerald-500">
              +25.6% vs last 30 days
            </p>
            <div className="mt-2 h-14 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#e31e2b"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-[9px] text-ink/40">
              <span>May 1</span>
              <span>May 8</span>
              <span>May 15</span>
              <span>May 22</span>
              <span>May 30</span>
            </div>
          </div>

          <div className="rounded-xl border border-black/5 p-3">
            <p className="text-[11px] font-medium text-ink/50">
              Total Leads
            </p>
            <p className="mt-1 text-lg font-extrabold text-ink">2,450</p>
            <p className="text-[10px] font-semibold text-emerald-500">
              +28.6%
            </p>
            <div className="mt-2 h-9 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={leadsData}>
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#e31e2b"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-xl border border-black/5 p-3">
            <p className="text-[11px] font-medium text-ink/50">ROAS</p>
            <p className="mt-1 text-lg font-extrabold text-ink">8.7x</p>
            <p className="text-[10px] font-semibold text-emerald-500">
              +41.3%
            </p>
            <div className="mt-2 h-9 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={roasData}>
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#e31e2b"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-5 rounded-xl border border-black/5 p-3 sm:col-span-3">
            <p className="mb-2 text-[11px] font-semibold text-ink/60">
              Campaign Performance
            </p>
            <div className="space-y-2.5">
              <div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[8px]">
                      G
                    </span>
                    Google Ads
                  </span>
                  <span className="font-bold text-ink">$45,231</span>
                  <span className="flex items-center gap-0.5 font-semibold text-emerald-500">
                    <ArrowUpRight className="h-3 w-3" />
                    +32.5%
                  </span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-black/5">
                  <div className="h-1.5 w-[70%] rounded-full bg-brand" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[8px]">
                      M
                    </span>
                    Meta Ads
                  </span>
                  <span className="font-bold text-ink">$88,542</span>
                  <span className="flex items-center gap-0.5 font-semibold text-emerald-500">
                    <ArrowUpRight className="h-3 w-3" />
                    +28.1%
                  </span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-black/5">
                  <div className="h-1.5 w-[90%] rounded-full bg-indigo-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 rounded-xl border border-black/5 p-3 sm:col-span-2">
            <p className="mb-1 text-[11px] font-semibold text-ink/60">
              Traffic Sources
            </p>
            <div className="flex items-center gap-2">
              <div className="h-16 w-16 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficData}
                      dataKey="value"
                      innerRadius={18}
                      outerRadius={30}
                      startAngle={90}
                      endAngle={-270}
                    >
                      {trafficData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="space-y-0.5 text-[9.5px] text-ink/60">
                {trafficData.map((t) => (
                  <li key={t.name} className="flex items-center gap-1">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: t.color }}
                    />
                    {t.name}
                    <span className="ml-auto font-semibold text-ink">
                      {t.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

