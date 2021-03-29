import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Form from "../components/forms/Form";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import * as Yup from "yup";
import LoginSubmitButton from "../components/forms/LoginSubmitButton";
import FormImagePicker from "../components/forms/FormImagePicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormCheckBox from "../components/forms/FormCheckBox";
import AppFormPicker from "../components/forms/FormPicker";
import colors from "../config/Colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  brand: Yup.string().required().min(1).label("Brand"),
  description: Yup.string().label("Description"),
  price: Yup.number().min(0).max(10000).label("Price"),
  countInStock: Yup.number().min(0).max(10000).label("countInStock"),
  images: Yup.array().min(1, "Please select at least one image."),
  isFeatured: Yup.boolean().required().label("isFeatured"),
});
const EditProductScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Form
            initialValues={{
              name: "",
              brand: "",
              price: 0,
              countInStock: 0,
              description: "",
              isFeatured: false,
              category: null,
              images: [],
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validationSchema}
          >
            <FormImagePicker name="images" />
            <FormField maxLength={255} name="name" placeholder="Name" />
            <FormField maxLength={255} name="brand" placeholder="Brand" />
            <FormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <FormField
              keyboardType="numeric"
              maxLength={8}
              name="countInStock"
              placeholder="Count In Stock"
            />
            <FormCheckBox
              name="isFeatured"
              title="isFeatured"
              text=" Is this item Featured"
            />

            <AppFormPicker
              placeholder="Categories"
              name="category"
              items={["Men", "Women", "Bags", "Kids", "Unisex"]}
              borderColor={colors.medium}
            />
            <FormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              he={100}
              placeholder="Description"
            />
            <LoginSubmitButton title="ADD" color={colors.secondary} />
          </Form>
        </KeyboardAwareScrollView>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "flex-start",
  },
});
