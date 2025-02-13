import React, {useRef, useState} from 'react'
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import Input from "../../../components/Input";
import * as Icon from "react-native-feather";
import LoadingButton from "../../../components/LoadingButton";
import {useRouter} from "expo-router";

export default function EditDataScreen({firstName, lastName, email, mobile}) {

    const navigation = useRouter();

    const {colors, textStyle} = useTheme()

    const [loading, setLoading] = useState(false);

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const passwordRef = useRef('');
    const newPasswordRef = useRef('');

    const onSubmit = () => {

    }
    return (
        <SafeAreaView>
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
            <ScrollView className='px-4'>

            <Text style={textStyle} className='pt-8 font-semibold text-xl'>Change Names:</Text>
            <Input
                icon={ <Icon.User size={26} strokeWidth={2} color={colors.text}/> }
                placeholder='Please enter your first name'
                onChangeText={val => firstNameRef.current = val}
                value={firstName}
                autoCapitalize="words"
                autoComplete="given-name"/>
            <Input
                icon={ <Icon.User size={26} strokeWidth={2} color={colors.text}/> }
                placeholder='Please enter your last name'
                onChangeText={val => lastNameRef.current = val}
                autoCapitalize="words"
                autoComplete="family-name"/>

            <Text style={textStyle} className='pt-8 font-semibold text-xl'>Change Contact:</Text>
            <Input
                icon={ <Icon.Mail size={26} strokeWidth={2} color={colors.text}/> }
                placeholder='Please enter your email'
                onChangeText={val => emailRef.current = val}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete='email'/>
            <Input
                icon={ <Icon.Phone size={26} strokeWidth={2} color={colors.text}/> }
                placeholder='Please enter a mobile number'
                onChangeText={val => phoneRef.current = val}
                keyboardType="number-pad"
                autoComplete='tel'/>

            <Text style={textStyle} className='pt-8 font-semibold text-xl'>Change Password:</Text>
            <Input
                icon={ <Icon.Lock size={26} strokeWidth={2} color={colors.text}/> }
                placeholder='Please enter current password'
                onChangeText={val => passwordRef.current = val}
                autoCapitalize="none"
                autoComplete="password"
                secureTextEntry/>
            <Input
                icon={ <Icon.Lock size={26} strokeWidth={2} color={colors.text}/> }
                placeholder='Please enter new password'
                onChangeText={val => newPasswordRef.current = val}
                autoCapitalize="none"
                autoComplete="new-password"
                secureTextEntry/>

                <LoadingButton buttonStyle='mt-8' text='Save Changes' loading={loading} onPress={onSubmit}/>
            </ScrollView>

        </SafeAreaView>
    )
}