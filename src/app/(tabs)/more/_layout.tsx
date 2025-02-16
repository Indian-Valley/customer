import { Stack } from 'expo-router';
import React from "react";

export default function OptionsLayout() {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{title: "Options"}}/>
            <Stack.Screen name="settings" options={{ title: "Settings"}}/>
            <Stack.Screen name="order-history" options={{ title: "Order History"}}/>
            <Stack.Screen name="account" options={{ title: "Account"}}/>

        </Stack>
    );
}