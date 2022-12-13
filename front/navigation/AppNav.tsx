import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export const AppNav = () => {
    const { isLogin, userToken } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {isLogin === true && <ActivityIndicator size={"large"} />}
            {isLogin === false && userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
