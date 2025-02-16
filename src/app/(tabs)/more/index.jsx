import React, { useCallback, useState } from 'react'
import {
    ActivityIndicator,
    Alert, FlatList,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from "react-native";
import {
    ListItem,
    Avatar,
    Icon,
    Badge,
    ListItemProps,
    Button,
    Switch,
    CheckBox,
    lightColors, ButtonGroup
} from '@rneui/themed';

import { useRouter } from "expo-router";
import {supabase} from "../../../lib/supabase";
import LoadingButton from "../../../components/LoadingButton";

import { get, save } from '../../../storage';
import {useTheme} from "@react-navigation/native";
import {useColorScheme} from "nativewind";
import {useAuth} from "../../../contexts/AuthContexts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "../../../components/Header";

export default function MoreScreen() {

    const navigation = useRouter();
    const {colors, shadowStyle, textStyle} = useTheme()
    const {colorScheme, setColorScheme} = useColorScheme();

    return (
        <View className='flex-1'>
            <Header title='More' padding={4}/>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={() => navigation.navigate('/more/account')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='person' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Account</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>

                    <ListItem onPress={() => navigation.push('/more/settings')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='settings' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Settings</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>
                </View>

                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={() => navigation.navigate('/more/order-history')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='history' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Order History</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>
                </View>

                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={() => navigation.navigate('/more/order-history')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='star' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Rate Us!</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>
                    <ListItem onPress={() => navigation.navigate('/more/order-history')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='policy' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Privacy Policy</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>
                    <ListItem onPress={() => navigation.navigate('/more/order-history')}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='gavel' size={30} color={colors.text}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Terms & Conditions</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron color={colors.text}/>
                    </ListItem>
                </View>
                <Text style={{color: colors.defaultText}} className='m-1'>App Version 0.01</Text>


                <View className='w-full h-32' />
            </ScrollView>
        </View>
    )
}