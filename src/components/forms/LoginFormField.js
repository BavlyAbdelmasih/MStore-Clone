import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { TextInput, View, StyleSheet } from "react-native";
import colors from "../../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LoginFormField({
  name,
  placeholder,
  keyboardType,
  iconName,
  ...otherProps
}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <View style={{ width: "100%", flexDirection: "column", marginBottom: 20 }}>
      <View style={styles.inputRow}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={30}
            color={colors.black}
          />
        )}

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          onChangeText={(text) => setFieldValue(name, text)}
          keyboardType={keyboardType}
          value={values[name]}
          placeholderTextColor={colors.medium}
          {...otherProps}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default LoginFormField;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  input: {
    height: 40,
    padding: 0,
    marginLeft: 15,
    borderColor: colors.light,
    borderBottomWidth: 2,
    flex: 1,
    textAlign: "left",
    color: "black",
  },
});
