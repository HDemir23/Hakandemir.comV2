import React from "react";
import { View } from "react-native";
import Divider from "../Divider/divider";
import HobbiesCard from "./Card/HobbiesCard";
import PlainText from "./PlainText/PlainText";

export default function WebHome() {
  return (
    <View style={{ flex: 1 }}>
      <PlainText collection="content" document="Intro-text" prefix="aboutMe" />
      <Divider />
      <HobbiesCard title="Images" content="hobies" />
    </View>
  );
}
