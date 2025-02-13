import React, { useCallback, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { useRouter } from "expo-router";
import {supabase} from "../../../lib/supabase";
import LoadingButton from "../../../components/LoadingButton";

import { get, save } from '../../../storage';
import {useTheme} from "@react-navigation/native";
import {CheckBox} from "@rneui/themed";
import {useColorScheme} from "nativewind";
import {useAuth} from "../../../contexts/AuthContexts";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AccountScreen() {

    const navigation = useRouter();
    const {colors, shadowStyle, textStyle} = useTheme()
    const {user, userDataLoading} = useAuth()

    const {colorScheme, setColorScheme} = useColorScheme();

    const [selectedTheme, setSelectedTheme] = useState(colorScheme);

    const onLogout = async () => {
        Alert.alert('Confirm', 'Are you sure you want to logout?', [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
            }, {
                text: 'Logout',
                onPress: () => {
                    const {error} = supabase.auth.signOut()
                    if (error) {
                        Alert.alert('Logout', 'Error signing out');
                    }
                },
                style: 'destructive'
            },
        ]);

    }
    const onDelete = async () => {
        Alert.alert('Confirm', 'Are you sure you want to delete your account?', [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
            }, {
                text: 'Delete',
                onPress: () => {
                    const {error} = supabase.auth.signOut()
                    if (error) {
                        Alert.alert('Delete Account', 'Error deleting account');
                    }
                },
                style: 'destructive'
            },
        ]);

    }
    const onReset = async () => {
        Alert.alert('Confirm', 'Are you sure you want to clear your settings?', [
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
            }, {
                text: 'Reset',
                onPress: () => {

                },
                style: 'destructive'
            },
        ]);

    }

    const toggleTheme = (theme) => {
        setSelectedTheme(theme);
        setColorScheme(theme);
    }

    return (
        <SafeAreaView className='p-2'>
            <View>
                <Text style={textStyle} className='text-3xl font-extrabold text-center border-b border-gray-500 p-2'>Settings</Text>
            </View>

            <ScrollView stickyHeaderIndices={[0, 2]}>
                {/* Account */}
                <View style={[{backgroundColor: colors.background}, shadowStyle]}>
                    <Text style={textStyle} className="text-center text-3xl p-2">Account</Text>
                </View>
                <View className='border-b border-gray-500 p-3'>

                    <View className='flex-row justify-between items-center'>
                        <Text style={textStyle} className='text-xl font-extrabold'>Personal Details</Text>
                        <TouchableOpacity className='flex-row items-center gap-2' onPress={() => navigation.push('/account/edit-data')}>
                            <FontAwesome name='edit' size={24} color={colors.link}/>
                            <Text style={{color: colors.link}} className='font-semibold text-lg'>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    { userDataLoading ? (
                        <View className={'flex-row justify-center bottom-2 rounded-3xl mx-auto py-5'}>
                            <ActivityIndicator className='m-4'
                                               size='large'/>
                        </View>
                    ) : (<>
                        <View className='flex-row justify-between items-center'>
                            <Text style={textStyle} className='p-1'>Name</Text>
                            <Text style={textStyle} className='p-1'>{`${user?.first_names} ${user?.last_name}`}</Text>
                        </View>
                        <View className='flex-row justify-between items-center'>
                            <Text style={textStyle} className='p-1'>Contact Number</Text>
                            <Text style={textStyle} className='p-1'>{`${user?.tel}`}</Text>
                        </View>
                        <View className='flex-row justify-between items-center'>
                            <Text style={textStyle} className='p-1'>Email</Text>
                            <Text style={textStyle} className='p-1'>{`${user?.email}`}</Text>
                        </View>
                        <View className='flex-row justify-between items-center pb-5'>
                            <Text style={textStyle} className='p-1'>Address</Text>
                            <Text style={textStyle} className='p-1'>{`${user?.default_address}`}</Text>
                        </View>
                    </>)}

                    <LoadingButton text='Logout' onPress={onLogout}/>
                    <LoadingButton color={colors.danger} text='Delete Accout' onPress={onDelete}/>
                </View>

                <View style={[{backgroundColor: colors.background}, shadowStyle]}>
                    <Text style={textStyle} className="text-center text-3xl p-2">App Settings</Text>
                </View>

                <LoadingButton color={colors.defaultText} text='Reset All Settings' onPress={onReset}/>


                {/* Theme */}
                <View className='border-b border-gray-500 p-3'>

                    <Text style={{color: colors.text}} className='text-xl font-extrabold my-2 p-1'>Theme</Text>
                    <View className='flex-row justify-between items-center'>
                        <CheckBox checked={selectedTheme === 'system'}
                                  onPress={() => toggleTheme('system')}
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checkedColor={colors.link}
                                  uncheckedColor={colors.defaultText}
                                  textStyle={textStyle}
                                  title='System'
                                  containerStyle ={{backgroundColor: 'transparent', padding: '1', margin: '0'}}/>
                        <CheckBox checked={selectedTheme === 'light'}
                                  onPress={() => toggleTheme('light')}
                                  checkedIcon='dot-circle-o'
                                  uncheckedIcon='circle-o'
                                  checkedColor={colors.link}
                                  uncheckedColor={colors.defaultText}
                                  textStyle={textStyle}
                                  title='Light'
                                  containerStyle ={{backgroundColor: 'transparent', padding: '1', margin: '0'}}/>
                        <CheckBox checked={selectedTheme === 'dark'}
                                  onPress={() => toggleTheme('dark')}
                                  checkedIcon='dot-circle-o'
                                  checkedColor={colors.link}
                                  uncheckedColor={colors.defaultText}
                                  textStyle={textStyle}
                                  uncheckedIcon='circle-o'
                                  title='Dark'
                                  containerStyle ={{backgroundColor: 'transparent', padding: '1', margin: '0'}}/>

                    </View>

                </View>

                {/* Notification */}
                <View className='border-b border-gray-500 p-3'>

                    <Text style={{color: colors.text}} className='text-xl font-extrabold my-2 p-1'>Notifications</Text>
                    <Text style={textStyle} className='my-1'>Allow Notifications</Text>
                    <Text style={textStyle} className='my-1'>Allow Notifications: Order Status Updates</Text>
                    <Text style={textStyle} className='my-1'>Allow Notifications: Special Offers</Text>
                    <Text style={textStyle} className='my-1'>Allow Notifications: Reminders</Text>
                    <Text style={textStyle} className='my-1'>Allow Notifications: Other</Text>
                    <Text style={textStyle} className='my-1'>Allow Notifications Sound</Text>
                    <Text style={textStyle} className='my-1'>Notification Frequency</Text>

                </View>

                {/* Feed */}
                <View className='border-b border-gray-500 p-3'>

                    <Text style={{color: colors.text}} className='text-xl font-extrabold my-2 p-1'>Feed</Text>
                    <Text style={textStyle} className='my-1'>Show Feed</Text>
                    <Text style={textStyle} className='my-1'>Feed Notifications</Text>

                    <Text style={textStyle} className='my-1'>Feed auto-update frequency</Text>


                </View>

                {/* Other */}
                <View className='border-b border-gray-500 p-3'>

                    <Text style={textStyle} className='text-xl font-extrabold my-2 p-1'>Other</Text>
                    <Text style={textStyle} className='my-1'>Rate Us!</Text>
                    <Text style={textStyle} className='my-1'>Privacy Policy</Text>
                    <Text style={textStyle} className='my-1'>Terms of Service</Text>
                    <Text style={textStyle} className='my-1'>App Version 0.01</Text>

                </View>

                <View className='w-full h-32' />
            </ScrollView>
        </SafeAreaView>
    )
}