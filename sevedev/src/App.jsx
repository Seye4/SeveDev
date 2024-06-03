import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import HireMe from './components/HireMe'
import Footer from './components/Footer'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <HireMe />
      <Footer />
    </>
  )
}

export default App   