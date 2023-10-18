import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
        <h1>Contact Us</h1>
        <p>For any queries, please write to us </p>
        <input type="text"  placeholder='Email'/>
        <textarea placeholder='Message' />
        <button>Submit</button>
    </div>
  )
}

export default Contact