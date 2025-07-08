import React from "react";
import { View } from "react-native";
import Divider from "../Divider/divider";
import { useWebLayoutstyle } from "./Pages.styles/webLayout.style";
import PlainText from "./PlainText/PlainText";
import WebSkillsComponent from "./Skills/WebSkillsComponent";
import HobbiesCard from "./Card/HobbiesCard";

export default function WebExperience() {
  const style = useWebLayoutstyle();

  return (
    <View>
      <WebSkillsComponent />
      <Divider />
      <PlainText
        collection="content"
        document="Intro-Skills"
        prefix="aboutMe"
      />
      <Divider />
      <HobbiesCard title="Projects" content="hobies" />
    </View>
  );
}
