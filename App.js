import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import store from "./src/redux/store";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  LogBox.ignoreAllLogs();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Provider store={store}>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
}
