import React from 'react'
import Banner from "./Banner";
import Nav from "./Nav";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import '../App.css';
const Main = () => {
  return (
    <div className='mainpage'>
 <Banner />
  <Nav />
      <Services />
      <About/>
      <Contact />



    </div>
  )
}

export default Main