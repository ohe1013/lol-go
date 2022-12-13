import { useContext, useEffect, useRef, useState } from "react";
import {
    StatusBar,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    Button,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Lottie from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, logout } = useContext(AuthContext);
    const animationRef = useRef<Lottie>(null);
    useEffect(() => {
        animationRef.current?.play();
        animationRef.current?.play(30, 120);
    }, []);
    return (
        <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
            <Lottie
                ref={animationRef}
                style={{ marginVertical: 20, width: 200, height: 200, alignSelf: "center" }}
                source={require("../assets/login-teemo.json")}
            />
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "flex-end",
                }}
            >
                <AntDesign
                    name="user"
                    style={{
                        marginHorizontal: 5,
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                    size={24}
                    color="black"
                />
                <TextInput
                    placeholder="Username"
                    style={{ width: "100%" }}
                    value={username}
                    onChangeText={setUsername}
                    maxLength={30}
                ></TextInput>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "flex-end",
                }}
            >
                <AntDesign
                    name="lock"
                    style={{
                        marginHorizontal: 5,
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                    size={24}
                    color="black"
                />
                <TextInput
                    style={{ width: "100%" }}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    maxLength={30}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    login();
                }}
                style={{
                    backgroundColor: Colors.light.tint,
                    padding: 20,
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: 16,
                        color: "#fff",
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default LoginScreen;
