import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HButton({
    style,
    text,
    textColor,
    fontSize,
    bgColor,
    radius,
    width,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={[
                styles.customBtn,
                {
                    backgroundColor: bgColor,
                    borderRadius: radius,
                    width: width,
                },
                style,
            ]}
            onPress={onPress}
        >
            <Text style={[styles.textBtn, { color: textColor, fontSize }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    customBtn: {
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 36,
        // marginTop: 20,

        // width: "100%",

        backgroundColor: "#72D3FE",
    },
    textBtn: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
});
