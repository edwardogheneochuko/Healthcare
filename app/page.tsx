'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import Loader from '@/src/global/Loader';


export default function HomePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isPending) return; // ⏳ wait until session check finishes

    if (session) {
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  return null; // nothing while deciding
}


// import React from 'react'
// import ProtectedLayout from './(protected)/layout'


// const page = () => {
//   return (
//     <div>
//       <ProtectedLayout />
//     </div>
//   )
// }

// export default page
