import React, {useRef, useState} from "react";

import { Alert, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";
import LoadingButton from "../components/LoadingButton";
import Input from "../components/Input";
import {useTheme} from "@react-navigation/native";
import Header from "../components/Header";


export default function LoginScreen() {
    const {colors, textStyle, shadowStyle} = useTheme();

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [isLoading, setIsLoading] = useState(false);

    const navigation = useRouter();

    const handleLogin = async () => {
        let email = emailRef.current.trim()

        if (email === '' || passwordRef.current === '') {
            Alert.alert('Login', "Please fill all the fields!");
            return
        }

        setIsLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: passwordRef.current
        });

        setIsLoading(false);

        if (error) {
            Alert.alert('Login', error.message);
            console.log('Error', error);

        } else {
            console.log('Success', 'Logged in!');
            // navigation.replace('/home');
        }
    };

    return (
        <SafeAreaView className="flex-1">
            <Header title='Login' hasBack={true}/>

            <View className='p-5'>
                <Text style={textStyle} className='text-3xl font-extrabold'>Hey,</Text>
                <Text style={textStyle} className='text-3xl font-extrabold'>Welcome back!</Text>

            </View>
            <View className='p-5'>
                <Text style={textStyle} className='text-sm'>Please enter your login details below to continue.</Text>
                <Input
                    icon={ <Icon.Mail size={26} strokeWidth={2} color={colors.text}/> }
                    placeholder='Please enter your email.'
                    onChangeText={val => emailRef.current = val}
                    keyboardType="email-address"
                    autoComplete='email'
                    autoCapitalize="none"
                    clearButtonMode='always'/>
                <Input
                    icon={ <Icon.Lock size={26} strokeWidth={2} color={colors.text}/> }
                    placeholder='Please enter your password.'
                    onChangeText={val => passwordRef.current = val}
                    autoCapitalize="none"
                    autoComplete='password'
                    clearButtonMode='always'
                    secureTextEntry/>
                <Pressable style={({pressed})=> [{ opacity: pressed ? 0.5 : 1.0 }]}
                           onPress={() => {}}>
                    <Text style={{color: colors.link}} className='text-right font-semibold mt-2'>Forgot password?</Text>
                </Pressable>

            </View>

            <View className='mx-5'>

                <LoadingButton text='Login'
                               loading={isLoading}
                               onPress={handleLogin} />
                <TouchableOpacity
                    style={shadowStyle} className='bg-white py-4 my-10 bottom-2 justify-items-center rounded-3xl'
                    onPress={() => {}}>

                    <Text className='text-center m-1 font-semibold'>Sign in with Google</Text>
                </TouchableOpacity>
            </View>


            <View className='mt-auto px-4'>

                <View className='flex-row items-center justify-center'>
                    <Text style={{color: colors.text}}>
                        Don't have an account?
                    </Text>
                    <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0 }]}
                               onPress={() => navigation.dismissTo('/signup')}>
                        <Text style={{color: colors.link}} className='font-semibold m-1'>Sign up</Text>
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    )

}