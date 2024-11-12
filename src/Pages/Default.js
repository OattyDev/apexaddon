import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from '../components/Hero.jsx';
import Featured from '../components/Featured.jsx';
import Signup from '../components/Signup.jsx';
import Footer from '../components/Footer.jsx';

const Default = () => {
  return (
    <div>
    <Navbar/>
    <Hero />
    <Featured />
    <Signup />
    <Footer />
    </div>
  )
}

export default Default
