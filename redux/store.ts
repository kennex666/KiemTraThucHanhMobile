import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './bikesSlice';

const store = configureStore({
    reducer: {
        bike: bikeReducer,  // Store a single bike's data
    },
});

export default store;