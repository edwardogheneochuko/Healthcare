'use client';

import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import Sidebar from '@/src/Layout/Sidebar';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const { data: session, isPending } = useSession(); // usePending instead of isLoading
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  const userName =
    session.data?.user?.name ||
    `${session.data?.user?.firstName ?? ''} ${session.data?.user?.lastName ?? ''}`.trim() ||
    'User';

  return (
    <>
      <Sidebar userName={userName} onLogout={() => signOut()} />
      {children}
    </>
  );
}
