import Plan from '@/src/components/Family/Plan'
import Structure from '@/src/components/Family/Structure'
import React from 'react'

const Page = () => {
  return (
    <div>
      <main className="flex flex-col md:flex-row pl-7 pr-4 pt-5">
        <div className="w-full md:w-[70%]">
          <Plan />
        </div>
        <div className="w-full md:w-[30%]">
          <Structure />
        </div>
      </main>
    </div>
  )
}

export default Page
