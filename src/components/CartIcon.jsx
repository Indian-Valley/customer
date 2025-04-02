import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    useAnimatedValue,
    Pressable,
    Modal,
    Image,
    ScrollView
} from 'react-native'
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useRouter } from "expo-router";
import {numCartItems, removeFromCart, selectCartItems, selectCartTotal} from "../slices/cartSlice";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useTheme} from "@react-navigation/native";
import Header from "./Header";
import {
    selectIsASAP,
    selectOrderTotal,
    selectOrderType,
    selectSelectedTime,
    setOrderTotal
} from "../slices/orderDetailsSlice";
import LoadingButton from "./LoadingButton";
import {Icon} from "@rneui/themed";

export default function CartIcon() {

    const { colors , textStyle, shadowStyle} = useTheme()
    const navigation =  useRouter();

    const totalCartItems = useSelector(numCartItems)
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    const orderType = useSelector(selectOrderType)
    const orderTotal = useSelector(selectOrderTotal)
    const selectedTime = useSelector(selectSelectedTime)
    const isASAP = useSelector(selectIsASAP)
    const dispatch = useDispatch();

    const SERVICE_FEE = 0.5
    const MIN_DELIVERY_SPEND = 12
    const DELIVERY_FEE = 2
    const [discounts, setDiscounts] = useState(0)

    const calculateDiscounts = () => {
        let discount = 0
        // check free delivery...
        if (cartTotal > MIN_DELIVERY_SPEND) discount += DELIVERY_FEE
        // check cash collections...
        setDiscounts(discount)
    }

    const [showCheckout, setShowCheckout] = React.useState(false);

    const fadeAnim = useAnimatedValue(0);
    const [groupedItems, setGroupedItems] = React.useState([]);

    React.useEffect(() => {
        setGroupedItems(cartItems.reduce((group, item) => {
            let listIndex = -1;
            for (let i = 0; i < group.length; i++) {
                if (group[i].name === item.name) {
                    listIndex = i;
                    break
                }
            }

            if (listIndex !== -1) {
                group[listIndex].quantity += 1;
            } else {
                group.push({"name":item.name, 'id':item.id,"quantity":1, "price":item.price});
            }
            return group;
        }, []))

        calculateDiscounts()
        dispatch(setOrderTotal(cartTotal + SERVICE_FEE + DELIVERY_FEE - discounts))
    }, [cartItems])

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    if (!totalCartItems) {
        fadeOut()
    } else {
        fadeIn()
    }

    return (
        <Animated.View style={{opacity:fadeAnim}} className="absolute bottom-4 w-full px-4 z-50">
            <Modal className='w-full h-screen'
                   animationType="slide"
                   presentationStyle='pageSheet'
                   backdropColor={colors.background}
                   visible={showCheckout}
                   onRequestClose={() => {
                       setShowCheckout(!showCheckout);
                   }}>
                <View style={{backgroundColor: colors.background}} className='flex-1'>

                    <Header title='Checkout' hasBack={true} useSafeArea={false} backPress={() => setShowCheckout(false)}/>

                    <View style={{backgroundColor: colors.primaryTransparent(0.3)}}
                          className="flex-row p-4 items-center">
                        {orderType==='Delivery'? (
                            <Image source={require("@/assets/images/food-delivery.png")} className="w-20 h-20"/>
                        ) : (
                            <Image source={require("@/assets/images/takeaway.png")} className="w-20 h-20"/>
                        )}
                        <Text style={textStyle} className="flex-1 pl-4">{orderType} in {isASAP? 'ASAP': selectedTime}</Text>
                        <TouchableOpacity onPress={()=>{ }}>
                            <Text style={{color: colors.link}} className="font-bold">Change</Text>
                        </TouchableOpacity>
                    </View>

                    {totalCartItems===0 ? (
                        <View className='flex-1'>
                            <View className='flex-col items-center justify-center my-auto'>
                                <Icon name='production-quantity-limits' size={64} color={colors.text}/>
                                <Text style={textStyle} className="font-bold m-4 text-xl">Cart Empty</Text>

                            </View>
                        </View>
                    ) : (<>

                    <ScrollView className="pt-4"
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 50 }}>
                        {
                            groupedItems.map((dish, index) =>
                                    <View key={index}
                                          style={{backgroundColor:colors.card}}
                                          className="flex-row items-center space-x-3 py-2 px-4 rounded-3xl mx-2 mb-3 shadow-md">
                                        <Text style={textStyle} className="font-bold">
                                            {dish.quantity} x
                                        </Text>
                                        <Text style={textStyle} className="font-bold flex-1">{dish.name}</Text>
                                        <Text style={textStyle} className="font-semibold text-xs">{`£${dish.price.toFixed(2)}`}</Text>
                                        <TouchableOpacity
                                            onPress={() => dispatch(removeFromCart({id: dish.id}))}
                                            style={{backgroundColor: colors.link}}
                                            className="p-1 rounded-full">
                                            <Icon name='remove' size={20} color={colors.linkText}/>
                                        </TouchableOpacity>
                                    </View>
                                )
                        }
                    </ScrollView>
                    <View style={{backgroundColor: colors.primaryTransparent(0.2)}}
                          className="py-8 px-8 rounded-t-3xl space-y-1">

                        <View className="flex-row justify-between items-center mb-1">
                            <Text style={textStyle}>Subtotal</Text>
                            <Text style={textStyle}>{`£${cartTotal.toFixed(2)}`}</Text>
                        </View>
                        {orderType==='Delivery'?
                            <View className="flex-row justify-between">
                                <Text style={textStyle} className="text-sm">Delivery Fee</Text>
                                <Text style={textStyle} className="text-sm">{cartTotal>MIN_DELIVERY_SPEND?'FREE':`£${DELIVERY_FEE.toFixed(2)}`}</Text>
                            </View>
                            : null
                        }
                        <View className="flex-row justify-between  mb-1">
                            <Text style={textStyle} className="text-sm">Service Fee</Text>
                            <Text style={textStyle} className="text-sm">{`£${SERVICE_FEE.toFixed(2)}`}</Text>
                        </View>
                        {discounts>0?
                            <View className="flex-row justify-between mb-2">
                                <Text style={textStyle} className="text-sm">Discounts</Text>
                                <Text style={textStyle} className="text-sm">{`-£${discounts.toFixed(2)}`}</Text>
                            </View>
                            : null
                        }
                        <View className="flex-row justify-between mb-4 items-center">
                            <Text style={textStyle} className="font-extrabold ">Order Total</Text>
                            <Text style={textStyle} className="font-extrabold">{`£${orderTotal.toFixed(2)}`}</Text>
                        </View>

                        <View>
                            <LoadingButton onPress={()=>navigation.push('/order/preparing-order')}
                                           style={{backgroundColor: colors.primary}}
                                           text='Place Order'/>
                        </View>
                    </View>
                    </>)}
                </View>

            </Modal>
            <TouchableOpacity
                onPress={() => {
                    setShowCheckout(!showCheckout);
                }}
                style={{
                    backgroundColor: colors.link,
                    shadowColor: colors.primary,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.7,
                    shadowRadius: 20,
                    elevation: 4
                }}
                className="flex-row justify-between items-center rounded-full p-2 px-6">

                <View className='flex-row gap-3 items-center'>
                    <FontAwesome name='shopping-bag' size={22} color={colors.linkText}/>
                    <Text style={{color: colors.linkText}} className="font-bold text-lg">View Order</Text>
                </View>

                <Text style={{color: colors.linkText}} className="text-lg font-extrabold">{`£${cartTotal.toFixed(2)}`}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}