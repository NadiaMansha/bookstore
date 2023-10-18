import { configureStore } from '@reduxjs/toolkit'
import bookslice from '../features/books/bookslice'
import cartSlice from '../features/cart/cartSlice'
import categoriesSlice from '../features/categories/categoriesSlice'
import authSlice from '../features/auth/authSlice'
import bookDetailsSlice from '../features/book-details/bookDetailsSlice'
import ordersSlice from '../features/orders/ordersSlice'
import searchslice from '../features/search/searchslice'

const  store = configureStore({
  reducer: {
    'books': bookslice,
    'cart': cartSlice,
    'categories': categoriesSlice,
    'auth': authSlice,
    'bookDetails': bookDetailsSlice,
    'orders': ordersSlice,
    'search': searchslice,
  },
})
export default store
