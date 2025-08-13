'use client';

import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect, useState } from 'react';
import Sidebar from '@/src/Layout/Sidebar';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const { data: session, isLoading } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (!session) {
        router.replace('/login');
      } else {
        setLoading(false);
      }
    }
  }, [session, isLoading, router]);

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <>
      <Sidebar
        userName={session?.user?.name || 'Guest'}
        onLogout={async () => {
          await signOut();
          router.replace('/login');
        }}
      />
      {children}
    </>
  );
}
