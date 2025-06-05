import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react'
import * as Icon from "react-native-feather"
import {Link, useRouter} from "expo-router";
import {useDispatch} from "react-redux";
import {emptyCart} from "../../../slices/cartSlice";
import {useTheme} from "@react-navigation/native";
import Header from "../../../components/Header";
import MenuDivider from "../../../components/MenuDivider";


export default function OrderConfirmationScreen() {

    const router = useRouter();
    const dispatch = useDispatch();
    const {colors, textStyle, shadowStyle} = useTheme();

    useEffect(() => {
        dispatch(emptyCart());
    })
    return (
        <View style={{backgroundColor: colors.background}} className="w-full h-screen">
            <Header title='Order Placed' hasBack={true} showAccount={false} backPress={() => {
                router.back()
                router.replace("/home")}
            }/>

            <View className='m-auto w-3/4'>
                <Text style={textStyle} className='font-extrabold text-3xl text-center my-4'>Thank You for Ordering!</Text>
                <MenuDivider></MenuDivider>
                <Text style={textStyle} className=' text-center my-2'>Enable notifications to alert you when your order status changes: <Link style={{color:colors.link, fontWeight: 'bold'}} href='../more/settings'>Notifications</Link></Text>
                <Text style={textStyle} className=' text-center my-4'><Link style={{color:colors.link, fontWeight: 'bold'}} href='/home'>Back to home</Link></Text>
            </View>

            <View className="flex-row justify-between px-5">
                <View className='w-1/4 p-2 gap-y-2 mt-10 border-t-8 border-white flex-col items-center'>
                    <View className='border-4 border-white bg-green-600 aspect-square w-3/4 -top-1/2 rounded-full'>
                    </View>
                    <Text style={textStyle} className='text-center'>Submitted</Text>
                </View>
                <View className='w-1/4 p-2 gap-y-2 mt-10 border-t-8 border-white flex-col items-center'>
                    <View className='border-4 border-white bg-green-600 aspect-square w-3/4 -top-1/2 rounded-full'>
                    </View>
                    <Text style={textStyle} className=''>Cooking</Text>
                </View>
                <View className='w-1/4 p-2 gap-y-2 mt-10 border-t-8 border-white flex-col items-center'>
                    <View className='border-4 border-white bg-gray-600 aspect-square w-3/4 -top-1/2 rounded-full'>
                    </View>
                    <Text style={textStyle} className=''>Delivering</Text>
                </View>
                <View className='w-1/4 p-2 gap-y-2 mt-10 border-t-8 border-white flex-col items-center'>
                    <View className='border-4 border-white bg-gray-600 aspect-square w-3/4 -top-1/2 rounded-full'>
                    </View>
                    <Text style={textStyle} className=''>Completed</Text>
                </View>
            </View>

            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text style={textStyle} className="text-lg font-semibold">
                        Estimated Arrival
                    </Text>
                    <Text style={textStyle} className="text-3xl font-extrabold">
                        30-40 Minutes
                    </Text>
                    <Text style={textStyle} className="mt-2 font-semibold">Your order will be with you soon!</Text>
                </View>
                <Image className="w-24 h-24" source={require('@/assets/images/cooking.gif')}/>
            </View>

            <TouchableOpacity style={{backgroundColor: colors.help}}
                  className="pl-6 pr-8 flex-row justify-between items-center rounded-full m-4">
                <View className="flex-1 ml-3 py-4">
                    <Text className="text-white text-xs">Need some help?</Text>
                    <Text className="-mt-1 text-white text-xl font-bold">Contact Us</Text>
                </View>

                <Icon.Phone fill={colors.link} stroke='black'/>
            </TouchableOpacity>

            <View className='h-8'></View>

        </View>
    )
}