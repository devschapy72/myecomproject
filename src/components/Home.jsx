import React from 'react'
import HeroSection from './HeroSection'
import TrustedBrand from '../trusted_brand/TrustedBrand'
import Security from './Security'

const Home = () => {
  const data = {
    image: "https://st4.depositphotos.com/5653638/40616/i/450/depositphotos_406160128-stock-photo-cheerful-indian-family-shopping-diwali.jpg",
    name: "sumon store"
  }
  return (
    <>
    <HeroSection Data={data}/>
      <Security/>
    <TrustedBrand/>
    </>
  )
}

export default Home