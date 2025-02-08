import {View, Text, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import {Stack } from "expo-router";
import Categories from "../../../components/Categories";
import DishRow from "@/src/components/DishRow";
import CartIcon from "@/src/components/CartIcon";
import {useTheme} from "@react-navigation/native";
import {useHeaderHeight} from "@react-navigation/elements";
import Animated, {useAnimatedRef, useAnimatedStyle, useScrollViewOffset, withTiming} from "react-native-reanimated";
import {menu} from "../../../constants";


export default function OrderScreen() {
    const { width, height } = Dimensions.get('window');
    const {colors} = useTheme()
    const scrollRef = useAnimatedRef();

    const [search, setSearch] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState(null);

    const searchFilter = (item) => {
        if (search) {
            return item.name.toLowerCase().includes(search.toLowerCase())
        }
        return true
    }
    const categoryFilter = (cat) => {
        if (activeCategory !== null) {
            return cat.id === activeCategory;
        }
        return true
    }

    const getFilteredMenu = () => {
        let filteredMenu = []
        menu.filter(categoryFilter).forEach((category, index) => {
            let dishes = category.dishes.filter(searchFilter)
            if (dishes.length > 0) {
                const filteredCategory = {id: category.id, category: category.category, dishes};
                filteredMenu =([...filteredMenu, filteredCategory])
            }
        })

        return filteredMenu
    }

    const scrollHandler = useScrollViewOffset(scrollRef)
    const buttonStyle = useAnimatedStyle(() => {

        return {
            opacity: scrollHandler.value > 200  ? withTiming(1) : withTiming(0)
        }
    }, [])

    const scrollToTop = () => {
        scrollRef.current.scrollTo({x: 0, y: 0, animated: true})
    }

    return (
        <View className='h-full'>
            <Stack.Screen name="menu"
                          options={{
                              title: "menu",
                              headerShown: true,
                              headerTitle: "Menu",
                              headerTransparent: true,
                              headerBlurEffect: 'systemUltraThinMaterial',

                              headerTitleStyle: {
                                  color: colors.text,
                              },
                              headerShadowVisible: false,
                              headerSearchBarOptions: {
                                  placeholder: "Search menu...",
                                  onChangeText: (event) => setSearch(event.nativeEvent.text),
                                  hideWhenScrolling: false,
                              }
                          }} />

            <ScrollView contentInsetAdjustmentBehavior='automatic'
                        keyboardDismissMode='on-drag'
                        ref={scrollRef}
                        style={{paddingTop: useHeaderHeight()}} stickyHeaderIndices={[2]}>

                <View className='w-full h-32' />

                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: colors.background}}
                      className="-mt-12 px-3">
                    <Text style={{color: colors.text}} className="text-3xl py-3 font-bold text-center">Menu</Text>

                    <Text style={{color: colors.text}} className="text-sm pb-3 text-center">
                        If you have, or someone you're ordering for has, a food allergy or intolerance, please phone the
                        restaurant before placing your order.
                    </Text>
                </View>

                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                {
                    getFilteredMenu().map((category) => (<>
                        <View key={category.category} style={{backgroundColor: colors.background}}>
                            <Text id={category.category} style={{color: colors.text}} className="text-2xl font-bold p-3">{category.id + ' ' + category.category}</Text>
                        </View>

                        <View key={category.category+'Items'} style={{backgroundColor: colors.background}}>
                        {
                            category.dishes.map((item) => <DishRow key={item.id} item={{...item}}/>)
                        }
                        </View>
                    </>))
                }
                <View className='w-full h-32' />
            </ScrollView>

            <CartIcon/>
            <Animated.View style={[buttonStyle, {backgroundColor: colors.link}]} className="absolute bottom-40 right-2 p-2 z-50 rounded-full">
                <TouchableOpacity onPress={scrollToTop}>
                    <Icon.ArrowUp strokeWidth={3} height={32} width={32} stroke={colors.primary}/>
                </TouchableOpacity>
            </Animated.View>

            <View className="absolute w-full h-1/2 -z-10">
                <Image className='object-contain' style={{flex: 1, width: undefined, height: undefined}}
                       source={require('@/assets/images/order-banner.jpg')}/>
            </View>


        </View>
    );

}