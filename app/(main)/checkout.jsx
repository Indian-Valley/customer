import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react'
import * as Icon from "react-native-feather"
import {themeColors} from "../../theme";
import {useRouter} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, selectCartItems, selectCartTotal} from "../../slices/cartSlice";


export default function CheckoutScreen() {
    const navigation = useRouter();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    const [groupedItems, setGroupedItems] = useState({});

    useEffect(() => {
        const items = cartItems.reduce((group, item)=> {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {})
        setGroupedItems(items);
    }, [cartItems]);

    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity onPress={()=>{ navigation.back() }}
                                  style={{backgroundColor: themeColors.bgColor(1)}}
                                  className="absolute z-10 top-3 left-3 rounded-full p-1">
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'}></Icon.ArrowLeft>
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Checkout</Text>
                    <Text className="text-center font-bold text-xs text-gray-500">Make sure you got everything!</Text>
                </View>

            </View>

            <View style={{backgroundColor: themeColors.bgColor(0.3)}}
                  className="flex-row p-4 items-center">
                <Image source={require("../../assets/images/food-delivery.png")} className="w-20 h-20"/>
                <Text className="flex-1 pl-4">Delivery in 30-40 minutes</Text>
                <TouchableOpacity onPress={()=>{ }}>
                    <Text style={{color: themeColors.text}} className="font-bold">Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="bg-white pt-5"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 50
                        }}>
                {
                    Object.entries(groupedItems).map(([key, items]) => {
                        let dish = items[0];
                        return (
                            <View key={key}
                                  className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                                <Text className="font-bold" style={{color: themeColors.text}}>
                                    {items.length} x
                                </Text>
                                <Text className="font-bold flex-1">{dish.name}</Text>
                                <Text className="font-semibold text-xs">{`£${dish.price.toFixed(2)}`}</Text>
                                <TouchableOpacity
                                    onPress={() => dispatch(removeFromCart({id: dish.id}))}
                                    style={{backgroundColor: themeColors.bgColor(1)}}
                                    className="p-1 rounded-full">
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <View style={{backgroundColor: themeColors.bgColor(0.2)}}
                  className="py-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">{`£${cartTotal.toFixed(2)}`}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">£2.00</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="font-extrabold text-gray-700">Order Total</Text>
                    <Text className="font-extrabold text-gray-700">{`£${(cartTotal + 2).toFixed(2)}`}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('/preparing-order')}
                                      style={{backgroundColor:themeColors.bgColor(1)}}
                                      className="p-3 rounded-full">
                        <Text className="font-bold text-lg text-center text-white">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}