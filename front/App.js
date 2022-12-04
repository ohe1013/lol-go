import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { IonIcons, Fontisto } from "@expo/vector-icons";
import localhost from "react-native-localhost";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Home from "./components/Home";
import Map from "./components/Map";
import List from "./components/List";
import Color from "./constants/Colors";
import MainTabNavigator from "./navigation/MainTabNavigator";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Color.light.tint,
          },
          headerTintColor: Color.light.background,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{
            title: "동네롤고수",
            headerRight: () => (
              <View style={{ flexDirection: "row", width: 60, justifyContent: "space-between", marginRight: 10 }}>
                <AntDesign name="search1" size={24} color="white" />
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
    fontWeight: "600",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
  },
  temp: {
    color: "white",
    marginTop: 10,
    fontSize: 100,
  },
  description: {
    color: "white",
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    color: "white",
    fontSize: 20,
  },
});
