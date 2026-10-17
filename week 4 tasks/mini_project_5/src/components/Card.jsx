export default function Card({ title, value, change, icon: Icon, tone = "indigo", note }) {
  const tones = {
    indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300",
    emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
    amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",
    rose: "bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300",
  };

  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 sm:p-6 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <p className="mt-3 font-[Manrope] text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">{value}</p>
        </div>
        {Icon && <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[tone] || tones.indigo}`}><Icon size={21} /></span>}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        {change && <span className="rounded-md bg-emerald-50 px-2 py-1 font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{change}</span>}
        <span className="text-slate-400">{note || "vs. last month"}</span>
      </div>
    </article>
  );
}