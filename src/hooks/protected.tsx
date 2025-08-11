'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTokenFromLocalStorage } from '@/utils/localstorage';

const Protected = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      router.replace('/login'); // replace prevents "Back" to protected page
    } else {
      setCheckingAuth(false); // token exists, allow render
    }
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default Protected;
