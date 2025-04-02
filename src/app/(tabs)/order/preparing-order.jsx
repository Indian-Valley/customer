import {View, Text, Image } from 'react-native';
import React, {useEffect } from 'react'
import { useRouter} from "expo-router";

import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../../slices/cartSlice";
import ApiManager from "../../../apiManager/apiManager";
import {useTheme} from "@react-navigation/native";
import {useAuth} from "../../../contexts/AuthContexts";
import {
    selectIsASAP,
    selectOrderTotal,
    selectOrderType,
    selectSelectedAddress,
    selectSelectedTime,
} from "../../../slices/orderDetailsSlice";


export default function OrderPreparingScreen() {

    const {textStyle} = useTheme();
    const {user} = useAuth()

    const cartItems = useSelector(selectCartItems);
    const orderTotal = useSelector(selectOrderTotal);
    const orderType = useSelector(selectOrderType);
    const orderASAP = useSelector(selectIsASAP);
    const orderTime = useSelector(selectSelectedTime);
    const orderAddress = useSelector(selectSelectedAddress);

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
            const delivery = orderType==='DELIVERY'
            const res = await ApiManager.newOrder(
                `${user.first_names} ${user.last_name}` ,
                user.customer_id,
                orderItems,
                orderTotal,
                delivery,
                orderASAP? null: orderTime,
                "cash",
                delivery? orderAddress : null,
            );
            console.log('res', res)
            if (res?.success) {
                navigation.replace("/order/order-confirmation")
            } else {
                console.log("error: ", res?.error)
                navigation.replace("/order/order-error")
            }
        }
        postOrderToServer()
    })
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('@/assets/images/chef.gif')} className="w-80 h-80"/>
            <Text style={textStyle} className="font-bold text-lg">Placing your order...</Text>
        </View>
    )
}