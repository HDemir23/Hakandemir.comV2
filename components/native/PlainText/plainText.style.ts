import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const usePlainText = () => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20,
    }),
    [theme]
  );

  const content: ViewStyle = useMemo(
    () => ({
      width: "90%",
    }),
    [theme]
  );

  const Text: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: 16,
      margin: 10,
      
    }),
    [theme]
  );

  const adsa: ViewStyle = useMemo(() => ({}), [theme]);
  return {
    container,
    content,
    Text,
  };
};
