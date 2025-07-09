import { WievStyle } from "@/constants/theme";
import React from "react";
import { ScrollView, View } from "react-native";

import Contact from "./ContactIcons/Contact";
import Mail from "./Mail/Mail";

export default function NativeSkills() {
  return (
    <View style={WievStyle}>
      <ScrollView>
        <Contact />
        <Mail />
      </ScrollView>
    </View>
  );
}
