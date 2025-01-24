import React, {useRef, useState} from "react";

import {
    Alert,
    Button,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {themeColors} from "../theme";
import * as Icon from "react-native-feather";
import {supabase} from "../lib/supabase";
import {useRouter} from "expo-router";
import Input from "../components/Input";
import LoadingButton from "../components/LoadingButton";


export default function LoginScreen() {

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

            navigation.navigate('/login');
        }
        setIsLoading(false);

    };

    return (
        <SafeAreaView className="bg-white flex-1">
            <View className="relative py-4">
                <TouchableOpacity onPress={()=>{ navigation.back() }}
                                  style={{backgroundColor: themeColors.bgColor(1)}}
                                  className="absolute z-10 top-3 left-3 rounded-full p-1.5">
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-2xl">Sign up</Text>
                </View>
            </View>

            <ScrollView>
                <View className='p-5'>
                    <Text className='text-3xl font-extrabold'>Let's</Text>
                    <Text className='text-3xl font-extrabold'>Get Started</Text>

                </View>
                <View className='p-5'>
                    <Text className='text-sm'>Please fill in your details to create an account.</Text>

                    <Input
                        icon={ <Icon.User size={26} strokeWidth={2}/> }
                        placeholder='Please enter your first name'
                        onChangeText={val => firstNameRef.current = val}
                        autoCapitalize="words"
                        autoComplete="given-name"/>
                    <Input
                        icon={ <Icon.User size={26} strokeWidth={2}/> }
                        placeholder='Please enter your last name'
                        onChangeText={val => lastNameRef.current = val}
                        autoCapitalize="words"
                        autoComplete="family-name"/>
                    <Input
                        icon={ <Icon.Mail size={26} strokeWidth={2}/> }
                        placeholder='Please enter your email'
                        onChangeText={val => emailRef.current = val}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete='email'/>
                    <Input
                        icon={ <Icon.Phone size={26} strokeWidth={2}/> }
                        placeholder='Please enter a mobile number'
                        onChangeText={val => phoneRef.current = val}
                        keyboardType="number-pad"
                        autoComplete='tel'/>
                    <Input
                        icon={ <Icon.Lock size={26} strokeWidth={2}/> }
                        placeholder='Please enter a password'
                        onChangeText={val => passwordRef.current = val}
                        autoCapitalize="none"
                        autoComplete="new-password"
                        secureTextEntry/>
                    <Pressable style={({pressed})=> [{ opacity: pressed ? 0.5 : 1.0 }]}
                               onPress={() => {}}>
                        <Text className='text-right font-semibold mt-2'>Forgot password?</Text>
                    </Pressable>

                </View>


                <View className='mx-5'>
                    <LoadingButton text='Sign Up'
                                   loading={isLoading}
                                   onPress={handleSignUp}
                                   shadow={true}/>
                    <TouchableOpacity
                        className='border border-gray-500 bg-white py-4 my-10 bottom-2 justify-items-center rounded-3xl'
                        onPress={() => {}}>

                        <Text className='text-center m-1 font-bold'>Sign up with Google</Text>
                    </TouchableOpacity>
                </View>


                <View className=' px-4'>

                    <View className='flex-row items-center justify-center gap-1'>
                        <Text>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('/login')}>
                            <Text className='text-green-600 font-semibold m-1'>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}