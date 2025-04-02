import {TouchableOpacity, View} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";
import {Icon} from "@rneui/themed";

export default function BackButton({show=true, backPress}) {

    const navigation = useRouter()
    const {colors, shadowStyle} = useTheme()

    const onPress = backPress? backPress : () => {navigation.back()}

    return (
        <>
        {
            show===true? (
                <TouchableOpacity onPress={()=>{ onPress() }}
                                  style={[{backgroundColor: colors.link}, shadowStyle]}
                                  className='z-10 m-4 w-10 h-10 rounded-full items-center justify-center'>
                    <Icon name='chevron-left' type='feather' size={24} color={colors.linkText}/>
                </TouchableOpacity>
            ) : (
                <View className='w-10 h-10 m-4' />
            )
        }
        </>
    )
}