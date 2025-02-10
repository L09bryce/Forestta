import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <BrowserRouter>
        <Routes>
          <Route path='Menu' element={<Menu />} />
        </Routes>

    </BrowserRouter> 
      
    </>
  )
}

export default App