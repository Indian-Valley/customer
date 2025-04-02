import React, {useRef, useState} from 'react'
import {ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useRouter} from "expo-router";
import {useAuth} from "../../../../contexts/AuthContexts";
import {Icon, ListItem} from "@rneui/themed";
import Header from "../../../../components/Header";
import ListItemInput from "../../../../components/ListItemInput";

export default function ChangePasswordScreen() {

    const navigation = useRouter();
    const {user, userDataLoading} = useAuth()

    const {colors, textStyle} = useTheme()

    const [loading, setLoading] = useState(false);

    const passwordRef = useRef('');

    const newPasswordRef = useRef('');
    const newPasswordCheckRef = useRef('');

    React.useEffect(() => {

    }, [userDataLoading])

    const onSubmit = () => {

    }

    return (
        <View>
            <Header title='Change Password' hasBack={true} useSafeArea={false} padding={4}/>

            <ScrollView>

                { userDataLoading ? (
                    <View className={'flex-row justify-center bottom-2 rounded-3xl mx-auto py-4'}>
                        <ActivityIndicator className='m-4'
                                           size='large'/>
                    </View>
                ) : (<>

                <View className='mt-4 border-y-2 border-gray-500'>
                    <ListItemInput iconName='lock' label='Current Password' secure={true}/>
                </View>

                <ListItem onPress={() => {}}
                          bottomDivider
                          containerStyle={{backgroundColor: colors.background}}>
                    <ListItem.Content>
                        <ListItem.Title style={textStyle}>New</ListItem.Title>
                    </ListItem.Content>

                    <ListItem.Input placeholder='Enter New Password...'
                                    secureTextEntry={true}
                                    style={textStyle}/>

                </ListItem>
                <ListItem onPress={() => {}}
                          bottomDivider
                          containerStyle={{backgroundColor: colors.background}}>
                    <ListItem.Content>
                        <ListItem.Title  style={textStyle}>Confirm New Password</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Input placeholder='Re-enter New Password...'
                                    style={textStyle}/>
                </ListItem>

                </>)}

            </ScrollView>

        </View>
    )
}