import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Education from './components/Education'
import Project from './components/Project'
import ContactSection from './components/Contact'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Project/>
      <ContactSection/>
      <Footer/>
      <ScrollToTop color='white' smooth style={{backgroundColor:'#3B82F6', display:'flex', alignItems:'center', justifyContent:'center'}}/>
    </div>
  )
}

export default App
