import {View, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from "react-native-feather"
import { addToCart, numCartItemsById, removeFromCart } from "../slices/cartSlice";
import { useTheme } from "@react-navigation/native";
import {useState} from "react";

export default function DishRow({item}) {

    const { colors } = useTheme();

    const dispatch = useDispatch()
    const [totalItems, setTotalItems] = useState(useSelector(state => numCartItemsById(state, item.id)));

    const handleIncrease = () => {
        dispatch(addToCart({...item}))
        setTotalItems(totalItems+1)
    }
    const handleDecrease = () => {
        dispatch(removeFromCart({id: item.id}))
        setTotalItems(totalItems-1)
    }
    return (
        <View style={{backgroundColor: colors.card}} className="flex-row items-center p-3 rounded-3xl shadow-2xl mb-1 mx-2">
            <Text style={{color: colors.text}} className="flex-1 pl-2 text-lg">{item.id + ' ' + item.name}</Text>
            <View className="flex-row justify-between pl-3 items-center">
                <Text style={{color: colors.text}} className="text-md px-2 font-bold">{`£${item.price.toFixed(2)}`}</Text>

                <View className="flex-row items-center">
                    {
                        (totalItems > 0)? (
                            <>
                            <TouchableOpacity onPress={handleDecrease}
                                            disabled={!totalItems}

                                style={{backgroundColor: colors.link}}
                                className="p-1 rounded-full">
                                <Icon.Minus strokeWidth={3} height={20} width={20} stroke={colors.linkText}/>
                            </TouchableOpacity>
                            <Text style={{color: colors.text}} className="px-2 text-lg">
                                {totalItems}
                            </Text>
                            </>
                        ) : null
                    }

                    <TouchableOpacity
                        onPress={handleIncrease}
                        style={{backgroundColor: colors.link}}
                        className="p-1 rounded-full">
                        <Icon.Plus strokeWidth={3} height={20} width={20} stroke={colors.linkText}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}