import React, { useState } from 'react'
import './Information.css'

const Information = () => {
  const [state, setState] = useState()
  return (
    <div className='informatipon'>
      <div>
        <div className="info">
            <div className='simple'>
                <h2 className='text-center fw-medium'>UNWIND AND INDULGE IN <br /> DELICIOUS DELIGHTS</h2>
                <div className='pt-5 text-center fw-light'>
                    <p >From scrumptious breakfast options and premium coffee blends to our luscious burgers, signature schnitzels and steaks, we offer a delicious mix of Australian-Italian cuisine.</p>
                    <p>We aim to deliver a comfortable yet memorable dining experience and serve food that is prepared with love using fresh, locally sourced ingredients.</p>
                    <p>So, come on in and satisfy your cravings!</p>
                </div>
            </div>
             <div className="fooditems">
                <div className="cardz">
                  <div className="buttons fw-light">
                    <button className='button1'><i className="ri-arrow-left-line"></i></button>
                   <button className='button2'><i className="ri-arrow-right-line"></i></button>
                    </div>
                  <img src="Item7.webp" alt="" />
                  <img src="Item9.jpg" alt="" />
                  <img src="Item10.jpeg" alt="" />
                  <img src="Item11.jpeg" alt="" />
                  <img src="Item12.jpeg" alt="" />
                  <img src="Item13.jpeg" alt="" />
                  <img src="Item14.webp" alt="" />
                </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Information