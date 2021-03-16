import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("SET_USER");

export const fetchMe = createAsyncThunk('FETCH_ME', () => {
  const loginToken = JSON.parse(localStorage.getItem('user')).token;
  return axios.get(`http://localhost:3080/api/me`,  
  {
      headers: { Authorization: `Bearer ${loginToken}`}
  })
  .then(r => {
    return r.data
  })  
})

export const loginRequest = createAsyncThunk("LOGIN_REQUEST", (user) => {
  return axios
    .post("http://localhost:3080/api/users/login", user)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    })
    .catch("Error en las credenciales");
});

export const clearUser = createAction('CLEAR_USER')


const userReducer = createReducer([], {
  [fetchMe.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => action.payload,
  [loginRequest.fulfilled]: (state, action) => action.payload,
  [clearUser]:(state, action) => {} 
});

export default userReducer;
