import React from "react";
import { ScrollView, View } from "react-native";
import MyWebHeader from "./header/MyWebHeader";
import { useWebLayoutstyle } from "./Pages.styles/webLayout.style";
import WebSkillsComponent from "./Skills/WebSkillsComponent";

export default function WebLayout() {
  const style = useWebLayoutstyle();
  return (
    <ScrollView style={style.scrollContent}>
      <View style={style.container}>
        <View style={style.content}>
          <MyWebHeader />
          <WebSkillsComponent />
        </View>
      </View>
    </ScrollView>
  );
}
