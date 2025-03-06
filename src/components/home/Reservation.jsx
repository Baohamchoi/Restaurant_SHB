import React from "react";

const Reservation = () => {
  return (
    <div className="relative py-16 bg-gray-900">
      <div className="absolute inset-0 bg-gray-900 opacity-80 transition-opacity duration-500"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom-10 duration-500">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 transition-colors duration-300 hover:text-amber-600">
            Make a Reservation
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Name", type: "text", placeholder: "Your Name" },
              { label: "Email", type: "email", placeholder: "Your Email" },
              { label: "Date", type: "date" },
              { label: "Time", type: "time" },
              { label: "Phone", type: "tel", placeholder: "Your Phone" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 mb-2">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500 transition-all duration-300 hover:bg-gray-50"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-700 mb-2">Number of Guests</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500 transition-all duration-300 hover:bg-gray-50">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Special Request</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500 transition-all duration-300 hover:bg-gray-50 h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-amber-400 hover:to-amber-500"
              >
                Book a Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;