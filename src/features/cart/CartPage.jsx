import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from './cartSlice'
import CartItem from '../../components/cart-item/CartItem'
import './CartPage.css'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const cart = useSelector(cartSelector)
  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  return (
    <div className="cart">
    <div>
      <h3>Shopping Cart</h3>
      {cart?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price} 
          quantity={item.quantity}
        />
      ))}
    </div>
    <h3>ORDER SUMMARY</h3>
    <p className="total__p">
  Total ({getTotal().totalQuantity} items) 
  : <strong>${getTotal().totalPrice}</strong>
</p>{
  cart.length > 0 &&
<button className='checkout-btn'>
  <Link
  to='/payment'
  > Proceed to checkout</Link>
</button>
}
  </div>
  )
}

export default CartPage