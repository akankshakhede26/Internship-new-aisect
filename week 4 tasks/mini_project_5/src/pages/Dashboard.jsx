import { Activity, ArrowDownRight, ArrowUpRight, CreditCard, ShoppingBag, Users, Wallet } from "lucide-react";
import Card from "../components/Card";
import { RevenueChart, TrafficChart } from "../components/ChartPanel";

const stats = [
  { title: "Total revenue", value: "48,294", change: "+12.8%", icon: Wallet, tone: "indigo", note: "from last month" },
  { title: "Total users", value: "12,840", change: "+8.2%", icon: Users, tone: "emerald", note: "from last month" },
  { title: "Total orders", value: "1,284", change: "+4.6%", icon: ShoppingBag, tone: "amber", note: "from last month" },
  { title: "Conversion rate", value: "3.64%", change: "+1.2%", icon: Activity, tone: "rose", note: "from last month" },
];

const orders = [
  { id: "#ORD-2048", name: " sahil kelker ", email: "sahilkelker29@gmail.com", product: "Pro plan", amount: "249.00", status: "Completed", initials: "OM", color: "bg-pink-100 text-pink-700" },
  { id: "#ORD-2047", name: "Kittu Jadhamm", email: "kittujadhamm60@gmail.com", product: "Team plan", amount: "129.00", status: "Processing", initials: "JL", color: "bg-sky-100 text-sky-700" },
  { id: "#ORD-2046", name: "saloni chouhan", email: "salonichouhan@gmail.com", product: "Starter plan", amount: "349.00", status: "Completed", initials: "IN", color: "bg-amber-100 text-amber-800" },
  { id: "#ORD-2045", name: "krishna raverker", email: "krishnaraverker@gmail.com", product: "Pro plan", amount: "249.00", status: "Pending", initials: "WK", color: "bg-violet-100 text-violet-700" },
];

export default function Dashboard() {
  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-sm text-slate-500 dark:text-slate-400">Tuesday, October 14, 2026</p><h2 className="mt-1 font-[Manrope] text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">Welcome back, Admin <span aria-hidden="true">✦</span></h2></div>
        <button type="button" onClick={() => window.print()} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">Export overview</button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => <Card key={stat.title} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
        <RevenueChart />
        <TrafficChart />
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-6">
          <div><h3 className="font-[Manrope] text-base font-extrabold text-slate-900 dark:text-white">Recent orders</h3><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">A quick look at your latest transactions</p></div>
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">This week</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="border-y border-slate-100 bg-slate-50/80 text-xs uppercase tracking-wide text-slate-400 dark:border-slate-800 dark:bg-slate-950/60">
              <tr><th className="px-6 py-3.5 font-bold">Order</th><th className="px-6 py-3.5 font-bold">Customer</th><th className="px-6 py-3.5 font-bold">Product</th><th className="px-6 py-3.5 font-bold">Amount</th><th className="px-6 py-3.5 font-bold">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {orders.map((order) => <tr key={order.id} className="transition hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                <td className="whitespace-nowrap px-6 py-4 font-bold text-indigo-600 dark:text-indigo-300">{order.id}</td>
                <td className="px-6 py-4"><div className="flex items-center gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-extrabold ${order.color}`}>{order.initials}</span><span><span className="block font-semibold text-slate-800 dark:text-slate-100">{order.name}</span><span className="mt-0.5 block text-xs text-slate-400">{order.email}</span></span></div></td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-500 dark:text-slate-400">{order.product}</td>
                <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-800 dark:text-slate-100">{order.amount}</td>
                <td className="whitespace-nowrap px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${order.status === "Completed" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : order.status === "Processing" ? "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300" : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"}`}>{order.status}</span></td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <div className="border-t border-slate-100 px-6 py-4 text-xs text-slate-400 dark:border-slate-800">Sample analytics only — no live business data is connected.</div>
      </section>
    </div>
  );
}