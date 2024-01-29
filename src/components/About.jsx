import React from 'react'
import HeroSection from './HeroSection'
import FeatureProducts from './FeatureProducts'

const About = () => {
  const data = {
    image: "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhbWlseSUyMHNob3BwaW5nfGVufDB8fDB8fHww",
    name: "sumon ecommerce",
  }
  return (
    <>
    <HeroSection Data={data}/>
    <FeatureProducts />
    </>
  )
}

export default About