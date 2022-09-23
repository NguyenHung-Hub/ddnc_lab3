import React, { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import HButton from "../components/HButton";
import { CommonActions } from "@react-navigation/native";
import formatMoney from "../utils/formatMoney";

const Screen02 = ({ route, navigation }) => {
    const { product } = route.params;

    const initColor = product.colors;
    const [colors, setColors] = useState(initColor);
    const [colorFocus, setColorFocus] = useState(product.colors[0]);

    // console.log({ colorFocus });

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperTop}>
                <Image
                    style={styles.productImg}
                    source={colorFocus.imagePath}
                />
                <View style={styles.productInfo}>
                    <Text style={[styles.text, styles.productName]}>
                        Điện Thoại Vsmart Joy 3 Hàng chính hãng
                    </Text>

                    <Text style={[styles.text, styles.productColor]}>
                        Màu:{" "}
                        <Text style={styles.textBold}>{colorFocus.name}</Text>
                    </Text>
                    <Text style={[styles.text, styles.supplier]}>
                        Cung cấp bởi{" "}
                        <Text style={styles.textBold}>Tiki Trading</Text>
                    </Text>
                    <Text style={[styles.productPrice]}>
                        {formatMoney(product.price)} đ
                    </Text>
                </View>
            </View>

            <View style={styles.wrapperCenter}>
                <Text style={styles.titleChooseColor}>
                    Chọn một màu bên dưới:
                </Text>
                <ScrollView>
                    <View style={styles.wrapperColor}>
                        {colors.map((color, index) => {
                            const isFocus =
                                colorFocus.hex === color.hex ? 1 : 0;

                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.borderFocus,
                                        {
                                            borderColor: `${color.hex}`,
                                            borderWidth: isFocus,
                                        },
                                    ]}
                                    onPress={() => setColorFocus(color)}
                                >
                                    <View
                                        style={[
                                            styles.boxColor,
                                            {
                                                backgroundColor: `${color.hex}`,
                                            },
                                        ]}
                                    ></View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.wrapperBottom}>
                <HButton
                    text="XONG"
                    bgColor="#4D6DC1"
                    textColor="white"
                    radius={10}
                    fontSize={20}
                    onPress={() =>
                        navigation.navigate("Lab3c_Screen01", {
                            productId: product.id,
                            imageChoose: colorFocus.imagePath,
                        })
                    }
                    // onPress={() => navigation.dispatch(CommonActions.goBack())}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // general
    section: {
        paddingHorizontal: 12,
        backgroundColor: "#fff",
    },

    text: {
        fontSize: 15,
        color: "#000",
    },
    textPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#EE0D0D",
    },
    textBold: {
        fontWeight: "bold",
    },

    //styles
    wrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",

        // marginTop: 48,
        width: "100%",
    },

    //top

    wrapperTop: {
        flexDirection: "row",
        paddingTop: 8,
        paddingBottom: 16,
        backgroundColor: "#fff",
    },

    productImg: {
        // flex: 1,
        width: 160,
        height: 160,
        // marginRight: 12,
        resizeMode: "contain",
    },
    productInfo: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    productName: {
        width: 200,
        minHeight: 40,

        fontSize: 15,
    },

    productColor: {},

    supplier: {},

    productPrice: {
        fontWeight: "bold",
        fontSize: 20,
    },

    //center
    wrapperCenter: {
        flex: 1,
        flexDirection: "column",
        // backgroundColor: "green",
        paddingBottom: 20,
    },
    titleChooseColor: {
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 18,

        fontSize: 18,
    },
    wrapperColor: {
        flexDirection: "column",
        alignItems: "center",
        // flexWrap: "wrap-reverse",
        // backgroundColor: "blue",
    },

    borderFocus: {
        marginTop: 8,
        padding: 4,
        // borderWidth: 1,
    },

    boxColor: {
        width: 80,
        height: 80,
        // backgroundColor: "red",
    },

    //bottom
    wrapperBottom: {
        // marginTop: 3,
        marginBottom: 10,
        marginHorizontal: 18,
    },
});

export default Screen02;
