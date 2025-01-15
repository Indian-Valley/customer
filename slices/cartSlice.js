import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]        },
        removeFromCart: (state, action) => {
            let index = state.items.findIndex(item => item.id === action.payload.id)
            if (index > -1) {
                state.items.splice(index, 1)
            } else {
                console.log("Can't find item to remove item from cart")
            }
        },
        emptyCart: (state, action) => {
            state.items = []
        }
    }
})

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = state=>state.cart.items;
export const selectCartItemsById = (state, id)=>state.cart.items.filter(item=> item.id === id);
export const selectCartTotal = state=>state.cart.items.reduce((total, item)=> total = total + item.price, 0);

export default cartSlice.reducer