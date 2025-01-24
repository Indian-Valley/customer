import React, {useEffect} from 'react'

import {View, Image, ActivityIndicator} from 'react-native';

import { StatusBar } from "expo-status-bar";
import {theme} from "@/constants/theme";


export default function StartScreen() {

    return (
      <View className="flex-1 justify-center items-center bg-white">
        <StatusBar style="dark"/>

          <View className="mx-1 my-10">
              <Image source={require('@/assets/images/main-logo-IV.png')} resizeMode='contain' />
          </View>
        <ActivityIndicator className='m-4'
                         color={theme.colors.darkLight}
                         size='large'/>

      </View>
  )
}