import React from "react";
import {TextInput, View} from "react-native";
import {theme} from "../constants/theme.js";

export default function Input(props) {
    return (
        <View className='flex-row border border-gray-500 rounded-2xl items-center px-4 mt-4'>
            {props.icon? props.icon : null}

            <TextInput className='p-2 m-2 items-center w-full'
                       placeholderTextColor={theme.colors.textLight}
d                       {...props}/>
        </View>
    )
}