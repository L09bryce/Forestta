import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const Services = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({ target: targetRef});
    const x = useTransform(scrollYProgress, [0, 2], ['100%', '-100%'])
  return (
    <div className='services' ref={targetRef}>
        <div className='offered' >
            <motion.div className='container' style={{x}}><p>-PREMIUM COFFEE -FRESH PRODUCE -RELISHING</p></motion.div>
        </div>
        <div className="cards mt-5">
             <div className="card d-flex" style={{backgroundColor: 'green'}}>
            <div className="row">
                <div className='col-5 fs-25'><p>FRESH PRODUCE <br/><span>LOCALLY PRODUCED</span></p></div>
            <div className='col-7'><img src="Item1.jpg" alt="" /></div>
            </div>
        </div>
            <div className="card d-flex" style={{backgroundColor: 'greenyellow'}}>
            <div className="row">
                <div className='col-5 fs-25'><p>CULINARY DELIGHTS <br/><span>FRESH FLAVOURS</span></p></div>
            <div className='col-7'><img src="Item5.webp" alt="" /></div>
            </div>
        </div>
            <div className="card d-flex" style={{backgroundColor: 'brown'}}>
            <div className="row">
                <div className='col-5 fs-25'><p>FINEST COFFEE <br/><span>LOCALLY CRAFTED</span></p></div>
            <div className='col-7'><img src="Item4.webp" alt="" /></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services