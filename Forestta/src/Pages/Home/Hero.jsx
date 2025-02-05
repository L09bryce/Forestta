import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='home'>
    <div className='element'>
       <small className='py-3'>
            THE<br/><span>
            Foresta
        </span>
       </small>
       <div className='ml-5 mb-5' id='hero'>
        <p>
            <div className='text-warning fw-bold fs-1'>SAVOUR THE</div> <span className='fw-100'>freshness</span>
        </p>
       </div>
       <div id='icon'>
        <i className="ri-arrow-down-line" ></i>
       </div>
    </div>
    <div className='image'>
         <img src="foods.jpg" alt=""/>
       </div>
  </div>     
  )
}

export default Hero