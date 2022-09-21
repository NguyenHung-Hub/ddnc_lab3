import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import add from "../../assets/images/btnadd.png";
import minus from "../../assets/images/btnminus.png";

const OrderQuantity = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Image source={minus} />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity>
                <Image source={add} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
});

export default OrderQuantity;
