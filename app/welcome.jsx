import React from 'react'
import {Image, Pressable, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {themeColors} from "../theme";
import {StatusBar} from "expo-status-bar";
import {Link, useRouter} from "expo-router";
import LoadingButton from "../components/LoadingButton";

export default function WelcomeScreen() {
    const navigation = useRouter();

    return (
        <SafeAreaView className='bg-white justify-items-center flex-1'>
            <StatusBar style='dark' />
            <Image className='m-auto' source={require('../assets/images/logo.png')} />
            <Text className='text-center font-extrabold text-3xl text-gray-700'>Indian Valley</Text>
            <Text className='text-center text-sm w-3/4 my-3 mx-auto '>Indian Cuisine in the heart of Orpington,
                with an unrivaled range of authentic, and imaginative, flavourful dishes.
            </Text>


            <View className='mt-auto'>

                <LoadingButton buttonStyle='mx-10'
                               text="Let's Get Started"
                               loading={false}
                               onPress={() => navigation.navigate('/signup')}
                               shadow={true}/>

                <View className='flex-row items-center justify-center'>
                    <Text>Already have an account?</Text>
                    <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0 }]}
                               onPress={() => navigation.dismissTo('/login')}>
                        <Text className='font-semibold text-green-600 m-1'>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}