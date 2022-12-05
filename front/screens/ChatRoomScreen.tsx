import { Text } from "react-native-paper";
import Reaact from "react";
import { useRoute } from "@react-navigation/native";

const ChatroomScreen = () => {
    const route = useRoute();
    return <Text>{route.params.id}</Text>;
};

export default ChatroomScreen;
