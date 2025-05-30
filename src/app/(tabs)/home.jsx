import React from 'react'

import { View, ScrollView } from 'react-native';

import FeaturedRow from "../../components/FeaturedRow";
import { featured } from "../../constants";
import { useTheme } from "@react-navigation/native";
import Header from "../../components/Header";

export default function HomeScreen() {

    const {colors} = useTheme()

    return (

        <View className="flex-1">
            <Header title='Home' showAccount={true}/>
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
                <View className='w-full h-32' />

            </ScrollView>


        </View>
    )
}