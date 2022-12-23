import React, { createContext, ReactNode, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import localhost from "react-native-localhost";

type authContextType = {
    isLogin: boolean;
    userToken: {} | null;
    login: () => void;
    logout: () => void;
};

type Props = {
    children: ReactNode;
};
type Token = {
    token: string;
    duration: number;
};

const calculateReaminingTime = (expireationTime: string) => {
    const current = new Date().getTime();
    const adjustExpirationTime = new Date(expireationTime).getTime();
    const remainingTime = adjustExpirationTime - current;
    return remainingTime;
};

const retrieveStoredToken = async () => {
    const storedToken = await SecureStore.getItemAsync("token");
    const storedExpirationDate = await SecureStore.getItemAsync("expirationTime");

    const remainTime = calculateReaminingTime(storedExpirationDate);
    if (remainTime <= 3600) {
        SecureStore.deleteItemAsync("token");
        SecureStore.deleteItemAsync("expireationTime");
        return null;
    }
    return {
        token: storedToken,
        duration: remainTime,
    };
};

const authContextDefaultValues: authContextType = {
    isLogin: false,
    userToken: null,
    login: () => {},
    logout: () => {},
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

const AuthProvider = ({ children }: Props) => {
    const tokenData = retrieveStoredToken();
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [userToken, setUserToken] = useState<{} | null>(initialToken);

    const login = async (id: string, password: string) => {
        try {
            setIsLogin(true);
            const res = await axios({
                url: `http://${localhost}/user/login`,
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    id: id,
                    password: password,
                },
            });
            if (res.status === 200 && res.data === "ok") {
                setUserToken("asdasdasd");
                SecureStore.setItemAsync("userToken", JSON.stringify(userToken));
                setIsLogin(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const logout = (id: string, password: string) => {
        setUserToken(null);
        setIsLogin(false);
        axios.post(`http://${localhost}:8000`);
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
