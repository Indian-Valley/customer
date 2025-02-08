import {View, Text, TouchableOpacity, Animated, useAnimatedValue} from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from "expo-router";
import {numCartItems, selectCartTotal} from "../slices/cartSlice";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useTheme} from "@react-navigation/native";

export default function CartIcon() {

    const { colors } = useTheme()
    const navigation =  useRouter();

    const cartItems = useSelector(numCartItems)
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

    if (!cartItems) {
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
                className="flex-row justify-between items-center rounded-full p-2 px-5">

                <View className='flex-row gap-3 items-center'>
                    <FontAwesome name='shopping-bag' size={22} color={colors.linkText}/>
                    <Text style={{color: colors.linkText}} className="font-bold text-lg">View Order</Text>
                </View>

                <Text style={{color: colors.linkText}} className="text-lg font-extrabold">{`£${cartTotal.toFixed(2)}`}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}