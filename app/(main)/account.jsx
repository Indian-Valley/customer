import React, {useCallback} from 'react'
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { useRouter } from "expo-router";
import {supabase} from "../../lib/supabase";
import {themeColors} from "../../theme";
import * as Icon from "react-native-feather";

export default function AccountScreen() {

    const navigation = useRouter();


    const onLogout = () => {
        const {error} = supabase.auth.signOut()
        if (error) {
            Alert.alert('Logout', 'Error signing out');
        }
    }
    return (
        <SafeAreaView className='bg-white'>
            <View className="relative py-4">
                <TouchableOpacity onPress={()=>{ navigation.back() }}
                                  style={{backgroundColor: themeColors.bgColor(1)}}
                                  className="absolute z-10 top-3 left-3 rounded-full p-1.5">
                    <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-2xl">Your Account</Text>
                </View>
            </View>

            <Text className='text-3xl font-extrabold m-2'>Profile</Text>

            <TouchableOpacity className='m-5 p-3 rounded-2xl bg-green-400' onPress={onLogout}>
                <Text className='text-center font-bold text-white'>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}