import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Picker from "../components/Picker";
import Styles from "../config/Styles";
import { Rating } from "react-native-ratings";
import CustomTabView from "../containers/CustomTabView";
import PoductItemBottomBar from "../components/PoductItemBottomBar";
import { Animated } from "react-native";
import * as actions from "../redux/actions/cartActions";
import { connect } from "react-redux";
import { log } from "react-native-reanimated";
import colors from "../config/Colors";

const ItemDetailsScreen = ({ route, addItemToCart }) => {
  const item = route.params;
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Animated.Image
            style={{
              marginTop: 10,
              height: 400,
              width: 260,

              resizeMode: "stretch",
            }}
            source={{ uri: item.image }}
          />
        </View>
        {item.sizes.length > 0 && (
          <Picker
            options={item.sizes}
            title="SIZE"
            borderColor={colors.medium}
          />
        )}
        {item.heights.length > 0 && (
          <Picker
            options={item.heights}
            title="LENGTH"
            borderColor={colors.medium}
          />
        )}
        <View style={[styles.textContainer]}>
          <Text style={styles.title} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.price} numberOfLines={2}>
            {item.price.toString()}$
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating
            imageSize={20}
            readonly
            startingValue={item.rating}
            style={styles.rating}
          />
          <Text>({item.numReviews.toString()}) Reviews</Text>
        </View>
        <CustomTabView />
      </ScrollView>
      <PoductItemBottomBar
        countInStock={item.countInStock}
        onPress={() => {
          addItemToCart(item);
        }}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(actions.addToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(ItemDetailsScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  title: {
    paddingLeft: 10,
    paddingRight: 20,

    fontSize: Styles.FontSizes.large,
    textAlign: "center",
  },
  price: {
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: Styles.FontSizes.medium,
    textAlign: "center",
  },
  rating: {
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});
