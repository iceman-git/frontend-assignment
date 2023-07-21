import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            console.log(action.payload);
            if(action.payload.quantity>=1){
            state.items.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
        },
        removeAll: (state) => {
            state.items = [];
        }
    }
})

export const selectAllItems = state => state.cart.items;


export const {addItemToCart, removeItemFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
