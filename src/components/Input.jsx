import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {useTheme} from "@react-navigation/native";

export default function Input(props) {
    const {colors, textStyle} = useTheme();

    return (
        <View style={{borderColor: colors.link, borderWidth: StyleSheet.hairlineWidth, backgroundColor: colors.card}}
              className='flex-row rounded-2xl items-center px-4 mt-4 w-full'>
            {props.icon? props.icon : null}

            <TextInput className='p-2 m-2 items-center w-full'
                       placeholderTextColor={colors.defaultText}
                       style={textStyle}
                       {...props}/>
        </View>
    )
}