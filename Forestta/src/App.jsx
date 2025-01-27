import 'bootstrap/dist/css/bootstrap.css';
import Headroom from 'react-headroom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';

const App = () => {
  return (
    <>
    <Headroom>
      <Navbar />
    </Headroom>
    <Hero />
    <About />
    <Services /> 
    </>
  )
}

export default App