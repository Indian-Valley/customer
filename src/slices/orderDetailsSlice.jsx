import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderType: '', // 'booking', 'collection', 'delivery'
    isASAP: true,
    selectedTime: '',
    selectedAddress: '',
    orderTotal: 0
}

export const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {
        setOrderType: (state, action) => {
            state.orderType = action.payload
        },
        setSelectedTime: (state, action) => {
            state.selectedTime = action.payload
        },
        setIsASAP: (state, action) => {
            state.isASAP = action.payload
        },
        setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload
        },
        setOrderTotal: (state, action) => {
            state.orderTotal = action.payload
        }
    }
})

export const {
    setOrderType,
    setOrderTotal,
    setSelectedTime,
    setIsASAP,
    setSelectedAddress
} = orderDetailsSlice.actions;

export const selectOrderType = state=>state.orderDetails.orderType;
export const selectOrderTotal = state=>state.orderDetails.orderTotal;
export const selectSelectedTime = state=>state.orderDetails.selectedTime;
export const selectIsASAP = state=>state.orderDetails.isASAP;
export const selectSelectedAddress = state=>state.orderDetails.selectedAddress;


export default orderDetailsSlice.reducer