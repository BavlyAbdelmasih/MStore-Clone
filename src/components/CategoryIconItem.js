import React, { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Easing,
  Text,
} from "react-native";
import Styles from "../config/Styles";
import useSizeAnimation from "../hooks/useSizeAnimation";

const CategoryIconItem = ({ color, image, name }) => {
  const { animationStyle, handleAnimation } = useSizeAnimation(() => {
    console.log("hello");
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleAnimation(1);
      }}
    >
      <Animated.View style={[styles.container, animationStyle.transform]}>
        <Animated.View
          style={[styles.iconContainer, { backgroundColor: color }]}
        >
          <Image source={image} style={styles.image} />
        </Animated.View>
        <Text style={styles.text}>{name}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryIconItem;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  container: {
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 26,
    marginTop: 35,
    marginBottom: 35,
    marginLeft: 10,
  },
  image: {
    width: 20,
    height: 20,
    opacity: 1,
  },
  text: {
    paddingVertical: 10,
    fontSize: Styles.FontSizes.tiny,
  },
});
