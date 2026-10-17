import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-800 transition-colors dark:bg-[#0b1120] dark:text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <div className="min-w-0 flex-1">
          <Navbar onMenuClick={() => setMobileOpen(true)} />
          <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-9">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"><h2 className="text-xl font-bold">Page not found</h2><p className="mt-2 text-slate-500">Use the sidebar to choose a page.</p></div>} />
            </Routes>
            <footer className="mt-9 flex flex-col justify-between gap-2 border-t border-slate-200/80 pt-5 text-xs text-slate-400 sm:flex-row dark:border-slate-800">
              <span>© 2026 AdminFlow · Student mini project</span>
              <span>Built with React, React Router & Tailwind CSS</span>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}