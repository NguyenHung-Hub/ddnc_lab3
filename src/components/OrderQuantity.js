import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import add from "../../assets/images/btnadd.png";
import minus from "../../assets/images/btnminus.png";
import { DECREASE, INCREASE } from "../constans";

const OrderQuantity = ({ quantity, quantityHandle }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperRight}>
                <TouchableOpacity
                    style={styles.wrapperBtn}
                    onPress={() => quantityHandle(DECREASE)}
                >
                    <Image source={minus} style={styles.img} />
                </TouchableOpacity>

                <Text style={styles.quantity}>{quantity}</Text>

                <TouchableOpacity
                    style={styles.wrapperBtn}
                    onPress={() => quantityHandle(INCREASE)}
                >
                    <Image source={add} style={styles.img} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.wrapperLeft}>
                <Text style={styles.text}>Mua sau</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#134FEC",
    },
    wrapperBtn: {},
    img: {
        width: 24,
        height: 24,
        resizeMode: "stretch",
    },
    wrapperRight: {
        flexDirection: "row",
    },
    wrapperLeft: {},
    quantity: {
        width: 24,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default OrderQuantity;
