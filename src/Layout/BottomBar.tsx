import { sideBar } from '@/public/data'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <>
    <span className='border-2 border-gray-700 p-2 bottom-5 right-5 absolute rounded-3xl
     bg-neutral-900 hover:bg-neutral-800 cursor-pointer'>
        <MenuIcon className='text-gray-400'/>
    </span>

        <div className="hidden bottom-0 left-0 w-full bg-black border-t shadow-md py-2 px-2
         text-white rounded-md">
      <div className="grid grid-cols-3 gap-3 py-5">
        {sideBar.map(({ id, title, path, label: Icon, border }) => (
          <Link
            key={id}
            href={path}
            className={`flex flex-col items-center justify-center gap-1 text-xs ${border}
                 font-medium transition-colors duration-200  rounded-lg border-x-2 
             ${pathname === path ? 'text-yellow-400' : ''} `}>
            <Icon className="w-5 h-5" />
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default BottomBar;
