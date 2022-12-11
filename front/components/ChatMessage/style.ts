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
    padding: 10,
    maxWidth: 300,
    alignSelf: "flex-start",
    backgroundColor: "#D6D6D6",
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
