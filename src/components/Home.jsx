import React from 'react'
import Hero from './Hero'
import PopularDishes from './PopularDishes'
import Services from './Services'
import AboutSection from './AboutSection'
import BlogSection from './BlogSection'
import Reservation from './Reservation'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularDishes />
      <Services />
      <AboutSection />
      <BlogSection />
      <Reservation />
    </div>
  )
}

export default Home