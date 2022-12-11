import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  midContainer: {
    justifyContent: "space-around",
  },
  leftContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 50,
  },
  username: {
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 16,
    color: "gray",
  },
  time: {
    marginLeft: 10,
    fontSize: 12,
    color: "gray",
  },
});

export default styles;
