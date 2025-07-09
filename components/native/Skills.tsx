import React from "react";
import { ScrollView, View } from "react-native";
import { usePlainText } from "./PlainText/plainText.style";

import Contact from "./ContactIcons/Contact";
import Mail from "./Mail/Mail";

export default function NativeSkills() {
  const styles = usePlainText();
  return (
    <View style={styles.WievStyle}>
      <ScrollView>
        <Contact />
        <Mail />
      </ScrollView>
    </View>
  );
}
