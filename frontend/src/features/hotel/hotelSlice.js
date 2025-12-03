import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
    const response = await axios.get(`${API_BASE_URL}/api/hotels`);
    return response.data?.data || response.data;
});

const hotelSlice = createSlice({
    name: 'hotels',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default hotelSlice.reducer;


