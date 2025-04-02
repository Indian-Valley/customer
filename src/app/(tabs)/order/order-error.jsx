import {View, SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import { useRouter } from "expo-router";
import * as Icon from "react-native-feather";
import {useTheme} from "@react-navigation/native";


export default function OrderErrorScreen() {
    const navigation = useRouter();

    const {colors} = useTheme()
    return (

        <SafeAreaView className='w-full h-full'>
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity onPress={()=>{ navigation.navigate('/home') }}
                                  style={{backgroundColor: colors.link}}
                                  className="z-10 absolute top-3 left-3 rounded-full p-1">
                    <Icon.X strokeWidth={3} stroke={'white'}></Icon.X>
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-lg">Sorry, an error occurred</Text>
                </View>
            </View>

            <View className="flex-1 justify-center items-center">
                <Image source={require('@/assets/images/crying.gif')} className="w-80 h-80"/>
                <Text className="text-red-700 text-center font-bold text-lg">There was a problem submitting the order.</Text>
                <Text className="text-gray-600 text-center font-bold text-lg">Sorry, but please try again or call us</Text>
            </View>
        </SafeAreaView>

    )
}