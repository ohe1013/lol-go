import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Message } from "../../types";
import styles from "./style";

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
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      {type === "new" ? (
        <View style={styles.timeBox}>
          <Text style={styles.timeBoxText}>
            {message.createdAt.split("-")[0] +
              "년 " +
              message.createdAt.split("-")[1] +
              "월 " +
              message.createdAt.split("-")[2].split("T")[0] +
              "일"}
          </Text>
        </View>
      ) : (
        <Text>sdsds</Text>
      )}
      {isMyMessage() ? (
        <View style={{ flexDirection: "row-reverse" }}>
          <View style={styles.myMessageBox}>
            <Text style={styles.myMessageText}>{message.content}</Text>
          </View>
          <Text style={{ alignSelf: "flex-end", marginRight: 10 }}>{messageTime}</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.yourMessageBox}>
            <Text style={styles.yourMessageText}>{message.content}</Text>
          </View>
          <Text style={{ alignSelf: "flex-end", marginLeft: 10 }}>{messageTime}</Text>
        </View>
      )}
    </View>
  );
};

export default ChatMessage;
