import React from "react";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";

export default function LoadingButton({buttonStyle="", text, onPress, loading=false, color}) {

    const {colors, shadowStyle} = useTheme();
    if (!color) color = colors.link

    return (
        loading? (
            <View className={'flex-row justify-center bottom-2 rounded-3xl my-2 '+buttonStyle}>
                <ActivityIndicator className='m-4'
                                   size='large'/>
            </View>
        ):(
            <TouchableOpacity onPress={onPress}
                              style={[{backgroundColor: color}, shadowStyle]}
                              className={'py-4 bottom-2 justify-items-center rounded-3xl my-2 '+buttonStyle}>
                <Text className='text-white font-extrabold text-lg m-1 text-center'>{text}</Text>
            </TouchableOpacity>
        )
    )
}