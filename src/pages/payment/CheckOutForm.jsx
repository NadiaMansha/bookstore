import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { cartSelector, empryCart } from "../../features/cart/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthUserToken } from "../../features/auth/authSlice";
const CardForm = ({
   formData,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const userToken = useSelector(selectAuthUserToken);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    // Collect card details securely.
    const result = await stripe.createToken(elements.getElement(CardElement));

    if (result.error) {
      setError(result.error.message);
    } else {
      // Send the card token to your backend server.
      const token = result.token;
      sendTokenToServer(token);
    }
  };

  const sendTokenToServer = async (token) =>{
    // Send the token to your server using a fetch or Axios.
    const response=await fetch("https://90wb7h7uk0.execute-api.us-east-1.amazonaws.com/dev/books/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        token: token.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        amount: getTotal().totalPrice ,
        books: cart,
      }),
    })
    const data=await response.json();
    console.log(data);
    if(data.success===true){
      dispatch(empryCart());
      alert("Payment Successfull");
      navigate("/");
      
    }
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement 
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: 'black',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
       />
      <button  
      className="card__button"
      type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CardForm;
