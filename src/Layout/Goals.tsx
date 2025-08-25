
import { Heart, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const Goals = () => {
     const [selected, setSelected] = useState<number[]>([])
      const toggleCircle = (index: number) => {
        setSelected((prev) =>
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        )
      }
      const days = ['M', 'T', 'W', 'T', 'F', 'Sa', 'S']
    
  return (
    <div className="lg:px-4 xl:px-6">
          <h1 className="text-lg md:text-sm font-bold text-gray-200 tracking-wide mb-4">
            Weekly Goals
          </h1>
    
          <ul className="grid grid-cols-7 md:gap-5">
            {days.map((day, index) => (
              <li key={index} className="flex flex-col items-center">
                {/* Arrow above circle when selected */}
                {selected.includes(index) && (
                  <ChevronDown
                    size={16}
                    className="text-pink-400 mb-1 animate-bounce"
                  />
                )}
                <div
                  onClick={() => toggleCircle(index)}
                  className={`w-12 h-12 md:h-6 md:w-6 xl:w-10 xl:h-10
                    flex items-center justify-center 
                    rounded-full border transition-all duration-300 
                    cursor-pointer
                    ${
                      selected.includes(index)
                        ? 'bg-gradient-to-tr from-pink-600 to-pink-500 border-pink-400 shadow-lg scale-105'
                        : 'border-gray-600 hover:border-pink-400 hover:scale-105'
                    }`}>
                  {selected.includes(index) && (
                    <Heart size={16} className="text-white drop-shadow" />
                  )}
                </div>
    
                <span className="mt-2 text-sm text-gray-300 font-medium">
                  {day}
                </span>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Goals
