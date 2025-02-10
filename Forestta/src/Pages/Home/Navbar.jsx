import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div>
        <div className="navbar navbar navbar-expand-md bg-light py-3 fw-semibold">
            <div className="container">
                <div className="navbar-nav ms-auto" id='navlist'>
                    <Link to="Menu"><li className='mx-4'>MENU</li></Link>
                    <Link to="Bookings"><li className='mx-4'>BOOKINGS</li></Link>
                    <Link to=""><li className='mx-4'>BOOKINGS</li></Link>
                    <Link to=""><li className='mx-4'>THE<br/>FORESTA</li></Link>
                    <Link to=""><li className='mx-4'>WEEKLY SPECIALS</li></Link>
                    <Link to=""><li className='mx-4'>CONTACTS</li></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar