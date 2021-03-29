import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { View } from "react-native";
import DeliveryTextInput from "../DeliveryTextInput";

function AppFormField({ name, he = 40, label, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
  } = useFormikContext();

  return (
    <View style={[{ width: "100%" }]}>
      <DeliveryTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        height={he}
        title={label}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormField;
