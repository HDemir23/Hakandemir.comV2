import { WievStyle } from "@/constants/theme";
import React from "react";
import { ScrollView, View } from "react-native";
import HobbiesCard from "./Card/HobbiesCard";
import MyHeader from "./header/MyHeader";
import PlainText from "./PlainText/PlainText";
import Skills from "./Skills/Skills";

export default function NativeExperience() {
  return (
    <View style={WievStyle}>
      <ScrollView>
        <MyHeader />
        <Skills />
        <PlainText
          collection="content"
          document="Intro-Skills"
          prefix="aboutMe"
        />
        <HobbiesCard content="hobies" />
      </ScrollView>
    </View>
  );
}
