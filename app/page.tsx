// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useSession } from '@/lib/auth-client';
// import Loader from '@/src/global/Loader';

// export default function HomePage() {
//   const { data: session } = useSession(); 
//   const router = useRouter();

//   useEffect(() => {
//     if (session) {
//       router.replace('/dashboard'); 
//     } else {
//       router.replace('/login'); 
//     }
//   }, [session, router]);

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <Loader />
//     </div>
//   );
// }

import React from 'react'
import ProtectedLayout from './(protected)/layout'


const page = () => {
  return (
    <div>
      <ProtectedLayout />
    </div>
  )
}

export default page
