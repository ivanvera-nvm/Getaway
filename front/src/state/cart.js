import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUserCart = createAsyncThunk("SET_USER_CART", (userID) => {
  return axios
    .get(`http://localhost:3080/api/cart/${userID}`)
    .then((res) => res.data);
});

export const setCartCheckout = createAsyncThunk("SET_CART_CHECKOUT", (cartID) => {
  return axios
    .get(`http://localhost:3080/api/cart/submit/${cartID}}`)
    .then((res) => res.data);
});


export const userCartReducer = createReducer([], {
  [setUserCart.fulfilled]: (state, action) => action.payload,
});

export const userCartCheckoutReducer = createReducer([], {
  [setCartCheckout.fulfilled]: (state, action) => action.payload,
});
