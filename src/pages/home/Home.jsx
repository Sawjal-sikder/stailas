import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './herosection/Hero'
import SecondarySection from './secondarySection/SecondarySection'
import WomenLove from './thirdSection/WomenLove'
import WorkProcess from './workprocess/WorkProcess'
import Service from './getService/Service'
import Cart from './SingleCart/Cart'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SecondarySection />
      <WomenLove />
      <WorkProcess />
      <Service />
      <Cart />
      <Footer />
    </>
  )
}

export default Home
