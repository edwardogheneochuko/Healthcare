'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import Loader from '@/src/global/Loader';

export default function HomePage() {
  const { data: session } = useSession(); // no isLoading
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard'); // logged in
    } else {
      router.replace('/login'); // not logged in
    }
  }, [session, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Loader />
    </div>
  );
}

