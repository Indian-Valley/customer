import {View, Text, Image, Pressable} from 'react-native';
import React from "react";
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";

export default function ItemCard({ item }) {
    const navigation = useRouter();
    const {colors, shadowStyle} = useTheme();

    return (
        <Pressable onPress={() => navigation.navigate(item.navTo)}>
            <View style={[{backgroundColor: colors.card}, shadowStyle]}
                  className="mr-6 mb-5 w-64 rounded-3xl">

                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text style={{color: colors.text}} className="text-lg font-bold pt-2">{item.name}</Text>
                    <Text style={{color: colors.text}} className="text-xs">{item.description}</Text>

                </View>
            </View>
        </Pressable>

    )
}
