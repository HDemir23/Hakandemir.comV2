import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Platform,
  StyleSheet,
  View,
} from "react-native";

type Props = {
  numberOfStars?: number;
  numberOfRings?: number;
  children?: React.ReactNode;
};

// Constants moved outside component to prevent recreation
const COLOR_VARIATIONS = [
  "rgba(255, 255, 255, 1)", // White
  "rgba(255, 248, 220, 1)", // Light yellow
  "rgba(173, 216, 230, 1)", // Light blue
  "rgba(255, 182, 193, 1)", // Light pink
] as const;

const ANIMATION_DURATION = 120000;
const SPIRAL_FACTOR_BASE = 0.7;
const RADIUS_VARIATION_FACTOR = 0.4;
const ANGLE_VARIATION_FACTOR = 0.3;
const OPACITY_VARIATION_FACTOR = 0.1;

// Pre-calculated values for better performance
const PI_2 = Math.PI * 2;

const GalaxyBg = ({
  numberOfStars = 150,
  numberOfRings = 4,
  children,
}: Props) => {
  const { width, height } = Dimensions.get("window");
  const rotation = useRef(new Animated.Value(0)).current;

  // Memoized screen dimensions and center calculations
  const screenDimensions = useMemo(
    () => ({
      width,
      height,
      centerX: width / 2,
      centerY: height / 2,
      maxRadius: Math.min(width, height) * 0.35,
      minRadius: Math.min(width, height) * 0.35 * 0.15,
    }),
    [width, height]
  );

  // Memoized platform-specific styles
  const platformStyles = useMemo(
    () => ({
      isWeb: Platform.OS === "web",
      shadowProps:
        Platform.OS === "web" ? {} : { shadowOpacity: 0.8, elevation: 2 },
    }),
    []
  );

  // Animation setup with useCallback for performance
  const startAnimation = useCallback(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  // Rotation interpolation memoized
  const rotate = useMemo(
    () =>
      rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      }),
    [rotation]
  );

  // Pre-calculate ring radii for performance
  const ringRadii = useMemo(() => {
    const radii = [];
    const { maxRadius, minRadius } = screenDimensions;
    for (let i = 0; i < numberOfRings; i++) {
      radii.push(minRadius + (maxRadius - minRadius) * (i / numberOfRings));
    }
    return radii;
  }, [numberOfRings, screenDimensions]);

  // Pre-calculate stars per ring
  const starsPerRing = useMemo(() => {
    const baseStarsPerRing = Math.floor(numberOfStars / numberOfRings);
    const variationRange = baseStarsPerRing * 0.3;
    return Array.from(
      { length: numberOfRings },
      () => baseStarsPerRing + Math.floor(Math.random() * variationRange)
    );
  }, [numberOfStars, numberOfRings]);

  // Optimized star creation function
  const createStar = useCallback(
    (
      key: string,
      x: number,
      y: number,
      size: number,
      opacity: number,
      color: string
    ) => {
      const baseStyle = {
        position: "absolute" as const,
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        opacity,
      };

      const webStyle = platformStyles.isWeb
        ? { boxShadow: `0 0 ${size * 2}px ${color}` }
        : { shadowColor: color, ...platformStyles.shadowProps };

      return <View key={key} style={[baseStyle, webStyle]} />;
    },
    [platformStyles]
  );

  // Galaxy ring generator function - heavily optimized
  const generateGalaxyRing = useCallback(
    (ringIndex: number, starsInRing: number) => {
      const { maxRadius } = screenDimensions;
      const ringRadius = ringRadii[ringIndex];
      const ringStars = [];
      const baseOpacity = 0.9 - (ringIndex / numberOfRings) * 0.3;
      const spiralOffset = ringIndex * 0.5;
      const spiralFactor = 1 + ringIndex * SPIRAL_FACTOR_BASE;

      // Pre-calculate common values
      const angleStep = PI_2 / starsInRing;
      const radiusVariationRange = ringRadius * RADIUS_VARIATION_FACTOR;
      const sizeVariationBase = 3 - (ringIndex / numberOfRings) * 1.5;

      for (let i = 0; i < starsInRing; i++) {
        // Optimized angle calculation
        const baseAngle = i * angleStep + spiralOffset;
        const actualAngle = baseAngle * spiralFactor;
        const angleVariation =
          actualAngle + (Math.random() - 0.5) * ANGLE_VARIATION_FACTOR;

        // Optimized radius calculation
        const radiusVariation =
          ringRadius + (Math.random() - 0.5) * radiusVariationRange;

        // Optimized position calculation
        const relativeX = Math.cos(angleVariation) * radiusVariation;
        const relativeY = Math.sin(angleVariation) * radiusVariation;

        // Optimized size calculation
        const distanceFromCenter = Math.sqrt(
          relativeX * relativeX + relativeY * relativeY
        );
        const normalizedDistance = distanceFromCenter / maxRadius;
        const size =
          Math.random() * (sizeVariationBase - normalizedDistance * 1.5) + 0.8;

        // Optimized opacity calculation
        const opacity = Math.max(
          0.3,
          baseOpacity + (Math.random() - 0.5) * OPACITY_VARIATION_FACTOR
        );

        // Optimized color selection
        const colorIndex = Math.floor(Math.random() * COLOR_VARIATIONS.length);
        const color = COLOR_VARIATIONS[colorIndex];

        ringStars.push(
          createStar(
            `ring-${ringIndex}-star-${i}`,
            relativeX,
            relativeY,
            size,
            opacity,
            color
          )
        );
      }
      return ringStars;
    },
    [screenDimensions, ringRadii, numberOfRings, createStar]
  );

  // Generate galaxy rings with memoization - optimized
  const galaxyRings = useMemo(() => {
    const rings = [];
    for (let ringIndex = 0; ringIndex < numberOfRings; ringIndex++) {
      rings.push(...generateGalaxyRing(ringIndex, starsPerRing[ringIndex]));
    }
    return rings;
  }, [numberOfRings, generateGalaxyRing, starsPerRing]);

  // Random background stars - heavily optimized
  const backgroundStars = useMemo(() => {
    const bgStars = [];
    const bgStarCount = Math.floor(numberOfStars * 0.4);
    const { width: screenWidth, height: screenHeight } = screenDimensions;

    // Batch create background stars
    for (let i = 0; i < bgStarCount; i++) {
      const x = Math.random() * screenWidth;
      const y = Math.random() * screenHeight;
      const size = Math.random() * 1.5 + 0.5;
      const opacity = Math.random() * 0.5 + 0.1;

      bgStars.push(createStar(`bg-star-${i}`, x, y, size, opacity, "white"));
    }
    return bgStars;
  }, [screenDimensions, numberOfStars, createStar]);

  // Galaxy center - optimized with memoization
  const galaxyCenter = useMemo(() => {
    const centerStyle = {
      position: "absolute" as const,
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      ...(platformStyles.isWeb && {
        boxShadow: "0 0 40px rgba(255, 255, 255, 0.8)",
      }),
      ...(!platformStyles.isWeb && {
        shadowColor: "white",
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
      }),
    };

    return <View style={centerStyle} />;
  }, [platformStyles]);

  // Galaxy dust rings - optimized
  const galaxyDustRings = useMemo(() => {
    const dustRings = [];
    const baseRadius =
      Math.min(screenDimensions.width, screenDimensions.height) * 0.08;

    for (let i = 0; i < 3; i++) {
      const radius = (i + 1) * baseRadius;
      const opacity = 0.1 - i * 0.02;
      const bgOpacity = 0.05 - i * 0.01;

      dustRings.push(
        <View
          key={`dust-ring-${i}`}
          style={{
            position: "absolute",
            left: -radius,
            top: -radius,
            width: radius * 2,
            height: radius * 2,
            borderRadius: radius,
            borderWidth: 1,
            borderColor: `rgba(255, 255, 255, ${opacity})`,
            backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          }}
        />
      );
    }
    return dustRings;
  }, [screenDimensions]);

  // Memoized center position
  const centerPosition = useMemo(
    () => ({
      left: screenDimensions.centerX,
      top: screenDimensions.centerY,
    }),
    [screenDimensions]
  );

  // Memoized rotating layer style
  const rotatingLayerStyle = useMemo(
    () => [styles.rotatingLayer, centerPosition, { transform: [{ rotate }] }],
    [centerPosition, rotate]
  );

  // Memoized galaxy center style
  const galaxyCenterStyle = useMemo(
    () => [styles.galaxyCenter, centerPosition],
    [centerPosition]
  );

  return (
    <View style={styles.root}>
      {/* Background stars (stationary) */}
      <View style={styles.backgroundLayer}>{backgroundStars}</View>

      {/* Galaxy center (stationary) */}
      <View style={galaxyCenterStyle}>
        {galaxyCenter}
        {galaxyDustRings}
      </View>

      {/* Rotating galaxy stars */}
      <Animated.View style={rotatingLayerStyle}>{galaxyRings}</Animated.View>

      {/* Content overlay */}
      <View style={StyleSheet.absoluteFill}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    backgroundColor: "#000814",
    overflow: "hidden",
  },
  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  galaxyCenter: {
    position: "absolute",
    zIndex: 1,
  },
  rotatingLayer: {
    position: "absolute",
    zIndex: 2,
  },
});

export default React.memo(GalaxyBg);
