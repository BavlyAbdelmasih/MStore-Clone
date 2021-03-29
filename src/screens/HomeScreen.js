import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/Text";
import moment from "moment";
import productsApi from "../api/products";
import Styles from "../config/Styles";
import CategoryIconsList from "../containers/CategoryIconsList";
import ProductList from "../containers/ProductList";
import Banner from "../components/Banner";
import useApi from "../hooks/useApi";
import { ActivityIndicator } from "react-native";
import colors from "../config/Colors";

const HomeScreen = ({ navigation }) => {
  var date = moment().format("dddd-DD-MMM");
  const { data: productsData, error, loading, request, setData } = useApi(
    productsApi.getProducts
  );

  const categoriesData = require("../assets/data/categories.json");

  useEffect(() => {
    request();
    console.log(productsData);
    return () => {
      setData([]);
    };
  }, []);
  const DATA = {
    CategoryIcon: [
      {
        id: "1",
        name: "T-Shirt",
        imageUrl: require("../assets/category_vectors/t-shirt.png"),
        color: "#d4ffd3",
      },
      {
        id: "2",
        name: "Bags",
        imageUrl: require("../assets/category_vectors/bags.png"),
        color: "#ffe9ec",
      },
      {
        id: "3",
        name: "Dresss",
        imageUrl: require("../assets/category_vectors/clothing.png"),
        color: "#add8e6",
      },
      {
        id: "4",
        name: "T-Shirt",
        imageUrl: require("../assets/category_vectors/bags.png"),
        color: "#d4ffd3",
      },
      {
        id: "5",
        name: "T-Shirt",
        imageUrl: require("../assets/category_vectors/t-shirt.png"),
        color: "#d4ffd3",
      },
    ],
  };

  return loading ? (
    <ActivityIndicator size="large" color={colors.secondary} />
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo_main}
          source={require("../assets/logo-main.png")}
        />
        <Text style={styles.date}>{date.toUpperCase()}</Text>
        <Banner />
        <ProductList
          DATA={productsData.sort(() => Math.random() - 0.5).slice(0, 6)}
          onPress={(item) => {
            navigation.navigate("Details", item);
          }}
        />
        <CategoryIconsList DATA={DATA.CategoryIcon} />

        <ProductList
          DATA={productsData
            .filter((i) => i.isFeatured === true)
            .sort(() => Math.random() - 0.5)
            .slice(0, 5)}
          large={false}
          header="Feature Products"
          onPress={(item) => {
            navigation.navigate("Details", item);
          }}
          onPressShowAll={() => {
            navigation.navigate(
              "Products",
              productsData.filter((i) => i.isFeatured === true)
            );
          }}
        />
        <ProductList
          DATA={productsData
            .filter(
              (i) =>
                i.category._id ===
                categoriesData.find((i) => i.name === "Bags")._id.$oid
            )
            .sort(() => Math.random() - 0.5)}
          large={false}
          header="Bags Collections"
          onPress={(item) => {
            navigation.navigate("Details", item);
          }}
          onPressShowAll={() => {
            navigation.navigate(
              "Products",
              productsData.filter(
                (i) =>
                  i.category._id ===
                  categoriesData.find((i) => i.name === "Bags")._id.$oid
              )
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
  logo_main: {
    width: 120,
    height: 60,
    resizeMode: "contain",
    marginLeft: 10,
  },
  date: {
    fontWeight: "normal",
    fontSize: Styles.FontSizes.medium,
    marginLeft: 10,
  },
});
