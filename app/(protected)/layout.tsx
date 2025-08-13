// app/(protected)/layout.tsx
'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from '@/lib/auth-client';
import Sidebar from '@/src/Layout/Sidebar';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const { data: session, isPending } = useSession(); // BetterAuth session
  const router = useRouter();

  // Redirect if no session
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

  if (!session) return null; // don't render children if no session

  // Access the user's name safely
  const userName = session.data?.user?.name ?? 'User';

  return (
    <div className="flex">
      {/* Sidebar with user name and logout */}
      <Sidebar userName={userName} onLogout={() => signOut()} />

      {/* Main content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
