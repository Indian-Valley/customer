import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";
import Header from "../../components/Header";


export default function OffersScreen() {

    const {colors} = useTheme()

    const navigation = useRouter();
    return (
        <SafeAreaView className="flex-1">
            <Header title='Special Offers' showAccount={true}/>

            <ScrollView>
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                      className="flex-row">
                    <Text className="flex-1 text-3xl text-center font-bold">Special Offers</Text>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}