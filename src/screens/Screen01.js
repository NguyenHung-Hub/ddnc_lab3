import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import HButton from "../components/HButton";

import vsmart_live_xanh_1 from "../../assets/images/phone/vsmart_live_xanh_1.png";
import question from "../../assets/icons/question.png";
import arrow_right from "../../assets/icons/arrow_right.png";
import { phones } from "../../data/phones";
import formatMoney from "../utils/formatMoney";

const Screen01 = ({ route, navigation }) => {
    const { productId, imageChoose } = route.params;
    // console.log({ productId });

    const product = phones.find((phone) => phone.id == productId);
    const image =
        imageChoose != null ? imageChoose : product.colors[0].imagePath;
    console.log({ imageChoose });

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperTop}>
                <Image style={styles.productImg} source={image} />
                <Text style={[styles.text, styles.productName]}>
                    {product.title}
                </Text>
                <View style={styles.wrapperRating}>
                    <Rating type="star" ratingCount={5} imageSize={32} />
                    <Text style={[styles.text, styles.comments]}>
                        (Xem {product.comments} đánh giá)
                    </Text>
                </View>

                <View style={styles.wrapperPrice}>
                    <Text style={styles.priceDiscount}>
                        {formatMoney(product.price)} đ
                    </Text>
                    <Text style={[styles.text, styles.priceOrigin]}>
                        {formatMoney(product.price)} đ
                    </Text>
                </View>

                <View style={styles.wrapperQuestion}>
                    <Text style={[styles.text, styles.textQuestion]}>
                        Ở ĐÂU RẺ HƠN HOÀN TIỀN
                    </Text>
                    <Image source={question} style={styles.iconQuestion} />
                </View>
                <HButton
                    text="4 MÀU-CHỌN MÀU"
                    style={styles.chooseColorBtn}
                    radius={50}
                    borderColor="#000"
                    endIcon={<Image source={arrow_right} />}
                    onPress={() =>
                        navigation.navigate("Lab3c_Screen02", { product })
                    }
                />
            </View>
            <View style={styles.wrapperBottom}>
                <HButton
                    text="CHỌN MUA"
                    bgColor="#EE0A0A"
                    textColor="white"
                    fontSize={20}
                    radius={8}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // general

    text: {
        fontSize: 16,
    },

    wrapper: {
        flex: 1,
        justifyContent: "space-between",

        paddingHorizontal: 20,

        width: "100%",
        backgroundColor: "#fff",
    },

    // top

    wrapperTop: {
        flexDirection: "column",
        alignItems: "center",
        // marginTop: 48,
    },
    productImg: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
    },

    productName: {
        marginTop: 24,
        width: "100%",

        fontSize: 17,
    },
    wrapperRating: {
        flexDirection: "row",
        alignItems: "center",

        marginTop: 12,
        width: "100%",
    },
    comments: {
        marginLeft: 20,
    },
    wrapperPrice: {
        flexDirection: "row",

        marginTop: 12,
        width: "100%",
    },

    priceDiscount: {
        fontWeight: "bold",
        fontSize: 18,
    },
    priceOrigin: {
        marginLeft: 44,

        textDecorationLine: "line-through",
        color: "#6B6B6B",
        fontWeight: "bold",
    },

    wrapperQuestion: {
        flexDirection: "row",

        alignItems: "center",

        marginTop: 16,
        width: "100%",
    },
    textQuestion: {
        fontWeight: "bold",
        color: "#FA0000",
    },
    iconQuestion: {
        marginLeft: 10,
    },

    chooseColorBtn: {
        marginTop: 20,
        width: "100%",
    },

    // bottom
    wrapperBottom: {
        marginBottom: 12,
    },
});

export default Screen01;
