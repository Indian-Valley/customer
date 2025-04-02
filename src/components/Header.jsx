import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {useRouter} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import BackButton from "./BackButton";
import {Icon} from "@rneui/themed";

export default function Header({title, hasBack=false, showAccount=false, useSafeArea=true, backPress}) {

    const insets = useSafeAreaInsets()

    const navigation = useRouter()
    const {colors, textStyle, shadowStyle } = useTheme()

    return (
        <View style={{backgroundColor: colors.card, borderBottomWidth:StyleSheet.hairlineWidth, paddingTop: useSafeArea? insets.top : 0}} className="relative border-gray-500">

            <View className='items-center justify-between  flex-row'>
                <BackButton show={hasBack} backPress={backPress}/>
                <Text style={textStyle} className='m-4 font-bold text-2xl'>{title}</Text>
                { showAccount ? (
                    <TouchableOpacity onPress={()=>{ navigation.navigate('/more/account') }}
                                      style={[{backgroundColor: colors.link}, shadowStyle]}
                                      className='z-10 m-4 w-10 h-10 rounded-full items-center justify-center'>
                        <Icon name='user' type='feather' size={24} color={colors.linkText}/>
                    </TouchableOpacity>
                ) : (
                    <View className='w-10 h-10 m-4' />
                )}
            </View>
        </View>
    )
}