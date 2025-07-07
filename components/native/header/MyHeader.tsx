import React from "react";
import { Image, Text, View } from "react-native";
import { useHeaderStyle } from "./Header.style";

export default function MyHeader() {
  const styles = useHeaderStyle();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.Image}>
          <Image
            source={require("@/assets/images/photo.png")}
            style={{ width: 90, height: 90, borderRadius: 50 }}
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
