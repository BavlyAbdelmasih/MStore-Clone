import * as React from "react";

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import colors from "../config/Colors";

import { Image, StyleSheet, View } from "react-native";
import CartScreen from "../screens/CartScreen";
import DeliveryInfoScreen from "../screens/DeliveryInfoScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderSummary from "../screens/OrderSummary";

const Stack = createStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          height: 60,
          elevation: 0,
          shadowColor: "transparent",
        },
        // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS ,
        ...TransitionPresets.SlideFromRightIOS,
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerShown: true,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerTitle: (props) => (
          <Image
            style={styles.logo_main}
            source={require("../assets/logo-main.png")}
          />
        ),
      }}
    >
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Delivery" component={DeliveryInfoScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Summary" component={OrderSummary} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo_main: {
    width: 90,
    height: 30,
    resizeMode: "contain",
    marginLeft: 10,
  },
});

export default CartNavigator;
