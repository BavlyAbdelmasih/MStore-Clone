import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StepIndicator from "../components/StepIndicator";
import Form from "../components/forms/Form";

import FormField from "../components/forms/FormField";
import RadioButton from "../components/RadioButton";
import Styles from "../config/Styles";
import { ScrollView } from "react-native-gesture-handler";
import CartItemBottomBar from "../components/CartItemBottomBar";
import { connect } from "react-redux";
import SubmitButton from "../components/forms/SubmitButton";
import FormImagePicker from "../components/forms/FormImagePicker";

const DeliveryInfoScreen = (props) => {
  const [shippingMethod, setshippingMethod] = useState({});
  let cartItems = props.cartItems;

  return (
    <View style={styles.container}>
      <View>
        <StepIndicator position={1} />
      </View>

      <Form
        initialValues={{
          firstName: null,
        }}
        onSubmit={(values, { resetForm }) => {
          let order = {
            ...values,
            shippingMethod,
            cartItems,
          };

          resetForm();
          props.navigation.navigate("Payment", { order: order });
        }}
      >
        <ScrollView>
          <Text style={{ fontSize: Styles.FontSizes.large, padding: 15 }}>
            Shipping Method
          </Text>
          <RadioButton
            setValue={(value) => {
              setshippingMethod(value);
            }}
          />
          <FormField
            label="First Name"
            name="firstName"
            placeholder="first name"
            width="70%"
          />
          <FormField
            label="Last Name"
            name="lastName"
            placeholder="last name"
            width="70%"
          />
          <FormField
            label="Address"
            name="address"
            placeholder="address"
            width="70%"
          />
          <FormField
            label="Town/City"
            name="city"
            placeholder="city"
            width="70%"
          />
          <FormField
            label="Postcode"
            name="postCode"
            placeholder="postcode"
            width="70%"
          />
          <FormField
            label="Email"
            name="email"
            placeholder="email"
            width="70%"
          />
          <FormField
            label="Phone Number"
            name="phoneNumber"
            placeholder="phone number"
            width="60%"
          />
        </ScrollView>
        <SubmitButton
          title="Submit"
          onPressBack={() => {
            console.log("back");
            props.navigation.navigate("Cart");
          }}
        />
      </Form>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps, null)(DeliveryInfoScreen);

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  stepIndicator: {
    marginBottom: 20,
  },
});
