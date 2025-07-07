import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const useHeaderStyle = () => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      borderRadius: 45,
      paddingBottom: 25,
    }),
    [theme]
  );
  const content: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      alignItems: "center",
    }),
    [theme]
  );

  const Image: ViewStyle = useMemo(
    () => ({
      width: 100,
      height: 100,
      borderRadius: 60,
      backgroundColor: theme.colors.border,
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
    }),
    [theme]
  );

  const Title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: 25,
      fontWeight: "bold",
    }),
    [theme]
  );

  const Text: TextStyle = useMemo(
    () => ({
      color: theme.colors.buttonBackground,
      fontSize: 14,
      fontWeight: "bold",
    }),
    [theme]
  );

  const adsa: ViewStyle = useMemo(() => ({}), [theme]);
  return {
    container,
    content,
    Image,
    Text,
    Title,
  };
};
