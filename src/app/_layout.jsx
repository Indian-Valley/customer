import {Stack, useRouter} from "expo-router";
import React, {useCallback, useEffect} from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import {AuthProvider, useAuth} from "../contexts/AuthContexts";
import {supabase} from "../lib/supabase";
import ApiManager from "../apiManager/apiManager";
import { lightTheme, darkTheme } from "../theme"

import {useColorScheme} from "nativewind";
import {ThemeProvider} from "@react-navigation/native";


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",

    main: {
        initialRouteName: "home",
    },
};


export default function _layout() {

    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

function MainLayout() {
    const {colorScheme, setColorScheme} = useColorScheme();
    console.log(colorScheme)

    const {user, setAuth, setUserData} = useAuth()
    const router = useRouter();

    const updateUserData = async (user) => {
        let res = await ApiManager.getCustomerDetails(user?.id)
        // console.log(res)
        if (res) {
            setUserData(res)
            // console.log('user: ', user)
        }
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            // console.log(_event, session);
            if (session) {
                setAuth(session?.user);
                updateUserData(session?.user);
                router.replace("/home");
            } else {
                setAuth(null);
                router.replace("/");
            }
        })

    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider value={colorScheme === 'dark'? darkTheme : lightTheme}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" options={{title: "index"}}/>
                    <Stack.Screen name="welcome" options={{title: "welcome"}}/>
                    <Stack.Screen name="login" options={{title: "login"}}/>
                    <Stack.Screen name="signup" options={{title: "signup"}}/>

                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </ThemeProvider>
        </Provider>
    )
}