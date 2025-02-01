import React from 'react'
import {Image, Pressable, SafeAreaView, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import { useRouter} from "expo-router";
import LoadingButton from "../components/LoadingButton";
import {useTheme} from "@react-navigation/native";


export default function WelcomeScreen() {

    const navigation = useRouter();
    const { colors } = useTheme()

    return (
        <SafeAreaView className='justify-items-center flex-1'>
            <StatusBar style={'auto'} />
            <Image className='m-auto' source={require('../../assets/images/logo.png')} />
            <Text style={{color: colors.text}} className='text-center font-extrabold text-3xl'>Indian Valley</Text>
            <Text style={{color: colors.text}} className='text-center w-3/4 my-3 mx-auto '>Indian Cuisine in the heart of Orpington,
                with an unrivaled range of authentic, and imaginative, flavourful dishes.
            </Text>


            <View className='mt-auto'>

                <LoadingButton buttonStyle='mx-10'
                               text="Let's Get Started"
                               loading={false}
                               onPress={() => navigation.navigate('/signup')}
                               shadow={true}/>

                <View className='flex-row items-center justify-center'>
                    <Text style={{color: colors.text}} >Already have an account?</Text>
                    <Pressable style={({pressed}) => [{opacity: pressed ? 0.5 : 1.0 }]}
                               onPress={() => navigation.navigate('/login')}>
                        <Text style={{color: colors.link}} className='font-semibold m-1'>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}