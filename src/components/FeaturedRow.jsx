import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React from "react";
import ItemCard from "./ItemCard";
import {useTheme} from "@react-navigation/native";

export default function FeaturedRow({title, description, items}) {
    const {colors} = useTheme();

    return (
        <View className="mt-2">
            <View className="flex-row justify-between items-center px-4 py-2">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="font-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{color: colors.text}} className="font-semibold">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingHorizontal: 15}}>
                {
                    items.map((item, index) => (
                        <ItemCard item={item} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    );
}