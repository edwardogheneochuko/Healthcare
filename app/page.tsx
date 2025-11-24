'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import Loader from '@/src/global/Loader';


export default function HomePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isPending) return; 

    if (session) {
      router.replace('/dashboard');
    } else {
      router.replace('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return null; 
}



