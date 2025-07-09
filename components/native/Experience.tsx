
import React from "react";
import { ScrollView, View } from "react-native";
import HobbiesCard from "./Card/HobbiesCard";
import MyHeader from "./header/MyHeader";
import PlainText from "./PlainText/PlainText";
import Skills from "./Skills/Skills";
import { usePlainText } from "./PlainText/plainText.style";

export default function NativeExperience() {
  const styles = usePlainText();
  return (
    <View style={styles.WievStyle}>
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
