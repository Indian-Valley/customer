import { Stack } from 'expo-router';
import React from "react";

export default function AccountLayout() {

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{presentation: 'fullScreenModal', title: "Account"}}/>
            <Stack.Screen name="settings" options={{presentation: 'modal', title: "edit"}}/>

        </Stack>
    );
}