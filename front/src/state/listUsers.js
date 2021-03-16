import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('FETCH_USERS', () => {
    const loginToken = JSON.parse(localStorage.getItem('user')).token;
    console.log(loginToken)
    return axios.get(`http://localhost:3080/api/admin`,
    {
        headers: { Authorization: `Bearer ${loginToken}`}
    })
    .then(r => r.data)
})

const listUsersReducer = createReducer([], {
    [fetchUsers.fulfilled]: (state, action) => action.payload
})

export default listUsersReducer;