import React, { useContext, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/Colors";

import { StyleSheet } from "react-native";
import LogIn from "../screens/LogIn";
import AccountScreen from "../screens/AccountScreen";
import SignUp from "../screens/SignUp";
import authStorage from "../auth/storage";
import AuthContext from "../auth/context";
const Stack = createStackNavigator();

const AccountNavigator = () => {
  const { user, setUser } = useContext(AuthContext);
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
    return () => {};
  }, []);
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

          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Screen name="Account" component={AccountScreen} />
        ) : (
          <>
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
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

export default AccountNavigator;
