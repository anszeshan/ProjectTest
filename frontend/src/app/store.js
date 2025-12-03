import { configureStore } from '@reduxjs/toolkit';

import staffReducer from '../features/staff/staffSlice';
import hotelReducer from '../features/hotel/hotelSlice';

const store = configureStore({
    reducer: {
        staff: staffReducer,
        hotels: hotelReducer,
    },
});

export default store;


