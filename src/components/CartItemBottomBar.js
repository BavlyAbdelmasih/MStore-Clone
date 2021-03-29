import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/Colors";
import Styles from "../config/Styles";
import { TouchableOpacity } from "react-native";

function CartItemBottomBar({
  leftButtonText,
  righButtonText,
  onClickBack,
  onClickNext,
}) {
  return (
    <View
      style={{
        width: "100%",
        height: 35,
        flexDirection: "row",
        backgroundColor: colors.white,
      }}
    >
      <TouchableOpacity style={styles.backContainer} onPress={onClickBack}>
        <Text style={styles.backText}>{leftButtonText}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextContainer} onPress={onClickNext}>
        <Text style={styles.buyText}>{righButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartItemBottomBar;

const styles = StyleSheet.create({
  buyText: {
    fontSize: Styles.FontSizes.medium,
    color: colors.white,
    alignSelf: "center",
  },
  backText: {
    fontSize: Styles.FontSizes.medium,
    color: colors.medium,
    alignSelf: "center",
  },
  backContainer: {
    backgroundColor: colors.light,
    width: "50%",
    justifyContent: "center",
    paddingLeft: 15,
  },
  nextContainer: {
    backgroundColor: colors.secondary,
    width: "50%",
    justifyContent: "center",
    paddingLeft: 15,
  },
});
