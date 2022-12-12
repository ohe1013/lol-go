import { Text } from "react-native-paper";
import Reaact from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Chats from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import { ImageBackground, View } from "react-native";
import InputBox from "../components/InputBox";

type M = {
    id: string;
    content: string;
    createdAt: string;
    user: {
        id: string;
        name: string;
    };
};

const ChatroomScreen = () => {
    const route = useRoute();
    let before: M;
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <FlatList
                data={Chats.messages}
                renderItem={({ item, index }) => {
                    if (index === 0) {
                        before = item;
                        return <ChatMessage message={item} type={"new"}></ChatMessage>;
                    }
                    if (new Date(before.createdAt).getDay() !== new Date(item.createdAt).getDay()) {
                        before = item;
                        return <ChatMessage message={item} type={"new"}></ChatMessage>;
                    }
                    before = item;
                    return <ChatMessage message={item} type={"old"}></ChatMessage>;
                }}
                initialScrollIndex={Chats.messages.length - 1}
            />
            <InputBox />
        </View>
    );
};

export default ChatroomScreen;
