import {View, Text, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react'
import * as Icon from "react-native-feather"
import {Stack, useRouter} from "expo-router";
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
    const headerHeight = useHeaderHeight();

    const [search, setSearch] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('');

    const searchFilter = (item) => {
      if (search) {
          return item.name.toLowerCase().includes(search.toLowerCase())
      }
      return true
    }

    const getFilteredMenu = () => {
        let filteredMenu = []
        menu.forEach((category, index) => {
            let dishes = category.dishes.filter(searchFilter)
            if (dishes.length > 0) {
                const filteredCategory = {id: category.id, category: category.category, dishes};
                filteredMenu =([...filteredMenu, filteredCategory])
            }
        })

        return filteredMenu
    }

    const scrollRef = useAnimatedRef()
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
                              headerLargeTitle: true,

                              headerTitleStyle: {
                                  color: colors.text,
                              },
                              headerLargeTitleShadowVisible: false,
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
                        style={{paddingTop: height/4}} >


                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: colors.background}}
                      className="-mt-12 pl-3">
                    <Text style={{color: colors.text}} className="text-3xl p-3 font-bold">Menu</Text>
                </View>
                <Categories/>

                <View style={{backgroundColor: colors.background, paddingBottom: height/4}} className='z-50'>
                    {
                        getFilteredMenu().map((category, index) => (
                            <View key={index}>
                                <Text id={category.category} className="text-2xl font-bold p-3">{category.category}</Text>

                                {
                                    category.dishes.map((item, index) => <DishRow key={index} item={{...item}}/>)
                                }

                            </View>
                        ))
                    }
                </View>
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