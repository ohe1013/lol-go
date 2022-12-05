import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { Fontisto, Feather } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabTwoScreen from "../screens/TabTwoScreen";
import Map from "../components/Map";
import List from "../components/List";
import ChatScreen from "../screens/ChatScreen";

const MainTab = createMaterialBottomTabNavigator();

export default function MainTabNavigator() {
    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            activeColor={Colors.light.background}
            tabBarLabelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: Colors.light.tint }}
        >
            <MainTab.Screen
                name="List"
                component={List}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="list" color={color} size={18} />,
                    tabBarLabel: "List",
                }}
            />
            <MainTab.Screen
                name="Chats"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="chatbubble-ellipses-outline" color={color} size={24} />
                    ),
                    tabBarLabel: "chat",
                }}
            />
            <MainTab.Screen name="Status" component={TabTwoNavigator} />
            <MainTab.Screen name="Calls" component={TabTwoNavigator} />
        </MainTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={Map}
                options={{ headerTitle: "Tab One Title" }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{ headerTitle: "Tab Two Title" }}
            />
        </TabTwoStack.Navigator>
    );
}
