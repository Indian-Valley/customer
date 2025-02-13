import {Text, TouchableOpacity, View} from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {useRouter} from "expo-router";

export default function Header({title, hasBack=false, showAccount=false}) {

    const navigation = useRouter()
    const {colors, textStyle, shadowStyle } = useTheme()

    return (
        <View className="relative pb-4">
            {hasBack ?
                <TouchableOpacity onPress={()=>{ navigation.back() }}
                                  style={[{backgroundColor: colors.link}, shadowStyle]}
                                  className="absolute z-10 top-1 left-3 rounded-full p-1.5">
                    <Icon.ChevronLeft strokeWidth={3} stroke={colors.linkText} />
                </TouchableOpacity>
            : null}

            {showAccount ?
                <TouchableOpacity onPress={()=>{ navigation.push('/account') }}
                                  style={[{backgroundColor: colors.link}, shadowStyle]}
                                  className="absolute z-10 right-3 rounded-full p-1.5">
                    <Icon.User strokeWidth={3} stroke={colors.linkText} />
                </TouchableOpacity>
                : null}

            <View>
                <Text style={textStyle} className="text-center font-bold text-2xl">{title}</Text>
            </View>
        </View>
    )
}