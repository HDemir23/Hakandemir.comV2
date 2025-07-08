import React from "react";
import { DimensionValue, View, ViewStyle } from "react-native";
import { useDividerStyle } from "./divider.style";

type DividerProps = {
  height?: number;
  width?: DimensionValue;
  color?: string;
  marginVertical?: number;
  marginHorizontal?: number;
  style?: ViewStyle;
};

const Divider: React.FC<DividerProps> = ({
  height = 1,
  width = "100%",
  color,
  marginVertical = 16,
  marginHorizontal = 0,
  style,
}) => {
  const styles = useDividerStyle({
    height,
    width,
    color,
    marginVertical,
    marginHorizontal,
  });

  return <View style={[styles.divider, style]} />;
};

export default React.memo(Divider);
