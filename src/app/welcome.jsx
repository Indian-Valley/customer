import React from 'react'
import { Dimensions, Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import LoadingButton from "../components/LoadingButton";
import { useTheme } from "@react-navigation/native";


export default function WelcomeScreen() {

    const navigation = useRouter();
    const { colors, textStyle, shadowStyle} = useTheme()
    const { width, height } = Dimensions.get("window");

    return (
        <SafeAreaView className='w-full h-screen'>
            <StatusBar style='auto' translucent={true}/>

            <View className='absolute overflow-hidden'
                  style={{
                        borderBottomStartRadius: width,
                        borderBottomEndRadius: width,
                        width: width * 2,
                        height: width * 2,
                        marginLeft: -(width / 2),
                        bottom: height*2/5
                  }}>
                <Image className='object-contain'
                       style={{flex: 1, width: undefined, height: undefined}}
                       source={require('../../assets/images/Header-image.png')} />
            </View>

            <View className='w-1/2 h-3/5 m-auto'>
                <Image
                       style={[{flex: 1, width: undefined, height: undefined, objectFit: 'contain'}, shadowStyle]}
                       source={require('../../assets/images/logo-green512.png')} />
            </View>

            <View className='h-2/5 flex-col justify-between mt-auto'>
                <View className='my-auto'>
                    <Text style={textStyle} className='text-center mt-3 font-extrabold text-3xl'>Indian Valley</Text>
                    <Text style={textStyle} className='text-center w-3/4 mt-3 mx-auto '>Indian Cuisine in the heart of Orpington,
                        with an unrivaled range of authentic, and imaginative, flavourful dishes.
                    </Text>
                </View>

                <LoadingButton buttonStyle='mx-10'
                               text="Let's Get Started"
                               loading={false}
                               onPress={() => navigation.navigate('/signup')}
                               shadow={true}/>

                <View className='flex-row items-center justify-center pb-4'>
                    <Text style={textStyle} >Already have an account?</Text>
                    <Pressable style={({pressed}) => [{opacity: pressed ? 0.7 : 1.0 }]}
                               onPress={() => navigation.navigate('/login')}>
                        <Text style={{color: colors.link}} className='font-semibold m-1'>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}