import React from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import ListOfAvatars from "../components/ListOfAvatars";
import ListOfCards from "../components/ListOfCards";


export default function Feed() {
    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight+20, paddingHorizontal:20 }}>
            <ListOfAvatars />
            <ListOfCards />
        </SafeAreaView>
    );
}



