import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle, useWindowDimensions } from "react-native";

export const useSkillsStyle = () => {
  const theme = GitHubDarkTheme;
  const { width } = useWindowDimensions();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  // const isDesktop = width >= 1024;

  const container: ViewStyle = useMemo(
    () => ({
      padding: 16,
      width: "100%",
      backgroundColor: "transparent",
    }),
    []
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

  const skillsWrapper: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "space-between",
    }),
    []
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
      opacity: theme.transparency.low,
      borderRadius: 12,
      marginBottom: 12,
      width: isMobile ? 150 : isTablet ? 160 : 180,
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
    [theme, isMobile, isTablet]
  );

  // Hover effect
  const itemHovered: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.border,
      transform: [{ scale: 1.05 }],
      shadowColor: theme.colors.title,
      shadowOffset: { width: 0, height: 4 },
      opacity: 1,
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    }),
    [theme]
  );

  const label: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: 14,
      fontWeight: "500",
      paddingLeft: 10,
      transition: "color 0.3s ease",
    }),
    [theme]
  );

  // Hover label Color
  const labelHovered: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontWeight: "600",
    }),
    [theme]
  );

  return {
    container,
    title,
    skillsWrapper,
    list,
    row,
    item,
    itemHovered,
    label,
    labelHovered,
    isMobile,
  };
};
