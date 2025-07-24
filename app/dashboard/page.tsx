'use client';

import React, { useEffect } from 'react';
import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) return <h1>Loading.....</h1>;
  if (!user) return null; 

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>Welcome {user.displayName || 'User'}!</h2>
      <button className='bg-red-500 p-2 text-white rounded-md hover:bg-red-800 
      cursor-pointer' onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
};

export default Page;
