import React from 'react'
import './Release.css'
import book5 from '../../assets/book5.png'
import book6 from '../../assets/book6.png'
import book7 from '../../assets/book7.png'
import book8 from '../../assets/book8.png'
import Book from '../book/Book'
import { Link } from 'react-router-dom'

const Release = () => {
  return (
<div className="release" id='new-release'>
    <h1>New Release Books</h1>
    <div className="release_container">
     <Book image={book5} title='Birds gonna be happy' author='By Timbur Hood' price='45$'/>
        <Book image={book6} title='Birds gonna be happy' author='By Timbur Hood' price='45$'/>
        <Book image={book7} title='Birds gonna be happy' author='By Timbur Hood' price='45$'/>
        <Book image={book8} title='Birds gonna be happy' author='By Timbur Hood' price='45$'/>
       
    </div>
     <Link  to="/books"
     >View all products</Link>
     </div>
  )
}

export default Release