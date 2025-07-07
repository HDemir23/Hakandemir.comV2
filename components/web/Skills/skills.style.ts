import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle, useWindowDimensions } from "react-native";

export const useSkillsStyle = () => {
  const theme = GitHubDarkTheme;
  const { width } = useWindowDimensions();

  // Responsive breakpoints
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const container: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      padding: 16,
      width: "100%",
    }),
    [theme]
  );

  const title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: isMobile ? 20 : 28,
      fontWeight: "bold",
      marginBottom: 16,
    }),
    [theme]
  );

  // New: Flex wrap container for tablet/desktop
  const skillsWrapper: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "space-between",
    }),
    [theme]
  );

  const list: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      gap: 12,
    }),
    [theme]
  );

  const row: ViewStyle = useMemo(
    () => ({
      gap: 12,
      justifyContent: "space-between",
    }),
    [theme]
  );

  const item: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 12,
      marginBottom: 12,
      width: isMobile ? 150 : isTablet ? 160 : 180,
    }),
    [theme, isMobile, isTablet]
  );

  const label: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: isMobile ? 14 : 15,
      fontWeight: "500",
      paddingLeft: 10,
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
    label,
    isMobile, // Export this so component can use it
  };
};
