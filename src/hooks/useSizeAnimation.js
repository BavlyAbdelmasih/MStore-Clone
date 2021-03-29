import React, { useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

const useSizeAnimation = (onPress) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animationDuration = 300;

  const handleAnimation = (value = 1) => {
    Animated.timing(fadeAnim, {
      toValue: value,
      duration: animationDuration,
      easing: Easing.ease,
      useNativeDriver: "true",
    }).start(() => {
      handleAnimation2();
    });
  };
  const handleAnimation2 = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.ease,
      useNativeDriver: "true",
    }).start(() => {
      onPress();
    });
  };

  const animationStyle = {
    transform: [
      {
        scaleX: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.8],
        }),
      },
      {
        scaleY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.9],
        }),
      },
    ],
  };

  return { fadeAnim, handleAnimation, animationStyle };
};

export default useSizeAnimation;
