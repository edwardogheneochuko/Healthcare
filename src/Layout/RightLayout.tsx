import { Heart } from 'lucide-react'
import React, { useState } from 'react'

const RightLayout = () => {
  const borderStyles =
    'border p-2.5 xl:p-3.5 w-fit rounded-full border-gray-500 cursor-pointer duration-200 flex items-center justify-center'

  const [selected, setSelected] = useState<number[]>([])

  const toggleCircle = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }
  const days = ['M', 'T', 'W', 'T', 'F', 'Sa', 'S'] // first letters Mon → Sun

  return (
    <div className='lg:px-2 xl:px-5'>
      <h1 className='text-gray-300 text-sm font-bold'>
        Weekly Goals
      </h1>
      <ul className='grid grid-cols-7 gap-7 m-3'>
        {days.map((day, index) => (
          <li key={index} className="flex flex-col items-center">
            <div
              onClick={() => toggleCircle(index)}
              className={`${borderStyles} ${
                selected.includes(index) ? 
                'bg-pink-700 border-pink-500' : ''
              }`}>
              {selected.includes(index) && 
              <Heart size={10} className="text-white" />}
            </div>
            <span className="mt-1 text-xs text-gray-300 font-medium">
              {day}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RightLayout
