import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.cityName}>동네 롤도사</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={{}} onPress={() => navigation.push("Map")}>
            <Text>지도로 찾기</Text>
          </TouchableOpacity>

          <Text> / </Text>
          <TouchableOpacity onPress={() => navigation.push("List")}>
            <Text>목록으로 찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityName: {
    fontSize: 48,
    fontWeight: "600",
  },
});
