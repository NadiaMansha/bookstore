
import React from 'react'
import './Books.css'
import { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { selectBooks ,selectStatus,selectError,fetchBooks} from './bookslice'
import { selectCategories,selectCategoryStatus,selectCategoryError ,fetchCategories} from '../categories/categoriesSlice'
import Book from '../../components/book/Book'
import { useSearchParams} from 'react-router-dom'


const Books = () => {
  const [searchParams,setSearchParams] = useSearchParams()
  const category = searchParams.get('category')
  const books = useSelector(selectBooks)
  const status = useSelector(selectStatus)
  const error = useSelector(selectError)
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)
  const categoryStatus = useSelector(selectCategoryStatus)
  const categoryError = useSelector(selectCategoryError)



 
  
  useEffect(() => {
    if(status==='idle'){
      dispatch(fetchBooks())
    }
    if(categoryStatus==='idle'){
      dispatch(fetchCategories())
    }
  }, [status, 
      categoryStatus,
    dispatch])

  const  filterBooks = (category) => {
    if(category){
      return books.filter(book => book.category.name.toLowerCase() === category.toLowerCase())
    }
    return books
  }

  return (
    <div className="books">
      
      <div className="filters">
        {
          status==='succeeded' && categoryStatus==='succeeded' &&
          categories.map(category =>
            <button 
            className={category.name === category ? 'active' : ''}
            onClick={() => setSearchParams({category: category.name})}
            >
            {category.name}
            </button>
          )

        }
          {
            category &&
           
        <button 
        className={category === 'clear' ? 'active' : ''}
        onClick={() => setSearchParams({})}
        >
        Clear
          </button>
}
        
      </div>
        <div className="books_container">
          
            {
              status === 'loading' && <div 
              className='loading'
              >Loading...</div>
            }
            {
              status === 'failed' && <div 
              className='error'
              >{error}</div>
            }
            {
               status === 'succeeded' && books.length===0 && <div
                className='no_books'
                >No books available</div>

            }
            {
              status === 'succeeded' && books.length > 0 &&
               
            
              filterBooks(category)?.map((book) => 
                <Book 
                key={book._id}
                searchParams={searchParams}
                id={book._id} image={`http://localhost:3000/images/${book.image}`} title={book.title} author={book.author} price={book.price}/>
              )
}

            </div>
    </div>
  )
}

export default Books