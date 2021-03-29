import React from "react";
import { useFormikContext } from "formik";

import colors from "../../config/Colors";
import { Button } from "react-native";

function LoginSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button title={title} color={colors.secondary} onPress={handleSubmit} />
  );
}

export default LoginSubmitButton;
