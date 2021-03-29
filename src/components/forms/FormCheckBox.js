import { useFormikContext } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import Text from "../Text";
import colors from "../../config/Colors";

const FormCheckBox = ({ name, title, text }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { setFieldValue } = useFormikContext();

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => {
          setToggleCheckBox(newValue);
          setFieldValue(name, newValue);
        }}
        accessibilityLabel={title}
        onFillColor={colors.secondary}
      />

      <Text style={{ color: colors.black, padding: 5 }}> {text} </Text>
    </View>
  );
};

export default FormCheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 7,
    backgroundColor: colors.white,
    borderRadius: 35,
  },
});
