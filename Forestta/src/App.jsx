import 'bootstrap/dist/css/bootstrap.css';
import Headroom from 'react-headroom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Information from './Components/Information';

const App = () => {
  return (
    <>
    <Headroom>
      <Navbar />
    </Headroom>
    <Hero />
    <About />
    <Services />
    <Information /> 
    </>
  )
}

export default App