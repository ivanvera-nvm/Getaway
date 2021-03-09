import { createReducer, createAction } from "@reduxjs/toolkit";

export const setFavs = createAction("SET_FAVS");

const favsReducer = createReducer([], {
  [setFavs]: (state, action) => action.payload,
});

export default favsReducer;