import React, {useEffect} from 'react'

import { View, Image, Text, TextInput, ScrollView } from 'react-native';

import { StatusBar } from "expo-status-bar";
import {useRouter} from "expo-router";


export default function StartScreen() {
    const navigation = useRouter();
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('/home')
        }, 1000)
    })
    return (
      <View className="flex-1 bg-white">
        <StatusBar style="dark"/>
        <Image source={require('@/assets/images/main-logo-IV.png')} className='m-auto' />
      </View>
  )
}