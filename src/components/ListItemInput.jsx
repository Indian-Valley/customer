import {Icon, ListItem} from "@rneui/themed";
import React from "react";
import {useTheme} from "@react-navigation/native";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring, withDecay, withTiming} from "react-native-reanimated";
import {Text} from "react-native";


export default function ListItemInput({iconName, label, secure=false}) {

    const {colors, textStyle} = useTheme();
    const [text, setText] = React.useState('');
    const [focused, setFocused] = React.useState(false);

    const scale = useSharedValue(0)

    React.useEffect(() => {
        scale.value = withTiming(
            (focused || (text !== ''))? 1 : 0,
            {duration: 300}
        )
    }, [scale, focused, text]);

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0,1], [1,0.8])
        const top = interpolate(scale.value, [0, 1], [0, -10])
        const scaleValue = interpolate(scale.value, [0, 1], [1, 0.5])
        const translateValue = interpolate(scale.value, [0, 1], [0, 50])

        return {
            transform: [{ scale: scaleValue}, {translateX: `${translateValue}%` }],
            top,
            opacity,
        }
    })


    return (
        <ListItem onPress={() => {}}
                  bottomDivider
                  containerStyle={{backgroundColor: colors.card}}>
            <Icon name={iconName} size={30} color={colors.text}/>
            <ListItem.Content>
                <ListItem.Input
                    onFocus={() => setFocused(true)}
                    onChangeText={text => setText(text)}
                    onEndEditing={() => setFocused(false)}
                    label={
                        <Animated.View style={animatedTextStyle} className='absolute right-0 border-2 flex-row justify-items-end'>
                            <Text style={textStyle}
                                  className='text-lg border-2'>
                                {label}
                            </Text>
                        </Animated.View>
                    }
                    secureTextEntry={secure}
                    style={[textStyle, {textAlign: 'right'}]}

                />

            </ListItem.Content>
        </ListItem>
    )
}