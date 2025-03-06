import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

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
  // RestoNest Paris location (fictional)
  const position = [48.851, 2.307];

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
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-amber-500 h-32"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded font-medium">
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
              details="5 Rue Dalou, 75015 Paris, France"
            />
            <ContactInfo 
              icon={<FaPhone size={20} />}
              title="Phone Number"
              details="+33 156 78 89 56"
            />
            <ContactInfo 
              icon={<FaEnvelope size={20} />}
              title="Email Address"
              details="restonest@mail.com"
            />
            <ContactInfo 
              icon={<FaClock size={20} />}
              title="Opening Hours"
              details="Mon - Fri: 7:00am - 10:00pm\nSat: 7:00am - 6:00pm\nSun: 8:00am - 6:00pm"
            />
            
            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 shadow-md">
              <MapContainer 
                center={position} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <b>RestoNest</b><br />
                    5 Rue Dalou, 75015 Paris<br />
                    Authentic French Cuisine
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
