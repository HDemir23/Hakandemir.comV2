import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import {
  Platform,
  TextStyle,
  useWindowDimensions,
  ViewStyle,
} from "react-native";

type ButtonStyleProps = {
  variant: "primary" | "secondary" | "disabled";
  size: "small" | "medium" | "large";
  disabled: boolean;
  isHovered: boolean;
  isPressed: boolean;
};

export const useButtonStyle = ({
  variant,
  size,
  disabled,
  isHovered,
  isPressed,
}: ButtonStyleProps) => {
  const theme = GitHubDarkTheme;
  const { width } = useWindowDimensions();

  // Memoize responsive breakpoints
  const { isMobile, isTablet } = useMemo(
    () => ({
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
    }),
    [width]
  );

  // Memoize size configurations
  const sizeConfig = useMemo(() => {
    const configs = {
      small: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 13,
        borderRadius: 8,
        height: 36,
        minWidth: isMobile ? 90 : 110,
        gap: 6,
      },
      medium: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 14,
        borderRadius: 10,
        height: 44,
        minWidth: isMobile ? 110 : 130,
        gap: 8,
      },
      large: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        fontSize: 15,
        borderRadius: 12,
        height: 52,
        minWidth: isMobile ? 130 : isTablet ? 150 : 170,
        gap: 10,
      },
    };
    return configs[size];
  }, [size, isMobile, isTablet]);

  // Memoize variant configurations - Updated to use your theme colors
  const variantConfig = useMemo(() => {
    const configs = {
      primary: {
        backgroundColor: theme.colors.buttonBackground, // Using your green button color
        textColor: theme.colors.buttonText, // Using your button text color
        borderColor: theme.colors.buttonBackground,
        borderWidth: 1,
        opacity: 1,
        hoverBackgroundColor: theme.colors.success, // Slightly different green for hover
        hoverTextColor: theme.colors.buttonText,
        hoverBorderColor: theme.colors.success,
      },
      secondary: {
        backgroundColor: "transparent",
        textColor: theme.colors.text, // Using your main text color
        borderColor: theme.colors.border, // Using your border color
        borderWidth: 1,
        opacity: theme.transparency.low, // Using your transparency values
        hoverBackgroundColor: theme.colors.hoverBackground, // Using your hover background
        hoverTextColor: theme.colors.title, // Using your title color for contrast
        hoverBorderColor: theme.colors.title,
      },
      disabled: {
        backgroundColor: theme.colors.buttonDisabledBackground, // Using your disabled colors
        textColor: theme.colors.buttonDisabledText,
        borderColor: theme.colors.buttonDisabledBackground,
        borderWidth: 1,
        opacity: theme.transparency.medium, // Using your transparency
        hoverBackgroundColor: theme.colors.buttonDisabledBackground,
        hoverTextColor: theme.colors.buttonDisabledText,
        hoverBorderColor: theme.colors.buttonDisabledBackground,
      },
    };
    return configs[disabled ? "disabled" : variant];
  }, [variant, disabled, theme]);

  // Memoize button style
  const button: ViewStyle = useMemo(() => {
    let opacity = variantConfig.opacity;
    let transform = [{ scale: 1 }];
    let backgroundColor = variantConfig.backgroundColor;
    let borderColor = variantConfig.borderColor;
    let shadowOpacity = 0;
    let elevation = 0;

    if (disabled) {
      opacity = theme.transparency.medium;
    } else if (isPressed) {
      opacity = theme.transparency.low;
      transform = [{ scale: 0.96 }];
      backgroundColor = variantConfig.hoverBackgroundColor;
      borderColor = variantConfig.hoverBorderColor;
      shadowOpacity = 0.15;
      elevation = 2;
    } else if (isHovered) {
      opacity = 1;
      transform = [{ scale: 1.02 }];
      backgroundColor = variantConfig.hoverBackgroundColor;
      borderColor = variantConfig.hoverBorderColor;
      shadowOpacity = 0.25;
      elevation = 6;
    }

    const baseStyle: ViewStyle = {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor,
      paddingHorizontal: sizeConfig.paddingHorizontal,
      paddingVertical: sizeConfig.paddingVertical,
      borderRadius: sizeConfig.borderRadius,
      borderWidth: variantConfig.borderWidth,
      borderColor,
      height: sizeConfig.height,
      minWidth: sizeConfig.minWidth,
      maxWidth: isMobile ? "100%" : undefined,
      gap: sizeConfig.gap,
      opacity,
      transform,
      shadowColor: theme.colors.shadow, // Using your shadow color
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity,
      shadowRadius: 6,
      elevation,
    };

    if (Platform.OS === "web") {
      return {
        ...baseStyle,
        // @ts-ignore - Web-specific styles
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        outline: "none",
      } as ViewStyle;
    }

    return baseStyle;
  }, [
    variantConfig,
    sizeConfig,
    disabled,
    isHovered,
    isPressed,
    theme,
    isMobile,
  ]);

  // Memoize text style
  const text: TextStyle = useMemo(() => {
    let color = variantConfig.textColor;
    let fontWeight: TextStyle["fontWeight"] = "500";

    if (!disabled && (isHovered || isPressed)) {
      color = variantConfig.hoverTextColor;
      fontWeight = "600";
    }

    const baseStyle: TextStyle = {
      color,
      fontSize: sizeConfig.fontSize,
      fontWeight,
      textAlign: "center",
      lineHeight: sizeConfig.fontSize * 1.2,
    };

    if (Platform.OS === "web") {
      return {
        ...baseStyle,
        // @ts-ignore - Web-specific styles
        transition: "color 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        userSelect: "none",
      } as TextStyle;
    }

    return baseStyle;
  }, [variantConfig, sizeConfig, isHovered, isPressed, disabled]);

  // Return memoized styles object
  return useMemo(
    () => ({
      button,
      text,
    }),
    [button, text]
  );
};
