import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedSize: null,
};

const productSizeSlice = createSlice({
    name: 'productSize',
    initialState,
    reducers: {
        setSelectedSize: (state, action) => {
            state.selectedSize = action.payload;
        },
        clearSelectedSize: (state) => {
            state.selectedSize = null;
        },
    },
});

export const { setSelectedSize, clearSelectedSize } = productSizeSlice.actions;

export default productSizeSlice.reducer;