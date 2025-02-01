import {View, Text, Image } from 'react-native';
import React, {useEffect } from 'react'
import { useRouter} from "expo-router";

import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../../slices/cartSlice";
import ApiManager from "../../../apiManager/apiManager";


export default function OrderPreparingScreen() {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const navigation = useRouter();
    useEffect(() => {

        const orderItems = cartItems.reduce((group, item) => {
            let listIndex = -1;
            for (let i = 0; i < group.length; i++) {
                if (group[i].name === item.name) {
                    listIndex = i;
                    break
                }
            }

            if (listIndex !== -1) {
                group[listIndex].quantity += 1;
            } else {
                group.push({"name":item.name, "quantity":1, "price":item.price});
            }
            return group;
        }, [])
        // console.log('orderItems: ', orderItems);

        async function postOrderToServer() {
            const res = await ApiManager.newOrder("Mumin", orderItems, cartTotal, false, "22:22:11", "cash");
            console.log('res', res)
            if (res?.success) {
                navigation.replace("/order-confirmation")
            } else {
                console.log("error: ", res?.error)
                navigation.replace("/order-error")
            }
        }
        postOrderToServer()
    })
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../../../../assets/images/chef.gif')} className="w-80 h-80"/>
            <Text className="text-gray-600 font-bold text-lg">Placing your order...</Text>
        </View>
    )
}