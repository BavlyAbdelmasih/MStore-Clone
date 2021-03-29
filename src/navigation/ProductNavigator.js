import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/Colors";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";

import { Image, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <>
      <Stack.Navigator
        mode="modal"
        headerMode="float"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
            height: 60,
            elevation: 0,
            shadowColor: "transparent",
          },

          headerTintColor: colors.black,

          headerTitleAlign: "center",
          headerTitle: (props) => (
            <Image
              style={styles.logo_main}
              source={require("../assets/logo-main.png")}
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductListScreen} />
        <Stack.Screen name="Details" component={ItemDetailsScreen} />
      </Stack.Navigator>
    </>
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

export default ProductNavigator;
