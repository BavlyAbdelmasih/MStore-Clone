import React from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/Colors";
import Styles from "../config/Styles";

const CouponItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COUPON CODE:</Text>

      <View style={styles.row}>
        <TextInput
          placeholder="COUPON CODE"
          style={styles.textInput}
          textAlign="center"
        />
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text
              style={{ color: colors.white, fontSize: Styles.FontSizes.medium }}
            >
              Apply
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default CouponItem;

const styles = StyleSheet.create({
  title: {
    fontSize: Styles.FontSizes.medium,
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  button: {
    height: 50,
    width: 110,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 35,
    width: 150,
    backgroundColor: colors.light,
  },
  container: {
    marginBottom: 20,
  },
});
