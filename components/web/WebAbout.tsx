import React from "react";
import { Linking, Text, View } from "react-native";

export default function WebAbout() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text>asd</Text>
    </View>
  );
}
