import {View, Text, TouchableOpacity, Animated, useAnimatedValue} from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from "expo-router";
import {selectCartItems, selectCartTotal} from "../slices/cartSlice";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useTheme} from "@react-navigation/native";

export default function CartIcon() {

    const { colors } = useTheme()
    const navigation =  useRouter();

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    const fadeAnim = useAnimatedValue(0);

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    if (!cartItems.length) {
        fadeOut()
    } else {
        fadeIn()
    }

    return (
        <Animated.View style={{opacity:fadeAnim}} className="absolute bottom-24 w-full px-5 z-50">
            <TouchableOpacity
                onPress={() => {navigation.navigate("/checkout")}}
                style={{
                    backgroundColor: colors.link,
                    shadowColor: colors.primary,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.7,
                    shadowRadius: 20,
                    elevation: 4
                }}
                onPressIn={(className) => 'animation-pulse'}
                className="flex-row justify-between items-center rounded-full p-2 px-5">

                <View className='flex-row gap-3 items-center'>
                    <FontAwesome name='shopping-bag' size={22} color="white"/>
                    <Text className="font-bold text-lg text-white">View Order</Text>
                </View>

                <Text className="text-lg font-extrabold text-white">{`£${cartTotal.toFixed(2)}`}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}