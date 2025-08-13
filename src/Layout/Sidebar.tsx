'use client';

import Link from 'next/link';

interface SidebarProps {
  userName: string;
  onLogout: () => void;
}

export default function Sidebar({ userName, onLogout }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      {/* Logo / Title */}
      <div className="text-2xl font-bold mb-10">Dashboard</div>

      {/* User Info */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm">Logged in as:</p>
        <p className="font-medium">{userName}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/setting" className="hover:text-blue-400 transition">Settings</Link>
        <Link href="/work" className="hover:text-blue-400 transition">Work</Link>
      </nav>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="mt-auto py-2 px-4 bg-red-600 hover:bg-red-700 rounded transition"
      >
        Logout
      </button>
    </aside>
  );
}
