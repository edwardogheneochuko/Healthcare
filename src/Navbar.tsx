'use client';

import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import Image from 'next/image';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="flex justify-between items-center m-3">
      <Link href="/">
        <span className="font-bold text-xl">Logo</span>
      </Link>

      {!user && (
        <ul>
          <Link href="/login">
            <span className="bg-blue-500 p-3 text-white rounded">Join Now</span>
          </Link>
        </ul>
      )}

      {user && (
        <div className='flex items-center gap-3'>
            <h2 className='text-xs'>{user.displayName}</h2>
          <Link href="/dashboard">
            <Image
              src={user.photoURL || '/default-avatar.png'}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
