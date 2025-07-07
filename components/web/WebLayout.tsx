import { WievStyle } from "@/constants/theme";
import React from "react";
import { ScrollView, View } from "react-native";
import MyHeader from "../native/header/MyHeader";
import Skills from "../native/Skills/Skills";

export default function WebLayout() {
  return (
    <View style={WievStyle}>
      <ScrollView>
        <MyHeader />
        <Skills />
      </ScrollView>
    </View>
  );
}
