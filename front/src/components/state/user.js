import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";

export const setUser = createAction("SET_USER");


export const loginRequest = createAsyncThunk("LOGIN_REQUEST", (user) => {
  return axios
  .post("http://localhost:3080/api/users/login", user)
  .then((res) => {
    console.log(res);
      return res.data;
    });
});

const userReducer = createReducer([], {
  [setUser]: (state, action) => action.payload,
  [loginRequest.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
