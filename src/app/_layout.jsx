import {Stack, useRouter} from "expo-router";
import React, {useCallback, useEffect} from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import {AuthProvider, useAuth} from "../contexts/AuthContexts";
import {supabase} from "../lib/supabase";
import ApiManager from "../apiManager/apiManager";
import { lightTheme, darkTheme } from "../theme"

import {useColorScheme} from "nativewind";
import {ThemeProvider, useTheme} from "@react-navigation/native";
import {BackHandler} from "react-native";


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
    const {colors} = useTheme()
    console.log(colorScheme)

    const { setAuth, setUserData, setUserDataLoading} = useAuth()
    const router = useRouter();

    const updateUserData = async (user) => {
        setUserDataLoading(true);
        let res = await ApiManager.getCustomerDetails(user.id)
        console.log('Fetched User Data')

        if (res) {
            setUserData({...res, ...user, customer_id: res.id})
        }
        setUserDataLoading(false);
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {
            console.log(_event, session);
            if (session) {
                if (_event === 'INITIAL_SESSION' || _event === 'SIGNED_IN') {
                    setAuth(session?.user);
                    updateUserData(session?.user);
                    router.replace("/home");
                }
            } else {
                setAuth(null);
                router.replace("/welcome");
            }
        })


        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()

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

