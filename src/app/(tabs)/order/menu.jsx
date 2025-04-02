import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Modal,
    Pressable,
    Alert
} from 'react-native';
import React, {useRef} from 'react'
import * as Icon from "react-native-feather"
import Categories from "../../../components/Categories";
import DishRow from "@/src/components/DishRow";
import CartIcon from "@/src/components/CartIcon";
import {useTheme} from "@react-navigation/native";
import Animated, {useAnimatedRef, useAnimatedStyle, useScrollViewOffset, withTiming} from "react-native-reanimated";
import {menu} from "../../../constants";
import Input from "../../../components/Input";
import MenuDivider from "../../../components/MenuDivider";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "../../../components/Header";
import {Divider} from "@rneui/themed";
import MenuHeader from "../../../components/MenuHeader";

export default function MenuScreen() {
    const { width, height } = Dimensions.get('window');

    const insets = useSafeAreaInsets()

    const {colors, textStyle, shadowStyle} = useTheme()
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
            opacity: scrollHandler.value > 600  ? withTiming(1) : withTiming(0)
        }
    }, [])

    const scrollToTop = () => {
        scrollRef.current.scrollTo({x: 0, y: 0, animated: true})
    }

    return (
        <View className='flex-1'>

            <View style={{marginTop:insets.top}} className="w-full h-96 -z-50 absolute">
                <Image className='object-contain' style={{flex: 1, width: undefined, height: undefined}}
                       source={require('@/assets/images/order-banner.jpg')}/>
            </View>

            <View className='w-full z-40'>
                <MenuHeader/>
            </View>
            <ScrollView ref={scrollRef}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        stickyHeaderIndices={[ 2]}>


                <View className='w-full h-72' />
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: colors.background}}
                      className="-mt-5 p-4 z-30">
                    <Text style={{color: colors.text}} className="text-3xl py-4 font-bold text-center">Menu</Text>

                    <MenuDivider/>

                    <Text style={{color: colors.text}} className="text-sm pb-3 text-center">
                        If you have, or someone you're ordering for has, a food allergy or intolerance, please phone the
                        restaurant before placing your order.
                    </Text>
                </View>

                <View style={[{backgroundColor: colors.background}, shadowStyle]} className='z-20'>
                    <View className='mx-4'>
                        <Input
                            icon={ <Icon.Search size={26} strokeWidth={2} color={colors.text}/> }
                            placeholder='Search menu...'
                            onChangeText={val => setSearch(val)}
                            keyboardType="email-address"
                            autoComplete='email'
                            autoCapitalize="none"
                            clearButtonMode='always'/>
                    </View>
                    <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </View>

                {
                    getFilteredMenu().map((category) => (
                        <React.Fragment key={category.category} >
                        <View style={{backgroundColor: colors.background}} className='py-4'>
                            <Text id={category.category} style={textStyle} className="text-2xl font-bold pb-2 text-center">{category.category}</Text>
                            <Divider inset={true} insetType="middle" />
                        </View>

                        <View style={{backgroundColor: colors.background}}>
                        {
                            category.dishes.map((item) => <DishRow key={item.id} item={{...item}}/>)
                        }
                        </View>
                    </React.Fragment>))
                }
                <View style={{backgroundColor:colors.background}} className='w-full h-96 ' />

            </ScrollView>

            <CartIcon/>

            <Animated.View style={[buttonStyle, {backgroundColor: colors.link}, shadowStyle]} className="absolute bottom-20 right-2 p-2 z-50 rounded-full">
                <TouchableOpacity onPress={scrollToTop}>
                    <Icon.ArrowUp strokeWidth={3} height={32} width={32} stroke={colors.linkText}/>
                </TouchableOpacity>
            </Animated.View>



        </View>
    );

}