import React from 'react'

const Reservation = () => {
  return (
    <div className="relative py-16">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gray-900 opacity-80">
        {/* This div is for the dark overlay on the image */}
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Make a Reservation</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Date</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Time</label>
              <input 
                type="time" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Number of Guests</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Your Phone"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Special Request</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-primary hover:bg-amber-600 text-white px-8 py-3 rounded font-medium">
                Book a Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reservation