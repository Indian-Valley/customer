import {Stack} from "expo-router";
import React from "react";

export default function Layout() {

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" options={{title: "home"}}/>
            <Stack.Screen name="offers" options={{title: "offers"}}/>
            <Stack.Screen name="checkout" options={{presentation: 'modal', title: "checkout"}}/>
            <Stack.Screen name="preparing-order" options={{presentation: 'fullScreenModal', title: "preparing-order"}}/>
            <Stack.Screen name="account" options={{presentation: 'fullScreenModal', title: "account"}}/>
            <Stack.Screen name="order-confirmation" options={{presentation: 'fullScreenModal', title: "order-confirmation"}}/>
            <Stack.Screen name="order-error" options={{presentation: 'fullScreenModal', title: "order-error"}}/>
        </Stack>
    );
}

