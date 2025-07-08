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
      paddingTop: 20,
      paddingBottom: 20,
      justifyContent: "center",
      alignItems: "center",
      minHeight: height, // Minimum height ekledim
    }),
    [theme, width, height]
  );

  const content: ViewStyle = useMemo(
    () => ({
      flex: 1,
      width: isMedium ? "55%" : "100%",
      minHeight: height, // Content'in de minimum height'i olsun
    }),
    [theme, width, height, isMedium]
  );

  const scrollContent: ViewStyle = useMemo(
    () => ({
      flex: 1,
      backgroundColor: "transparent", // Background'u transparent yaptım ki galaxy görünsün
      minHeight: height,
    }),
    [width, height]
  );

  const buttonContent: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      justifyContent: "space-evenly",
    }),
    []
  );

  return {
    container,
    content,
    scrollContent,
    buttonContent,
  };
};
