import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

interface MailStyleProps {
  container: ViewStyle;
  inputContainer: ViewStyle;
  textInput: TextStyle;
  textInputFocused: TextStyle;
  messageInput: TextStyle;
  buttonContainer: ViewStyle;
  loadingContainer: ViewStyle;
  spacer: ViewStyle;
  placeholderTextColor: string;
  buttonTextColor: string;
  activityIndicatorColor: string;
}

export const useMailStyle = (): MailStyleProps => {
  const theme = GitHubDarkTheme;

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      marginHorizontal: 20,
    }),
    []
  );

  const inputContainer: ViewStyle = useMemo(
    () => ({
      width: "90%",
      marginBottom: 12,
    }),
    []
  );

  const textInput: TextStyle = useMemo(
    () => ({
      borderWidth: 1,
      borderRadius: 12,
      padding: 16,
      fontSize: 16,
      color: theme.colors.inputText,
      borderColor: theme.colors.inputBorder,
      backgroundColor: theme.colors.inputBackground,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    }),
    [theme]
  );

  const textInputFocused: TextStyle = useMemo(
    () => ({
      borderColor: theme.colors.inputFocusBorder,
      borderWidth: 2,
      shadowOpacity: 0.2,
      elevation: 4,
    }),
    [theme]
  );

  const messageInput: TextStyle = useMemo(
    () => ({
      ...textInput,
      minHeight: 120,
      textAlignVertical: "top",
      paddingTop: 16,
    }),
    [textInput]
  );

  const buttonContainer: ViewStyle = useMemo(
    () => ({
      width: "90%",
      marginTop: 16,
      borderRadius: 12,
      backgroundColor: theme.colors.buttonBackground,
      overflow: "hidden",
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5,
    }),
    [theme]
  );

  const loadingContainer: ViewStyle = useMemo(
    () => ({
      width: "90%",
      paddingVertical: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.cardBackground,
      borderRadius: 12,
      marginTop: 16,
    }),
    [theme]
  );

  const spacer: ViewStyle = useMemo(
    () => ({
      height: 16,
    }),
    []
  );

  const placeholderTextColor: string = useMemo(
    () => theme.colors.inputPlaceholder,
    [theme]
  );

  const buttonTextColor: string = useMemo(
    () => theme.colors.buttonText,
    [theme]
  );

  const activityIndicatorColor: string = useMemo(
    () => theme.colors.buttonBackground,
    [theme]
  );

  return {
    container,
    inputContainer,
    textInput,
    textInputFocused,
    messageInput,
    buttonContainer,
    loadingContainer,
    spacer,
    placeholderTextColor,
    buttonTextColor,
    activityIndicatorColor,
  };
};
