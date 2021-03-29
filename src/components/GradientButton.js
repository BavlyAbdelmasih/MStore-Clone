import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // import LinearGradient

const GradientButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["orange", "yellow"]}
        style={styles.linearGradient}
      >
        <Text>Vertical Gradient</Text>
      </LinearGradient>
    </View>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
