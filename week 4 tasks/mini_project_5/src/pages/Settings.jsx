import { useState } from "react";
import { Bell, Check, Globe, LockKeyhole, Palette, UserRound } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Toggle({ checked, onChange, label }) {
  return <button type="button" role="switch" aria-checked={checked} aria-label={label} onClick={() => onChange(!checked)} className={`relative h-6 w-11 shrink-0 rounded-full transition ${checked ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${checked ? "left-6" : "left-1"}`} /></button>;
}

export default function Settings() {
  const { dark, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");
  const [saved, setSaved] = useState(false);

  function saveSettings(event) {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div><h2 className="font-[Manrope] text-2xl font-extrabold text-slate-900 dark:text-white">Application settings</h2><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Customize your account and dashboard experience.</p></div>
      <form onSubmit={saveSettings} className="space-y-5">
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300"><UserRound size={20} /></span><div><h3 className="font-bold text-slate-900 dark:text-white">Profile information</h3><p className="text-sm text-slate-500 dark:text-slate-400">Update your personal details.</p></div></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Display name<input value={name} onChange={(event) => setName(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 font-normal outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-indigo-500/20" /></label><label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 font-normal outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-indigo-500/20" /></label></div>
        </section>
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300"><Palette size={20} /></span><div><h3 className="font-bold text-slate-900 dark:text-white">Appearance</h3><p className="text-sm text-slate-500 dark:text-slate-400">Choose how the dashboard looks.</p></div></div>
          <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Dark mode</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Switch between light and dark themes.</p></div><Toggle checked={dark} onChange={toggleTheme} label="Dark mode" /></div>
        </section>
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300"><Bell size={20} /></span><div><h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3><p className="text-sm text-slate-500 dark:text-slate-400">Manage your notification preferences.</p></div></div>
          <div className="space-y-5"><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Product notifications</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Receive updates about activity.</p></div><Toggle checked={notifications} onChange={setNotifications} label="Product notifications" /></div><div className="flex items-center justify-between gap-4"><div><p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Weekly summary</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Get a weekly performance recap.</p></div><Toggle checked={weekly} onChange={setWeekly} label="Weekly summary" /></div></div>
        </section>
        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"><Globe size={20} /></span><div><h3 className="font-bold text-slate-900 dark:text-white">Regional preferences</h3><p className="text-sm text-slate-500 dark:text-slate-400">Language: English · Time zone: Asia/Kolkata</p></div><LockKeyhole className="ml-auto text-slate-400" size={19} /></div>
        </section>
        <div className="flex flex-wrap items-center justify-end gap-3"><button type="button" onClick={() => { setName("Admin User"); setEmail("admin@example.com"); setNotifications(true); setWeekly(false); }} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">Reset form</button><button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700">{saved && <Check size={17} />}{saved ? "Saved (demo)" : "Save changes"}</button></div>
      </form>
    </div>
  );
}