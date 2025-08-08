'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getTokenFromLocalStorage } from '@/utils/localstorage'; // ensure path is correct

const Protected = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      router.push('/login'); // Use router.push in client components
    }
  }, [router]);

  return <>{children}</>;
};

export default Protected;
