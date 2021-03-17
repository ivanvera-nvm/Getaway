import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setOrders = createAsyncThunk("SET_ORDERS", () => {
  return axios.get("http://localhost:3080/api/order").then((res) => res.data);
});

export const setUserOrders = createAsyncThunk("SET_USER_ORDERS", (userID) => {
  return axios
    .get(`http://localhost:3080/api/order/${userID}/product`)
    .then((res) => res.data);
});

export const ordersReducer = createReducer([], {
  [setOrders.fulfilled]: (state, action) => action.payload,
});

export const userOrdersReducer = createReducer([], {
  [setUserOrders.fulfilled]: (state, action) => action.payload,
});

