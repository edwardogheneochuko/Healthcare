import React from 'react'
import { Calendar, Phone, FileText } from 'lucide-react'

const AppointmentsPage = () => {
  return (
    <div className="text-gray-200 px-6 py-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-serif text-pink-500">
          📅 Book an Appointment
        </h1>
        <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
          Schedule your appointment with ease. Choose your preferred doctor, 
          date, and time. Our online booking ensures no waiting and 
          instant confirmation.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Online Booking Form */}
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-pink-400" /> Online Booking Form
          </h2>
          <form className="space-y-4 text-sm">
            <div>
              <label className="block mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+234 800 123 4567"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-1">Preferred Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-1">Preferred Time</label>
              <input 
                type="time" 
                className="w-full px-3 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block mb-1">Reason for Visit</label>
              <textarea 
                placeholder="Describe your health concern"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-pink-500"
                rows={3}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-2 bg-pink-500 cursor-pointer
               hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Availability Calendar + Emergency Contacts */}
        <div className="space-y-6">
          {/* Availability Calendar */}
          <div className="bg-gray-800/70 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pink-400" /> Availability Calendar
            </h2>
            <p className="text-sm text-gray-300 mb-2">
              Choose from available slots. Our doctors’ schedule is updated daily.
            </p>
            <ul className="grid grid-cols-3 gap-2 text-center text-sm">
              <li className="p-2 rounded-lg bg-pink-500/20 border border-pink-400 text-pink-300">Mon 10:00 AM</li>
              <li className="p-2 rounded-lg bg-pink-500/20 border border-pink-400 text-pink-300">Tue 12:30 PM</li>
              <li className="p-2 rounded-lg bg-pink-500/20 border border-pink-400 text-pink-300">Wed 3:00 PM</li>
              <li className="p-2 rounded-lg bg-gray-700 text-gray-500 line-through">Thu Full</li>
              <li className="p-2 rounded-lg bg-pink-500/20 border border-pink-400 text-pink-300">Fri 9:00 AM</li>
              <li className="p-2 rounded-lg bg-pink-500/20 border border-pink-400 text-pink-300">Sat 11:00 AM</li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-gray-800/70 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-400" /> Emergency Contacts
            </h2>
            <p className="text-sm text-gray-300">
              For urgent medical needs, please call our emergency hotline:
            </p>
            <p className="mt-2 text-2xl font-bold text-pink-400">+234 800 987 6543</p>
            <p className="mt-1 text-sm text-gray-400">Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentsPage
