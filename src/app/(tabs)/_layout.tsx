import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {selectCartItems} from "@/src/slices/cartSlice";
import {useSelector} from "react-redux";
import {useTheme} from "@react-navigation/native";

export default function Layout() {
    const {colors} = useTheme()

    const cartItems = useSelector(selectCartItems);

    return (
        <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: colors.primary }}>
            <Tabs.Screen name="home"
                         options={{
                             title: "Home",
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="home" color={color} />,
                         }}
            />
            <Tabs.Screen name="offers"
                         options={{
                             title: "Offers",
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="money" color={color} />,
                         }}
            />
            <Tabs.Screen name="(order)"
                         options={{
                             title: "Order",
                             tabBarIcon: ({color}) => <FontAwesome size={22} name="shopping-bag" color={color} />,
                             tabBarBadge: cartItems.length,
                             tabBarBadgeStyle: {
                                 backgroundColor: 'green',
                                 fontWeight: "bold"
                             }
                         }}
            />
            <Tabs.Screen name="feed"
                         options={{
                             title: "Feed",
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="newspaper-o" color={color} />,
                         }}
            />
            <Tabs.Screen name="account"
                         options={{
                             title: "Account",
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="user-o" color={color} />,
                         }}
            />
        </Tabs>
    );
}

