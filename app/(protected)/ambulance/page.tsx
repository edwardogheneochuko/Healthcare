import React from 'react'
import { Phone, Clock, MapPin, Ambulance } from 'lucide-react'

const AmbulancePage = () => {
  return (
    <div className="text-gray-200 px-6 py-10 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif text-pink-500">
          🚑 Ambulance Services
        </h1>
        <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
          Fast, reliable, and available 24/7 to ensure you or your loved ones 
          receive emergency medical attention without delay.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Emergency Contact */}
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:shadow-pink-500/20 transition">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-pink-400" /> Emergency Hotline
          </h2>
          <p className="text-sm text-gray-300">
            Call our 24/7 emergency line for immediate assistance.
          </p>
          <p className="mt-2 text-2xl font-bold text-pink-400">+234 800 123 4567</p>
        </div>

        {/* Availability */}
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:shadow-pink-500/20 transition">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-pink-400" /> Available 24/7
          </h2>
          <p className="text-sm text-gray-300">
            Our ambulance fleet operates round the clock, ensuring we are 
            always available during emergencies, day or night.
          </p>
        </div>

        {/* Coverage Area */}
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:shadow-pink-500/20 transition">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-pink-400" /> Coverage
          </h2>
          <p className="text-sm text-gray-300">
            We provide ambulance services across major cities and towns. 
            Our GPS-enabled fleet ensures the nearest unit responds quickly.
          </p>
        </div>
      </div>

      {/* How to Request Section */}
      <div className="mt-12 bg-gray-900/70 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-pink-500 flex items-center gap-2">
          <Ambulance className="w-6 h-6" /> How to Request an Ambulance
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm leading-relaxed">
          <li>Dial our emergency hotline number immediately.</li>
          <li>Provide patient details (name, age, condition).</li>
          <li>Share your exact location or nearest landmark.</li>
          <li>Stay on the line for instructions until help arrives.</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white cursor-pointer
        font-semibold rounded-xl shadow-md">
          🚑 Request Ambulance Now
        </button>
      </div>
    </div>
  )
}

export default AmbulancePage
