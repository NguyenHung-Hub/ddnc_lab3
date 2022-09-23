import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import book from "../../assets/images/book.png";
import { DECREASE, INCREASE } from "../constans";
import HButton from "../components/HButton";
import OrderQuantity from "../components/OrderQuantity";
import Voucher from "../components/Voucher";
import formatMoney from "../utils/formatMoney";

export default function Lab3a({ navigation }) {
    const initPrice = 141800;

    const [price, setPrice] = useState(initPrice);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setPrice(quantity * initPrice);
    }, [quantity]);

    const quantityHandle = (action) => {
        switch (action) {
            case INCREASE: {
                setQuantity((prev) => prev + 1);
                break;
            }
            case DECREASE: {
                if (quantity == 1) {
                    setQuantity(1);
                } else {
                    setQuantity((prev) => prev - 1);
                }
                break;
            }

            default: {
                throw new Error(" Invalid action - not increase/decrease ");
            }
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperTop}>
                <View style={[styles.section1, styles.section]}>
                    <View style={styles.section1_top}>
                        <Image style={styles.product_img} source={book} />
                        <View style={styles.product_info}>
                            <Text style={[styles.text, styles.product_name]}>
                                Nguyên hàm tích phần và ứng dụng
                            </Text>
                            <Text style={[styles.text, styles.supplier]}>
                                Cung cấp bởi Tiki Trading
                            </Text>
                            <Text style={[styles.textPrice]}>
                                {formatMoney(price)} đ
                            </Text>
                            <Text style={[styles.discount]}>
                                {formatMoney(price)} đ
                            </Text>
                            <OrderQuantity
                                quantity={quantity}
                                quantityHandle={quantityHandle}
                            />
                        </View>
                    </View>

                    <Voucher style={styles.section1_bottom} />
                </View>

                <View style={[styles.section2, styles.section]}>
                    <Text style={[styles.text, styles.textQuestion]}>
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, styles.textBlue]}>
                            Nhập tại đây?
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.section3, styles.section]}>
                    <Text style={[styles.text, styles.titleTemp]}>
                        Tạm tính
                    </Text>
                    <Text
                        style={[styles.text, styles.textPrice, styles.costTemp]}
                    >
                        {formatMoney(price)} đ
                    </Text>
                </View>
            </View>

            <View style={styles.wrapperBottom}>
                <View style={[styles.section4, styles.section]}>
                    <View style={styles.section4_top}>
                        <Text style={[styles.text, styles.textPayment]}>
                            Thành tiền
                        </Text>
                        <Text style={[styles.textPrice, styles.payment]}>
                            {formatMoney(price)} đ
                        </Text>
                    </View>
                    <HButton
                        text="TIẾN HÀNH ĐẶT HÀNG"
                        textColor="white"
                        bgColor="#E53935"
                        fontSize={20}
                        radius={4}
                        style={styles.orderBnt}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",

        // marginTop: 48,
        width: "100%",
    },
    section: {
        paddingHorizontal: 12,
        backgroundColor: "#fff",
    },

    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    textPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#EE0D0D",
    },
    textBlue: {
        color: "#134FEC",
    },

    wrapperTop: {
        flexDirection: "column",
    },
    wrapperBottom: {},

    section1: {
        flexDirection: "column",
        paddingTop: 14,
        paddingBottom: 27,
    },
    section1_top: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    product_img: {
        flex: 1,
        width: 160,
        height: 160,
        marginRight: 12,
        resizeMode: "contain",
    },
    product_info: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    product_name: {},
    section1_bottom: {},
    supplier: {},
    discount: {
        fontWeight: "bold",
        textDecorationLine: "line-through",
        color: "#808080",
    },

    // section 2

    section2: {
        flexDirection: "row",

        marginTop: 16,

        paddingTop: 16,
        paddingBottom: 22,
    },
    textQuestion: {
        marginRight: 8,
    },

    // section 3

    section3: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginTop: 16,

        paddingTop: 10,
        paddingBottom: 20,
    },
    titleTemp: {
        fontSize: 20,
    },

    costTemp: {
        fontSize: 20,
    },

    section4: {},
    section4_top: {
        flexDirection: "row",
        paddingTop: 16,
        justifyContent: "space-between",
    },
    textPayment: {
        fontSize: 22,
        color: "#808080",
    },
    payment: {
        fontSize: 22,
    },

    orderBnt: {
        marginTop: 20,
        marginBottom: 16,
    },
});
