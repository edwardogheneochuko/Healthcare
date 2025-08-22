import Care from '@/src/components/Family/Care'
import Goals from '@/src/components/Family/Goals'
import Others from '@/src/components/Family/Others'
import Plan from '@/src/components/Family/Plan'
import Structure from '@/src/components/Family/Structure'
import React from 'react'

const Page = () => {
  return (
    <div>
      <main className='grid lg:grid-cols-3 gap-6 p-5'>
        <div className='col-span-2'>
        <Plan />
        <Care />
        <Others />
        </div>
        <div className='col-span-1 lg:border-l-neutral-800 lg:border-l'>
        <Goals />
        <Structure />
        </div>
      </main>
    </div>
  )
}

export default Page
