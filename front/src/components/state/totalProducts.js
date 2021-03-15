import { createReducer, createAction } from "@reduxjs/toolkit";

export const setTotal = createAction("SET_TOTAL");


const totalProducts = createReducer(0, {
  [setTotal]: (state, action) => action.payload,
});

export default totalProducts;