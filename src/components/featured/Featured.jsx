import React from 'react'
import './Featured.css'
import book from '../../assets/book.png'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
   <div className="featured">
     <div className="featured_container1">
        <img src={book} alt="book" />
        </div>
        <div className="featured_container2">
          <h1>Featured Book</h1>
          <h5>By Timbur Hood</h5>
          <h2>Birds gonna be happy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
          <h4>45$</h4>
          <button 

          >
            <Link to="books">
            VIEW MORE</Link>
          </button>
   </div>

   </div>
  )
}

export default Featured