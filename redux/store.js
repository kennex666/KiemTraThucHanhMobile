import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './bikesSlice';

const store = configureStore({
    reducer: {
        bike: bikesReducer,  // Store a single bike's data
    },
});

export default store;