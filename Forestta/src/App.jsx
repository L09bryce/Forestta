import 'bootstrap/dist/css/bootstrap.css';
import Headroom from 'react-headroom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Information from './Components/Information';
import { useState } from 'react';
import Drinks from './Components/Drinks';
import Enquiries from './Components/Enquiries';

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
    </>
  )
}

export default App