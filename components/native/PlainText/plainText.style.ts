import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const usePlainText = () => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20,
    }),
    []
  );
  const WievStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      flex: 1,
    }),
    [theme]
  );

  const content: ViewStyle = useMemo(
    () => ({
      width: "90%",
    }),
    []
  );

  const textContainer: ViewStyle = useMemo(
    () => ({
      backgroundColor: `rgba(22, 27, 34, ${theme.transparency.high})`,
      borderRadius: 12,
      padding: 12,
      marginVertical: 6,
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.buttonBackground,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    }),
    [theme]
  );

  const text: TextStyle = useMemo(
    () => ({
      color: theme.colors.text,
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "400",
      opacity: 0.8,
    }),
    [theme]
  );


  return {
    container,
    content,
    text,
    textContainer,
    WievStyle,
  };
};
