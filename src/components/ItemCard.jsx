import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from "react";
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";

export default function ItemCard({ item }) {
    const navigation = useRouter();
    const {colors} = useTheme();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(item.navTo)}>
            <View style={{
                        shadowColor: colors.primary,
                        shadowOpacity: 0.3,
                        shadowRadius: 7
                    }}
                  className="mr-6 mb-5 w-64 bg-white rounded-3xl shadow-lg">

                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <Text className="text-xs text-gray-700">{item.description}</Text>

                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}
