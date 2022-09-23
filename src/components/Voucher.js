import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HButton from "./HButton";

const Voucher = ({ style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <View style={styles.top}>
                <Text style={[styles.text, styles.title]}>
                    Mã giảm giá đã lưu
                </Text>
                <TouchableOpacity>
                    <Text style={[styles.text, styles.textBlue]}>
                        Xem tại đây
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.voucherWrapper}>
                <View style={styles.voucherBox}>
                    <View style={styles.rectangle}></View>
                    <Text style={[styles.text, styles.discountCode]}>
                        Mã giảm giá
                    </Text>
                </View>
                <HButton
                    text="Áp dụng"
                    bgColor="#0A5EB7"
                    textColor="white"
                    fontSize={18}
                    paddingHori={18}
                    radius={4}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        // backgroundColor: "red",
    },

    text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
    },
    top: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 34,
    },
    title: {
        paddingRight: 8,
        marginRight: 12,
    },
    textBlue: {
        color: "#134FEC",
    },

    voucherWrapper: {
        // width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    voucherBox: {
        flexDirection: "row",
        padding: 8,
        paddingRight: 50,

        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4,
    },
    rectangle: {
        width: 50,
        height: 30,
        backgroundColor: "#F2DD1B",
    },
    discountCode: {
        paddingLeft: 8,

        fontSize: 20,
        lineHeight: 30,
    },
    applyBtn: {},
});

export default Voucher;
