import React, { useContext } from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../auth/context";
import useAuth from "../auth/useAuth";
import colors from "../config/Colors";
import Styles from "../config/Styles";

const ProfileHeader = () => {
  const { user, setUser } = useContext(AuthContext);
  const auth = useAuth();

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/profiePic.png")}
          style={{
            width: 100,
            height: 100,
            marginRight: 25,
            marginLeft: 30,
            backgroundColor: colors.light,
          }}
        />
        <View>
          <Text style={{ fontSize: Styles.FontSizes.large }}>
            {user ? user.name : " "}
          </Text>
          <Text
            style={{
              fontSize: Styles.FontSizes.small,
              fontWeight: "900",
              color: colors.medium,
              marginRight: 10,
            }}
            numberOfLines={2}
          >
            {user ? user.email : " "}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            auth.logOut();
          }}
        >
          <Text
            style={{
              fontSize: Styles.FontSizes.medium,
              paddingBottom: 20,
              fontWeight: "bold",
              color: colors.medium,
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seperator}></View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 50,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  seperator: {
    height: 10,
    width: "100%",
    backgroundColor: colors.light,
  },
});
