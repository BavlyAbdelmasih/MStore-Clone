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

const AdminProductItem = ({
  image,
  title,
  price,
  width = 200,
  height = 100,
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

        {!showDownTitle ? (
          <View
            style={[
              styles.textContainer,
              { width: width, alignSelf: "flex-start" },
            ]}
          >
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.price} numberOfLines={2}>
              {price}$
            </Text>
          </View>
        ) : (
          <View
            style={{ width: width, alignItems: "flex-start", marginLeft: 10 }}
          >
            <Text style={styles.downTitle} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.downPrice} numberOfLines={2}>
              {price}$
            </Text>
            <Rating
              imageSize={15}
              readonly
              startingValue={rating}
              style={styles.rating}
            />
          </View>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AdminProductItem;

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
    textAlign: "left",
  },
  downPrice: {
    fontSize: Styles.FontSizes.small,
  },
  container: {
    marginBottom: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rating: {
    paddingTop: 5,
  },
});
