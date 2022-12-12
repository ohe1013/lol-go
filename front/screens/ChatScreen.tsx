import { StyleSheet } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ChatListItem from "../components/ChatListItem";
import NewMessageButton from "../components/NewMessageButton";

import chatRooms from "../data/chatRooms";

export default function ChatScreen() {
    return (
        <View>
            <FlatList
                style={{ width: "100%" }}
                data={chatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
