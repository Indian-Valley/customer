import { Stack } from "expo-router";
import React, {useEffect} from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import {supabase} from "@/supabase";

export default function RootLayout() {
    useEffect(() => {
        const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                console.log('User signed in:', session.user);
            } else {
                console.log('User signed out');
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);
  return (
      <Provider store={store}>
          <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" options={{title: "index"}}/>
              <Stack.Screen name="home" options={{title: "home"}}/>
              <Stack.Screen name="offers" options={{title: "offers"}}/>
              <Stack.Screen name="checkout" options={{presentation: 'modal', title: "checkout"}}/>
              <Stack.Screen name="login" options={{presentation: 'modal', title: "login"}}/>
              <Stack.Screen name="signup" options={{presentation: 'modal', title: "signup"}}/>
              <Stack.Screen name="preparing-order" options={{presentation: 'fullScreenModal', title: "preparing-order"}}/>
              <Stack.Screen name="order-confirmation" options={{presentation: 'fullScreenModal', title: "order-confirmation"}}/>
              <Stack.Screen name="order-error" options={{presentation: 'fullScreenModal', title: "order-error"}}/>
          </Stack>
      </Provider>
  );
}
