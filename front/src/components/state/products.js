import { createReducer, createAction } from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");

const productsReducer = createReducer([], {
  [setProducts]: (state, action) => action.payload,
});

export default productsReducer;