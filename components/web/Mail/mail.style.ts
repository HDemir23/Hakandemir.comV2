import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { TextStyle, ViewStyle, useWindowDimensions } from "react-native";

interface MailStyleProps {
  container: ViewStyle;
  contentContainer: ViewStyle;
  inputContainer: ViewStyle;
  textInput: TextStyle;
  textInputFocused: TextStyle;
  messageInput: TextStyle;
  buttonContainer: ViewStyle;
  loadingContainer: ViewStyle;
  spacer: ViewStyle;
  title: TextStyle;
  placeholderTextColor: string;
  buttonTextColor: string;
  activityIndicatorColor: string;
}

export const useMailStyle = (): MailStyleProps => {
  const theme = GitHubDarkTheme;
  const { width, height } = useWindowDimensions();

  // Responsive breakpoints
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  // Responsive dimensions
  const containerWidth = useMemo(() => {
    if (isMobile) return "95%";
    if (isTablet) return "80%";
    return "80%";
  }, [isMobile, isTablet]);

  const maxWidth = useMemo(() => {
    if (isMobile) return 400;
    if (isTablet) return 600;
    return 800;
  }, [isMobile, isTablet]);

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: isMobile ? 16 : 24,
      paddingVertical: 20,
      minHeight: height * 0.55,
    }),
    [isMobile, height]
  );

  const contentContainer: ViewStyle = useMemo(
    () => ({
      width: containerWidth,
      maxWidth,
      backgroundColor: theme.colors.cardBackground,
      borderRadius: isMobile ? 16 : 24,
      padding: isMobile ? 20 : 32,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
      borderWidth: 1,
      borderColor: theme.colors.border,
      // Semi-transparent to show galaxy background
      opacity: 0.95,
    }),
    [containerWidth, maxWidth, theme, isMobile]
  );

  const title: TextStyle = useMemo(
    () => ({
      fontSize: isMobile ? 24 : 28,
      fontWeight: "bold",
      color: theme.colors.title,
      textAlign: "center",
      marginBottom: isMobile ? 24 : 32,
      letterSpacing: 0.5,
    }),
    [theme, isMobile]
  );

  const inputContainer: ViewStyle = useMemo(
    () => ({
      width: "100%",
      marginBottom: isMobile ? 16 : 20,
    }),
    [isMobile]
  );

  const textInput: TextStyle = useMemo(
    () => ({
      borderWidth: 1,
      borderRadius: isMobile ? 12 : 16,
      padding: isMobile ? 14 : 18,
      fontSize: isMobile ? 16 : 18,
      color: theme.colors.inputText,
      borderColor: theme.colors.inputBorder,
      backgroundColor: theme.colors.inputBackground,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      fontFamily: "system",
      // Semi-transparent input background
      opacity: 0.9,
    }),
    [theme, isMobile]
  );

  const textInputFocused: TextStyle = useMemo(
    () => ({
      borderColor: theme.colors.inputFocusBorder,
      borderWidth: 2,
      shadowOpacity: 0.2,
      elevation: 4,
      shadowRadius: 8,
      opacity: 1,
    }),
    [theme]
  );

  const messageInput: TextStyle = useMemo(
    () => ({
      ...textInput,
      minHeight: isMobile ? 120 : 140,
      maxHeight: isMobile ? 200 : 240,
      textAlignVertical: "top",
      paddingTop: isMobile ? 14 : 18,
    }),
    [textInput, isMobile]
  );

  const buttonContainer: ViewStyle = useMemo(
    () => ({
      width: "100%",
      marginTop: isMobile ? 20 : 24,
      borderRadius: isMobile ? 12 : 16,
      backgroundColor: theme.colors.buttonBackground,
      overflow: "hidden",
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 6,
      minHeight: isMobile ? 48 : 56,
      justifyContent: "center",
    }),
    [theme, isMobile]
  );

  const loadingContainer: ViewStyle = useMemo(
    () => ({
      width: "100%",
      paddingVertical: isMobile ? 16 : 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.cardBackground,
      borderRadius: isMobile ? 12 : 16,
      marginTop: isMobile ? 20 : 24,
      borderWidth: 1,
      borderColor: theme.colors.border,
      minHeight: isMobile ? 48 : 56,
      opacity: 0.9,
    }),
    [theme, isMobile]
  );

  const spacer: ViewStyle = useMemo(
    () => ({
      height: isMobile ? 12 : 16,
    }),
    [isMobile]
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
    contentContainer,
    inputContainer,
    textInput,
    textInputFocused,
    messageInput,
    buttonContainer,
    loadingContainer,
    spacer,
    title,
    placeholderTextColor,
    buttonTextColor,
    activityIndicatorColor,
  };
};
