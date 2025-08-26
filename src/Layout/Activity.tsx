import { ProviderPlans } from '@/public/data'
import React from 'react'

const Activity = () => {
  return (
    <div 
      className="p-3 
        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800
        lg:overflow-y-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-200 mb-4 tracking-wide
                   text-center lg:text-left underline underline-offset-4 decoration-pink-400">
        Provider Plans
      </h1>

      {/* Provider Cards */}
      <div className="grid grid-cols-1 gap-4 w-full">
        {ProviderPlans.map((provider) => (
          <div 
            key={provider.id} 
            className="border border-gray-700 rounded-xl bg-neutral-900/70 shadow-md
                       hover:shadow-pink-400/30 transition">
            {/* Provider Title */}
            <div className="p-5 border-b border-gray-700">
              <h2 className="text-pink-400 text-sm md:text-base font-semibold">
                {provider.title}
              </h2>
            </div>

            {/* Plans */}
            <div className="px-4 py-3 space-y-4">
              {provider.plans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className="text-xs md:text-sm bg-neutral-800/40 p-3 rounded-lg">
                  <p className="text-white font-medium font-serif text-sm">
                    {plan.name}
                  </p>
                  <p className="text-green-400 font-semibold">{plan.price}</p>
                  <ul className="mt-2 ml-4 list-disc text-gray-400 space-y-1">
                    {plan.coverage.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activity
