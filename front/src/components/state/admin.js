import { createReducer, createAction } from "@reduxjs/toolkit";

export const setAdmin = createAction("SET_ADMIN");

const adminReducer = createReducer([], {
  [setAdmin]: (state, action) => action.payload,
});

export default adminReducer;