import {View, ScrollView } from 'react-native';
import React from 'react'
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";
import Header from "../../../components/Header";


export default function OrderHistoryScreen() {

    const {colors, textStyle} = useTheme()

    const navigation = useRouter();
    return (
        <View className="flex-1">
            <Header title='Previous Orders' hasBack={true} showAccount={true}/>
            <ScrollView>


            </ScrollView>
        </View>
    )
}