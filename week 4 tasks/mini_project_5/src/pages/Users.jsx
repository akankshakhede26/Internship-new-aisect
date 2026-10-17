import { useMemo, useState } from "react";
import { Search, UserPlus, MoreHorizontal } from "lucide-react";

const initialUsers = [
  { name: "Olivia Martin", email: "olivia@example.com", role: "Administrator", status: "Active", initials: "OM", color: "bg-pink-100 text-pink-700" },
  { name: "Jackson Lee", email: "jackson@example.com", role: "Editor", status: "Active", initials: "JL", color: "bg-sky-100 text-sky-700" },
  { name: "Isabella Nguyen", email: "isabella@example.com", role: "Viewer", status: "Pending", initials: "IN", color: "bg-amber-100 text-amber-800" },
  { name: "William Kim", email: "william@example.com", role: "Editor", status: "Active", initials: "WK", color: "bg-violet-100 text-violet-700" },
  { name: "Sophia Patel", email: "sophia@example.com", role: "Viewer", status: "Inactive", initials: "SP", color: "bg-emerald-100 text-emerald-700" },
  { name: "Noah Sharma", email: "noah@example.com", role: "Editor", status: "Active", initials: "NS", color: "bg-orange-100 text-orange-700" },
];

export default function Users() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const users = useMemo(() => initialUsers.filter((user) =>
    (filter === "All" || user.status === filter) &&
    `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(query.toLowerCase())
  ), [query, filter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-[Manrope] text-2xl font-extrabold text-slate-900 dark:text-white">User management</h2><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">View and manage your workspace members.</p></div><button type="button" onClick={() => window.alert("Invite user is a demo action.")} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"><UserPlus size={17} /> Invite user</button></div>
      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 dark:border-slate-800">
          <div className="relative w-full sm:max-w-xs"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search users..." className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-indigo-500/20" /></div>
          <select value={filter} onChange={(event) => setFilter(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"><option>All</option><option>Active</option><option>Pending</option><option>Inactive</option></select>
        </div>
        <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400 dark:bg-slate-950/60"><tr><th className="px-6 py-4">User</th><th className="px-6 py-4">Role</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Action</th></tr></thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">{users.map((user) => <tr key={user.email} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40"><td className="px-6 py-4"><div className="flex items-center gap-3"><span className={`grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold ${user.color}`}>{user.initials}</span><span><span className="block font-bold text-slate-800 dark:text-slate-100">{user.name}</span><span className="mt-1 block text-xs text-slate-400">{user.email}</span></span></div></td><td className="px-6 py-4 text-slate-500 dark:text-slate-300">{user.role}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${user.status === "Active" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : user.status === "Pending" ? "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>{user.status}</span></td><td className="px-6 py-4"><button type="button" aria-label={`More actions for ${user.name}`} onClick={() => window.alert(`Demo actions for ${user.name}`)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"><MoreHorizontal size={19} /></button></td></tr>)}</tbody>
        </table></div>
        <div className="border-t border-slate-100 px-6 py-4 text-sm text-slate-400 dark:border-slate-800">Showing {users.length} of {initialUsers.length} sample users</div>
      </div>
    </div>
  );
}