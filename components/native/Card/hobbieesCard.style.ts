import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const useHobbiesCardStyle = () => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.background,
      flexDirection: "row", // yatayda dizilecek
    }),
    [theme]
  );

  const card: ViewStyle = useMemo(
    () => ({
      width: 250, // sabit genişlik veriyoruz
      marginRight: 16,
      padding: 16,
      borderRadius: 12,
      backgroundColor: theme.colors.cardBackground,
      shadowColor: theme.colors.shadow,
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    }),
    [theme]
  );

  const image: ImageStyle = useMemo(
    () => ({
      width: "100%",
      height: 250,
      borderRadius: 8,
      marginBottom: 12,
    }),
    []
  );

  const title: TextStyle = useMemo(
    () => ({
      color: theme.colors.title,
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 6,
    }),
    [theme]
  );

  const text: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: 13,
      lineHeight: 18,
    }),
    [theme]
  );

  const button: ViewStyle = useMemo(
    () => ({
      marginTop: 12,
      backgroundColor: theme.colors.buttonBackground,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      alignSelf: "flex-start",
    }),
    [theme]
  );

  const buttonText: TextStyle = useMemo(
    () => ({
      color: theme.colors.buttonText,
      fontSize: 14,
      fontWeight: "bold",
    }),
    [theme]
  );

  return {
    container,
    card,
    image,
    title,
    text,
    button,
    buttonText,
  };
};
