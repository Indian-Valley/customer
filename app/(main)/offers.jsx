import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import {themeColors} from "../../theme";
import { useRouter} from "expo-router";


export default function OffersScreen() {
    const navigation = useRouter();
    return (
        <SafeAreaView className="h-screen bg-white">
            <ScrollView>
                <View className="relative">
                    <TouchableOpacity onPress={()=>{ navigation.back() }}
                                      style={{backgroundColor: themeColors.bgColor(1)}}
                                      className="absolute z-50 top-50 left-10 p-2 rounded-full shadow-xl">
                        <Icon.ArrowLeft strokeWidth={3} stroke={'white'}></Icon.ArrowLeft>
                    </TouchableOpacity>

                </View>
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                      className="flex-row">
                    <Text className="flex-1 text-3xl text-center font-bold">Special Offers</Text>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}