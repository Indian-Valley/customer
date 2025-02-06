import {View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from "react-native-feather"
import {addToCart, removeFromCart, selectCartItemsById} from "../slices/cartSlice";
import {useTheme} from "@react-navigation/native";

export default function DishRow({item}) {

    const { colors } = useTheme();

    const dispatch = useDispatch()
    const totalItems = useSelector(state => selectCartItemsById(state, item.id))
    const handleIncrease = () => {
        dispatch(addToCart({...item}))
    }
    const handleDecrease = () => {
        dispatch(removeFromCart({id: item.id}))
    }
    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-1 mx-2">
            <Text className="flex-1 text-gray-600 pl-2 text-lg">{item.name}</Text>
            <View className="flex-row justify-between pl-3 items-center">
                <Text className="text-gray-700 text-md px-2 font-bold">{`£${item.price.toFixed(2)}`}</Text>
                <View className="flex-row items-center">
                    {
                        (totalItems.length > 0)? (
                            <TouchableOpacity onPress={handleDecrease}
                                            disabled={!totalItems.length}

                                style={{backgroundColor: colors.link}}
                                className="p-1 rounded-full">
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                            </TouchableOpacity>

                        ) : null
                    }
                    {
                        (totalItems.length > 0)? (
                            <Text className="px-2 text-lg">
                                {totalItems.length}
                            </Text>
                        ) : null
                    }

                    <TouchableOpacity
                        onPress={handleIncrease}
                        style={{backgroundColor: colors.link}}
                        className="p-1 rounded-full">
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}