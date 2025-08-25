
import React from 'react'


import hospital from '@/public/medicine.jpg'
import care from '@/public/care.jpg'
import Image from "next/image";

const Plan = () => {
  return (
    <>
      <h1 className="text-gray-300 text-xs font-bold font-mono">
        SINGLE OR FAMILY HEALTH PLANS
      </h1>
      <div className="flex gap-5 mt-5">
        {/* Card 1 */}
        <div className="relative w-1/2 h-64">
          <Image
            src={hospital}
            alt="Hospital"
            fill
            className="rounded-lg object-cover brightness-75"
          />
          {/* Top Text */}
          <div className="absolute top-3 left-3 text-white font-bold">
            <h1 className="md:text-lg tracking-wider">Hospitalization</h1>
            <h2 className="text-sm md:text-base text-fuchsia-300 font-semibold">
              ( inpatient care )
            </h2>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            {/* something to be here */}
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-1/2 h-64">
          <Image
            src={care}
            alt="Care"
            fill
            className="rounded-lg object-cover brightness-75"
          />
          {/* Top Text */}
          <div className="absolute top-3 left-3 text-white font-bold">
            <h1 className="md:text-lg">Doctor Visit, Lab Tests</h1>
            <h2 className="text-sm md:text-base text-fuchsia-300 font-semibold">
              ( outpatient care )
            </h2>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
             {/* Something here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
