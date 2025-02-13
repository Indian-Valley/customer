import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {selectCartItems} from "@/src/slices/cartSlice";
import {useSelector} from "react-redux";
import {useTheme} from "@react-navigation/native";
import TabBar from "@/src/components/TabBar/TabBar";

export default function Layout() {
    const {colors} = useTheme()

    const cartItems = useSelector(selectCartItems);

    return (
        <Tabs screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="home"
                         options={{
                             title: "Home",
                             href: '/home',
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="home" color={color}/>,
                         }}

            />
            <Tabs.Screen name="offers"
                         options={{
                             title: "Offers",
                             href: './offers',
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="money" color={color} />,
                         }}
            />
            <Tabs.Screen name="order"
                         options={{
                             title: "Order",
                             href: './order',
                             tabBarIcon: ({color}) => <FontAwesome size={22} name="shopping-bag" color={color} />,
                             tabBarBadge: cartItems.length > 0? cartItems.length : undefined,
                             tabBarBadgeStyle: {
                                 backgroundColor: 'green'
                             }
                         }}
            />
            <Tabs.Screen name="feed"
                         options={{
                             title: "Feed",
                             href: './feed',
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="newspaper-o" color={color} />,
                         }}
            />
            <Tabs.Screen name="order-history"
                         options={{
                             title: "Previous",
                             href: './order-history',
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="history" color={color} />,
                         }}
            />
            <Tabs.Screen name="account"
                         options={{
                             title: "Account",
                             href: null
            }}
            />
        </Tabs>
    );
}

