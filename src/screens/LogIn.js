import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import colors from "../config/Colors";
import { SocialIcon } from "react-native-elements";
import Form from "../components/forms/Form";
import LoginFormField from "../components/forms/LoginFormField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import ErrorMessage from "../components/forms/ErrorMessage";
import * as Yup from "yup";
import LoginSubmitButton from "../components/forms/LoginSubmitButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("email").nullable(),
  password: Yup.string().required().min(4).label("password").nullable(),
});

const { width, height } = Dimensions.get("window");

const LogIn = ({ navigation }) => {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    setIsLoading(true);
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
    setIsLoading(false);
  };
  return (
    <KeyboardAwareScrollView>
      {isLoading ? (
        <View style={{ marginTop: height / 2 }}>
          <ActivityIndicator size={60} color={colors.secondary} />
        </View>
      ) : (
        <Form
          initialValues={{
            email: null,
            password: null,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.container}>
            <View style={styles.logoWrap}>
              <Image
                source={require("../assets/logo_with_text.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <ErrorMessage
              error="Invalid email and/or password."
              visible={loginFailed}
            />
            <LoginFormField
              name="email"
              placeholder="email"
              iconName="email"
              keyboardType="email-address"
            />
            <LoginFormField
              name="password"
              placeholder="password"
              iconName="lock"
              keyboardType="number-pad"
              secureTextEntry={true}
            />
            <View style={styles.logInButton}>
              <LoginSubmitButton color={colors.secondary} title="login" />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: colors.blackTextColor,
                  height: 1,
                  marginRight: 5,
                  flex: 0.5,
                }}
              ></View>
              <Text
                style={{ color: colors.blackTextColor, fontWeight: "bold" }}
              >
                OR
              </Text>
              <View
                style={{
                  backgroundColor: colors.blackTextColor,
                  height: 1,
                  marginLeft: 5,
                  flex: 0.5,
                }}
              ></View>
            </View>
            <View style={styles.socialButton}>
              <SocialIcon
                title="Sign In With Facebook"
                type="facebook"
                button={true}
              />
              <SocialIcon
                title="Sign In With Google"
                type="google"
                button={true}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text>Already have an Account ? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text style={{ color: colors.secondary, fontWeight: "bold" }}>
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Form>
      )}
    </KeyboardAwareScrollView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    paddingHorizontal: 30,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.light,
    height: 50,
    padding: 0,
    marginLeft: 15,
    // flex: 1,
    textAlign: "left",
    color: "black",
  },
  logInButton: {
    marginTop: 20,
    borderRadius: 5,
    width: "100%",
    elevation: 1,
  },
  socialButton: {
    marginTop: 20,
    width: "100%",
  },
  logoWrap: {
    flexGrow: 1,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: (width * 0.8) / 2,
  },
});
