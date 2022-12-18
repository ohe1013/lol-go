import React from "react";
import { StyleSheet } from "react-native";

import Modal from "react-native-modal";
import SocialWebView from "./SocialWebView";

const SocialWebviewModal = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible} style={styles.container}>
      <SocialWebView source={{ uri: props.source }} closeSocialModal={props.closeSocialModal} />
    </Modal>
  );
};
export default SocialWebviewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
