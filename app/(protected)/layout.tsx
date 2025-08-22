'use client';

import { PropsWithChildren, } from 'react';
import Sidebar from '@/src/Layout/Sidebar';
import BottomBar from '@/src/Layout/BottomBar';
import Header from '@/src/Layout/Header';
import backgroundImg from '@/public/SpinBackground.jpg'
import RightLayout from '@/src/Layout/RightLayout';

export default function ProtectedLayout({ children }: PropsWithChildren) { 
 return (
  <div className="flex h-screen">
    <Sidebar userName="Guest" />
    <main className="flex-1 flex flex-col">
      {/* Header fixed at the top */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto grid lg:grid-cols-4 gap-6 p-5" 
      style={{
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
          <div className='col-span-3'>
             {children}
          </div>
          <div className='col-span-1 lg:border-l-neutral-800 lg:border-l'>
            <RightLayout />
          </div>
      </div>

      {/* Bottom bar at the bottom */}
      <BottomBar/>
    </main>
  </div>
);


// 'use client';

// import { useSession, signOut } from '@/lib/auth-client';
// import { useRouter } from 'next/navigation';
// import { PropsWithChildren, useEffect } from 'react';
// import Sidebar from '@/src/Layout/Sidebar';
// import Loader from '@/src/global/Loader';
// import Dashboard from '@/src/Layout/Dashboard';
// import Header from '@/src/Layout/Header';
// import BottomBar from '@/src/Layout/BottomBar';
// import backgroundImg from '@/public/SpinBackground.jpg'
// import RightLayout from '@/src/Layout/RightLayout';


// export default function ProtectedLayout({ children }: PropsWithChildren) {
//   const { data: session, isPending } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isPending && !session) {
//       router.replace('/login');
//     }
//   }, [session, isPending, router]);

//   if (isPending) {
//     return <Loader />;
//   }

//   if (!session) {
//     return null; // redirect will trigger
//   }

//   return (
//     <div className="flex h-screen">
//       <Sidebar
//         userName={session.user?.name || 'Guest'}
//         onLogout={async () => {
//           await signOut();
//           router.replace('/login');
//         }}
//       />
//      <div className="flex-1 flex flex-col">
//        <div className="sticky top-0 z-10">
//             <Header />
//          </div>
//         {/* Scrollable content */}
//       <main className="flex-1 overflow-auto grid lg:grid-cols-3 gap-6 p-5"
//         style={{
//           backgroundImage: `url(${backgroundImg.src})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',}}>
//          <div className="col-span-2">
//          {children}
//          </div>
//         <div className='col-span-1 lg:border-l-neutral-800 lg:border-l'>
//             <RightLayout />
//          </div>
//        </main>
           {/* Bottom bar at the bottom */}
//       <BottomBar />
//      </div>
//     </div>
//   );
}
