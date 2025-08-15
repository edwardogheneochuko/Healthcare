'use client';

import { sideBar } from '@/public/data';
import { LogOut, PersonStanding, MoveRightIcon, MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarProps {
  userName: string;
  onLogout: () => void;
}

export default function Sidebar({ userName, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(true);

  const toggleButton = () => setOpen((prev) => !prev);

  return (
    <aside
      className={`${open ? 'w-64' : 'w-20'} duration-300
      relative h-screen bg-black text-white flex flex-col`}
    >
      {/* Toggle button at edge of bg */}
      <span
        onClick={toggleButton}
        className="absolute top-6 right-0 translate-x-1/2 border rounded-3xl p-2 
                   bg-black text-white cursor-pointer hover:bg-gray-800 transition"
      >
        {open ? <MoveLeftIcon className="w-4 h-4" /> : <MoveRightIcon className="w-4 h-4" />}
      </span>

      {/* Logo */}
      <div className="mb-5 border-b border-gray-700 pb-2 tracking-wider px-4 pt-5">
        {open && <p className="text-2xl font-bold">GYMIT</p>}
      </div>

      {/* Navigation Links */}
      <div
        className={`flex flex-col space-y-4 transition-all duration-300 px-4 ${
          open ? '' : 'flex-1 justify-center items-center'
        }`}
      >
        {sideBar.map(({ id, title, path, label: Icon, bg, hover }) => (
          <Link
            key={id}
            href={path}
            className={`text-2xl font-medium tracking-wide flex items-center gap-x-2 ${
              pathname === path ? 'text-yellow-400' : ''
            }`}
          >
            <p
              title={title}
              className={`border p-1 rounded-md ${bg} ${hover} transition-transform duration-200 cursor-pointer
                hover:scale-110 hover:rotate-180`}
            >
              <Icon className="w-7 h-7" />
            </p>
            {open && title}
          </Link>
        ))}
      </div>

      {/* Bottom Section: User + Logout */}
      <div
        className={`mt-auto border-t border-gray-700 p-4 flex items-center justify-between gap-3 ${
          open ? '' : 'flex-col'
        }`}
      >
        <div className="flex items-center gap-x-3">
          <p className="text-gray-400 border-white border-2 rounded-2xl p-2">
            <PersonStanding size={30} />
          </p>
          {open && (
            <span className="text-sm font-medium truncate max-w-[120px]">
              {userName}
            </span>
          )}
        </div>
        <button
          onClick={onLogout}
          aria-label="Logout"
          className={`p-2 cursor-pointer rounded-md bg-red-500 hover:bg-red-700 transition
             ${open ? '' : 'w-full'}`}
        >
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
}
