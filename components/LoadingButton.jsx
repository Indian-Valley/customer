import React from "react";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import { theme} from "../constants/theme";

export default function LoadingButton({buttonStyle, text, shadow=false, onPress, loading=false}) {

    const shadowStyle = shadow? {
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    } : {}

    return (
        loading? (
            <View className={'flex-row justify-center bottom-2 rounded-3xl my-2 '+buttonStyle}>
                <ActivityIndicator className='m-4'
                                   color={theme.colors.darkLight}
                                   size='large'/>
            </View>
        ):(
            <TouchableOpacity onPress={onPress}
                              style={[{backgroundColor: theme.colors.darkLight}, shadowStyle]}
                              className={'py-4 bottom-2 justify-items-center rounded-3xl my-2 '+buttonStyle}>
                <Text className='text-white font-extrabold text-lg m-1 text-center'>{text}</Text>
            </TouchableOpacity>
        )
    )
}