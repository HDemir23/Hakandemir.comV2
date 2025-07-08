import React from "react";
import { Text, View } from "react-native";
import { useWebLayoutstyle } from "./Pages.styles/webLayout.style";

export default function WebExperience() {
  const style = useWebLayoutstyle();

  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>asdadadadadasdad</Text>
    </View>
  );
}
