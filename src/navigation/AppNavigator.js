import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import colors from "../config/Colors";
import ProductNavigator from "./ProductNavigator";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesNavigator from "./CategoriesNavigator";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import AccountScreen from "../screens/AccountScreen";
import CartIcon from "../components/CartIcon";
import CartNavigator from "./CartNavigator";
import SearchNavigator from "./SearchNavigator";
import LogIn from "../screens/LogIn";
import AccountNavigator from "./AccountNavigator";
import AuthContext from "../auth/context";
import AdminProductItem from "../components/AdminProductItem";
import AdminSearchScreen from "../screens/AdminSearchScreen";
import EditProductScreen from "../screens/EditProductScreen";
import AdminNavigator from "./AdminNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { user, setUser } = React.useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "shape" : "shape-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "account" : "account-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "magnify" : "magnify";
          } else if (route.name === "Admin") {
            iconName = focused ? "cog" : "cog-outline";
          }

          // You can return any component that you like here!
          return (
            <View
              style={{
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name={iconName} size={22} color={color} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: "gray",
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Home" component={ProductNavigator} />
      <Tab.Screen name="Categories" component={CategoriesNavigator} />
      <Tab.Screen name="Search" component={SearchNavigator} />
      {user && user.isAdmin && (
        <Tab.Screen name="Admin" component={AdminNavigator} />
      )}

      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            iconName = focused ? "cart" : "cart-outline";
            return <CartIcon name={iconName} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
