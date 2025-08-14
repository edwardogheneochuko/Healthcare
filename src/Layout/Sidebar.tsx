'use client';

import { LogOut, PersonStanding } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  userName: string;
  onLogout: () => void;
}

export default function Sidebar({ userName, onLogout }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col py-5 px-4">
      <div className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2 tracking-wider">
        gy<span className='text-green-600'>MIT</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">Home</Link>
        <Link href="/setting">Settings</Link>
        <Link href="/work">Work</Link>
      </nav>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* User Info & Log out */}
      <div className="mb-5 flex gap-x-2 items-center">
        <p className="text-gray-400 text-sm border-white border-2 rounded-2xl p-1">
          <PersonStanding />
        </p>
        <p className="font-xs">{userName}</p>
        <button onClick={onLogout} className="py-2 px-4 cursor-pointer rounded-md text-sm 
         bg-red-600 hover:bg-red-700 transition mx-auto ">
           <LogOut />
         </button>
      </div>      
    </aside>
  );
}
