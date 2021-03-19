import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUserCart = createAsyncThunk("SET_USER_CART", (userID) => {
  return axios
    .get(`http://localhost:3080/api/cart/${userID}`)
    .then((res) => res.data);
});

export const setCartCheckout = createAsyncThunk("SET_CART_CHECKOUT", (cartId) => {
  return axios
    .post('http://localhost:3080/api/cart/submit/', {cartId})
    .then((res) => res.data);
});

export const updateCartStatus = createAsyncThunk("UPDATE_CART_STATUS", (cartId, email) => {
  return axios
    .put('http://localhost:3080/api/cart/status/', {cartId, email})
    .then((res) => res.data);
});

export const setHistoryOrders = createAsyncThunk("SET_HISTORY_ORDERS", (userId) => {
  return axios
    .get('http://localhost:3080/api/cart/history/:userId', {userId})
    .then((res) => res.data);
});

export const userCartReducer = createReducer([], {[setUserCart.fulfilled]: (state, action) => action.payload,
  [setUserCart.fulfilled]: (state, action) => action.payload,
  [updateCartStatus.fulfilled]: (state, action) => action.payload
});

export const userCartCheckoutReducer = createReducer([], {
  [setCartCheckout.fulfilled]: (state, action) => action.payload,
});

export const historyOrdersReducer = createReducer([], {
  [setHistoryOrders.fulfilled]: (state, action) => action.payload,
})
