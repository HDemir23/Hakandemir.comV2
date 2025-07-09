import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const useSkillsStyle = () => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      padding: 16,
    }),
    [theme]
  );

  const title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
    }),
    [theme]
  );

  const list: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      gap: 12,
    }),
    []
  );

  const row: ViewStyle = useMemo(
    () => ({
      gap: 12,
      justifyContent: "space-between",
    }),
    []
  );

  const item: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 12,
      marginBottom: 12,
      flex: 1,
    }),
    [theme]
  );

  const label: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: 14,
      fontWeight: "500",
      paddingLeft: 10,
    }),
    [theme]
  );

  return {
    container,
    title,
    list,
    row,
    item,
    label,
  };
};
