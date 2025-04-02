import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {useRouter} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import BackButton from "./BackButton";
import {Icon} from "@rneui/themed";
import {useSelector} from "react-redux";
import {selectIsASAP, selectOrderType, selectSelectedAddress, selectSelectedTime} from "../slices/orderDetailsSlice";

export default function MenuHeader() {

    const insets = useSafeAreaInsets()

    const navigation = useRouter()
    const {colors, textStyle, shadowStyle } = useTheme()

    const orderType = useSelector(selectOrderType)
    const selectedTime = useSelector(selectSelectedTime)
    const selectedAddress = useSelector(selectSelectedAddress)
    const isASAP = useSelector(selectIsASAP)

    return (
        <View style={{backgroundColor: colors.card, borderBottomWidth:StyleSheet.hairlineWidth, paddingTop: insets.top}}
              className="relative border-gray-500">

            <View className='items-center flex-row justify-between'>
                <View className='flex-row items-center'>
                    <BackButton backPress={() => navigation.navigate('/order')}/>
                    <View className='flex-col'>

                        {orderType==='Delivery'? (<>

                            <Text style={textStyle} className='text-xs'>
                                Ordering for: <Text className='font-bold'>Delivery</Text>
                            </Text>
                            <Text style={textStyle} className='text-xs'>
                                Time: <Text className='font-bold'>{isASAP? 'ASAP' : selectedTime}</Text>
                            </Text>
                            <Text style={textStyle} className='text-xs'>
                                Delivering to: <Text className='font-bold'>{selectedAddress}</Text>
                            </Text>
                        </>) : (<>
                            <Text style={textStyle} className='text-xs'>
                                Ordering for: <Text className='font-bold'>Collection</Text>
                            </Text>
                            <Text style={textStyle} className='text-xs'>
                                Time: <Text className='font-bold'>{isASAP? 'ASAP' : selectedTime}</Text>
                            </Text>
                        </>)}

                    </View>
                </View>

                <TouchableOpacity style={{backgroundColor: colors.link}} className='flex-row items-center p-2 mr-2 rounded-3xl'>
                    <Icon name='edit' size={20} color={colors.linkText}/>
                    <Text style={{color:colors.linkText}} className='pl-2'>Edit Order Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}