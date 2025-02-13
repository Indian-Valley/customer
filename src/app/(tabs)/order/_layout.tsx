import { Stack } from 'expo-router';
import React from "react";

export default function OrderLayout() {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{title: "Order"}}/>
            <Stack.Screen name="checkout" options={{presentation: 'modal', title: "checkout"}}/>
            <Stack.Screen name="preparing-order" options={{presentation: 'fullScreenModal', title: "preparing-order"}}/>
            <Stack.Screen name="order-confirmation" options={{presentation: 'fullScreenModal', title: "order-confirmation"}}/>
            <Stack.Screen name="order-error" options={{presentation: 'fullScreenModal', title: "order-error"}}/>
            <Stack.Screen name="menu" options={{title: "menu"}}/>

        </Stack>
    );
}