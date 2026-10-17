import { useLocation } from "react-router-dom";
import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const pageTitles = {
  "/": ["Dashboard", "Here's what's happening with your workspace today."],
  "/users": ["Users", "Manage your team and user directory."],
  "/reports": ["Reports", "Explore performance and analytics reports."],
  "/settings": ["Settings", "Manage your workspace preferences."],
};

export default function Navbar({ onMenuClick }) {
  const { dark, toggleTheme } = useTheme();
  const location = useLocation();
  const [title, subtitle] = pageTitles[location.pathname] || pageTitles["/"];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-9 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button type="button" onClick={onMenuClick} aria-label="Open navigation menu" className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 md:hidden dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <Menu size={19} />
          </button>
          <div className="min-w-0">
            <h1 className="font-[Manrope] text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl dark:text-white">{title}</h1>
            <p className="mt-1 hidden text-xs text-slate-500 sm:block sm:text-sm dark:text-slate-400">{subtitle}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button type="button" aria-label="Search demo" onClick={() => window.alert("Search is a UI demo in this project.")} className="hidden rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 sm:inline-flex dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"><Search size={18} /></button>
          <button type="button" aria-label="Notifications" onClick={() => window.alert("You're all caught up!")} className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <Bell size={18} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-rose-500 dark:border-slate-950" />
          </button>
          <button type="button" onClick={toggleTheme} className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-indigo-500 dark:hover:bg-indigo-400" aria-label="Toggle theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
            <span className="hidden sm:inline">{dark ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}