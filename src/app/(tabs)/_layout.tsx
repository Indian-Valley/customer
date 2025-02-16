import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {selectCartItems} from "@/src/slices/cartSlice";
import {useSelector} from "react-redux";
import {useTheme} from "@react-navigation/native";
import TabBar from "@/src/components/TabBar/TabBar";
import {Icon} from "@rneui/themed";

export default function Layout() {

    const cartItems = useSelector(selectCartItems);

    return (
        <Tabs screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="home"
                         options={{
                             title: "Home",
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="home" color={color}/>,
                         }}

            />
            <Tabs.Screen name="offers"
                         options={{
                             title: "Offers",
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="money" color={color} />,
                         }}
            />
            <Tabs.Screen name="order"
                         options={{
                             title: "Order",
                             tabBarIcon: ({color}) => <FontAwesome size={22} name="shopping-bag" color={color} />,
                             tabBarBadge: cartItems.length > 0? cartItems.length : undefined,
                             tabBarBadgeStyle: {
                                 backgroundColor: 'green'
                             }
                         }}
                         listeners={({ navigation}) => ({
                             tabPress: (e) => {
                                 e.preventDefault();
                                 navigation.navigate("deliver-or-collection");
                             }
                         })}
            />
            <Tabs.Screen name="feed"
                         options={{
                             title: "Feed",
                             href: './feed',
                             tabBarIcon: ({color}) => <FontAwesome size={24} name="newspaper-o" color={color} />,
                         }}
            />
            <Tabs.Screen name="more"
                         options={{
                             title: "Options",
                             tabBarIcon: ({color}) => <Icon name='more-horiz' size={30} color={color}/>
                             ,
                         }}
            />
        </Tabs>
    );
}

