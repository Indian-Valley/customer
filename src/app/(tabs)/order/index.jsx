import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LoadingButton from "../../../components/LoadingButton";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Header from "../../../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setOrderType } from "../../../slices/orderDetailsSlice";

export default function OrderScreen() {

    const insets = useSafeAreaInsets()
    const {colors, shadowStyle, textStyle} = useTheme()

    const [stateSelected, setStateSelected] = React.useState(0);
    const orderTypes = ['NOT SELECTED', 'Booking', 'Collection', 'Delivery']

    const navigation = useRouter();

    const dispatch = useDispatch();

    const handleSelectedOrderType = () => {
        console.log("handleSelectedOrderType", orderTypes[stateSelected])
        dispatch(setOrderType(orderTypes[stateSelected]));
    }

    return (
        <View className='w-full h-full'>
            <Header title='Order' showAccount={true}/>

            <ScrollView className='py-2'>
                <TouchableOpacity onPress={() => setStateSelected(1)}
                           style={[
                               shadowStyle,
                               {
                                   backgroundColor: colors.card,
                                   borderColor: stateSelected === 1?  colors.link : colors.text,
                                   shadowColor: stateSelected === 1? colors.link: colors.text,
                               }
                           ]}
                           className='my-2 h-40 flex-row border-y-4'>
                    <View className='p-4 pr-0 w-1/2'>
                        <Text style={textStyle} className='font-extrabold text-2xl'>Our Place?</Text>
                        <Text style={textStyle} className='p-2'>Book a table to dine in</Text>
                    </View>
                    <View className='w-1/2 p-2'>
                        <Image source={require('@/assets/images/dinner.png')}
                               resizeMode='contain'
                               style={{width: undefined, height: undefined, flex: 1}} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setStateSelected(2)}
                           style={[
                               shadowStyle,
                               {
                                   backgroundColor: colors.card,
                                   borderColor: stateSelected === 2?  colors.link : colors.text,
                                   shadowColor: stateSelected === 2? colors.link: colors.text,
                               }
                           ]}
                           className='my-2 h-40 flex-row border-y-4'>
                    <View className='w-1/2 p-4'>
                        <Image source={require('@/assets/images/takeaway.png')}
                               resizeMode='contain'
                               style={{width: undefined, height: undefined, flex: 1}} />
                    </View>
                    <View className='w-1/2 p-4 pl-0'>
                        <Text style={textStyle} className='font-extrabold text-2xl text-right'>...For Takeaway?</Text>
                        <Text style={textStyle} className='text-right p-1'>Order for collection </Text>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => setStateSelected(3)}
                           style={[
                               shadowStyle,
                               {
                                   backgroundColor: colors.card,
                                   borderColor: stateSelected === 3?  colors.link : colors.text,
                                   shadowColor: stateSelected === 3? colors.link: colors.text,
                               }
                           ]}
                           className='my-2 h-40 flex-row border-y-4'>

                    <View className='w-1/2 p-4 pr-0'>
                        <Text style={textStyle} className='font-extrabold text-2xl text-center'>...Or to You?</Text>
                        <Text style={textStyle}>Order for delivery </Text>
                    </View>

                    <View className='w-1/2 p-2'>
                        <Image source={require('@/assets/images/food-delivery.png')}
                               resizeMode='contain'
                               style={{width: undefined, height: undefined, flex: 1}} />
                    </View>
                </TouchableOpacity>

                <View className='m-8'>
                    <LoadingButton text='Next'
                                   onPress={() => {
                                       handleSelectedOrderType()
                                       navigation.navigate('/order/menu')
                                   }}
                                   active={stateSelected > 0}/>
                </View>
            </ScrollView>

        </View>

    )
}