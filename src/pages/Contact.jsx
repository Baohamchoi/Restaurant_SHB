import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactInfo = ({ icon, title, details }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
        <span className="text-primary">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{details}</p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary h-32"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-amber-600 text-white px-6 py-3 rounded font-medium">
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ContactInfo 
              icon={<FaMapMarkerAlt size={20} />}
              title="Our Location"
              details="123 Restaurant Street, Food City, FC 12345"
            />
            <ContactInfo 
              icon={<FaPhone size={20} />}
              title="Phone Number"
              details="+1 (555) 123-4567"
            />
            <ContactInfo 
              icon={<FaEnvelope size={20} />}
              title="Email Address"
              details="info@restorestaurant.com"
            />
            <ContactInfo 
              icon={<FaClock size={20} />}
              title="Opening Hours"
              details="Monday - Friday: 8:00 AM - 10:00 PM
                      Saturday: 9:00 AM - 11:00 PM
                      Sunday: 10:00 AM - 9:00 PM"
            />
            
            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact