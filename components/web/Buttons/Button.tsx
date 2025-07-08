import React, { useCallback, useMemo, useState } from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";
import { useButtonStyle } from "./Button.style";

type ButtonProps = {
  onPress: () => void;
  text: string;
  variant?: "primary" | "secondary" | "disabled";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ComponentType<{ size?: number }>;
  iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
  icon: Icon,
  iconPosition = "left",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const styles = useButtonStyle({
    variant,
    size,
    disabled,
    isHovered,
    isPressed,
  });

  // Memoize icon size calculation
  const iconSize = useMemo(() => {
    return size === "small" ? 16 : size === "medium" ? 20 : 24;
  }, [size]);

  // Memoize event handlers
  const handlePress = useCallback(() => {
    if (!disabled) {
      onPress();
    }
  }, [disabled, onPress]);

  const handlePressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handlePressOut = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handlePointerMove = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Memoize combined styles
  const buttonStyle = useMemo(
    () => [styles.button, style],
    [styles.button, style]
  );
  const combinedTextStyle = useMemo(
    () => [styles.text, textStyle],
    [styles.text, textStyle]
  );

  // Memoize content rendering
  const renderContent = useCallback(() => {
    if (!Icon) {
      return <Text style={combinedTextStyle}>{text}</Text>;
    }

    return (
      <>
        {iconPosition === "left" && Icon && <Icon size={iconSize} />}
        <Text style={combinedTextStyle}>{text}</Text>
        {iconPosition === "right" && Icon && <Icon size={iconSize} />}
      </>
    );
  }, [Icon, iconPosition, iconSize, combinedTextStyle, text]);

  return (
    <Pressable
      style={buttonStyle}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      disabled={disabled}
    >
      {renderContent()}
    </Pressable>
  );
};

export default React.memo(Button);
