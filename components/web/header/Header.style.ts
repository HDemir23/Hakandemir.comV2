import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import {
  ImageStyle,
  TextStyle,
  useWindowDimensions,
  ViewStyle,
} from "react-native";

export const useHeaderStyle = () => {
  const theme = GitHubDarkTheme;
  const { width, height } = useWindowDimensions();

  const isMobile = width >= 320 && width <= 768;
  const isLarge = width >= 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const container: ViewStyle = useMemo(
    () => ({
      paddingBottom: 25,
    }),
    [theme]
  );

  const content: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    }),
    [theme]
  );

  const image: ImageStyle = useMemo(
    () => ({
      width: isMobile ? 70 : 110,
      height: isMobile ? 70 : 110,
      borderRadius: 90,
      // Smooth transition for image changes
      transition: "all 0.3s ease",
    }),
    [isMobile]
  );

  const ImageBorder: ViewStyle = useMemo(
    () => ({
      width: isMobile ? 80 : 120,
      height: isMobile ? 80 : 120,
      borderRadius: 60,
      backgroundColor: theme.colors.border,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 15,
      // Smooth transition for border changes
      transition: "all 0.3s ease",
    }),
    [theme, isMobile]
  );

  const Title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: isMobile ? 25 : 40,
      fontWeight: "bold",
      // Smooth transition for text changes
      transition: "color 0.3s ease",
    }),
    [theme, isMobile]
  );

  const Text: TextStyle = useMemo(
    () => ({
      color: theme.colors.buttonBackground,
      fontSize: 14,
      fontWeight: "bold",
      // Smooth transition for text changes
      transition: "color 0.3s ease",
    }),
    [theme]
  );

  return {
    container,
    content,
    image,
    ImageBorder,
    Text,
    Title,
  };
};
