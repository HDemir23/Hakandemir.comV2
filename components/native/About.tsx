import { WievStyle } from "@/constants/theme";
import React from "react";
import { ScrollView, View } from "react-native";
import MyHeader from "../native/header/MyHeader";
import HobbiesCard from "./Card/HobbiesCard";
import PlainText from "./PlainText/PlainText";

export default function NativeAbout() {
  return (
    <View style={WievStyle}>
      <ScrollView>
        <MyHeader />

        <View>
          <PlainText
            collection="content"
            document="Intro-text"
            prefix="aboutMe"
          />
        </View>

        <HobbiesCard content="hobies" />
      </ScrollView>
    </View>
  );
}
