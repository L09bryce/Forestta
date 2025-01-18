import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar navbar-expand bg-light p-3 fw-semibold">
            <div className="container">
                <div className="navbar-nav ms-auto " id='navlist'>
                    <a href=""><li className='mx-5'>MENU</li></a>
                    <a href=""><li className='mx-5'>BOOKINGS</li></a>
                    <a href=""><li className='mx-5'>THE<br/>FORESTA</li></a>
                    <a href=""><li className='mx-5'>WEEKLY SPECIALS</li></a>
                    <a href=""><li className='mx-5'>CONTACTS</li></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar