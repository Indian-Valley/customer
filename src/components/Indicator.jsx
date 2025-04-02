import React from 'react'
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Pressable, View} from "react-native";

export default function Indicator({isFocused = false, onPress}) {

    const scale = useSharedValue(0)

    React.useEffect(() => {
        scale.value = withSpring(
            isFocused? 1 : 0,
            {duration: 500}
        )
    }, [scale, isFocused]);

    const animatedStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.5])
        const opacity = interpolate(scale.value, [0, 1], [0.5,1])

        return { transform: [{ scale: scaleValue }], opacity }
    })

    return (
        <Pressable onPress={onPress}>
            <Animated.View style={animatedStyle} className='bg-gray-200 w-2 h-2 rounded-full m-1' />
        </Pressable>

    )
}