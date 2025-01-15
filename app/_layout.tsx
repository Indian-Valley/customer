import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout() {
  return (
      <Provider store={store}>
          <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" options={{title: "index"}}/>
              <Stack.Screen name="home" options={{title: "home"}}/>
              <Stack.Screen name="offers" options={{title: "offers"}}/>
              <Stack.Screen name="checkout" options={{presentation: 'modal', title: "checkout"}}/>
              <Stack.Screen name="preparing-order" options={{presentation: 'fullScreenModal', title: "preparing-order"}}/>
              <Stack.Screen name="order-confirmation" options={{presentation: 'fullScreenModal', title: "order-confirmation"}}/>
          </Stack>
      </Provider>
  );
}
