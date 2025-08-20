'use client';

import { sideBar } from '@/public/data';
import { LogOut, PersonStanding, ArrowBigRight, ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SidebarProps } from '../types/type';

export default function Sidebar({ userName, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(true);
  const toggleButton = () => setOpen((prev) => !prev);

  return (
    <aside
      className={`${open ? 'w-56' : 'w-16'} duration-300 hidden sm:flex flex-col
      relative h-screen bg-black text-gray-50 shadow-lg border-r`}>
      {/* Toggle Button */}
      <span
        onClick={toggleButton}
        className="absolute top-5 right-0 rounded-l-full p-2 bg-neutral-700
                   text-white cursor-pointer hover:bg-neutral-900 shadow-md transition"
        title={open ? 'Collapse' : 'Expand'}>
        {open ? <ArrowBigLeft className="w-5 h-5" /> : <ArrowBigRight className="w-5 h-5" />}
      </span>

      {/* Logo */}
      <div className="mb-6 border-b border-gray-200 pb-3 pt-5 flex justify-center">
        {open && <p className="text-xl font-bold tracking-wider text-green-200">
          HealthCare
          </p>}
      </div>

      {/* Navigation Links */}
      <div className={`flex flex-col gap-3 px-3 transition-all duration-300`}>
        {sideBar.map(({ id, title, path, label: Icon }) => {
          const active = pathname === path;
          return (
            <Link
              key={id} href={path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                ${active ? 'bg-neutral-800 text-green-50  shadow-sm' : 
                  'hover:bg-gray-500 text-green-300'}`}>
              <Icon className="w-6 h-6" />
              {open && <span className="text-sm">{title}</span>}
            </Link>
          );
        })}
      </div>

      {/* Bottom Section: User + Logout */}
      <div
        className={`mt-auto border-t border-gray-200 p-4 flex ${
          open ? 'items-center justify-between gap-3' : 'flex-col items-center gap-2'
        }`}
      >
        <div className="flex items-center gap-3">
          <PersonStanding className="w-7 h-7 p-1 rounded-full bg-gray-100 text-gray-800" />
          {open && <span className="text-sm font-medium truncate max-w-[140px]">{userName}</span>}
        </div>
        <button
          onClick={onLogout}
          aria-label="Logout"
          className={`p-2 rounded-md bg-red-500 hover:bg-red-600 transition text-white ${
            open ? '' : 'w-full'
          }`}
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
