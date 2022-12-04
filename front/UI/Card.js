import { StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  return (
    <View style={{ backgroundColor: "white", height: 70, paddingLeft: 30, borderRadius: 30, flexDirection: "row" }}>
      <View style={{ flex: 5, justifyContent: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 17, color: "orange" }}>{props.loc} </Text>
          <Text style={{ fontSize: 17 }}>{props.title}</Text>
        </View>
        <View>
          <Text style={{ opacity: 0.8, color: "gray", fontSize: 12 }}>
            {props.date} 조회 {props.viewCount}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: 30,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "rgba( 255, 255, 255, 0.5 )",
          height: "80%",
        }}
      >
        <Text>{props.commentCount}</Text>
        <Text>댓글</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    flex: 5,
    backgroundColor: "gray",
    color: "white",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutImage: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
  desc01: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 22,
    paddingRight: 22,
  },
  desc02: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    padding: 22,
  },
  button: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
