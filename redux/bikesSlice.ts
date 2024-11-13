import { createSlice } from '@reduxjs/toolkit';

// Initial state for the single bike
const initialState = {
    id: null,
    name: '',
    price: 0,
    description: '',
    image: ''
};

const bikeSlice = createSlice({
    name: 'bike',
    initialState,
    reducers: {
        // Action to set or update the bike data
        setBike: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.description = action.payload.description;
            state.image = action.payload.image;
        },
        // Action to clear the bike data (reset state)
        clearBike: (state) => {
            state.id = null;
            state.name = '';
            state.price = 0;
            state.description = '';
            state.image = '';
        },
    },
});

export const { setBike, clearBike } = bikeSlice.actions;
export default bikeSlice.reducer;
