import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='offered'>
            <p>-PREMIUM COFFEE -FRESH PRODUCE -RELISHING FLAVOURS</p>
        </div>
        <div className="card1">
             <div className="card d-flex" style={{backgroundColor: 'green'}}>
            <div className="row">
                <div className='col-5 fs-25'><p>FRESH PRODUCE <br/><span>LOCALLY PRODUCED</span></p></div>
            <div className='col-7'><img src="Item1.jpg" alt="" /></div>
            </div>
        </div>
        </div>
        <div className="card2">
            <div className="card d-flex" style={{backgroundColor: 'greenyellow'}}>
            <div className="row">
                <div className='col-5 fs-25'><p>CULINARY DELIGHTS <br/><span>FRESH FLAVOURS</span></p></div>
            <div className='col-7'><img src="Item5.webp" alt="" /></div>
            </div>
        </div>
        </div>
        <div className="card3">
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