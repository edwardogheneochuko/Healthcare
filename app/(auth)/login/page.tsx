import Login from '@/src/components/auth/Login'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex relative overflow-hidden bg-black'>
        <div className='w-[40%] h-screen max-md:hidden'>
            open
        </div>
      <div className='w-full h-screen'>
        <div className='flex items-center max-md:justify-center h-full sm:w-[600px] 
        w-[100%] md:px-[8rem] px-[2rem]'>
            <Login />
        </div>
      </div>
    </div>
  )
}

export default page
