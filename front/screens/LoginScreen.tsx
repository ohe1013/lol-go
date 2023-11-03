import { useContext, useEffect, useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Teemo } from "../components/Lottie/Hero";
import { NaverLogin } from "../components/OAuth/OAuthLogin";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  type Social = {
    socialModalVisible: boolean;
    source?: string;
  };
  const [social, setSocialState] = useState<Social>({
    socialModalVisible: false,
    source: "",
  });
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <Teemo />
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
          placeholder="email"
          style={{ width: "100%" }}
          value={email}
          onChangeText={setEmail}
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
          marginBottom: 10,
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
      <TouchableOpacity
        onPress={() => {
          NaverLogin();
        }}
        style={{
          backgroundColor: Colors.light.text,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 16,
            color: "green",
          }}
        >
          네이버로 로그인
        </Text>
      </TouchableOpacity>
      {/* <View>
        {social.source !== undefined ? (
          <SocialWebviewModal
            closeSocialModal={closeSocialModal}
            visible={social.socialModalVisible}
            source={social.source}
          />
        ) : null}
        <TouchableOpacity
          style={
            {
              //
            }
          }
          onPress={() => onPressSocial()}
        >
          <Text style={{ color: "#391B1B", fontSize: 18, fontWeight: "bold" }}>네이버 로그인</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
export default LoginScreen;
