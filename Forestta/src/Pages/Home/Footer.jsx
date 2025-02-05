import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='d-flex'>
        <div >
            <div className='logo text-center'>
                <p><span>THE</span><br />FORESTA<br />
                <small>CAFE BAR RESTAURANT</small></p>
            </div>
            <div className='d-flex'>
                <div className='hrs text-center'><h2>OPENING HOURS</h2>
            <p><span>Monday to Saturday </span> <br />7:00A.M - 9:00 P.M <br/><span>Sunday</span> <br/> 7:30 A.M to 9:00 P.M</p></div>
            <div>
                <div className='location text-center'><h2>COME, SEE US</h2><p>60 Pier St, Altona VIC 3018, <br/>Australia</p></div>
                 <div className='contact text-center'><h2>Contact Us </h2>
                <br /><p>foresttaaltona@gmail.com <br />0740105912</p>
            </div>
                </div>
            </div>
        </div>
        <div><img src="Item20.png" alt="" /></div>
        </div>

    </div>
  )
}

export default Footer