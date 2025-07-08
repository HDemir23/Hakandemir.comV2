import React, { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { useHeaderStyle } from "./Header.style";

type ContentType = "home" | "experience" | "projects";

type MyWebHeaderProps = {
  activeContent: ContentType;
};

export default function MyWebHeader({ activeContent }: MyWebHeaderProps) {
  const styles = useHeaderStyle();

  // Image mapping based on active content
  const imageSource = useMemo(() => {
    const imageMap = {
      home: require("@/assets/images/photo.png"),
      experience: require("@/assets/images/photo2.png"),
      projects: require("@/assets/images/photo.png"),
    };
    return imageMap[activeContent];
  }, [activeContent]);

  // Title mapping based on active content
  const titleText = useMemo(() => {
    const titleMap = {
      home: "Ahmet Hakan Demir",
      experience: "Ahmet Hakan Demir",
      projects: "Ahmet Hakan Demir",
    };
    return titleMap[activeContent];
  }, [activeContent]);

  // Subtitle mapping based on active content
  const subtitleText = useMemo(() => {
    const subtitleMap = {
      home: "Software Developer",
      experience: "My Experience",
      projects: "Get In Touch",
    };
    return subtitleMap[activeContent];
  }, [activeContent]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.ImageBorder}>
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
        </View>
        <View>
          <Text style={styles.Title}>{titleText}</Text>
          <Text style={styles.Text}>{subtitleText}</Text>
        </View>
      </View>
    </View>
  );
}
