import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, useWindowDimensions, ViewStyle } from "react-native";

export const usePlainText = () => {
  const theme = GitHubDarkTheme;
  const { width } = useWindowDimensions();

  // Responsive breakpoints - webLayout.style.ts ile uyumlu
  const isMobile = width < 524;
  //  const isMedium = width >= 524;
  const isTablet = width >= 768 && width < 1024;
  // const isDesktop = width >= 1024;

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      marginTop: 10,
      paddingVertical: isMobile ? 15 : isTablet ? 20 : 25,
      paddingHorizontal: isMobile ? 10 : 15,
      backgroundColor: "transparent",
    }),
    [isMobile, isTablet]
  );

  const content: ViewStyle = useMemo(
    () => ({
      width: "100%",
      gap: isMobile ? 12 : 16,
    }),
    [isMobile]
  );
  const title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
      marginLeft: 5,
    }),
    [theme]
  );
  const textContainer: ViewStyle = useMemo(
    () => ({
      backgroundColor: `rgba(22, 27, 34, ${theme.transparency.high})`,
      borderRadius: isMobile ? 12 : 16,
      padding: isMobile ? 12 : isTablet ? 16 : 20,
      marginVertical: isMobile ? 6 : 8,
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.buttonBackground,

      // Subtle shadow for depth
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
      // Web specific backdrop blur effect
      backdropFilter: "blur(10px)",
    }),
    [theme, isMobile, isTablet]
  );

  const text: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: isMobile ? 14 : isTablet ? 15 : 16,
      lineHeight: isMobile ? 22 : isTablet ? 24 : 26,
      fontWeight: "400",
      opacity: 0.8,
    }),
    [theme, isMobile, isTablet]
  );

  return {
    container,
    content,
    textContainer,
    text,
    title,
  };
};
