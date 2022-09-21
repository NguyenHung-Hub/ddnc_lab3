import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HButton from "./HButton";

const Voucher = ({ style }) => {
    return (
        <View style={[styles.wrapper, style]}>
            <View style={styles.top}>
                <Text>Mã giảm giá đã lưu</Text>
                <Text>Xem tại đây</Text>
            </View>
            <View style={styles.voucherWrapper}>
                <View style={styles.voucherBox}>
                    <View style={styles.rectangle}></View>
                    <Text>Mã giảm giá</Text>
                </View>
                <HButton
                    text="Áp dụng"
                    bgColor="#0A5EB7"
                    textColor="white"
                    fontSize={20}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        // backgroundColor: "red",
        marginTop: 20,
    },
    top: {
        flexDirection: "row",
    },
    voucherWrapper: {
        // width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    voucherBox: {
        flexDirection: "row",
        padding: 8,
        // width: 100,
        // height: 30,
        borderWidth: 1,
        borderColor: "#000",
    },
    rectangle: {
        width: 50,
        height: 30,
        backgroundColor: "#F2DD1B",
    },
    applyBtn: {},
});

export default Voucher;
