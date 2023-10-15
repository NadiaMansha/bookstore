import { createSlice } from '@reduxjs/toolkit';

const cart=JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: cart,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    empryCart: (state) => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});


export const cartSelector = (state) => state.cart.cart;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  empryCart
} = cartSlice.actions;
export default cartSlice.reducer;