import { GitHubDarkTheme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { Platform } from "react-native";
import WebAnalytics from "./WebAnalytics";

export default function RootLayout() {
  const style = GitHubDarkTheme;

  if (Platform.OS !== "web") {
    return (
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: style.colors.background,
          },
          tabBarActiveTintColor: style.colors.buttonBackground,
          tabBarInactiveTintColor: style.colors.buttonDisabledBackground,
          headerStyle: {
            backgroundColor: style.colors.background,
          },
          headerTitleStyle: {
            color: style.colors.title,
            fontWeight: "bold",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "About",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="experience"
          options={{
            title: "Experience",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="skills"
          options={{
            title: "Skills",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="code" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <WebAnalytics />
    </>
  );
}
