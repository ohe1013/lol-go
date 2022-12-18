import React from "react";
import { WebView } from "react-native-webview";
import * as SecureStore from "expo-secure-store";

export default function SocialWebview(props) {
  const INJECTED_JAVASCRIPT =
    '(function() {if(window.document.getElementsByTagName("pre").length>0){window.ReactNativeWebView.postMessage((window.document.getElementsByTagName("pre")[0].innerHTML));}})();';

  const _handleMessage = async (event) => {
    console.log(JSON.parse(event.nativeEvent.data));
    let result = JSON.parse(event.nativeEvent.data);
    let success = result.message;
    if (success) {
      let userToken = result.Authorization;
      try {
        await SecureStore.setItemAsync("userToken", JSON.stringify(userToken));
      } catch (e) {
        console.log(e);
      }
    }
    props.closeSocialModal();
  };

  return (
    <WebView
      //ref={this._refWebView}
      originWhitelist={["*"]}
      injectedJavaScript={INJECTED_JAVASCRIPT}
      source={props.source}
      javaScriptEnabled={true}
      onMessage={_handleMessage}
    />
  );
}
