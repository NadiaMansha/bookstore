import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from './cartSlice'
import CartItem from '../../components/cart-item/CartItem'
import './CartPage.css'
import { Link ,useNavigate} from 'react-router-dom'
import { selectAuthUserToken } from '../auth/authSlice'
import { Modal } from 'antd'

const CartPage = () => {
  const navigate = useNavigate()
  const cart = useSelector(cartSelector)
  const token = useSelector(selectAuthUserToken)
  const [isModalVisible, setIsModalVisible] = React.useState(false)
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
  cart.length > 0 && token ?
<button 

 className='checkout-btn'>
  <Link
  to='/payment'
  > Proceed to checkout</Link>
</button>:
<button
  className='checkout-btn'
  onClick={() => setIsModalVisible(true)}
  >
    Proceed to checkout
  </button>

}

<Modal
title="Login"
open={isModalVisible}
onOk={() => {setIsModalVisible(false)
  navigate('/login')}

}
onCancel={() => setIsModalVisible(false)}
>
  <p>You need to login to checkout</p>
  
  
</Modal>
  </div>
  )
}

export default CartPage