import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Message } from "../../types";

export type ChatMessageProps = {
    createdAt: any;
    message: Message;
    type: string;
};

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;
    const { type } = props;
    const propsDate = new Date(message.createdAt);
    const hour = propsDate.getHours();
    const minute = propsDate.getMinutes();
    let messageTime;
    if (hour > 12) {
        messageTime = `오후 ${hour - 12}:${minute}`;
    } else if (hour > 11) {
        messageTime = `오후 ${hour}:${minute}`;
    } else {
        messageTime = `오전 ${hour}:${minute}`;
    }
    console.log(type === "new");
    return (
        <View>
            {type === "new" ? (
                <View>
                    <Text>{messageTime}</Text>
                </View>
            ) : (
                <Text>sdsds</Text>
            )}
            <View>
                <Text>{message.user.name}</Text>
                <Text>{message.content}</Text>
            </View>
            <Text>{messageTime}</Text>
        </View>
    );
};

export default ChatMessage;
