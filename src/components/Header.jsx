import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import {useTheme} from "@react-navigation/native";
import {useRouter} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import BackButton from "./BackButton";

export default function Header({title, hasBack=false, showAccount=false, padding=2}) {

    const insets = useSafeAreaInsets()

    const navigation = useRouter()
    const {colors, textStyle, shadowStyle } = useTheme()

    return (
        <View style={{backgroundColor: colors.card, borderBottomWidth:StyleSheet.hairlineWidth, paddingTop: insets.top}} className="relative pb-4 border-gray-500">
            {hasBack ?
                <BackButton />
            : null}

            {showAccount ?
                <TouchableOpacity onPress={()=>{ navigation.navigate('/more/account') }}
                                  style={[{backgroundColor: colors.link}, shadowStyle]}
                                  className={`absolute z-10 bottom-4 right-4 rounded-full p-2`}>
                    <Icon.User strokeWidth={3} stroke={colors.linkText} />
                </TouchableOpacity>
                : null}

            <View className={`mt-${padding}`}>
                <Text style={textStyle} className={`text-center font-bold text-2xl`}>{title}</Text>
            </View>
        </View>
    )
}