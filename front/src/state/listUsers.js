import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('FETCH_USERS', () => {
    const access = JSON.parse(localStorage.getItem('user')).user.access;
    return axios.get(`http://localhost:3080/api/admin/users`,
    {
        headers: { Authorization: `Bearer ${access}`}
    })
    .then(r => {
        console.log(r.data);
        return r.data;
        
    })
    .catch(err => console.log(err))
})

const listUsersReducer = createReducer([], {
    [fetchUsers.fulfilled]: (state, action) => action.payload
})

export default listUsersReducer;