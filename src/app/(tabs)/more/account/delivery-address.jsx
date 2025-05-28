import React, {useRef, useState} from 'react'
import {ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import LoadingButton from "../../../../components/LoadingButton";
import {useRouter} from "expo-router";
import {useAuth} from "../../../../contexts/AuthContexts";
import {ListItem} from "@rneui/themed";
import Header from "../../../../components/Header";
import apiManager from "../../../../apiManager/apiManager";

export default function DeliveryAddressScreen() {

    const navigation = useRouter();
    const {user, userDataLoading} = useAuth()

    const {colors, textStyle} = useTheme()

    const [loading, setLoading] = useState(false);
    const [defaultAddress, setDefaultAddress] = useState(false);

    const [savedAddresses, setSavedAddresses] = useState([]);

    const line1Ref = useRef('');
    const line2Ref = useRef('');
    const townRef = useRef('');
    const postcodeRef = useRef('');
    const notesRef = useRef('');

    // React.useEffect(() => {
    //     console.log(user);
    //     load saved addresses
    //     firstNameRef.value = user.first_names;
    //     lastNameRef.value = user.last_name
    //     emailRef.value = user.email
    //     phoneRef.value = user.tel
    // }, [user])

    const onSubmit = () => {

    }

    const saveAddress = () => {
        setLoading(true);
        const res = apiManager.addCustomerAddress(user.customer_id, line1Ref.current, line2Ref.current, line1Ref.current, line2Ref.current);
        if (res) {

        }

    }
    return (
        <View>
            <Header hasBack={true} useSafeArea={false} title="Delivery Address" />

            <ScrollView>

                { userDataLoading ? (
                    <View className={'flex-row justify-center bottom-2 rounded-3xl mx-auto py-4'}>
                        <ActivityIndicator className='m-4'
                                           size='large'/>
                    </View>
                ) : (<>
                    {savedAddresses.length > 0 ? (
                        <View className='m-4'>
                            <Text style={textStyle} className=''>Saved Addresses</Text>
                        </View>
                    ) : (
                        <View className='m-4'>
                            <Text style={textStyle} className='text-lg font-extrabold text-center'>No Saved Addresses Found!</Text>
                        </View>
                    )}

                    <Text style={textStyle} className=''>Add an address:</Text>

                    <View className='border-y border-gray-500 mt-4'>

                        <ListItem onPress={() => {}}
                                  bottomDivider
                                  Component={TouchableOpacity}
                                  containerStyle={{backgroundColor: colors.card}}>
                            <ListItem.Content>
                                <ListItem.Title style={textStyle}>Address Line 1</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input placeholder='*Address Line 1'
                                            value={line1Ref.current}
                                            style={textStyle}/>
                        </ListItem>
                        <ListItem onPress={() => {}}
                                  bottomDivider
                                  Component={TouchableOpacity}
                                  containerStyle={{backgroundColor: colors.card}}>
                            <ListItem.Content>
                                <ListItem.Title style={textStyle}>Address Line 2</ListItem.Title>
                            </ListItem.Content>

                            <ListItem.Input placeholder='Address Line 2'
                                            value={line2Ref.current}
                                            style={textStyle}/>

                        </ListItem>

                        <ListItem onPress={() => {}}
                                  bottomDivider
                                  Component={TouchableOpacity}
                                  containerStyle={{backgroundColor: colors.card, padding: 12}}>
                            <ListItem.Content>
                                <ListItem.Title  style={textStyle}>Town</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input placeholder='*Town'
                                            value={townRef.current}
                                            style={textStyle}/>
                        </ListItem>
                        <ListItem onPress={() => {}}
                                  Component={TouchableOpacity}
                                  containerStyle={{backgroundColor: colors.card}}>
                            <ListItem.Content>
                                <ListItem.Title style={textStyle}>Postcode</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input placeholder='*Postcode'
                                            value={postcodeRef.current}
                                            style={textStyle}/>
                        </ListItem>
                    </View>
                    <View className='border-y border-gray-500 mt-4'>
                        <ListItem onPress={() => {}}
                                  Component={TouchableOpacity}
                                  containerStyle={{backgroundColor: colors.card}}>
                            <ListItem.Content>
                                <ListItem.Title style={textStyle}>Delivery Directions</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Input placeholder='Doorbell broken, path obscured by bushes, etc.'
                                            value={notesRef.current}
                                            multiline={true}
                                            style={textStyle}/>
                        </ListItem>
                    </View>
                    <View className='border-y border-gray-500 mt-4'>
                        <ListItem onPress={() => setDefaultAddress(!defaultAddress)}
                                  Component={TouchableOpacity}
                                  containerStyle={{backgroundColor: colors.card}}>
                            <ListItem.Content>
                                <ListItem.Title style={textStyle}>Set as default?</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.CheckBox value={defaultAddress.value}
                                               checked={defaultAddress}
                                               onPress={() => setDefaultAddress(!defaultAddress)}
                                               iconType="material-community"
                                               checkedIcon="checkbox-marked"
                                               uncheckedIcon="checkbox-blank-outline"
                                               checkedColor={colors.link}
                                               containerStyle={{backgroundColor:colors.card}}/>
                        </ListItem>
                    </View>

                    <LoadingButton buttonStyle="m-4"
                                   text="Save Address"
                                   onPress={saveAddress}
                                   loading={false}
                                   active={true}/>
                    </>)}

            </ScrollView>

        </View>
    )
}