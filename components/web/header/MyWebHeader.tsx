import React from "react";
import { Image, Text, View } from "react-native";
import { useHeaderStyle } from "./Header.style";

export default function MyWebHeader() {
  const styles = useHeaderStyle();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.ImageBorder}>
          <Image
            source={require("@/assets/images/photo.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.Title}>Ahmet Hakan Demir</Text>
          <Text style={styles.Text}>Softwere Developer</Text>
        </View>
      </View>
    </View>
  );
}
