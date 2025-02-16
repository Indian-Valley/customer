import React, {useRef, useState} from 'react'
import {ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import Input from "../../../../components/Input";
import * as Icon from "react-native-feather";
import LoadingButton from "../../../../components/LoadingButton";
import {useRouter} from "expo-router";
import {useAuth} from "../../../../contexts/AuthContexts";
import {ListItem} from "@rneui/themed";

export default function EditDataScreen({firstName, lastName, email, mobile}) {

    const navigation = useRouter();
    const {user, userDataLoading} = useAuth()

    const {colors, textStyle} = useTheme()

    const [loading, setLoading] = useState(false);

    const firstNameRef = useRef(user.first_names);
    const lastNameRef = useRef('');
    const emailRef = useRef(user.email);
    const phoneRef = useRef('');
    const passwordRef = useRef('');
    const newPasswordRef = useRef('');

    const onSubmit = () => {

    }
    return (
        <View>
            <View className="relative py-4">
                <TouchableOpacity onPress={()=>{ navigation.back() }}
                                  style={{backgroundColor: colors.link}}
                                  className="absolute z-10 top-3 left-3 rounded-full p-1.5">
                    <Icon.ChevronLeft strokeWidth={3} stroke={colors.linkText} />
                </TouchableOpacity>
                <View>
                    <Text style={textStyle} className="text-center font-bold text-2xl">Edit Details</Text>
                </View>
            </View>

            <ScrollView>

                { userDataLoading ? (
                    <View className={'flex-row justify-center bottom-2 rounded-3xl mx-auto py-4'}>
                        <ActivityIndicator className='m-4'
                                           size='large'/>
                    </View>
                ) : (<>

                <ListItem onPress={() => {}}
                          bottomDivider
                          containerStyle={{backgroundColor: colors.background}}>
                    <ListItem.Content>
                        <ListItem.Title style={textStyle}>Forename</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Input placeholder={user.first_names? user.first_names : 'Enter Forename...'} style={textStyle}/>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem onPress={() => {}}
                          bottomDivider
                          containerStyle={{backgroundColor: colors.background}}>
                    <ListItem.Content>
                        <ListItem.Title style={textStyle}>Surname</ListItem.Title>
                    </ListItem.Content>

                    <ListItem.Input placeholder={user.last_name? user.last_name : 'Enter Surname...'} style={textStyle}/>
                    <ListItem.Chevron />

                </ListItem>
                <ListItem onPress={() => {}}
                          bottomDivider
                          containerStyle={{backgroundColor: colors.background}}>
                    <ListItem.Content>
                        <ListItem.Title  style={textStyle}>Contact Number</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Subtitle style={textStyle}>
                        {`${user?.tel}`}
                    </ListItem.Subtitle>
                </ListItem>
                <ListItem onPress={() => {}}
                          bottomDivider
                          containerStyle={{backgroundColor: colors.background}}>
                    <ListItem.Content>
                        <ListItem.Title style={textStyle}>Email</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Title style={textStyle}>
                        {user?.email}
                    </ListItem.Title>
                </ListItem>
                </>)}

            </ScrollView>

        </View>
    )
}