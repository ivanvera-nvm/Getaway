import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setAdmin = createAction("SET_ADMIN");
export const toggleAccess = createAsyncThunk(
  "TOGGLE_ACCESS",
  ({ id, access }) => {
    return axios
      .put(`http://localhost:3080/api/admin/access/${id}`, { access })
      .then((r) => r.data.access);
  }
);

export const deleteUser = createAsyncThunk("DELETE_USER", ( id) => {
  return axios
    .delete(`http://localhost:3080/api/admin/${id}`)
    .then(() => alert(`Se elimino el user ${id}`));
});

const adminReducer = createReducer([], {
  [setAdmin]: (state, action) => action.payload,
  [toggleAccess.fulfilled]: (state, action) => action.payload,
  [deleteUser.fulfilled] : (state,action) => action.payload
});

export default adminReducer;
