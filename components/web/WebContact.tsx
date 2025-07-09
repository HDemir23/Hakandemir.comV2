import React from "react";
import { View } from "react-native";
import Divider from "../Divider/divider";
import Button from "./Buttons/Button";
import Contact from "./ContactIcons/Contact";
import Mail from "./Mail/Mail";

export default function WebContact() {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button text="Resume" onPress={() => console.log("clicked")} />
        <Button text="Mobile App" onPress={() => console.log("clicked")} />
      </View>
      <Divider />
      <Contact />
      <Divider />
      <Mail />
    </View>
  );
}
