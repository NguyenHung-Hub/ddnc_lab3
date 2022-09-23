import React from "react";
import { StyleSheet } from "react-native";
import Lab3a from "./src/screens/Lab3a";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Screen01 from "./src/screens/Screen01";
import Screen02 from "./src/screens/Screen02";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import Lab3c from "./src/screens/Lab3c";
import Card from "./src/components/Card";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MainScreen">
                    <Stack.Screen
                        options={{ animation: "simple_push" }}
                        name="Main Screen"
                        component={MainScreen}
                    />

                    <Stack.Screen
                        options={{ animation: "fade_from_bottom" }}
                        name="Lab3a"
                        component={Lab3a}
                    />
                    <Stack.Screen
                        options={{ animation: "slide_from_bottom" }}
                        name="Lab3c"
                        component={Lab3c}
                    />
                    <Stack.Screen
                        options={{ animation: "slide_from_bottom" }}
                        name="Card"
                        component={Card}
                    />

                    <Stack.Screen
                        options={{ animation: "simple_push" }}
                        name="Lab3c_Screen01"
                        component={Screen01}
                    />
                    <Stack.Screen
                        options={{ animation: "slide_from_right" }}
                        name="Lab3c_Screen02"
                        component={Screen02}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C4C4C4",
        alignItems: "center",
        justifyContent: "center",
    },
});
