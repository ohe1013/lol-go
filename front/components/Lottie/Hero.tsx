import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";

export function Teemo() {
  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);
  return (
    <Lottie
      ref={animationRef}
      style={{ marginVertical: 20, width: 200, height: 200, alignSelf: "center" }}
      source={require("../../assets/login-teemo.json")}
    />
  );
}
