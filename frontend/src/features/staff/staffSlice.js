import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const fetchStaff = createAsyncThunk('staff/fetchStaff', async () => {
    const response = await axios.get(`${API_BASE_URL}/api/staff`);
    return response.data?.data || response.data;
});

const staffSlice = createSlice({
    name: 'staff',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStaff.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchStaff.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchStaff.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default staffSlice.reducer;


