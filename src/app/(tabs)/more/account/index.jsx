import React, { useCallback, useState } from 'react'
import {
    Alert, ScrollView,
    TouchableOpacity,
    View
} from "react-native";
import {
    ListItem,
    Icon,
} from '@rneui/themed';

import { useRouter } from "expo-router";
import {supabase} from "../../../../lib/supabase";

import {useTheme} from "@react-navigation/native";
import {useColorScheme} from "nativewind";
import Header from "../../../../components/Header";

export default function AccountScreen() {

    const navigation = useRouter();
    const {colors, shadowStyle, textStyle} = useTheme()
    const {colorScheme, setColorScheme} = useColorScheme();

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

    return (
        <View className='flex-1'>
            <Header title='Account' hasBack={true} padding={4}/>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={() => navigation.navigate('/more/account/edit-data')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='person' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Edit Personal Details</ListItem.Title>
                        </ListItem.Content>

                        <Icon name='edit' size={30}  color={colors.text}/>
                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>

                    <ListItem onPress={() => navigation.push('/account/edit-data')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='lock' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Change Password</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>

                    <ListItem onPress={() => navigation.push('/account/edit-data')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='location-city' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Delivery Address</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>
                </View>
                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={onLogout}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='logout' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Logout</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </View>
                <View className='border-y border-gray-500 mt-4'>

                   <ListItem onPress={onDelete}
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='delete' size={30} color={colors.danger}/>
                        <ListItem.Content>
                            <ListItem.Title style={{color: colors.danger, fontWeight: 'bold'}}>Delete Account</ListItem.Title>
                        </ListItem.Content>

                    </ListItem>

                </View>

                <View className='w-full h-32' />
            </ScrollView>
        </View>
    )
}