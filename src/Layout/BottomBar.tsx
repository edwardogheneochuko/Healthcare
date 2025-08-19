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
      {/* Floating toggle button */}
      <button
        onClick={toggleMenu}
        className='border-2 border-gray-700 p-2 fixed bottom-6 right-6 z-50 text-gray-300
        rounded-3xl bg-neutral-900 hover:bg-neutral-800 cursor-pointer sm:hidden'
        aria-label="Toggle Menu">
        {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Bottom menu */}
      <div
        className={`fixed bottom-0 left-0 w-full sm:hidden z-40 transition-transform duration-300
                    ${open ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="mx-4 mb-6 bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl py-4 px-6">
          <div className="grid grid-cols-3 gap-4">
            {sideBar.map(({ id, title, path, label: Icon }) => (
              <Link
                key={id}
                href={path}
                className={`flex flex-col items-center justify-center gap-1 text-sm font-medium p-3
                           rounded-2xl transition-all duration-200
                           ${pathname === path ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                <Icon className="w-6 h-6" />
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
