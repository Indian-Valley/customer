import React, { useCallback, useState } from 'react'
import {Alert, SafeAreaView, Text, View } from "react-native";

import { useRouter } from "expo-router";
import {supabase} from "../../lib/supabase";
import LoadingButton from "../../components/LoadingButton";

import { get, save } from '../../storage';
import {useTheme} from "@react-navigation/native";
import {CheckBox} from "@rneui/themed";
import {useColorScheme} from "nativewind";

export default function AccountScreen() {

    const navigation = useRouter();
    const {colors}= useTheme()
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

            <View className='border-y-2 border-gray-500 p-2'>
                <Text className="text-center font-bold text-2xl">Your Account</Text>
                <Text className='text-3xl font-extrabold m-2'>Profile</Text>

                <LoadingButton text='Logout' onPress={onLogout} shadow={true} />

            </View>

            <View className='border-b-2 border-gray-500 p-2'>

                <Text className="text-center font-bold text-2xl">Settings</Text>
                <Text className='text-3xl font-extrabold m-2'>Theme</Text>
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