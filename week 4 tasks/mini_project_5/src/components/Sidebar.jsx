import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, Users, ChartNoAxesCombined, Settings,
  CircleHelp, LogOut, X
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/users", label: "Users", icon: Users },
  { to: "/reports", label: "Reports", icon: ChartNoAxesCombined },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/50 md:hidden"
        />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[258px] flex-col border-r border-slate-200 bg-white px-5 py-6 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 md:static md:z-auto md:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-10 flex items-center justify-between px-1">
          <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
            <img src="/assets/adminflow-mark.svg" alt="AdminFlow logo" className="h-10 w-10 rounded-xl shadow-lg shadow-indigo-600/20" />
            <span>
              <span className="block font-[Manrope] text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">AdminFlow</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[.18em] text-slate-400">Workspace</span>
            </span>
          </NavLink>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden dark:hover:bg-slate-800" aria-label="Close menu">
            <X size={19} />
          </button>
        </div>

        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[.16em] text-slate-400">Workspace</p>
        <nav className="flex flex-col gap-1.5" aria-label="Main navigation">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${isActive
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"}`
              }
            >
              <Icon size={19} strokeWidth={1.9} />
              {label}
              {label === "Reports" && <span className="ml-auto rounded-md bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-600 dark:bg-rose-500/15 dark:text-rose-300">4</span>}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="mb-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white">
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-white/15"><CircleHelp size={19} /></div>
            <p className="font-semibold">Need a hand?</p>
            <p className="mt-1 text-xs leading-5 text-indigo-100">Visit the help center for tips and support.</p>
            <button type="button" onClick={() => window.alert("Help Center: This is a demo dashboard.")} className="mt-3 rounded-lg bg-white px-3 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50">Open help center</button>
          </div>
          <button type="button" onClick={() => window.alert("This is a demo project. Sign out is not connected.")} className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900">
            <LogOut size={18} /> Sign out
          </button>
          <div className="mt-4 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
            <img src="/assets/admin-avatar.svg" alt="Admin profile avatar" className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-800 dark:text-slate-100">Admin User</p>
              <p className="truncate text-xs text-slate-400">admin@example.com</p>
            </div>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" title="Online" />
          </div>
        </div>
      </aside>
    </>
  );
}