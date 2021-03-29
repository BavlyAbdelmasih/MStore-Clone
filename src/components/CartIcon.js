import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/Colors";
import Styles from "../config/Styles";
import { connect } from "react-redux";

const CartIcon = ({ color, name, cartItems }) => {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <MaterialCommunityIcons name={name} size={22} color={color} />

      {cartItems.length > 0 && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{cartItems.length}</Text>
        </View>
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps, null)(CartIcon);

const styles = StyleSheet.create({
  text: {
    fontSize: Styles.FontSizes.tiny,
    color: colors.white,
  },
  textContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: colors.danger,
    position: "absolute",
    right: 1,
    top: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
