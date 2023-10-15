import React, { useEffect } from 'react'
import { useParams ,useLocation} from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { selectBook,selectBookError,selectBookStatus,fetchBookById} from './bookDetailsSlice'
import './BookDetails.css'
import { Link } from 'react-router-dom'

import {AiOutlineArrowLeft } from 'react-icons/ai'
const BookDetails = () => {
    const location = useLocation()
    console.log(location.state.search)
     const book = useSelector(selectBook)
        const staus = useSelector(selectBookStatus)
        const error = useSelector(selectBookError)
    const dispatch = useDispatch()
    
    const {id} = useParams()
    
    useEffect(() => {
         
        dispatch(fetchBookById(id))
    }, [dispatch,id])
   
  
  return (
   <div className="book_details">
    <div>
    <Link to={location.state.search ? `/books?${location.state.search}` : '/books'}>
    <AiOutlineArrowLeft  
    className='back_icon'/>
    </Link>
    </div>
   <div className="details_container">
        <img src={`http://localhost:3000/images/${book?.image}`} alt="book" />
        </div>
        <div className="details_container2">
          
          <h5>{book?.author}</h5>
          <h2>{book?.title}</h2>
          <p>{book?.description}</p>
          <h4>{book?.price}</h4>
          <button 
          >
            
            Add to Cart
          </button>
   </div> 
   </div>
  )
}

export default BookDetails