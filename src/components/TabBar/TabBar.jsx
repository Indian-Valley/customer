import { View } from "react-native";
import {useTheme} from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from "react";
import TabBarButton from "@/src/components/TabBar/TabBarButton";


export default function TabBar({ state, descriptors, navigation }) {

    const {colors} = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <View style={{
                    backgroundColor: colors.card,
                    paddingBottom: insets.bottom,
                    shadowColor: colors.primary,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.5,
                    shadowRadius: 20,
                    elevation: 4
              }}
              className='flex-row justify-items-center absolute bottom-0 rounded-t-3xl pt-3'
        >
            {state.routes.map((route, i) => {
                const {options} = descriptors[route.key]

                if (options?.tabBarIcon !== undefined) {

                    const label =
                        options.tabBarLabel !== undefined ? options.tabBarLabel :
                        options.title !== undefined? options.title :
                        route.name

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        })

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params)
                        }
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        })
                    }

                    const isFocused = state.index === i

                    return (
                        <TabBarButton key={label}
                                      label={label}
                                      tabBarIcon={options.tabBarIcon}
                                      tabBarBadge={options.tabBarBadge}
                                      tabBarBadgeStyle={options.tabBarBadgeStyle}
                                      onPress={onPress}
                                      onLongPress={onLongPress}
                                      isFocused={isFocused} />
                    );

                }
            })}
        </View>
    )
}