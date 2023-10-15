import React from 'react'
import './Book.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { Link } from 'react-router-dom'

    const Book = ({
        searchParams,
        id,
        image,
        title,
        author,
        price,
    }) => {
        const dispatch = useDispatch()
  return (
    <div className="book">
        <Link to={`${id}`} 
        state={{search: searchParams?.toString()}}
        
        >
        <div className="book_image">
            <img src={image} alt="book" />
        </div>
        <div className="book_info">
            <h3>{title}</h3>
            <p>{author}</p>
            <h4>{price}</h4>
           
        </div>
        </Link>
        <button 
        cl
            onClick={() => dispatch(addToCart({ id,image,title,author,price}))}

            >ADD TO CART</button>
    </div>
  )
}

export default Book