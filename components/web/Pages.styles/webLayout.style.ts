import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { useWindowDimensions, ViewStyle } from "react-native";

export const useWebLayoutstyle = () => {
  const theme = GitHubDarkTheme;
  const { width, height } = useWindowDimensions();

  // Responsive breakpoints

  const isMedium = width >= 524;
  const isLarge = width >= 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }),
    [theme, width]
  );

  const content: ViewStyle = useMemo(
    () => ({
      flex: 1,
      width: isMedium ? "60%" : "100%",
    }),
    [theme, width]
  );

  const scrollContent: ViewStyle = useMemo(
    () => ({
      flex: 1,
      backgroundColor: theme.colors.background,
    }),
    [width]
  );

  return {
    container,
    content,
    scrollContent,
  };
};
