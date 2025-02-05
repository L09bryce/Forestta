import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Headroom from 'react-headroom'
import Hero from './Pages/Home/Hero';
import About from './Pages/Home/About';
import Services from './Pages/Home/Services';
import Information from './Pages/Home/Information';
import { useState } from 'react';
import Drinks from './Pages/Home/Drinks';
import Enquiries from './Pages/Home/Enquiries';
import Footer from './Pages/Home/Footer';
import Navbar from './Pages/Home/Navbar';

const App = () => {
  const [imageCount, setImageCount] = useState(0);
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
      <About />
      <Services />
      <Information/> 
      <Drinks />
      <Enquiries />
      <Footer />
    </>
  )
}

export default App