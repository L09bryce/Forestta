import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {


  return (
    <div>
        <div className="navbar navbar navbar-expand-md bg-light py-3 fw-semibold">
            <div className="container">
                <div className="navbar-nav ms-auto" id='navlist'>
                    <a href=""><li className='mx-4'>MENU</li></a>
                    <a href=""><li className='mx-4'>BOOKINGS</li></a>
                    <a href=""><li className='mx-4'>BOOKINGS</li></a>
                    <a href=""><li className='mx-4'>THE<br/>FORESTA</li></a>
                    <a href=""><li className='mx-4'>WEEKLY SPECIALS</li></a>
                    <a href=""><li className='mx-4'>CONTACTS</li></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar