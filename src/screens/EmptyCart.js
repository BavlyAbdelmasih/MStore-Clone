import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import colors from "../config/Colors";
import Styles from "../config/Styles";

const EmptyCart = ({ onPress }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        height: "100%",
        width: "100%",
      }}
    >
      <MaterialCommunityIcons
        name="cart-outline"
        color={colors.dark}
        size={80}
      />
      <Text
        style={{
          fontSize: Styles.FontSizes.large,
          fontWeight: "bold",
          marginTop: 20,
          letterSpacing: 2,
        }}
      >
        Your Cart is Empty
      </Text>
      <Text
        style={{
          fontSize: Styles.FontSizes.small,
          marginTop: 20,
          letterSpacing: 2,
          marginBottom: 100,
        }}
      >
        Add product to the Shopping cart
      </Text>
      <View style={{ width: "75%" }}>
        <Button title="SHOP NOW" color={colors.secondary} onPress={onPress} />
      </View>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({});
