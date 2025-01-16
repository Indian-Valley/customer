import React, {useState} from "react";

import {Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {themeColors} from "../theme";
import * as Icon from "react-native-feather";
import {removeFromCart} from "../slices/cartSlice";
import {supabase} from "../supabase";
import {useRouter} from "expo-router";


export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useRouter();

    const handleSignUp = async () => {
        setIsLoading(true);
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;

            console.log('Success', 'Check your email for a confirmation link!');
            navigation.navigate('/login');
        } catch (error) {
            console.log('Error', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity onPress={()=>{ navigation.back() }}
                                  style={{backgroundColor: themeColors.bgColor(1)}}
                                  className="absolute z-10 top-3 left-3 rounded-full p-1">
                    <Icon.X strokeWidth={3} stroke={'white'}></Icon.X>
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Sign Up</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 20 }}>Sign Up</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 20 }}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 20 }}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <Button title={isLoading ? 'Loading...' : 'Sign Up'} onPress={handleSignUp} disabled={isLoading} />
                <View style={{ marginTop: 20 }}>
                    <Text onPress={() => navigation.dismissTo('/login')} style={{ textAlign: 'center', color: 'blue' }}>
                        Already have an account? Log in
                    </Text>
                </View>
            </View>

        </View>
    )

}