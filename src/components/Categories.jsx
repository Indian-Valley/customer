import {View, Text, ScrollView, TouchableOpacity, Image, Pressable} from 'react-native'
import React, { useState } from 'react';
import {categories} from "../constants";
import {useTheme} from "@react-navigation/native";

export default function Categories({className, activeCategory, setActiveCategory}) {
    const {colors} = useTheme();

    return(
        <View className={'py-2 border-y '+className} style={{backgroundColor: colors.background, borderColor: colors.border}}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 15}}
                        className="overflow-hidden">
                {
                    categories.map((category, index) => {
                        const isActive = (category.id === activeCategory)
                        return (
                            <View key={index} className="justify-center items-center mr-2">
                                <TouchableOpacity onPress={()=> setActiveCategory(isActive? null : category.id)}
                                                  style={{backgroundColor: isActive? colors.primary: colors.card}}
                                                  className="flex-row p-1 items-center rounded-full shadow">
                                    <Image style={{width: 48, height: 48}} source={category.image}/>
                                    <Text style={{color: isActive? colors.linkText: colors.text}}
                                          className="px-3">{category.name}</Text>

                                </TouchableOpacity>

                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )

}