
import React from 'react'
import { Dumbbell } from 'lucide-react';


const Gym = () => {
  return (
     <h1 className='text-white flex flex-col items-center gap-1'>
                <Dumbbell  size={60} className='text-red-200 '/>
          <p className='text-xl tracking-widest font-bold duration-200 hover:scale-110 '>
             Gy<span className='text-2xl'>M</span>it
          </p>
    </h1>
  )
}

export default Gym
