import { sideBar } from '@/public/data';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';

const BottomBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Floating toggle button (unchanged) */}
      <button
        onClick={toggleMenu}
        className='border-2 border-gray-700 p-2 fixed bottom-6 right-6 z-50
        text-gray-400 rounded-3xl bg-neutral-900 hover:bg-neutral-800 cursor-pointer sm:hidden'
        aria-label="Toggle Menu">
        {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Bottom menu */}
      <div className={`fixed bottom-0 left-0 w-full sm:hidden z-40 
          transition-transform duration-300 
                    ${open ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="mx-4 mb-6  backdrop-blur-xl border border-neutral-500
                        rounded-3xl shadow-2xl py-5 px-6">
          <div className="grid grid-cols-3 gap-4">
             {sideBar.map(({ id, title, path, label: Icon }) => {
               const isActive = pathname === path;
              return (
                <Link
                  key={id}
                  href={path}
                  className={`flex flex-col items-center justify-center gap-1 text-xs font-medium p-3
                             rounded-2xl transition-all duration-300 ease-in-out
                             ${isActive 
                               ? 'bg-green-600/20 text-green-400 shadow-md scale-105' 
                               : 'text-gray-300 hover:text-white hover:bg-gray-800/70 hover:scale-105'}`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-green-400' : ''}`} />
                  <span>{title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
