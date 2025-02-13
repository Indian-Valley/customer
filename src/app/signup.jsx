import React, {useRef, useState} from "react";

import { Alert, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import {supabase} from "../lib/supabase";
import {useRouter} from "expo-router";
import Input from "../components/Input";
import LoadingButton from "../components/LoadingButton";
import {useTheme} from "@react-navigation/native";
import Header from "../components/Header";


export default function SignUpScreen() {

    const {colors, textStyle, shadowStyle} = useTheme();

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const passwordRef = useRef('');

    const [isLoading, setIsLoading] = useState(false);

    const navigation = useRouter();

    const handleSignUp = async () => {
        let firstName = firstNameRef.current.trim()
        let lastName = lastNameRef.current.trim()
        let email = emailRef.current.trim()
        let phone = phoneRef.current.trim()

        if (email==='' || passwordRef.current==='' || firstName==='' ||
            lastName==='' || phone==='') {
            Alert.alert('Sign up', 'Please enter all the required fields');
            return
        }

        setIsLoading(true);
        const {data, error } = await supabase.auth.signUp({
            email: email,
            password:passwordRef.current,
            options: {
                data: {
                    first_names: firstName,
                }
            }
        });

        if (error) {
            Alert.alert('Sign up', error.message);
            console.log('Error', error);
        } else {

            console.log('Success', 'session: ', data.session);

            navigation.dismissTo('/login');
        }
        setIsLoading(false);

    };

    return (
        <SafeAreaView className="flex-1">
            <Header title='Sign Up' hasBack={true}/>

            <ScrollView className='p-5'>
                <View>
                    <Text style={textStyle} className='text-3xl font-extrabold'>Let's</Text>
                    <Text style={textStyle} className='text-3xl font-extrabold'>Get Started</Text>

                </View>
                <View className='pt-5'>
                    <Text style={textStyle} className='text-sm'>Please fill in your details to create an account.</Text>

                    <Input
                        icon={ <Icon.User size={26} strokeWidth={2} color={colors.text}/> }
                        placeholder='Please enter your first name'
                        onChangeText={val => firstNameRef.current = val}
                        autoCapitalize="words"
                        autoComplete="given-name"/>
                    <Input
                        icon={ <Icon.User size={26} strokeWidth={2} color={colors.text}/> }
                        placeholder='Please enter your last name'
                        onChangeText={val => lastNameRef.current = val}
                        autoCapitalize="words"
                        autoComplete="family-name"/>
                    <Input
                        icon={ <Icon.Mail size={26} strokeWidth={2} color={colors.text}/> }
                        placeholder='Please enter your email'
                        onChangeText={val => emailRef.current = val}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete='email'/>
                    <Input
                        icon={ <Icon.Phone size={26} strokeWidth={2} color={colors.text}/> }
                        placeholder='Please enter a mobile number'
                        onChangeText={val => phoneRef.current = val}
                        keyboardType="number-pad"
                        autoComplete='tel'/>
                    <Input
                        icon={ <Icon.Lock size={26} strokeWidth={2} color={colors.text}/> }
                        placeholder='Please enter a password'
                        onChangeText={val => passwordRef.current = val}
                        autoCapitalize="none"
                        autoComplete="new-password"
                        secureTextEntry/>

                </View>

                <View className='mt-10'>
                    <LoadingButton text='Sign Up'
                                   loading={isLoading}
                                   onPress={handleSignUp}/>
                    <TouchableOpacity
                        className='border border-gray-500 bg-white py-4 my-10 bottom-2 justify-items-center rounded-3xl'
                        onPress={() => {}}>

                        <Text className='text-center m-1 font-bold'>Sign up with Google</Text>
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center justify-center gap-1'>
                    <Text style={textStyle}>
                        Already have an account?
                    </Text>
                    <Pressable onPress={() => navigation.dismissTo('/login')}>
                        <Text style={{color:colors.link}} className='font-semibold m-1'>Login</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}