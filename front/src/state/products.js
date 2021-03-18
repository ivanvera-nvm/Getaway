import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const setProducts = createAsyncThunk("SET_PRODUCTS", () => {
  return axios
    .get("http://localhost:3080/api/products")
    .then((res) => res.data)
});

export const setProduct = createAsyncThunk("SET_PRODUCT", (id) => {
  return axios
    .get(`http://localhost:3080/api/products/${id}`)
    .then((res) => res.data)
});

export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", (id) => {
  console.log('LLEGANDO');
  return axios
    .delete(`http://localhost:3080/api/products/${id}`)
    .then(() => alert(`Se elimino el producto ${id}`));
});

export const setAdminProducts = createAsyncThunk("SET_ADMIN_PRODUCTS", () => {
  return axios
    .get("http://localhost:3080/api/admin/products")
    .then((res) => res.data)
});

const productsReducer = createReducer([], {
  [setProducts.fulfilled]: (state, action) => action.payload
});

export const productReducer = createReducer([], {
  [setProduct.fulfilled]: (state, action) => action.payload,
  [deleteProduct.fulfilled]: (state, action) => action.payload
})

export const adminProductsReducer = createReducer([], {
  [setAdminProducts.fulfilled]: (state, action) => action.payload
})

export default productsReducer;