import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='home'>
       <small className='py-3'>
            THE<br/><span>
            Foresta
        </span>
       </small>
       <div className='ml-5 mb-5' id='hero'>
        <p>
            <div className='text-warning fw-bold fs-1'>SAVOUR THE</div> <br/> <span>freshness</span>
        </p>
       </div>
    </div>
  )
}

export default Hero