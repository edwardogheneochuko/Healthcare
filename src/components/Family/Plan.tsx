
import React from 'react'

// Hospitalization (inpatient care) room charges, medicines, surgery
// outpatient care doctor visits, lab tests
// maternity and new born (sometimes after a waiting period)
// children healthcare - vaccinations, pediatric checkups
// preventive checkups - annual health screenings
// emergency care - ambulance, urgent treatments
// optional add-ons - dental, vision, mental health, chronic illness management 

import hospital from '@/public/hospital.jpg'
import care from '@/public/care.jpg'
import Image from "next/image";

const Plan = () => {
  return (
    <div>
      {/* <h1 className='text-gray-300 text-xs font-bold font-mono'>
        SINGLE OR FAMILY HEALTH PLANS
      </h1>
      <div className='flex mt-5 gap-5'>
        <div>
            <Image src={hospital}
            alt="Hospital"
            className="rounded-lg object-cover" />
        </div>
        <div>
        <Image src={care}
            alt="Hospital"
            className="rounded-lg object-cover" />
        </div>
      </div> */}
    </div>
  )
}

export default Plan
