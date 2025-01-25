import 'bootstrap/dist/css/bootstrap.css';
import Headroom from 'react-headroom';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';

const App = () => {
  return (
    <>
    <Headroom>
      <Navbar />
    </Headroom>
    <Hero />
    <About />
    </>
  )
}

export default App