import { ArrowUpRight } from "lucide-react";

const bars = [
  { day: "Mon", value: 42 }, { day: "Tue", value: 65 }, { day: "Wed", value: 51 },
  { day: "Thu", value: 78 }, { day: "Fri", value: 57 }, { day: "Sat", value: 88 },
  { day: "Sun", value: 70 },
];

export function RevenueChart() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h3 className="font-[Manrope] text-base font-extrabold text-slate-900 dark:text-white">Revenue overview</h3><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Weekly performance · demo data</p></div>
        <button type="button" onClick={() => window.alert("Weekly revenue report (demo).")} className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-300">View report <ArrowUpRight size={16} /></button>
      </div>
      <div className="mt-6 flex h-52 items-end justify-around gap-3 border-b border-slate-100 pb-0 dark:border-slate-800">
        {bars.map((bar) => (
          <div key={bar.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <div className="flex h-full w-full items-end justify-center">
              <div className="bar w-full max-w-10" style={{ height: `${bar.value}%` }} title={`${bar.day}: ${bar.value} units`} />
            </div>
            <span className="pb-2 text-xs text-slate-400">{bar.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrafficChart() {
  const sources = [
    { label: "Direct", amount: "38%", width: "38%", color: "bg-indigo-500" },
    { label: "Social media", amount: "27%", width: "27%", color: "bg-violet-500" },
    { label: "Search engines", amount: "22%", width: "22%", color: "bg-sky-500" },
    { label: "Referrals", amount: "13%", width: "13%", color: "bg-amber-500" },
  ];
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-[Manrope] text-base font-extrabold text-slate-900 dark:text-white">Traffic sources</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Where visitors come from</p>
      <div className="mt-7 flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        {sources.map((source) => <div key={source.label} className={source.color} style={{ width: source.width }} />)}
      </div>
      <div className="mt-6 space-y-4">
        {sources.map((source) => (
          <div key={source.label} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300"><span className={`h-2.5 w-2.5 rounded-full ${source.color}`} />{source.label}</span>
            <span className="font-bold text-slate-800 dark:text-slate-100">{source.amount}</span>
          </div>
        ))}
      </div>
    </section>
  );
}