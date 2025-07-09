import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import {
  ImageStyle,
  TextStyle,
  useWindowDimensions,
  ViewStyle,
} from "react-native";

export const useHobbiesCardStyle = () => {
  const theme = GitHubDarkTheme;
  const { width } = useWindowDimensions();

  // Responsive breakpoints - webLayout.style.ts ile uyumlu
  const breakpoints = useMemo(
    () => ({
      isMobile: width < 524,
      isMedium: width >= 524,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
    }),
    [width]
  );

  const container: ViewStyle = useMemo(
    () => ({
      paddingHorizontal: breakpoints.isMobile ? 8 : 12,
      paddingVertical: breakpoints.isMobile ? 8 : 12,
      backgroundColor: "transparent",
      // Container height'ı sınırlandırıyoruz
      maxHeight: breakpoints.isMobile ? 320 : breakpoints.isTablet ? 360 : 400,
      minHeight: breakpoints.isMobile ? 280 : breakpoints.isTablet ? 320 : 360,
    }),
    [breakpoints]
  );

  const card: ViewStyle = useMemo(
    () => ({
      width: breakpoints.isMobile ? 200 : breakpoints.isTablet ? 220 : 240,
      height: breakpoints.isMobile ? 300 : breakpoints.isTablet ? 340 : 380,
      marginRight: breakpoints.isMobile ? 10 : 14,
      padding: breakpoints.isMobile ? 10 : breakpoints.isTablet ? 12 : 14,
      borderRadius: breakpoints.isMobile ? 10 : 14,
      backgroundColor: `rgba(22, 27, 34, ${theme.transparency.medium})`,
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 4,
      backdropFilter: "blur(8px)",
      borderWidth: 1,
      borderColor: `rgba(48, 54, 61, ${theme.transparency.low})`,
      // Flex layout for content distribution
      justifyContent: "space-between",
    }),
    [theme, breakpoints]
  );

  const headtitle: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
      marginLeft: 15,
    }),
    [theme]
  );

  const image: ImageStyle = useMemo(
    () => ({
      width: "100%",
      height: breakpoints.isMobile ? 160 : breakpoints.isTablet ? 200 : 220,
      borderRadius: breakpoints.isMobile ? 6 : 8,
      marginBottom: breakpoints.isMobile ? 8 : 10,
      resizeMode: "cover",
    }),
    [breakpoints]
  );

  const contentContainer: ViewStyle = useMemo(
    () => ({
      flex: 1,
      justifyContent: "space-between",
    }),
    []
  );

  const textContainer: ViewStyle = useMemo(
    () => ({
      flex: 1,
      marginBottom: breakpoints.isMobile ? 8 : 10,
    }),
    [breakpoints]
  );

  const title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: breakpoints.isMobile ? 14 : breakpoints.isTablet ? 15 : 16,
      fontWeight: "bold",
      marginBottom: 4,
      opacity: 0.9,
    }),
    [theme, breakpoints]
  );

  const text: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: breakpoints.isMobile ? 11 : breakpoints.isTablet ? 12 : 13,
      lineHeight: breakpoints.isMobile ? 14 : breakpoints.isTablet ? 15 : 16,
      opacity: 0.8,
    }),
    [theme, breakpoints]
  );

  const button: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.buttonBackground,
      paddingHorizontal: breakpoints.isMobile ? 10 : 12,
      paddingVertical: breakpoints.isMobile ? 5 : 6,
      borderRadius: breakpoints.isMobile ? 5 : 6,
      alignSelf: "flex-start",
      shadowColor: theme.colors.buttonBackground,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
    }),
    [theme, breakpoints]
  );

  const buttonText: TextStyle = useMemo(
    () => ({
      color: theme.colors.buttonText,
      fontSize: breakpoints.isMobile ? 11 : 12,
      fontWeight: "bold",
    }),
    [theme, breakpoints]
  );

  return {
    container,
    card,
    image,
    contentContainer,
    textContainer,
    title,
    text,
    button,
    buttonText,
    headtitle,
  };
};
