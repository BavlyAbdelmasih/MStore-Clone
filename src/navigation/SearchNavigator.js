import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/Colors";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { Image, StyleSheet, View } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => {
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
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitle: (props) => (
          <Image
            style={styles.logo_main}
            source={require("../assets/logo-main.png")}
          />
        ),
      }}
    >
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={ItemDetailsScreen} />
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

export default SearchNavigator;
