import React from 'react'
import './Categories.css'
import book1 from '../../assets/book1.png'
import book2 from '../../assets/book2.png'
import book3 from '../../assets/book3.png'
import { Category } from '../category/Category'

export const Categories = () => {
  return (
    <div className="categories">
          <p>Categories</p>
        <div className="top-container">
          
        <h2>Explore Our Top Categories</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum quibusdam voluptatibus, quos, quas, voluptates
            voluptatem voluptate doloribus unde quia quod? Quisquam voluptatum
            quibusdam voluptatibus, quos, quas, voluptates voluptatem
            voluptate doloribus unde quia quod?
            
        </p>
        </div>
        <div className="categories-container">
         <Category image={book1} title="Fiction" description="Lorem ipsum  Quisquam voluptate doisquam voluptatum quibusdam voluptatibus, quos, quas, voluptates voluptatem voluptate doloribus unde quia quod?" />
          <Category image={book2} title="Non-Fiction" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. s voluptatem voluptate doloribus unde quia quod? uivoluptatem voluptate doloribus unde quia quod?" />
          <Category image={book3} title="Children" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quibusdam voluptatibus, quos, quas, voluptates voluptatem voluptate doloribus unde quia quod?" />
        </div>
      
      <button>VIEW MORE</button>
    </div>
  )
}
