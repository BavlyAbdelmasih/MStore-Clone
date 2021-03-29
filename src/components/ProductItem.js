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
import colors from "../config/Colors";
import Styles from "../config/Styles";
import useSizeAnimation from "../hooks/useSizeAnimation";
// import Text from "../components/Text";

const ProductItem = ({
  image,
  title,
  price,
  width = 225,
  height = 300,
  rounding = 10,
  rating,
  showDownTitle = false,
  showRating = true,
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
            width: width,
            height: height,
            resizeMode: "cover",
            borderRadius: rounding,
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 1,
            height: "20%",
            width: "100%",
            backgroundColor: colors.white,
            opacity: 0.25,
            overflow: "hidden",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        ></View>

        {!showDownTitle ? (
          <View style={[styles.textContainer, { width: width }]}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.price} numberOfLines={2}>
              {price}$
            </Text>
          </View>
        ) : (
          <View style={{ width: width, alignItems: "center" }}>
            <Text style={styles.downTitle} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.downPrice} numberOfLines={2}>
              {price}$
            </Text>
          </View>
        )}

        {showRating && (
          <Rating
            imageSize={15}
            readonly
            startingValue={rating}
            style={styles.rating}
          />
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ProductItem;

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
  downTitle: {
    fontSize: Styles.FontSizes.small,
    lineHeight: 20,
    textAlign: "center",
  },
  downPrice: {
    fontSize: Styles.FontSizes.small,
  },
  container: {
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 40,
  },
  rating: {
    paddingTop: 5,
  },
});
