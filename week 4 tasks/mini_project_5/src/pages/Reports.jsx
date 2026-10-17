import { ArrowDownToLine, CalendarDays, FileBarChart, TrendingUp, Users, Wallet } from "lucide-react";
import Card from "../components/Card";
import { RevenueChart, TrafficChart } from "../components/ChartPanel";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-[Manrope] text-2xl font-extrabold text-slate-900 dark:text-white">Reports overview</h2><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Understand trends across your workspace.</p></div><button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700"><ArrowDownToLine size={17} /> Export report</button></div>
      <div className="flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 text-sm text-indigo-800 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-200"><CalendarDays size={18} /><span>Reporting period: <strong>Last 7 days</strong> · illustrative sample data</span></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card title="Gross revenue" value="$48,294" change="+12.8%" icon={Wallet} tone="indigo" />
        <Card title="New customers" value="1,482" change="+8.4%" icon={Users} tone="emerald" />
        <Card title="Report downloads" value="864" change="+5.1%" icon={FileBarChart} tone="amber" />
      </div>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_1fr]"><RevenueChart /><TrafficChart /></div>
      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"><TrendingUp size={20} /></span><div><h3 className="font-bold text-slate-900 dark:text-white">Performance summary</h3><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Your sample metrics are trending positively this week.</p></div></div></div>
    </div>
  );
}