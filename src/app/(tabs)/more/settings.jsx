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

export default function SettingsScreen() {

    const navigation = useRouter();
    const {colors, shadowStyle, textStyle} = useTheme()
    const {colorScheme, setColorScheme} = useColorScheme();

    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [notificationsOrderStatus, setNotificationsOrderStatus] = React.useState(true);
    const [notificationsOffers, setNotificationsOffers] = React.useState(true);
    const [notificationsOther, setNotificationsOther] = React.useState(true);

    const handleNotificationsEnabled = (value) => {
        setNotificationsEnabled(value);
        // TODO: save to settings
    }
    const handleNotificationsOrderStatus = (value) => {
        setNotificationsOrderStatus(value);
        // TODO: save to settings
    }
    const handleNotificationsOffers = (value) => {
        setNotificationsOffers(value);
        // TODO: save to settings
    }
    const handleNotificationsOther = (value) => {
        setNotificationsOther(value);
        // TODO: save to settings
    }

    const [themeToggle, setThemeToggle] = useState(true);
    const [darkModeToggle, setDarkModeToggle] = useState(true);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
    const [selectedTheme, setSelectedTheme] = useState(colorScheme);

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

    const notificationTypes = [
        {title: 'Order Status Notifications', value: notificationsOrderStatus, onPress: (value) => handleNotificationsOrderStatus(value)},
        {title: 'Special Offers Notifications', value: notificationsOffers, onPress: (value) => handleNotificationsOffers(value)},
        {title: 'Other Notifications', value: notificationsOther, onPress: (value) => handleNotificationsOther(value)},
    ]

    return (
        <View className='flex-1'>
            <Header title='Settings' hasBack={true} padding={4}/>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={onReset}
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card, padding: 16}}>
                        <Icon name='settings-backup-restore' size={30} color={colors.defaultText}/>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Reset Settings</ListItem.Title>
                        </ListItem.Content>

                    </ListItem>
                </View>

                {/* Theme */}

                <View className='border-y border-gray-500 mt-4'>
                    <ListItem onPress={() => {}}
                              Component={TouchableHighlight}
                              containerStyle={{backgroundColor: colors.card}}
                              bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Set App Theme</ListItem.Title>
                        </ListItem.Content>
                        <Switch color={colors.link}
                                value={themeToggle}
                                onValueChange={(value) => {
                                    setThemeToggle(value)
                                    toggleTheme(value? (darkModeToggle? 'dark' : 'light') : 'system')
                                }}/>
                    </ListItem>

                    <ListItem onPress={() => {}}
                              containerStyle={{backgroundColor: colors.card}}
                              bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Dark Mode</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content
                            disabled={!themeToggle}
                            right>
                            <Switch color={colors.link}
                                    value={darkModeToggle}
                                    disabled={!themeToggle}
                                    onValueChange={(value) => {
                                        setDarkModeToggle(value)
                                        toggleTheme(value? 'dark' : 'light')
                                    }}/>
                        </ListItem.Content>
                    </ListItem>

                </View>

                {/* Notification */}
                <View className='border-y border-gray-500 mt-4'>
                    <ListItem.Accordion content={<>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Allow Notifications</ListItem.Title>
                        </ListItem.Content>
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={(value) => handleNotificationsEnabled(value)}
                            color={colors.link}
                        />
                    </>}
                                        containerStyle={{backgroundColor: colors.card, padding: 16}}
                                        isExpanded={notificationsEnabled}
                                        icon={<Icon name="bell-off" type='feather' size={30} color={colors.text}/>}
                                        expandIcon={<Icon name="bell" type='feather' size={30} color={colors.text}/>}
                                        noRotation bottomDivider>

                        {notificationTypes.map((item, index) => (
                            <ListItem key={index}
                                      onPress={() => {}}
                                      containerStyle={{backgroundColor: colors.card}}
                                      bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title style={textStyle}>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Content right>
                                    <Switch color={colors.link}
                                            value={item.value}
                                            onValueChange={(value) => item.onPress(value)}/>
                                </ListItem.Content>
                            </ListItem>
                        ))}

                        <ListItem onPress={() => {}}
                                  containerStyle={{backgroundColor: colors.background}}
                                  bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title style={textStyle}>Notification Type</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.ButtonGroup buttons={['Sound', 'Vibrate']}
                                                  buttonStyle={{backgroundColor: colors.card}}
                                                  selectedButtonStyle={{backgroundColor: colors.link}}
                                                  selectedIndex={selectedButtonIndex}
                                                  onPress={(index) => setSelectedButtonIndex(index)}/>
                        </ListItem>
                    </ListItem.Accordion>

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

                <View className='w-full h-32' />
            </ScrollView>
        </View>
    )
}