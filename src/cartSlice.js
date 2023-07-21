import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = ({
    name: 'cart', 
    initialState,
    reducers: {
        addItemToCart:
        removeItemFromCart:
        removeAll:
    }
})

export const {addItemToCart, removeItemFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;