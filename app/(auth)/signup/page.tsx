import SignUp from '@/src/components/auth/Signup';
import React from 'react';

const page = () => {
  return (
    <div className='w-full h-screen flex relative bg-black'>
      <div className='w-[40%] h-screen max-md:hidden'>
        open
      </div>

      {/* Scrollable section */}
      <div className='w-full h-screen overflow-y-auto overflow-x-hidden'>
        <div className='flex items-center max-md:justify-center min-h-full sm:w-[600px] w-full md:px-[8rem] px-[2rem] py-8'>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
