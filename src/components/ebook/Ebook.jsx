import React from 'react'
import './Ebook.css'
import book4 from '../../assets/book4.png'

export const Ebook = () => {
  return (
    <div className="ebook">
        <div className="ebook_container1">
            <h5>ebooks</h5>
          <h1>Access, Read, Practice & Engage
with Digital Content (eBook) </h1>
          <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <div className="input_container">
                <input type="text" placeholder="Enter your email address" />
                <button>Login</button>
           </div>
        </div>
        <div className="ebook_container2">
         <img src={book4} alt="" />
        </div>
    </div>
  )
}
