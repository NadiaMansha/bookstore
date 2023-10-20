import React from 'react'
import './Home.css'
import books from '../../assets/book9.png'
import { Categories } from '../categories/Categories'
import Featured from '../featured/Featured'
import Release from '../release/Release'


const Home = () => {
  return (
    <div className="home">
       <div className="main">
    <div className="heading">
        <h1>ipsum dolor si</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, <br />
         libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
        </p>
    </div>
    <div className="home-image">
        <img src={books} alt="books" />
    </div>
    </div> 
  <Categories />
    <Release />
    <Featured /> 
  
    </div>
  )
}

export default Home