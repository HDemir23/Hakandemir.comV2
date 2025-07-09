import React from "react";
import { View } from "react-native";
import Divider from "../Divider/divider";
import Button from "./Buttons/Button";
import Contact from "./ContactIcons/Contact";
import Mail from "./Mail/Mail";

export default function WebContact() {
  const resume =
    "https://docs.google.com/document/d/1ZKeHLH1XcS_kLFjsHAbqszWEeG7JD39OpQYDPyO1his/export?format=pdf";

  const mobileApp =
    "https://expo.dev/accounts/roseprince/projects/hakandemir/builds/3568a9cf-d7f7-4f9c-ae30-719b90c4da8f";
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button text="Resume" onPress={() => open(resume)} />
        <Button text="Download Mobile" onPress={() => open(mobileApp)} />
      </View>
      <Divider />
      <Contact />
      <Divider />
      <Mail />
    </View>
  );
}
