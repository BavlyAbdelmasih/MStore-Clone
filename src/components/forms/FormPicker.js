import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder, borderColor }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        options={items}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        title={placeholder}
        borderColor={borderColor}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
