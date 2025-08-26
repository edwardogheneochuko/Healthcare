'use client';

// import { PropsWithChildren } from 'react';
// import Sidebar from '@/src/Layout/Sidebar';
// import BottomBar from '@/src/Layout/BottomBar';
// import Header from '@/src/Layout/Header';
// import backgroundImg from '@/public/SpinBackground.jpg';
// import Activity from '@/src/Layout/Activity';

// export default function ProtectedLayout({ children }: PropsWithChildren) {
//   return (
//     <div className="flex h-screen">
//       {/* Left Sidebar */}
//       <Sidebar userName="Guest" />

//       {/* Main Content Area */}
//       <main className="flex-1 flex flex-col relative">
//         {/* Header (fixed) */}
//         <div className="sticky top-0 z-20">
//           <Header userName='Guest' />
//         </div>

//         {/* Content */}
//         <div
//           className="flex-1 overflow-auto grid lg:grid-cols-4 gap-6 p-5"
//           style={{
//             backgroundImage: `url(${backgroundImg.src})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* Main page content */}
//           <div className="col-span-full lg:col-span-3 space-y-6">
//             {children}
//           </div>

//           {/* Right Sidebar (Goals + Activity) */}
//           <aside
//             className="col-span-full lg:col-span-1 
//                        lg:border-l border-gray-800 
//                        pl-0 lg:pl-4 
//                        space-y-4">
//             <Activity />
//           </aside>
//         </div>

//         {/* Bottom Bar */}
//         <BottomBar />
//       </main>
//     </div>
//   );
// }


'use client';

import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import Sidebar from '@/src/Layout/Sidebar';
import Loader from '@/src/global/Loader';
import Header from '@/src/Layout/Header';
import BottomBar from '@/src/Layout/BottomBar';
import backgroundImg from '@/public/SpinBackground.jpg'
import Activity from '@/src/Layout/Activity';



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
    <div className="flex h-screen">
      <Sidebar
        userName={session.user?.name || 'Guest'}
        onLogout={async () => {
          await signOut();
          router.replace('/login');
        }}
      />
     <div className="flex-1 flex flex-col relative">
       <div className="sticky top-0 z-10">
            <Header 
          userName={session.user?.name || 'Guest'}
          onLogout={async () => {
          await signOut();
          router.replace('/login');
        }}/>
         </div>
        {/* Scrollable content */}
      <main className="flex-1 overflow-auto grid lg:grid-cols-4 gap-6 p-5"
        style={{
          backgroundImage: `url(${backgroundImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',}}>
         <div className="col-span-full lg:col-span-3 space-y-6">
           {children}
         </div>
        <aside className='col-span-full lg:col-span-1 lg:border-l border-gray-800
            pl-0 lg:pl-4 space-y-4'>
            <Activity />
         </aside>
       </main>
         <BottomBar />
     </div>
    </div>
  );
}
