import React, { createContext, ReactNode, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import data from "../public/User.json";
type authContextType = {
    isLogin: boolean;
    userToken: string | null;
    login: () => void;
    logout: () => void;
};

type Props = {
    children: ReactNode;
};
const authContextDefaultValues: authContextType = {
    isLogin: false,
    userToken: null,
    login: () => {},
    logout: () => {},
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

const AuthProvider = ({ children }: Props) => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [userToken, setUserToken] = useState<string | null>(null);

    const login = () => {
        setIsLogin(true);
        //const axios.post
        setUserToken("asdasdasd");
        SecureStore.setItemAsync("userToken", JSON.stringify(userToken));
        console.log(isLogin);
        setTimeout(() => {
            setIsLogin(false);
        }, 10000);
    };

    const logout = () => {
        setUserToken(null);
        setIsLogin(false);
        SecureStore.deleteItemAsync("userToken");
        setIsLogin(false);
    };
    const isLoggedIn = async () => {
        try {
            setIsLogin(true);
            let userToken = await SecureStore.getItemAsync("userToken");
            setUserToken(userToken);
            setIsLogin(false);
        } catch (e) {
            console.log(`isLogged in error ${e}`);
        }
    };
    useEffect(() => {
        isLoggedIn();
    }, []);

    const value = {
        isLogin,
        userToken,
        login,
        logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
