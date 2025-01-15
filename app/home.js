import React from 'react'

import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, {Marker} from "react-native-maps";
import * as Icon from "react-native-feather"

import { StatusBar } from "expo-status-bar";

import FeaturedRow from "../components/FeaturedRow";
import {featured, location} from "../constants";
import {themeColors} from "../theme";

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar style="dark"/>

            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray"/>
                    <TextInput placeholder="Search Item..."/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
                        <Icon.MapPin height={20} width={20} color="gray"/>
                        <Text className="text-gray-600">Gravesend, Kent</Text>
                    </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                    <Icon.Sliders height="20" width="20" stroke="white"/>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 20}}
                        className="h-screen bg-white">

                <View className="relative py-4 shadow-sm">
                    <Text style={{fontFamily: 'Verdana'}} className='text-3xl font-extrabold text-center'>START YOUR ORDER</Text>
                </View>

                <View className='mx-3'>
                    <MapView initialRegion={{
                        latitude: location.lat,
                        longitude: location.lng,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                             className="w-full h-32 "
                             mapType='standard'>
                        <Marker coordinate={{latitude: location.lat, longitude: location.lng}}
                                title='Indian Valley'
                                description="We're right here, at 59 Cotmandene Crescent BR5 2RA"
                                pinColor={themeColors.bgColor(1)}/>
                    </MapView>
                </View>

                <View style={{backgroundColor: themeColors.bgColor(0.3)}} className='rounded-3xl mx-3 mt-2 p-1'>
                    <View className='flex-row'>
                        <Text style={{backgroundColor: themeColors.bgColor(1)}} className='m-2 p-3 rounded-full text-white font-bold flex-1 text-center'>Delivery</Text>
                        <Text style={{backgroundColor: themeColors.bgColor(1)}} className='m-2 p-3 rounded-full text-white font-bold flex-1 text-center'>Collection</Text>
                    </View>
                </View>


                <View className="mt-3">
                    {
                        featured.map((item, index) => {
                            return (
                                <FeaturedRow key={index} title={item.title} items={item.items}
                                             description={item.description}/>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}