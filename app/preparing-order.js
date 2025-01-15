import {View, Text, Image } from 'react-native';
import React, {useEffect} from 'react'
import { useRouter} from "expo-router";


export default function OrderPreparingScreen() {
    const navigation = useRouter();
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace("/order-confirmation")
        }, 3000)
    })
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../assets/images/chef.gif')} className="w-80 h-80"/>
            <Text className="text-gray-600 font-bold text-lg">Placing your order...</Text>
        </View>
    )
}