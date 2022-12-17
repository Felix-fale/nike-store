import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItems: [], // let suppose Database
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const temp = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(temp);
    },
  },
});

export const { setOpenCart, setCloseCart, setAddItemToCart } =
  CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export default CartSlice.reducer;
