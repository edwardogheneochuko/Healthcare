import React from 'react'
import ForgotPassword from '@/src/auth/Forgot-password'
import SlideShow from '@/src/Layout/SlideShow'


const page = () => {
  return (
    <div className='w-full h-screen flex relative overflow-hidden bg-black'>
        <div className='w-[40%] h-screen max-md:hidden'>
            <SlideShow />
        </div>
      <div className='w-full h-screen overflow-y-auto overflow-x-hidden'>
        <div className='flex items-center max-md:justify-center h-full sm:w-[600px] 
        w-[100%] md:px-[8rem] px-[2rem]'>
            <ForgotPassword />
        </div>
      </div>
    </div>
  )
}

export default page
