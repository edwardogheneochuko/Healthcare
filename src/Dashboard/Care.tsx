
import React from 'react'


import pregnancy from '@/public/pregnancy.jpg'
import checkup from '@/public/checkup.jpg'
import children from '@/public/children.jpg'
import Image from 'next/image'

const Care = () => {

  return (
    <div className='text-white'>
      <h1 className="text-gray-300 text-xs font-bold font-mono my-5">
        MONTHLY OR YEAR PLANS
      </h1>

      <div className="flex gap-5 mt-5">
        <div className="relative w-1/3 h-64">
          <Image
            src={pregnancy}
            alt="Care"
            fill
            className="rounded-lg object-cover brightness-75"
          />
          <div className="absolute top-1/2 left-3 text-white font-bold">
            <h1 className="text-sm md:text-lg tracking-wide">
              Maternity and new born
            </h1>
            <h2 className="text-xs md:text-base text-fuchsia-300 font-semibold">
              (sometimes after a waiting period)
            </h2>
          </div>
        </div>
        <div className="relative w-1/3 h-64">
          <Image
            src={checkup}
            alt="Care"
            fill
            className="rounded-lg object-cover brightness-75"
          />
           <div className="absolute top-1/2 left-3 text-white font-bold">
            <h1 className="text-sm md:text-lg tracking-wider">
              Preventive checkups
            </h1>
            <h2 className="text-xs md:text-base text-fuchsia-300 font-semibold">
              annual health screenings
            </h2>
          </div>
        </div>
        <div className="relative w-1/3 h-64">
          <Image
            src={children}
            alt="Care"
            fill
            className="rounded-lg object-cover brightness-75"
          />
          <div className="absolute top-1/2 left-3 text-white font-bold">
            <h1 className="text-sm md:text-lg tracking-wider">
            Children healthcare
            </h1>
            <h2 className="text-xs md:text-base text-fuchsia-300 font-semibold">
              vaccinations, pediatric checkups
            </h2>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Care
