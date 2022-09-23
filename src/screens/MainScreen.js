import React from "react";
import { StyleSheet, View } from "react-native";
import HButton from "../components/HButton";

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <HButton
                text="Lab 3a"
                bgColor="#98ADC0"
                textColor="white"
                radius={4}
                fontSize={18}
                style={styles.btn}
                onPress={() => navigation.navigate("Lab3a")}
            />
            <HButton
                text="Lab 3c"
                bgColor="#98ADC0"
                textColor="white"
                radius={4}
                fontSize={18}
                style={styles.btn}
                onPress={() => navigation.navigate("Lab3c")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: 24,

        backgroundColor: "#fff",
    },
    btn: {
        marginTop: 16,
        width: "100%",
    },
});

export default MainScreen;
