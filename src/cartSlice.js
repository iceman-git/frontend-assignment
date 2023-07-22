import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const product= action.payload;
            const checkIfAlreadyExist= state.items.find(item=> item.id===product.id);
            if(checkIfAlreadyExist){
                checkIfAlreadyExist.quantity=product.quantity;
            }
            else if(product.quantity>=1){
            state.items.push(product);
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
