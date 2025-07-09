import React from "react";
import { ScrollView, View } from "react-native";
import MyHeader from "../native/header/MyHeader";
import HobbiesCard from "./Card/HobbiesCard";
import PlainText from "./PlainText/PlainText";
import { usePlainText } from "./PlainText/plainText.style";
export default function NativeAbout() {
  const styles = usePlainText();
  return (
    <View style={styles.WievStyle}>
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
