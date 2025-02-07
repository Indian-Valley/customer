import React from 'react'

import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FeaturedRow from "../../components/FeaturedRow";
import { featured } from "../../constants";
import { useTheme } from "@react-navigation/native";

export default function HomeScreen() {

    const {colors} = useTheme()

    return (

        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 20}}>

                <View className="my-3">
                    {
                        featured.map((item, index) =>
                                <FeaturedRow key={index}
                                             title={item.title}
                                             items={item.items}
                                             description={item.description}/>

                        )
                    }
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}