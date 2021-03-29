import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Styles from "../config/Styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";

const PoductItemBottomBar = ({ countInStock, onPress }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        backgroundColor: colors.white,
      }}
    >
      <View style={{ padding: 10, flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="share-variant"
          size={22}
          color={colors.medium}
          style={styles.icon}
        />
        <MaterialCommunityIcons
          name="heart-outline"
          size={22}
          color={colors.medium}
          style={styles.icon}
        />
        <MaterialCommunityIcons
          name="cart-outline"
          size={22}
          color={colors.medium}
        />
      </View>

      {countInStock > 0 ? (
        <TouchableOpacity onPress={onPress} style={styles.buyContainer}>
          <Text style={styles.buyText}>BUY NOW</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.soldContainer}>
          <Text style={styles.buyText}>SOLD OUT</Text>
        </View>
      )}
    </View>
  );
};

export default PoductItemBottomBar;

const styles = StyleSheet.create({
  icon: {
    paddingRight: 40,
  },
  buyText: {
    fontSize: Styles.FontSizes.medium,
    color: colors.white,
    fontWeight: "bold",
  },
  buyContainer: {
    backgroundColor: colors.secondary,
    marginLeft: 15,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 15,
  },
  soldContainer: {
    backgroundColor: colors.danger,
    marginLeft: 15,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 15,
  },
});
