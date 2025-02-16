import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";
import Header from "../../components/Header";


export default function OrderHistoryScreen() {

    const {colors, textStyle} = useTheme()

    const navigation = useRouter();
    return (
        <View className="flex-1">
            <Header title='Previous Orders' showAccount={true}/>
            <ScrollView>


            </ScrollView>
        </View>
    )
}