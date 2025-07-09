import React from "react";
import { View } from "react-native";
import Divider from "../Divider/divider";
import Contact from "./ContactIcons/Contact";
import Mail from "./Mail/Mail";

export default function WebContact() {
  return (
    <View>
      <Contact />
      <Divider />
      <Mail />
    </View>
  );
}
