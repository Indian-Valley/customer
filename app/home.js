import React, {useState} from 'react'

import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, {Marker} from "react-native-maps";
import * as Icon from "react-native-feather"

import { StatusBar } from "expo-status-bar";

import FeaturedRow from "../components/FeaturedRow";
import {featured, location} from "../constants";
import {themeColors} from "../theme";
import {useRouter} from "expo-router";

export default function HomeScreen() {
    const [deliverySelected, setDeliverySelected] = useState(true);

    const navigation = useRouter();

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
                <TouchableOpacity style={{backgroundColor: themeColors.bgColor(1)}}
                                  className="p-3 rounded-full"
                                  onPress={() => navigation.navigate('/login')}>
                    <Icon.User height="20" width="20" stroke="white"/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 20}}
                        className="h-screen bg-white">

                <View style={{backgroundColor: themeColors.bgColor(0.2)}}
                      className='shadow-2xl rounded-3xl bg-white mx-3'>

                    <View className="relative py-4 shadow-sm">
                        <Text style={{fontFamily: 'Verdana'}} className='text-3xl font-extrabold text-center text-gray-700'>START YOUR ORDER</Text>
                    </View>

                    <MapView initialRegion={{
                        latitude: location.lat,
                        longitude: location.lng,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                             className="w-full h-32"
                             mapType='standard'>
                        <Marker coordinate={{latitude: location.lat, longitude: location.lng}}
                                title='Indian Valley'
                                description="We're right here, at 59 Cotmandene Crescent BR5 2RA"
                                pinColor={themeColors.bgColor(1)}/>
                    </MapView>


                    <View className='flex-row'>

                        <TouchableOpacity style={{backgroundColor: themeColors.bgColor(deliverySelected? 1: 0.7)}}
                                          className='flex-1 m-2 p-3 rounded-full'
                                          onPress={() => setDeliverySelected(true)}>
                            <Text className={`text-center text-lg text-white ${deliverySelected? "font-bold":"font-medium"}`}>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: themeColors.bgColor(deliverySelected? 0.7: 1)}}
                                          className='flex-1 m-2 p-3 rounded-full'
                                          onPress={() => setDeliverySelected(false)}>
                            <Text className={`text-center text-lg text-white ${deliverySelected? "font-medium" : "font-bold"}`}>Collection</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        deliverySelected? (
                            <View>
                                <Text>Delivery To:</Text>
                            </View>
                        ) : (
                            <View>
                                <Text>Collection for:</Text>
                            </View>
                        )
                    }

                </View>

                <View className="my-3">
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