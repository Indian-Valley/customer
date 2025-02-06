import {useRouter} from "expo-router";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import LoadingButton from "../../../components/LoadingButton";
import React, {useState} from "react";
import {useTheme} from "@react-navigation/native";

export default function OrderScreen() {

    const {colors} = useTheme()

    const [deliverySelected, setDeliverySelected] = useState(true);

    const navigation = useRouter();

    return (
        <SafeAreaView>

            <View className='shadow-2xl rounded-3xl mx-3'>

                <View className="relative py-4 shadow-sm">
                    <Text style={{fontFamily: 'Verdana'}} className='text-3xl font-extrabold text-center text-gray-700'>START YOUR ORDER</Text>
                </View>

                <View className='flex-row'>

                    <TouchableOpacity style={{backgroundColor: colors.background}}
                                      className='flex-1 m-2 p-3 rounded-full'
                                      onPress={() => setDeliverySelected(true)}>
                        <Text className={`text-center text-lg text-white ${deliverySelected? "font-bold":"font-medium"}`}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: colors.background}}
                                      className='flex-1 m-2 p-3 rounded-full'
                                      onPress={() => setDeliverySelected(false)}>
                        <Text className={`text-center text-lg text-white ${deliverySelected? "font-medium" : "font-bold"}`}>Collection</Text>
                    </TouchableOpacity>
                </View>

                <View className="m-2 p-3 bg-white rounded-2xl">
                    {
                        deliverySelected? (
                            <View>
                                <Text className="font-bold mb-1">Delivery To:</Text>
                                <View className="flex-row">
                                    <TextInput className="flex-1 rounded-xl py-1 px-2 text-gray-600 border"
                                               placeholder="Postcode"/>
                                    <TouchableOpacity className="flex-2 bg-gray-700 mx-1 rounded-xl py-1 px-2">
                                        <Text className="text-white text-xs text-center">Find Address</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text className="text-gray-700 text-xs mt-1 text-right">Or Enter Address Manually</Text>

                                <TextInput className="border rounded-xl px-2 py-1" placeholder="Address line 1"/>
                                <TextInput className="border rounded-xl px-2 py-1 mt-1" placeholder="Address line 2"/>
                                <TextInput className="border rounded-xl px-2 py-1 my-1" placeholder="Town"/>
                            </View>
                        ) : (
                            <View>
                                <Text className="font-bold mb-1">Collection for:</Text>

                                <TextInput className="border rounded-xl px-2 py-1 mt-1" placeholder="Name"/>
                                <TextInput className="border rounded-xl px-2 py-1 my-1" placeholder="Time"/>
                            </View>
                        )}


                    <LoadingButton text='Next'
                                   loading={false}
                                   onPress={() => navigation.navigate('/menu')}
                                   shadow={true}/>
                </View>


            </View>
        </SafeAreaView>
    )
}