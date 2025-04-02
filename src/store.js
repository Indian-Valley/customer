import {configureStore} from '@reduxjs/toolkit'
import cartSlice from "./slices/cartSlice";
import orderDetailsSlice from "./slices/orderDetailsSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        orderDetails: orderDetailsSlice
    },
})