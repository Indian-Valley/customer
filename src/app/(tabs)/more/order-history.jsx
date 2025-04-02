import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react'
import { useRouter} from "expo-router";
import {useTheme} from "@react-navigation/native";
import Header from "../../../components/Header";
import {Icon} from "@rneui/themed";
import ApiManager from "../../../apiManager/apiManager";
import {useAuth} from "../../../contexts/AuthContexts";


export default function OrderHistoryScreen() {

    const {colors, textStyle} = useTheme()

    const {user, userDetailsLoading} = useAuth()
    const [loading, setLoading] = useState(true);
    const [prevOrders, setPrevOrders] = useState([]);

    const formatDate = (date) => {
        let formatted = new Date(date)

        return formatted.toLocaleString()
    }

    React.useEffect(() => {
        if (!userDetailsLoading) {
            setLoading(true)

            async function getPreviousOrders() {
                const res = await ApiManager.getPreviousOrders(user.customer_id)
                console.log('fetched previous orders:', res)
                if (res) setPrevOrders(res)
                setLoading(false)
            }

            getPreviousOrders()
        }
    }, [userDetailsLoading])

    return (
        <View className="flex-1">
            <Header title='Previous Orders' hasBack={true} showAccount={true}/>

            {userDetailsLoading || loading ? (
                <View className={'flex-row justify-center bottom-2 rounded-3xl mx-auto py-4'}>
                    <ActivityIndicator className='m-4'
                                       size='large'/>
                </View>
            ) : prevOrders.length===0 ? (
                <View className='flex-1'>
                    <View className='flex-col items-center justify-center my-auto'>
                        <Icon name='manage-search' size={64} color={colors.text}/>
                        <Text style={textStyle} className="font-bold m-4 text-xl">No Previous Orders Found</Text>

                    </View>
                </View>
            ) : (<>
                <ScrollView className='p-4'>
                    {prevOrders.map((order, index) => (
                        <View key={order.id}
                              style={{backgroundColor: colors.card}}
                              className='flex-row items-center justify-between p-4 mb-4 rounded-3xl'>
                            <View>
                                <Text style={textStyle}>Order #{order.id}</Text>
                                <Text style={textStyle}>{formatDate(order.created_at)}</Text>
                            </View>
                            <View>
                                <Text style={textStyle}>£{order.total_price}</Text>
                            </View>
                        </View>
                    ))}

                </ScrollView>
            </>)}
        </View>
    )
}