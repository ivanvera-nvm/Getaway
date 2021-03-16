import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

///Esta super hardcodeado, aca tendrian que usar un useSelector para traerse el id del usuario,
/// o quizas manejarse con querys desde el back, como prefieran (PD: esta ultima yo no la use mucho).


export const setOrders = createAsyncThunk("SET_ORDERS", () => {
  return axios.get("http://localhost:3080/api/order").then((res) => res.data);
});

export const setUserOrders = createAsyncThunk("SET_USER_ORDERS", (userId) => {
  return axios
    .get(`http://localhost:3080/api/order/${userId}`)
    .then((res) => res.data);
});

export const ordersReducer = createReducer([], {
  [setOrders.fulfilled]: (state, action) => action.payload,
});

export const userOrdersReducer = createReducer(null, {
  [setUserOrders.fulfilled]: (state, action) => action.payload,
});
