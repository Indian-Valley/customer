import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react';
import {categories} from "../constants";
import {useTheme} from "@react-navigation/native";

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    const {colors} = useTheme();

    return(
        <View style={{backgroundColor: colors.background}}>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 15}}
                        className="overflow-hidden">
                {
                    categories.map((category, index) => {
                        let isActive = (category.id === activeCategory)
                        let btnClass = isActive? ' bg-gray-400' : 'bg-gray-200'
                        let textClass = isActive? ' font-semibold text-white' : 'text-gray-500'

                        return (
                            <View key={index} className="justify-center items-center mr-2">
                                <TouchableOpacity onPress={()=> setActiveCategory(category.id)}
                                                  className={"flex-row p-1 items-center rounded-full shadow "+btnClass}>
                                    <Image style={{width: 48, height: 48}} source={category.image}/>
                                    <Text className={"p-2 text-sm"+textClass}>{category.name}</Text>

                                </TouchableOpacity>

                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )

}