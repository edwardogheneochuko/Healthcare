import React from 'react';
import { HeartPulse, Baby, Stethoscope, Shield, Ambulance } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="text-gray-200 px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-serif text-pink-500">
          🏥 Our Medical Services
        </h1>
        <p className="mt-3 text-gray-400 text-lg max-w-3xl mx-auto">
          We provide a wide range of healthcare services to meet your needs. 
          From preventive care to specialized treatments, your health is our top priority.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <HeartPulse className="w-10 h-10 text-pink-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
          <p className="text-sm text-gray-400">
            Comprehensive heart care including diagnosis, treatment, and prevention 
            of cardiovascular diseases.
          </p>
        </div>

        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <Baby className="w-10 h-10 text-pink-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
          <p className="text-sm text-gray-400">
            Specialized healthcare services for infants, children, and adolescents.
          </p>
        </div>

        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <span className="text-pink-400 text-4xl mb-3 block">🦷</span>
          <h3 className="text-xl font-semibold mb-2">Dentistry</h3>
          <p className="text-sm text-gray-400">
            Dental care including check-ups, cleanings, orthodontics, and more.
          </p>
        </div>

        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <Stethoscope className="w-10 h-10 text-pink-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">General Medicine</h3>
          <p className="text-sm text-gray-400">
            Routine check-ups, diagnosis, and treatment of common illnesses.
          </p>
        </div>

        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <Shield className="w-10 h-10 text-pink-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Preventive Care & Wellness</h3>
          <p className="text-sm text-gray-400">
            Vaccinations, screenings, lifestyle programs, and more.
          </p>
        </div>

        <div className="bg-gray-800/70 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
          <Ambulance className="w-10 h-10 text-pink-400 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
          <p className="text-sm text-gray-400">
            24/7 emergency medical response with advanced equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
