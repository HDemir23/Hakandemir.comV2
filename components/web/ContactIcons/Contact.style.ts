import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle, useWindowDimensions } from "react-native";

export const useContactStyle = () => {
  const theme = GitHubDarkTheme;
  const { width } = useWindowDimensions();

  // Responsive breakpoints
  const isMobile = width < 524;
  const isTablet = width >= 524 && width < 1024;
  const isDesktop = width >= 1024;

  const container: ViewStyle = useMemo(
    () => ({
      padding: isMobile ? 16 : isTablet ? 24 : 32,
      width: "100%",
      maxWidth: isDesktop ? 800 : "100%",
      alignSelf: "center",
    }),
    [isMobile, isTablet, isDesktop]
  );

  const gridContainer: ViewStyle = useMemo(
    () => ({
      flexDirection: isDesktop ? "row" : "column",
      flexWrap: isDesktop ? "wrap" : "nowrap",
      gap: isMobile ? 12 : isTablet ? 16 : 20,
      justifyContent: isDesktop ? "space-between" : "flex-start",
    }),
    [isMobile, isTablet, isDesktop]
  );

  const gridItem: ViewStyle = useMemo(
    () => ({
      flex: isDesktop ? 0 : 1,
      width: isDesktop ? "48%" : "100%",
      minWidth: isDesktop ? 320 : undefined,
    }),
    [isDesktop]
  );

  const contactItem: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      padding: isMobile ? 16 : isTablet ? 20 : 24,
      backgroundColor: `${theme.colors.cardBackground}${Math.round(
        theme.transparency.medium * 255
      )
        .toString(16)
        .padStart(2, "0")}`,
      borderRadius: isMobile ? 12 : isTablet ? 16 : 20,
      gap: isMobile ? 16 : isTablet ? 20 : 24,
      borderWidth: 1,
      borderColor: `${theme.colors.border}${Math.round(
        theme.transparency.high * 255
      )
        .toString(16)
        .padStart(2, "0")}`,
      minHeight: isMobile ? 64 : isTablet ? 72 : 80,
    }),
    [theme, isMobile, isTablet]
  );

  const contactItemHover: ViewStyle = useMemo(
    () => ({
      backgroundColor: `${theme.colors.hoverBackground}${Math.round(
        theme.transparency.medium * 255
      )
        .toString(16)
        .padStart(2, "0")}`,
      borderColor: `${theme.colors.buttonBackground}${Math.round(
        theme.transparency.low * 255
      )
        .toString(16)
        .padStart(2, "0")}`,
      transform: [{ scale: 1.02 }],
    }),
    [theme]
  );

  const iconContainer: ViewStyle = useMemo(
    () => ({
      width: isMobile ? 40 : isTablet ? 48 : 56,
      height: isMobile ? 40 : isTablet ? 48 : 56,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${theme.colors.background}${Math.round(
        theme.transparency.low * 255
      )
        .toString(16)
        .padStart(2, "0")}`,
      borderRadius: isMobile ? 8 : isTablet ? 12 : 16,
      borderWidth: 1,
      borderColor: `${theme.colors.border}${Math.round(
        theme.transparency.high * 255
      )
        .toString(16)
        .padStart(2, "0")}`,
    }),
    [theme, isMobile, isTablet]
  );

  const textContainer: ViewStyle = useMemo(
    () => ({
      flex: 1,
      justifyContent: "center",
    }),
    []
  );

  const titleText: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: isMobile ? 16 : isTablet ? 18 : 20,
      fontWeight: "600",
      lineHeight: isMobile ? 22 : isTablet ? 26 : 28,
      marginBottom: 4,
    }),
    [theme, isMobile, isTablet]
  );

  const subtitleText: TextStyle = useMemo(
    () => ({
      color: theme.colors.subtleText,
      fontSize: isMobile ? 14 : isTablet ? 15 : 16,
      lineHeight: isMobile ? 18 : isTablet ? 20 : 22,
      fontWeight: "400",
    }),
    [theme, isMobile, isTablet]
  );

  // Web-specific styles
  const webStyles = useMemo(
    () => ({
      contactItemWeb: {
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        userSelect: "none",
      } as any,
    }),
    []
  );

  return {
    container,
    gridContainer,
    gridItem,
    contactItem,
    contactItemHover,
    iconContainer,
    textContainer,
    titleText,
    subtitleText,
    webStyles,
    // Helper values
    isMobile,
    isTablet,
    isDesktop,
  };
};
