import React, { useEffect } from 'react'
import './Release.css'
import book5 from '../../assets/book5.png'
import book6 from '../../assets/book6.png'
import book7 from '../../assets/book7.png'
import book8 from '../../assets/book8.png'
import Book from '../book/Book'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { selectBooks,selectStatus,selectError,fetchBooks } from '../../features/books/bookslice'


const Release = () => {
  const dispatch = useDispatch()
  const books = useSelector(selectBooks)
  const status = useSelector(selectStatus)
  const error = useSelector(selectError)

  useEffect(() => {
    if(status==='idle'){
      dispatch(fetchBooks())
    }
  }, [status, dispatch])
  const filterBooks = (books) => {
    return books.slice(0,4)
  }

  return (
<div className="release" id='new-release'>
    <h1>New Release Books</h1>
    <div className="release_container">
    {
      status==='succeeded' &&
      filterBooks(books).map(book => <Book key={book._id} 
      id={book._id}
      title={book.title}
      image={book.image}
      author={book.author}
      price={book.price}

         />)
    
    }
    </div>
     <Link  to="/books"
     >View all products</Link>
     </div>
  )
}

export default Release