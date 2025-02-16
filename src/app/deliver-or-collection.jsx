import React from 'react'
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import {useRouter} from "expo-router";
import {CheckBox} from "@rneui/themed";


export default function DeliverOrCollectionScreen() {

    const insets = useSafeAreaInsets()
    const {colors, textStyle, shadowStyle} = useTheme();

    const [stateSelected, setStateSelected] = React.useState(0);

    const navigation = useRouter()

    return (
        <Pressable className='w-full h-full' style={{backgroundColor: '#00000099', paddingTop: insets.top }} onPress={navigation.back}>
                <View style={{ paddingTop: insets.top }} className='relative'>
                    <BackButton />
                </View>

            <View className='absolute bottom-4 w-full'>
                <View className='flex-col items-center'>
                    <TouchableOpacity onPress={() => setStateSelected(1)}
                                      style={[
                                          shadowStyle,
                                          {
                                              backgroundColor: colors.card,
                                              borderColor: stateSelected === 1?  colors.link : colors.text,
                                              shadowColor: stateSelected === 1? colors.link: colors.text,
                                          }
                                      ]}
                                      className='m-2 rounded-3xl w-80 h-40 flex-row border-4 relative'>
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
                                      className='pl-0 rounded-3xl w-80 h-40 flex-row border-4'>
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
                                      className='m-2 rounded-3xl w-80 h-40 flex-row border-4'>

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

                    <Pressable style={[
                                    shadowStyle,
                                    {
                                        backgroundColor: stateSelected === 0? '#808080aa' : colors.link,
                                        shadowColor: stateSelected === 0? '#808080aa' : colors.link
                                    }
                               ]}
                               className='p-4 m-6 rounded-3xl w-80'
                               disabled={stateSelected === 0}
                               onPress={() => navigation.replace('/order/menu')}>
                        <Text style={{color:colors.linkText}} className='font-extrabold text-3xl text-center'>Next</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}