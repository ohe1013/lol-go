import { View, Text, Image, TouchableOpacity } from "react-native";
import ko from "javascript-time-ago/locale/ko";
import TimeAgo from "javascript-time-ago";
import { ChartRoom } from "../../types";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChartRoom;
};

TimeAgo.setDefaultLocale(ko.locale);
TimeAgo.addLocale(ko);
const ChatListItem = (props: ChatListItemProps) => {
  const timeAgo = new TimeAgo("ko");
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
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.username}>{user.name}</Text>
              <Text style={styles.time}>{timeAgo.format(new Date(chatRoom.lastMessage.createdAt), "round")}</Text>
            </View>
            <View style={{ width: 300 }}>
              <Text numberOfLines={2} ellipsizeMode={"head"} style={styles.lastMessage}>
                {chatRoom.lastMessage.content}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
