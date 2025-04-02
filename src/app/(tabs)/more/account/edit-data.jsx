import React, {useRef, useState} from 'react'
import {ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import Input from "../../../../components/Input";
import * as Icon from "react-native-feather";
import LoadingButton from "../../../../components/LoadingButton";
import {useRouter} from "expo-router";
import {useAuth} from "../../../../contexts/AuthContexts";
import {ListItem} from "@rneui/themed";
import Header from "../../../../components/Header";

export default function EditDataScreen() {

    const navigation = useRouter();
    const {user, userDataLoading} = useAuth()

    const {colors, textStyle} = useTheme()

    const [loading, setLoading] = useState(false);

    const firstNameRef = useRef(user.first_names);
    const lastNameRef = useRef(user.last_name);
    const emailRef = useRef(user.email);
    const phoneRef = useRef(user.tel);

    React.useEffect(() => {
        console.log(user);

        firstNameRef.value = user.first_names;
        lastNameRef.value = user.last_name
        emailRef.value = user.email
        phoneRef.value = user.tel
    }, [user])

    const onSubmit = () => {

    }
    return (
        <View>
            <Header hasBack={true} useSafeArea={false} title="Edit Data" />

            <ScrollView>

                { userDataLoading ? (
                    <View className={'flex-row justify-center bottom-2 rounded-3xl mx-auto py-4'}>
                        <ActivityIndicator className='m-4'
                                           size='large'/>
                    </View>
                ) : (<>
                <View className='border-y border-gray-500 mt-4'>

                    <ListItem onPress={() => {}}
                              bottomDivider
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card}}>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Forename</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Input placeholder='Enter Forename...'
                                        value={firstNameRef.value}
                                        style={textStyle}/>
                    </ListItem>
                    <ListItem onPress={() => {}}
                              Component={TouchableOpacity}
                              containerStyle={{backgroundColor: colors.card}}>
                        <ListItem.Content>
                            <ListItem.Title style={textStyle}>Surname</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Input placeholder='Enter Surname...'
                                        value={lastNameRef.value}
                                        style={textStyle}/>

                    </ListItem>

                </View>
                <View className='border-y border-gray-500 mt-4'>

                <ListItem onPress={() => {}}
                          Component={TouchableOpacity}
                          containerStyle={{backgroundColor: colors.card, padding: 12}}>
                    <ListItem.Content>
                        <ListItem.Title  style={textStyle}>Contact Number</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Input placeholder='Enter Mobile...'
                                    value={phoneRef.value}
                                    style={textStyle}/>
                </ListItem>
                </View>
                <View className='border-y border-gray-500 mt-4'>

                <ListItem onPress={() => {}}
                          Component={TouchableOpacity}
                          containerStyle={{backgroundColor: colors.card}}>
                    <ListItem.Content>
                        <ListItem.Title style={textStyle}>Email</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Input placeholder='Enter Email...'
                                    value={emailRef.value}
                                    style={textStyle}/>
                </ListItem>
                </View>
                </>)}

            </ScrollView>

        </View>
    )
}