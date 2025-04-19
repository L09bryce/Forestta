import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {


  return (
    <div>
        <div className="navbar navbar navbar-expand-md bg-light py-3 fw-semibold">
            <div className="container">
                <div className="navbar-nav ms-auto" id='navlist'>
                    <li className='mx-4'><Link to='/menu'>MENU</Link></li>
                    <li className='mx-4'>BOOKINGS</li>
                    <li className='mx-4'>BOOKINGS</li>
                    <li className='mx-4'>THE<br/>FORESTA</li>
                    <li className='mx-4'>WEEKLY SPECIALS</li>
                    <li className='mx-4'>CONTACTS</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar