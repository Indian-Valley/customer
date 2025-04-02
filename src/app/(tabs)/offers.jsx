import { View, Text, ScrollView } from 'react-native';
import React, {useEffect} from 'react'
import { useRouter } from "expo-router";
import { useTheme } from "@react-navigation/native";
import Header from "../../components/Header";
import { TabView } from "@rneui/themed";
import Indicator from "../../components/Indicator";


export default function OffersScreen() {

    const {colors, textStyle} = useTheme()

    const navigation = useRouter();

    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {

            setIndex((index+1) % 4)
        }, 3000);
        return () => clearInterval(intervalId);

    }, [index])

    return (
        <View>
            <Header title='Special Offers' showAccount={true}/>
            <ScrollView>

                <View className='w-full aspect-square'>
                    <TabView value={index} onChange={setIndex} animationType="spring" containerStyle={{width: '100%', height: '100%'}}>
                        <TabView.Item style={{ backgroundColor: 'darkcyan', width: '100%', height: '100%'}}>
                            <Text className='text-center text-3xl font-extrabold my-auto mx-4 text-white'>FREE DELIVERY</Text>
                        </TabView.Item>
                        <TabView.Item style={{ backgroundColor: 'coral', width: '100%', height: '100%' }}>
                            <Text className='text-center text-3xl font-extrabold my-auto mx-4 text-white'>10% OFF on COLLECTION</Text>
                        </TabView.Item>
                        <TabView.Item style={{ backgroundColor: 'darkseagreen', width: '100%', height: '100%' }}>
                            <Text className='text-center text-3xl font-extrabold my-auto mx-4 text-white'>BANQUET NIGHT OFFERS EVERY WEDNESDAY AND SUNDAY</Text>
                        </TabView.Item>
                        <TabView.Item style={{ backgroundColor: 'darkslateblue', width: '100%', height: '100%' }}>
                            <Text className='text-center text-3xl font-extrabold my-auto mx-4 text-white'>LIMITED TIME OFFER: Beef Bhunna Set Meal for £15</Text>
                        </TabView.Item>
                    </TabView>
                    <View className='absolute bottom-4 w-full flex-row justify-center items-center'>
                        <Indicator isFocused={index===0} onPress={() => setIndex(0)}/>
                        <Indicator isFocused={index===1} onPress={() => setIndex(1)} />
                        <Indicator isFocused={index===2} onPress={() => setIndex(2)} />
                        <Indicator isFocused={index===3} onPress={() => setIndex(3)} />
                    </View>
                </View>

                <View className=''>
                    <Text style={textStyle} className='text-3xl font-bold text-center m-4'>Rewards Program</Text>
                    <Text style={textStyle} className='text-xl text-center m-4'>Coming Soon!</Text>
                </View>
            </ScrollView>


        </View>
    )
}