import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useSkillsStyle } from "./skills.style";

import CssIcon from "@/assets/svg/Css";
import ExpoIcon from "@/assets/svg/ExpoIcon";
import FirebaseIcon from "@/assets/svg/FirebaseIcon";
import GitIcon from "@/assets/svg/GitIcon";
import JavaScriptIcon from "@/assets/svg/JavaScript";
import ReactIcon from "@/assets/svg/ReactIcon";
import ReactNativeIcon from "@/assets/svg/ReactNative";
import TypeScriptIcon from "@/assets/svg/TypeScript";

type Skill = {
  id: string;
  name: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const skills: Skill[] = [
  { id: "1", name: "TypeScript", Icon: TypeScriptIcon },
  { id: "2", name: "JavaScript", Icon: JavaScriptIcon },
  { id: "3", name: "React", Icon: ReactIcon },
  { id: "4", name: "Css", Icon: CssIcon },
  { id: "5", name: "Git", Icon: GitIcon },
  { id: "6", name: "Firebase", Icon: FirebaseIcon },
  { id: "7", name: "Expo", Icon: ExpoIcon },
  { id: "8", name: "React Native", Icon: ReactNativeIcon },
];

export default function Skills() {
  const styles = useSkillsStyle();

  const renderItem = ({ item }: { item: Skill }) => (
    <View style={styles.item}>
      <item.Icon size={28} />
      <Text style={styles.label}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <ScrollView horizontal>
        <FlatList
          data={skills}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
}
