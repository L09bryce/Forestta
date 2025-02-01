import React from 'react'
import './Enquiries.css'

const Enquiries = () => {
  return (
    <div className='enquiries'>
        <div className="cards" id='cards'>
            <div className="card bg-light" id='card1' style={{width: '400px', height: '300px'}}>
                <p>GRAB A MEAL IN THE COMFORT OF YOUR HOME.</p>
                <button>ORDER NOW</button>
            </div>
            <div className="card" id='card2'>
                <p>DINE WITH US AT OUR RESTAURANT.</p>
                <button>FIND A TABLE</button>
            </div>
        </div>
          {/* <div className="card2">  <div className="card">
                <div><img src="Item16.jpeg" alt="" /></div>
                <div><p>PLANNING A LARGER GATHERING OR A PRIVATE EVENT?</p></div>
                <button>ENQUIRE NOW</button>
            </div>
            </div> */}
    </div>
  )
}

export default Enquiries