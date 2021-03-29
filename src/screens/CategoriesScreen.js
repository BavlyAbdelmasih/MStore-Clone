import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { log } from "react-native-reanimated";
import CategoryList from "../containers/CategoryList";

const CategoriesScreen = () => {
  const DATA = [
    { id: "1", image: require("../assets/banners/01.jpg") },
    { id: "2", image: require("../assets/banners/02.jpg") },
    { id: "3", image: require("../assets/banners/03.jpg") },
    { id: "4", image: require("../assets/banners/04.jpg") },
    { id: "5", image: require("../assets/banners/05.jpg") },
  ];
  return <CategoryList DATA={DATA} onPress={() => console.log("cat")} />;
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
