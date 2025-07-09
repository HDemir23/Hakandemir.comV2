import React from "react";
import { View } from "react-native";
import Divider from "../Divider/divider";
import HobbiesCard from "./Card/HobbiesCard";
import PlainText from "./PlainText/PlainText";
import WebSkillsComponent from "./Skills/WebSkillsComponent";

export default function WebExperience() {
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
