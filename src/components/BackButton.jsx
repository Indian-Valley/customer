import * as Icon from "react-native-feather";
import {TouchableOpacity} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";

export default function BackButton() {

    const navigation = useRouter()
    const {colors, shadowStyle} = useTheme()

    return (
        <TouchableOpacity onPress={()=>{ navigation.back() }}
                          style={[{backgroundColor: colors.link}, shadowStyle]}
                          className={`absolute z-10 bottom-4 left-4 rounded-full p-2`}>
            <Icon.ChevronLeft strokeWidth={3} stroke={colors.linkText} />
        </TouchableOpacity>
    )
}