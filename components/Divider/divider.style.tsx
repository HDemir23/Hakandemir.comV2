import { GitHubDarkTheme } from "@/constants/theme";
import { useMemo } from "react";
import { DimensionValue, ViewStyle } from "react-native";

type DividerStyleProps = {
  height: number;
  width: DimensionValue;
  color?: string;
  marginVertical: number;
  marginHorizontal: number;
};

export const useDividerStyle = ({
  height,
  width,
  color,
  marginVertical,
  marginHorizontal,
}: DividerStyleProps) => {
  const theme = GitHubDarkTheme;

  const divider: ViewStyle = useMemo(
    () => ({
      height,
      width,
      backgroundColor: color || theme.colors.border,
      marginVertical,
      marginHorizontal,
      borderRadius: height / 2,
      // shadow effect
      shadowColor: theme.colors.shadow || "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2, // Android için
    }),
    [height, width, color, marginVertical, marginHorizontal, theme]
  );

  return {
    divider,
  };
};
