import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setCategories = createAsyncThunk("ALL_CATEGORIES", () => {
  return axios
    .get(`http://localhost:3080/api/categories/`)
    .then((res) => res.data);
});

export const setDeleteCategory = createAsyncThunk(
  "DELETE_CATEGORY",
  (categoryId) => {
    return axios
      .delete(`http://localhost:3080/api/categories/${categoryId}`)
      .then(() =>
        console.log(`Se elimino la categoria con el ID : ${categoryId}`)
      );
  }
);

export const setCategory = createAsyncThunk("SET_CATEGORY", (newCategory) => {
  return axios
    .post(`http://localhost:3080/api/categories/`, {name:newCategory})
    .then((res) => res.data);
});

export const setCategoryId = createAsyncThunk(
  "GET_ONE_CATEGORY",
  (newCategoryId) => {
    return axios
      .get(`http://localhost:3080/api/categories/${newCategoryId}`)
      .then((res) => res.data);
  }
);

export const singleCategoryReducer = createReducer([], {
  [setCategoryId.fulfilled]: (state, action) => action.payload,
});

export const setEditCategory = createAsyncThunk(
  "EDIT_CATEGORY",
  (categoryId, input) => {
    return axios
      .put(`http://localhost:3080/api/categories/${categoryId}`, {
         input
      })
      .then((res) => res.data);
  }
);

export const  userOneCategoryReducer = createReducer("", {
  [setEditCategory.fulfilled]: (state, action) => action.payload
});

const userCategoriesReducer = createReducer([], {
  [setCategories.fulfilled]: (state, action) => action.payload,
  //   [setDeleteCategory.fulfilled]: (state, action) => action.payload,
  //   [setCategory.fulfilled]: (state, action) => action.payload,
});

export default userCategoriesReducer;
