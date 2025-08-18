
import React from 'react'
import {HeartCrackIcon} from 'lucide-react';

const Gym = () => {
  return (
     <h1 className='flex flex-col items-center gap-1 text-red-200 '>
            <HeartCrackIcon  size={60} className='duration-200 hover:scale-110'/>
          <p className='text-xl tracking-widest font-bold  gap-1 '>
            Health_Care
          </p>
    </h1>
  )
}

export default Gym
