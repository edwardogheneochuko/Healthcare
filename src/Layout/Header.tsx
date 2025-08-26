import React from 'react';
import { Bell, User } from 'lucide-react';
import { UserProps } from '../types/type';
import { LogOut } from 'lucide-react';

const Header = ({userName, onLogout }: UserProps ) => {
  return (
    <header className="w-full bg-black shadow-sm px-6 py-4 flex items-center
     justify-between border-b-2 ">
      {/* Left side: Logo / Page title */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-50 sm:hidden font-serif">
          HealthCare
        </h1>
      </div>

      {/* Right side: Notifications / User */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-800 transition hidden sm:block">
          <Bell className="w-5 h-5 text-gray-50" />
          {/* Optional notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex sm:hidden items-center gap-2 cursor-pointer">
          <User className="w-4 h-4  md:w-6 md:h-6 text-gray-50" />
          <span className="text-sm md:text-base text-gray-300 font-medium">
            {userName}
          </span>
          <button onClick={onLogout} aria-label='Logout'
             className="p-2 rounded-md bg-red-500 hover:bg-red-600 
            transition text-white cursor-pointer">
                <LogOut className="w-5 h-5" />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
