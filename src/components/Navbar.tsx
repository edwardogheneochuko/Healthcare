'use client';

import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';
import Image from 'next/image';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center m-3">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl">
        Logo
      </Link>

      {/* Show loading indicator while checking auth */}
      {loading && <span className="text-gray-500 text-sm">Loading...</span>}

      {/* Not logged in */}
      {!loading && !user && (
        <Link
          href="/login"
          className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600 transition"
        >
          Join Now
        </Link>
      )}

      {/* Logged in */}
      {!loading && user && (
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-medium">
            {user.displayName || 'User'}
          </h2>
          <Link href="/dashboard">
            <Image
              src={user.photoURL || '/default-avatar.png'}
              alt={user.displayName || 'User avatar'}
              width={40}
              height={40}
              className="rounded-full border border-gray-300"
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
