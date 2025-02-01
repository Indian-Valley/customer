import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";


export default function OffersScreen() {

    const {colors} = useTheme()

    const navigation = useRouter();
    return (
        <SafeAreaView className="h-screen">
            <ScrollView>
                <View className="relative">
                    <TouchableOpacity onPress={()=>{ navigation.back() }}
                                      style={{backgroundColor: colors.link}}
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