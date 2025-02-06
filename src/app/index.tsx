import React, {useEffect} from 'react'

import {View, Image, ActivityIndicator} from 'react-native';

import { StatusBar } from "expo-status-bar";


export default function StartScreen() {

    return (
      <View className="flex-1 justify-center items-center">
        <StatusBar style="auto"/>

          <View className="mx-1 my-10">
              <Image source={require('@/assets/images/main-logo-IV.png')} resizeMode='contain' />
          </View>
        <ActivityIndicator className='m-4'
                         size='large'/>

      </View>
  )
}