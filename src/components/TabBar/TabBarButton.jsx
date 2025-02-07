import React, {useEffect} from 'react'
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Pressable, Text} from "react-native";
import {Badge} from "@rneui/themed";
import {useTheme} from "@react-navigation/native";

export default function TabBarButton({label, isFocused, onPress, onLongPress, tabBarIcon, tabBarBadge, tabBarBadgeStyle}) {

    const {colors} = useTheme();
    const scale = useSharedValue(0)

    useEffect(() => {
        scale.value = withSpring(
            isFocused? 1 : 0,
            {duration: 300}
        )
    }, [scale, isFocused]);

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0,1], [1,0])
        return {opacity}
    })

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.5])
        const top = interpolate(scale.value, [0, 1], [0, 10])

        return { transform: [{ scale: scaleValue }], top }
    })

    return (
        <Pressable
            className='items-center mx-2'
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>


            <Animated.View style={animatedIconStyle}>
                {tabBarIcon({color : isFocused? colors.link : colors.text})}
            </Animated.View>

            <Animated.Text style={[{ color: isFocused? colors.link : colors.text}, animatedTextStyle]} className='text-center text-xs pt-1'>{label}</Animated.Text>

            {tabBarBadge? <Badge badgeStyle={tabBarBadgeStyle}
                                 value={tabBarBadge}
                                 containerStyle={{ position: 'absolute', right: 0, top: 0}}
                                 textStyle={{fontWeight: 'bold'}}/> : null}
        </Pressable>
    )
}