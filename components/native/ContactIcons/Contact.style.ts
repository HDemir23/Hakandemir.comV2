import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const useContactStyle = () => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      padding: 16,
      gap: 12,
    }),
    [theme]
  );

  const contactItem: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 8,
      gap: 12,
    }),
    [theme]
  );

  const text: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: 14,
      flex: 1,
    }),
    [theme]
  );

  return {
    container,
    contactItem,
    text,
  };
};
