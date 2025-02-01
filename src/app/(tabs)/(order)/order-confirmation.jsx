import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react'
import * as Icon from "react-native-feather"
import {themeColors} from "../../../theme";
import { useRouter } from "expo-router";
import MapView, {Marker} from "react-native-maps";
import {location} from "../../../constants"
import {useDispatch} from "react-redux";
import {emptyCart} from "../../../slices/cartSlice";


export default function OrderConfirmationScreen() {
    const navigation = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(emptyCart());
    })
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="relative py-4 shadow-sm border-b border-gray-400">
                <TouchableOpacity onPress={()=>{ navigation.dismissTo('/home') }}
                                  style={{backgroundColor: themeColors.bgColor(1)}}
                                  className="z-10 absolute top-3 left-3 rounded-full p-1">
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'}></Icon.ArrowLeft>
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Order Placed!</Text>
                </View>
            </View>
            <MapView initialRegion={{
                        latitude: location.lat,
                        longitude: location.lng,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    className="flex-1"
                    mapType='standard'>
                <Marker coordinate={{latitude: location.lat, longitude: location.lng}}
                        title='Indian Valley'
                        description='We are here, and always ready to deliver excellence'
                        pinColor={themeColors.bgColor(1)}/>
            </MapView>
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">
                            Estimated Arrival
                        </Text>
                        <Text className="text-3xl text-gray-700 font-extrabold">
                            30-40 Minutes
                        </Text>
                        <Text className="mt-2 text-gray-700 font-semibold">Your order is on its way!</Text>
                    </View>
                    <Image className="w-24 h-24" source={require('@/assets/images/chef.gif')}/>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(0.8)}}
                      className="px-4 flex-row justify-between items-center rounded-full my-5 mx-2">
                    <View className="flex-1 ml-3 py-3">
                        <Text className="text-white text-xs">Need some help?</Text>
                        <Text className="-mt-1 text-white text-xl font-bold">Contact Us</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone fill={themeColors.bgColor(0.5)} stroke={'black'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}