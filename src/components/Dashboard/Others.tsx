

import addons from '@/public/hospital.jpg'
import ambulance from '@/public/ambulance.jpg'
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Others = () => {
  return (
    <>
      <h1 className="text-gray-300 text-xs font-bold font-mono my-5">
        OTHER PLANS
      </h1>
      <div className="flex gap-5 mt-5">
      <div className="relative w-1/2 h-64">
          <Image
            src={ambulance}
            alt="Hospital"
            fill
            className="rounded-lg object-cover brightness-75"
          />
          {/* Top Text */}
          <div className="absolute top-3 left-3 text-white font-bold">
            <h1 className="md:text-lg tracking-wider">Emergency care</h1>
            <h2 className="text-sm md:text-base text-fuchsia-300 font-semibold">
              ambulance, urgent treatments
            </h2>
          </div>
          <Link href='/ambulance' className="absolute bottom-3 left-3 right-3 text-white 
          flex items-center gap-x-1 w-fit p-1 px-2 tracking-wide rounded-3xl
           bg-neutral-900 hover:bg-neutral-800 duration-200 cursor-pointer">
           <p className='text-xs font-bold'> Continue </p> 
           <p className='p-1 rounded-2xl bg-white '>
            <ArrowRight size={14} color='black'/>
            </p>
          </Link>
        </div>
      <div className="relative w-1/2 h-64">
          <Image
            src={addons}
            alt="Hospital"
            fill
            className="rounded-lg object-cover brightness-75"
          />
          {/* Top Text */}
          <div className="absolute top-3 left-3 text-white font-bold">
            <h1 className="md:text-lg tracking-wider">
              Optional add-ons
            </h1>
            <h2 className="text-sm md:text-base text-fuchsia-300 font-semibold">
              dental, vision, mental health, chronic illness management 
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Others
