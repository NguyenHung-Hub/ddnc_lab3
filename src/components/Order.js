import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import book from "../../assets/images/book.png";
import add from "../../assets/images/btnadd.png";
import minus from "../../assets/images/btnminus.png";
import OrderQuantity from "./OrderQuantity";
import Voucher from "./Voucher";

export default function Order() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.section1}>
                <Image source={book} />
                <View>
                    <Text>Nguyên hàm tích phần và ứng dụng</Text>
                    <Text>Cung cấp bởi Tiki Trading</Text>
                    <Text>141.800 đ</Text>
                    <Text>141.800 đ</Text>
                    <OrderQuantity />
                </View>
            </View>
            <Voucher style={styles.section2} />
            <View style={styles.section3}>
                <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text>Nhập tại đây?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: 12,
        // backgroundColor: "#fff",
    },
    section1: { flexDirection: "row", backgroundColor: "#fff" },
    section2: {
        marginTop: 20,

        backgroundColor: "#fff",
    },
    section3: {
        flexDirection: "row",
        marginTop: 20,

        backgroundColor: "#fff",
    },
});
