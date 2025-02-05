import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div><h2 className='text-center p-5'>FOODS, FRIENDS AND A CHILL VIBE</h2></div>
          <div className='paraphs text-center'>
            <p className='my-4'>Welcome to The Forestta, an inviting space where you can unwind and indulge in delicious delights in a laidback atmosphere.</p>

           <p className='my-4'>With a vivid forest themed indoor decor and a lively al fresco patio, our restaurant is designed to accommodate a variety of preferences.</p>

           <p className='my-4'>Did we mention you can also bring your furry friends along?</p>
           <button>Order Now</button>
          <button>Book Space</button>
        </div>
    </div>
  )
}

export default About