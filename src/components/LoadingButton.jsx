import React from "react";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";

export default function LoadingButton({buttonStyle, text, shadow=false, onPress, loading=false}) {

    const {colors} = useTheme();

    const shadowStyle = shadow? {
        shadowColor: colors.primary,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 4,
    } : {}

    return (
        loading? (
            <View className={'flex-row justify-center bottom-2 rounded-3xl my-2 '+buttonStyle}>
                <ActivityIndicator className='m-4'
                                   size='large'/>
            </View>
        ):(
            <TouchableOpacity onPress={onPress}
                              style={[{backgroundColor: colors.link}, shadowStyle]}
                              className={'py-4 bottom-2 justify-items-center rounded-3xl my-2 '+buttonStyle}>
                <Text className='text-white font-extrabold text-lg m-1 text-center'>{text}</Text>
            </TouchableOpacity>
        )
    )
}