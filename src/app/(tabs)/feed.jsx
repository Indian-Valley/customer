import {SafeAreaView, Text} from "react-native";
import Header from "../../components/Header";
import React from "react";

export default function FeedScreen() {
    return (
        <SafeAreaView className="flex-1">
            <Header title='News Feed' showAccount={true}/>
            <Text>Feed Screen</Text>
        </SafeAreaView>
    )
}