import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import {useRoute} from "@react-navigation/native";
import * as Icon from "react-native-feather"
import {themeColors} from "../theme";
import {useRouter} from "expo-router";
import Categories from "../components/Categories";
import {menu} from "../constants";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";
import {StatusBar} from "expo-status-bar";


export default function OrderScreen() {
    const navigation = useRouter();
    // const {params} = useRoute()
    // let item = params;
    return (
        <View>
            <StatusBar style="light"/>
            <CartIcon/>
            <ScrollView className="h-screen bg-white">
                <View className="relative ">
                    <Image className="w-full h-72" source={require('@/assets/images/order-banner.jpg')} />
                    <TouchableOpacity onPress={()=>{ navigation.back() }} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}></Icon.ArrowLeft>
                    </TouchableOpacity>
                </View>
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="bg-white -mt-12 pt-3 pl-3">
                    <Text className="text-3xl p-2 font-bold">Menu</Text>
                </View>
                <Categories/>

                {
                    menu.map((category, index) => (
                        <View key={index}>
                            <Text id={category.category} className="text-2xl font-bold p-3">{category.category}</Text>

                            {
                                category.dishes.map((item, index) => <DishRow key={index} item={{...item}} />)
                            }

                        </View>
                    ))
                }


            </ScrollView>
        </View>
    )
}