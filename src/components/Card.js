import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import formatMoney from "../utils/formatMoney";
import HButton from "./HButton";

export default function Card({ navigation, product }) {
    // console.log({ id: product.id });
    const img = product.colors[0].imagePath;
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperTop}>
                <Image source={img} style={styles.productImg} />
            </View>
            <View style={styles.wrapperBottom}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>
                    {formatMoney(product.price)} đ
                </Text>
                <HButton
                    text="Xem"
                    bgColor="#0E88D3"
                    textColor="white"
                    fontSize={16}
                    radius={4}
                    style={styles.seeMoreBtn}
                    onPress={() =>
                        navigation.navigate("Lab3c_Screen01", {
                            productId: product.id,
                        })
                    }
                />
            </View>
        </View>
    );
}

const widthScreen = Dimensions.get("window").width;
const widthCardPercent = 0.46;
const widthCard = widthScreen * widthCardPercent;
const margin = widthScreen * ((1 - widthCardPercent * 2) / 4);

const styles = StyleSheet.create({
    wrapper: {
        padding: 8,
        margin: margin,
        width: widthCard,

        backgroundColor: "#E4E6E9",
        borderRadius: 4,
    },
    wrapperTop: {
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    productImg: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },

    wrapperBottom: {},
    productName: {
        marginTop: 2,
        fontSize: 18,
    },
    productPrice: {
        marginVertical: 8,
        color: "red",
        fontWeight: "bold",
    },
    seeMoreBtn: {
        width: "100%",
        marginVertical: 4,
        paddingVertical: 4,
    },
});
