import { createReducer, createAction } from "@reduxjs/toolkit";

export const setCategory= createAction("SET_CATEGORY");

const categoryReducer = createReducer([], {
  [setCategory.fulfilled]: (state, action) => action.payload,
});

export default categoryReducer;