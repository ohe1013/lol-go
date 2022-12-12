import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import styles from "./style";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const InputBox = () => {
    const [message, setMessage] = useState("");

    const onMicrophonePress = () => {
        console.warn("onMicrophonePress");
    };
    const onSendPress = () => {
        console.warn("onSendPress");
        setMessage("");
    };

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TextInput
                    placeholder={"메시지 보내기"}
                    multiline
                    style={styles.textInput}
                    value={message}
                    onChangeText={setMessage}
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                ></TextInput>
                <MaterialIcons
                    name="insert-emoticon"
                    style={styles.icons}
                    size={24}
                    color="black"
                />
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {message ? (
                        <Feather name="send" style={styles.icons} size={24} color="orange" />
                    ) : (
                        <Feather name="send" style={styles.icons} size={24} color="gray" />
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default InputBox;
