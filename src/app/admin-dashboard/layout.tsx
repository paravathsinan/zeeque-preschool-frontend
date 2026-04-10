"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  Search,
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "#" },
    { name: "RB (Teacher Trainees)", icon: GraduationCap, href: "/admin-dashboard", active: true },
    { name: "Settings", icon: Settings, href: "#" },
  ];

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-52" : "w-16"
        } relative flex flex-col bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 transition-all duration-300 z-50`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center px-4 border-b border-gray-100 dark:border-slate-800">
          <Link href="/" className="flex items-center gap-3">
            <div className={`relative ${isSidebarOpen ? "w-10" : "w-10"} h-10 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center shrink-0`}>
              <Image src="/images/logo/logo-new.svg" alt="Logo" width={40} height={40} className="object-contain" />
            </div>
            {isSidebarOpen && (
              <span className="font-heading font-extrabold text-xl tracking-tight text-gray-900 dark:text-white">
                ZEEQUE<span className="text-primary">.</span>
              </span>
            )}
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 py-4 px-2.5 space-y-1.5 overflow-y-auto overflow-x-hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 group relative ${
                item.active 
                  ? "bg-primary text-white shadow-lg shadow-primary/25" 
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-primary"
              }`}
            >
              <item.icon className={`w-4.5 h-4.5 shrink-0 ${item.active ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
              {isSidebarOpen && (
                <span className="font-bold text-[14px] whitespace-nowrap">{item.name}</span>
              )}
              {!isSidebarOpen && (
                <div className="absolute left-14 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100]">
                  {item.name}
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-gray-100 dark:border-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut className="w-4.5 h-4.5 shrink-0 group-hover:translate-x-1 transition-transform" />
            {isSidebarOpen && <span className="font-bold text-[14px]">Logout</span>}
          </button>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-24 w-6 h-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-primary shadow-sm hover:shadow-md transition-all z-[60]"
        >
          {isSidebarOpen ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="w-full bg-gray-50 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-700 focus:ring-2 focus:ring-primary/20 rounded-2xl py-2.5 pl-11 pr-4 text-[14px] transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
            </button>
            <div className="h-10 w-[1px] bg-gray-100 dark:border-slate-800 mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-[14px] font-bold text-gray-900 dark:text-white">Admin User</span>
                <span className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">Super Admin</span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-bold shadow-inner">
                AZ
              </div>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] dark:bg-slate-950 p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
