import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Order from "./src/components/Order";

export default function App() {
    return (
        <View style={styles.container}>
            <Order />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C4C4C4",
        alignItems: "center",
        justifyContent: "center",
    },
});
