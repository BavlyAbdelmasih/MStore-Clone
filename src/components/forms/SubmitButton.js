import React from "react";
import { useFormikContext } from "formik";
import { Button, View } from "react-native";
import colors from "../../config/Colors";

function SubmitButton({ title, onPressNext, onPressBack }) {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 0.5 }}>
        <Button
          title="Back"
          color={colors.light}
          onPress={onPressBack}
          titleStyle={{
            color: colors.medium,
          }}
        />
      </View>
      <View style={{ flex: 0.5 }}>
        <Button title="Next" color={colors.secondary} onPress={handleSubmit} />
      </View>
    </View>
  );
}

export default SubmitButton;
