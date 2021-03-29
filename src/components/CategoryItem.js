import React from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Rating } from "react-native-elements";
import Styles from "../config/Styles";
import useSizeAnimation from "../hooks/useSizeAnimation";
// import Text from "../components/Text";

const CategoryItem = ({
  image,
  // title,
  onPress,
}) => {
  const { handleAnimation, animationStyle } = useSizeAnimation(() => {
    console.log("test");
    onPress();
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleAnimation();
      }}
    >
      <Animated.View style={[styles.container, animationStyle]}>
        <Animated.Image
          style={{
            width: "100%",
            height: 150,
            resizeMode: "cover",
            borderRadius: 2,
            borderRadius: 15,
          }}
          source={image}
        />

        {/* <View style={[styles.textContainer, { width: width }]}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View> */}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  textContainer: { position: "absolute", bottom: 10 },
  title: {
    paddingLeft: 10,
    paddingRight: 20,

    fontSize: Styles.FontSizes.medium,
  },
  price: {
    paddingLeft: 10,
    fontSize: Styles.FontSizes.small,
  },
  container: {
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 40,
    marginTop: 10,
  },
});
