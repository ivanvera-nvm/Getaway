import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUserCart = createAsyncThunk("SET_USER_CART", (userID) => {
  return axios
    .get(`http://localhost:3080/api/cart/${userID}`)
    .then((res) => res.data);
});

export const userCartReducer = createReducer([], {
  [setUserCart.fulfilled]: (state, action) => action.payload,
});
