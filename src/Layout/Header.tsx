import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Left side: Logo / Page title */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-800 sm:hidden">
          HealthCare
        </h1>
        {/* Optional search input */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right side: Notifications / User */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />
          {/* Optional notification badge */}
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="w-6 h-6 text-gray-600" />
          <span className="hidden md:block text-gray-700 font-medium">Edward</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
