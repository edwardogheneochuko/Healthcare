import React from 'react'

const Title = () => {
  return (
    <div className="text-gray-300">
      {/* Heading */}
      <h1 className="font-semibold tracking-wide text-lg text-center">
        Your Health, Our Priority
      </h1>
      <h2 className="font-medium text-center">
        We deliver and provide the best services
        <span className="text-green-500 text-2xl font-serif"> 24/7</span>
      </h2>

      {/* Info Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* About Us */}
        <div className="p-6 bg-gray-800/70 rounded-xl shadow-md hover:shadow-green-500/20 transition">
          <h3 className="text-2xl font-semibold font-serif mb-3 border-b border-gray-700 pb-1">
            About <span className="text-green-500">Us</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We are a dedicated healthcare provider committed to improving lives 
            through compassionate care and advanced medical services. 
            Our team ensures every patient receives personalized attention 
            and world-class treatment.
          </p>
        </div>

        {/* Mission */}
        <div className="p-6 bg-gray-800/70 rounded-xl shadow-md hover:shadow-green-500/20 transition">
          <h3 className="text-2xl font-semibold font-serif mb-3 border-b border-gray-700 pb-1">
            Our Miss<span className="text-green-500">ion</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Our mission is to make healthcare accessible, affordable, 
            and reliable for all. By combining modern medical technology 
            with human compassion, we deliver care anytime, anywhere.
          </p>
        </div>

        {/* Values */}
        <div className="p-6 bg-gray-800/70 rounded-xl shadow-md hover:shadow-green-500/20 transition">
          <h3 className="text-2xl font-semibold font-serif mb-3 border-b border-gray-700 pb-1">
            Our Values
          </h3>
          <p className="text-sm leading-relaxed">
            We uphold integrity, compassion, innovation, and respect. 
            Guided by the belief that health is life’s most valuable asset, 
            we support patients with trust, transparency, and excellence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Title
