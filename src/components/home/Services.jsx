import React from 'react'
import { FaUtensils, FaWineGlassAlt, FaConciergeBell } from 'react-icons/fa'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-secondary text-white p-6 rounded-lg">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

const Services = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Best Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<FaUtensils size={32} />}
            title="Fine Dining"
            description="Experience our exquisite menu prepared by award-winning chefs."
          />
          <ServiceCard 
            icon={<FaWineGlassAlt size={32} />}
            title="Premium Bar"
            description="Enjoy our selection of fine wines and craft cocktails."
          />
          <ServiceCard 
            icon={<FaConciergeBell size={32} />}
            title="Private Events"
            description="Host your special occasions in our elegant private dining rooms."
          />
        </div>
      </div>
    </div>
  )
}

export default Services