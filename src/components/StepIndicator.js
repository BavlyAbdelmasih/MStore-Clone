import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import colors from "../config/Colors";
const AppStepIndicator = ({ position }) => {
  const icons = ["cart", "map-marker", "chart-bar", "credit-card", "radar"];
  const labels = [
    "Cart",
    "Delivery Address",
    "Payment Method",
    "Order Summary",
  ];
  const customStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.secondary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.secondary,
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: colors.secondary,
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: colors.secondary,
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.secondary,
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: colors.secondary,
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={position}
      labels={labels}
      stepCount={4}
    />
  );
};

export default AppStepIndicator;

const styles = StyleSheet.create({});
