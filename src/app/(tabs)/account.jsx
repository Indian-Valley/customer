import React, { useCallback, useState } from 'react'
import {Alert, Pressable, SafeAreaView, Text, TouchableOpacity, View} from "react-native";

import { useRouter } from "expo-router";
import {supabase} from "../../lib/supabase";
import LoadingButton from "../../components/LoadingButton";

import { get, save } from '../../storage';
import {useTheme} from "@react-navigation/native";
import {CheckBox} from "@rneui/themed";
import {useColorScheme} from "nativewind";
import {useAuth} from "../../contexts/AuthContexts";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AccountScreen() {

    const navigation = useRouter();
    const {colors}= useTheme()
    const {user} = useAuth()
    console.log('account', user)

    const {colorScheme, setColorScheme} = useColorScheme();

    const [selectedTheme, setSelectedTheme] = useState(colorScheme);

    const onLogout = () => {
        const {error} = supabase.auth.signOut()
        if (error) {
            Alert.alert('Logout', 'Error signing out');
        }
    }

    const toggleTheme = (theme) => {
        setSelectedTheme(theme);
        setColorScheme(theme);
    }

    return (
        <SafeAreaView className='p-2'>

            <View className='border-y-2 border-gray-500 p-3'>
                <Text style={{color: colors.text}} className="text-center font-bold text-3xl pb-3">Your Account</Text>

                <View className='flex-row justify-between items-center'>
                    <Text style={{color: colors.text}} className='text-xl font-extrabold'>Personal Details</Text>
                    <TouchableOpacity className='flex-row items-center gap-2'>
                        <FontAwesome name='edit' size={24} color={colors.link}/>
                        <Text style={{color: colors.link}} className='font-extrabold text-lg'>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View className='flex-row justify-between items-center'>
                    <Text style={{color: colors.text}} className='p-1'>Name</Text>
                    <Text style={{color: colors.text}} className='p-1'>{`${user?.first_names} ${user?.last_name}`}</Text>
                </View>
                <View className='flex-row justify-between items-center'>
                    <Text style={{color: colors.text}} className='p-1'>Contact Number</Text>
                    <Text style={{color: colors.text}} className='p-1'>{`${user?.tel}`}</Text>
                </View>
                <View className='flex-row justify-between items-center pb-5'>
                    <Text style={{color: colors.text}} className='p-1'>Address</Text>
                    <Text style={{color: colors.text}} className='p-1'>{`${user?.default_address}`}</Text>
                </View>

                <LoadingButton text='Logout' onPress={onLogout} shadow={true} />

            </View>

            <View className='border-b-2 border-gray-500 p-2'>

                <Text style={{color: colors.text}} className="text-center font-bold text-2xl p-1">Settings</Text>
                <Text style={{color: colors.text}} className='text-3xl font-extrabold m-2 p-1'>Theme</Text>
                <View className='flex-row justify-between items-center'>
                    <CheckBox checked={selectedTheme === 'system'}
                              onPress={() => toggleTheme('system')}
                              checkedIcon='dot-circle-o'
                              uncheckedIcon='circle-o'
                              title='System'
                              containerStyle ={{backgroundColor: 'transparent', padding: '1', margin: '0'}}/>
                    <CheckBox checked={selectedTheme === 'light'}
                              onPress={() => toggleTheme('light')}
                              checkedIcon='dot-circle-o'
                              uncheckedIcon='circle-o'
                              title='Light'
                              containerStyle ={{backgroundColor: 'transparent', padding: '1', margin: '0'}}/>
                    <CheckBox checked={selectedTheme === 'dark'}
                              onPress={() => toggleTheme('dark')}
                              checkedIcon='dot-circle-o'
                              uncheckedIcon='circle-o'
                              title='Dark'
                              containerStyle ={{backgroundColor: 'transparent', padding: '1', margin: '0'}}/>

                </View>

            </View>

        </SafeAreaView>
    )
}