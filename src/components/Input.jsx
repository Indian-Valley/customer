import React from "react";
import {TextInput, View} from "react-native";
import {useTheme} from "@react-navigation/native";

export default function Input(props) {
    const {colors} = useTheme();

    return (
        <View style={{borderColor: colors.primary}} className='flex-row border-2 rounded-2xl items-center px-4 mt-4 w-full'>
            {props.icon? props.icon : null}

            <TextInput className='p-2 m-2 items-center w-full'
                       placeholderTextColor={colors.text}
                       {...props}/>
        </View>
    )
}