import React from 'react'
import './Enquiries.css'

const Enquiries = () => {
  return (
    <div className='enquiries'>
      <section>
        <div className="" id='card1'>
          <div className="cardbody">
            <p className='fw-semibold'>GRAB A MEAL IN THE COMFORT OF YOUR HOME.</p>
            <button>ORDER NOW</button>
          </div>
        </div>
        <div className="" id='card2'>
          <div className="cardbody">
            <p className='fw-semibold'>DINE WITH US AT OUR RESTAURANT.</p>
            <button>FIND TABLE</button>
          </div>
        </div>
        </section>
         <div className='d-flex' id='card3'>
          <div className="cardbody">
            <div>
            <img src="Item19.jpg" alt="" /></div>
          </div>
           <div>
            <p>PLANNING A LARGER GATHERING OR A PRIVATE EVENT?</p>
            <button>ENQUIRE NOW</button>
            </div>
         </div>

    </div>
  )
}

export default Enquiries