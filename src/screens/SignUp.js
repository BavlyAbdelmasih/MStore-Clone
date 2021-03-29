import React, { useState } from "react";
import { Button } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../config/Colors";
import Styles from "../config/Styles";
const { width, height } = Dimensions.get("window");
import Form from "../components/forms/Form";
import LoginFormField from "../components/forms/LoginFormField";
import * as Yup from "yup";
import LoginSubmitButton from "../components/forms/LoginSubmitButton";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").nullable(),
  userName: Yup.string().required().label("User Name").nullable(),
  firstName: Yup.string().required().label("First Name").nullable(),
  lastName: Yup.string().required().label("Last Name").nullable(),
  password: Yup.string().required().min(4).label("Password").nullable(),
  phoneNumber: Yup.string().required().min(4).label("Phone Number").nullable(),
});

const SignUp = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    // console.log(userInfo);
    const result = await registerApi.request(userInfo);
    console.log(result);

    const res = await authApi.login(userInfo.email, userInfo.password);
    console.log(res);
    auth.logIn(res.data);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid
      >
        <View style={styles.formContainer}>
          <View style={styles.logoWrap}>
            <Image
              source={require("../assets/logo_with_text.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Form
            initialValues={{
              firstName: null,
              email: null,
              lastName: null,
              password: null,
              userName: null,
              phoneNumber: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit({
                name: values.userName,
                email: values.email,
                phone: values.phoneNumber,
                password: values.password,
                isAdmin: false,
                id: "1",
              });
            }}
          >
            <Text style={[styles.label, { color: colors.blackTextColor }]}>
              Profile Details
            </Text>

            <LoginFormField
              underlineColorAndroid="transparent"
              placeholder="First Name"
              autoCapitalize="words"
              returnKeyType="next"
              placeholderTextColor={colors.medium}
              name="firstName"
            />
            <LoginFormField
              underlineColorAndroid="transparent"
              placeholder="Last Name"
              autoCapitalize="words"
              returnKeyType="next"
              placeholderTextColor={colors.medium}
              name="lastName"
            />

            <LoginFormField
              underlineColorAndroid="transparent"
              placeholder="Phone Number"
              returnKeyType="next"
              placeholderTextColor={colors.medium}
              name="phoneNumber"
            />

            <Text style={[styles.label, { color: colors.blackTextColor }]}>
              Account Details
            </Text>
            <LoginFormField
              underlineColorAndroid="transparent"
              placeholder="User Name"
              autoCapitalize="none"
              returnKeyType="next"
              placeholderTextColor={colors.medium}
              name="userName"
            />
            <LoginFormField
              underlineColorAndroid="transparent"
              placeholder="email"
              keyboardType="email-address"
              placeholderTextColor={colors.medium}
              name="email"
            />

            <LoginFormField
              underlineColorAndroid="transparent"
              placeholder="password"
              secureTextEntry
              returnKeyType="done"
              placeholderTextColor={colors.medium}
              name="password"
            />
            <View style={styles.signUpButton}>
              <LoginSubmitButton title="signup" color={colors.secondary} />
            </View>
          </Form>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: Styles.FontSizes.medium,
    color: "black",
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "black",
    height: 40,
    marginTop: 10,
    padding: 0,
    margin: 0,
    // flex: 1,
    textAlign: "left",
    color: "black",
  },
  signUpButton: {
    marginTop: 20,
    borderRadius: 5,
    elevation: 1,
  },

  text: {
    marginLeft: 10,
    color: "black",
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
