import { createReducer, createAction } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");
export const setProduct = createAction("SET_PRODUCT");

const productsReducer = createReducer([], {
  [setProducts]: (state, action) => action.payload,
  [setProduct]: (state, action) => action.payload,
});

export default productsReducer;