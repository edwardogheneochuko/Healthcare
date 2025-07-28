'use client';

import { PropsWithChildren, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { setTokenToLocalStorage ,getTokenFromLocalStorage } from '@/utils/localstorage'; // make sure path is correct

const Protected = ({ children }: PropsWithChildren ) => {
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (!getTokenFromLocalStorage()){
        redirect('login')
    }
  }, []);

  return <>{children}</>;
};

export default Protected;
