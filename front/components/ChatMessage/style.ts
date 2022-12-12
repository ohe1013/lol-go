import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  myMessageBox: {
    borderRadius: 10,
    padding: 10,
    maxWidth: 300,
    alignSelf: "flex-end",
    backgroundColor: "orange",
  },
  yourMessageBox: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal:15,
    maxWidth: 300,
    alignSelf: "flex-start",
    backgroundColor: "#F1F1F1",
  },
  timeBox: {
    width: "80%",
    alignItems: "center",
    marginLeft: "10%",
    borderRadius: 5,
    marginBottom: 10,
  },
  myMessageText: {
    color: "white",
  },
  yourMessageText: {
    color: "black",
  },
  timeBoxText: {
    fontSize: 14,
    opacity: 0.6,
  },
});

export default styles;
