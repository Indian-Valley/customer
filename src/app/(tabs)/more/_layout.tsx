import { Stack } from 'expo-router';
import React from "react";

export default function OptionsLayout() {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: "More"}}/>
            <Stack.Screen name="settings" options={{ animation:'slide_from_right', title: "Settings"}}/>
            <Stack.Screen name="order-history" options={{ animation:'slide_from_right', title: "Order History"}}/>
            <Stack.Screen name="account" options={{ animation:'slide_from_right', title: "Account"}}/>

        </Stack>
    );
}