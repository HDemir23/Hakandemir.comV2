import React from "react";
import { ScrollView, View } from "react-native";
import GalaxyBackground from "../BackgroundPattern/GalaxyBg";
import Divider from "../Divider/divider";
import MyWebHeader from "./header/MyWebHeader";
import { useWebLayoutstyle } from "./Pages.styles/webLayout.style";
import WebSkillsComponent from "./Skills/WebSkillsComponent";

export default function WebLayout() {
  const style = useWebLayoutstyle();
  return (
    <ScrollView style={style.scrollContent}>
      <GalaxyBackground numberOfRings={4} numberOfStars={150} />
      <View style={style.container}>
        <View style={style.content}>
          <MyWebHeader />
          <Divider />
          <WebSkillsComponent />
        </View>
      </View>
    </ScrollView>
  );
}
