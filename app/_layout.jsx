import {Stack, useRouter} from "expo-router";
import React, {useEffect} from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import {AuthProvider, useAuth} from "@/contexts/AuthContexts";
import {supabase} from "@/lib/supabase";
import ApiManager from "../apiManager/apiManager";


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",

    main: {
        initialRouteName: "home",
    },
};


const _layout = () => {
    return (
        <AuthProvider>
            <MainLayout/>
        </AuthProvider>
    )
}

const MainLayout = () => {

    const {user, setAuth, setUserData} = useAuth()
    const router = useRouter();

    const updateUserData = async (user) => {
        let res = await ApiManager.getCustomerDetails(user?.id)
        console.log(res)
        if (res) {
            setUserData(res)
            console.log('user: ', user)
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
                router.replace("/welcome");
            }
        })

    }, []);

    return (
        <Provider store={store}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{title: "index"}}/>
                <Stack.Screen name="welcome" options={{title: "welcome"}}/>
                <Stack.Screen name="login" options={{title: "login"}}/>
                <Stack.Screen name="signup" options={{title: "signup"}}/>

                <Stack.Screen name="(main)"/>
            </Stack>
        </Provider>
    );
}

export default _layout;
