import moment from "moment";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ChartRoom } from "../../types";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChartRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];
    const onClick = () => {
        navigation.navigate("ChatRoom", { id: chatRoom.id, name: user.name });
    };
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={2} ellipsizeMode={"head"} style={styles.lastMessage}>
                            {chatRoom.lastMessage.content}
                        </Text>
                    </View>
                </View>
                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("YYYY MM DD")}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ChatListItem;
