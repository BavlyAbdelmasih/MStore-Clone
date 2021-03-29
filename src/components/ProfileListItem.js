import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/Colors";
import Styles from "../config/Styles";

const ProfileListItem = ({ title }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <MaterialCommunityIcons
          name={"chevron-right"}
          size={25}
          color={colors.medium}
        />
      </View>
      <View style={styles.seperator}></View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 60,
    alignItems: "center",
  },
  title: {
    color: colors.medium,
    fontSize: Styles.FontSizes.medium,
  },
  seperator: {
    height: 0.4,
    width: "100%",
    backgroundColor: colors.medium,
  },
});
