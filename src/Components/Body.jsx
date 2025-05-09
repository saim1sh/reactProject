import React from 'react'
import Header from './Header'
import Heero from './Heero'
import Logo from './Logo'
import Section from './Section'
import Section2 from './Section2'
import Testimonial from './Testimonial'
import Pricing from './Pricing'
import Faq from './Faq'
import Trial from './Trial'
import Footer from './Footer'
import Section3 from './Section3'

function Body() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header  />
      <Heero />
      <Logo />
      <Section />
      <Section3 />
      <Section2 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
      
   </div>
  )
}

export default Body