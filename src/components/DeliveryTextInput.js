import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Text } from "react-native";
import colors from "../config/Colors";
import Styles from "../config/Styles";

function DeliveryTextInput({ title, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container]}>
      {title && <Text style={styles.text}>{title}</Text>}

      <TextInput
        placeholderTextColor={"#888888"}
        style={{
          width: width,
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: "center",
          height: 45,
          borderColor: colors.medium,
          paddingLeft: 10,
        }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    justifyContent: "space-between",
  },
  text: {
    alignSelf: "center",
    fontSize: Styles.FontSizes.medium,
  },
});

export default DeliveryTextInput;
