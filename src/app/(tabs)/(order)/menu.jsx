import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import {useRouter} from "expo-router";
import Categories from "../../../components/Categories";
import {menu} from "@/src/constants";
import DishRow from "@/src/components/DishRow";
import CartIcon from "@/src/components/CartIcon";
import {StatusBar} from "expo-status-bar";
import {useTheme} from "@react-navigation/native";


export default function OrderScreen() {
    const navigation = useRouter();
    const {colors} = useTheme()

    return (
        <View className='h-full'>
            <StatusBar style="light"/>
            <CartIcon/>

            {/*<Input icon={<FontAwesome name='search' size={28}/>} placeholder='Search items...'/>*/}

            <ScrollView className="h-full">
                <View className="relative ">
                    <Image className="w-full h-72" source={require('@/assets/images/order-banner.jpg')} />
                    <TouchableOpacity onPress={()=>{ navigation.back() }} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={colors.primary}></Icon.ArrowLeft>
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