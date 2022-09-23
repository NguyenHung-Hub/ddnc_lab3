import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { phones } from "../../data/phones";
import Card from "../components/Card";

export default function Lab3c({ navigation }) {
    return (
        <View style={styles.wrapper}>
            <FlatList
                numColumns={2}
                data={phones}
                renderItem={(phone) => (
                    <Card navigation={navigation} product={phone.item} />
                )}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    flatList: {
        width: "100%",
        // backgroundColor: "red",
    },
});
