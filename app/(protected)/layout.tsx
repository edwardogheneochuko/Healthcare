// 'use client';

// import { useSession, signOut } from '@/lib/auth-client';
// import { useRouter } from 'next/navigation';
// import { PropsWithChildren, useEffect } from 'react';
// import Sidebar from '@/src/Layout/Sidebar';
// import Loader from '@/src/global/Loader';
// import Dashboard from '@/src/Layout/Dashboard';
// import BottomBar from '@/src/Layout/BottomBar';


// export default function ProtectedLayout({ children }: PropsWithChildren) {
//   return (
//         <div className='flex'>
//           <Sidebar
//             userName={ 'Guest'}
//           />
//          <main className="px-2">
//           <Dashboard />
//           to be able to do that an leave 
//           {children}
//           <BottomBar />
//           </main>
//         </div>
//       );

// }

'use client';

import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import Sidebar from '@/src/Layout/Sidebar';
import Loader from '@/src/global/Loader';
import Dashboard from '@/src/Layout/Dashboard';

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <Loader />;
  }

  if (!session) {
    return null; // redirect will trigger
  }

  return (
    <div className="flex">
      <Sidebar
        userName={session.user?.name || 'Guest'}
        onLogout={async () => {
          await signOut();
          router.replace('/login');
        }}
      />
      <main className="flex-1">
       <Dashboard />
       {children}
      </main>
    </div>
  );
}
