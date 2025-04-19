import 'bootstrap/dist/css/bootstrap.css'
// import { Route, Routes } from 'react-router-dom';
import Headroom from 'react-headroom'
import Hero from './Pages/Home/Hero';
import About from './Pages/Home/About';
import Services from './Pages/Home/Services';
import Information from './Pages/Home/Information';
import Drinks from './Pages/Home/Drinks';
import Enquiries from './Pages/Home/Enquiries';
import Footer from './Pages/Home/Footer';
import Navbar from './Pages/Home/Navbar';
import Menu from './Pages/Home/Menu';
import { Route, Routes } from 'react-router-dom';

const App = () => {
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
        <Routes>
          <Route path='/menu' element={<Menu />} />
        </Routes>
      
    </>
  )
}

export default App