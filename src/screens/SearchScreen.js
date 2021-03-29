import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from "../components/ProductItem";
import SearchTags from "../components/SearchTags";
import Styles from "../config/Styles";
import useApi from "../hooks/useApi";
import productsApi from "../api/products";

const SearchScreen = ({ navigation }) => {
  const { data: productsData, error, loading, request, setData } = useApi(
    productsApi.getProducts
  );
  const [products, setproducts] = useState([]);
  const [searchTags, setsearchTags] = useState([]);
  const { height, width } = Dimensions.get("screen");
  function searchStringInArray(str, strArray) {
    let result = [];
    let i = 0;
    for (var j = 0; j < strArray.length; j++) {
      for (var x = 0; x < str.length; x++) {
        if (strArray[j].match(str[x])) {
          result[i] = productsData[j];
          i++;
        }
      }
    }
    return [...new Set(result)];
  }
  useEffect(() => {
    request();

    setproducts(
      searchStringInArray(
        searchTags.tagsArray,
        productsData.map((item) => item.name)
      )
    );

    return () => {
      setproducts([]);
    };
  }, [searchTags]);
  return (
    <>
      <View>
        <SearchTags setTags={(tags) => setsearchTags(tags)} />
      </View>
      {products.length > 0 ? (
        <View
          style={{
            marginVertical: 10,
            alignItems: "center",
            paddingLeft: 5,
            height: "100%",
            paddingBottom: 100,
          }}
        >
          <FlatList
            data={products}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductItem
                image={item.image}
                title={item.name}
                price={item.price.toString()}
                rounding={5}
                showDownTitle={true}
                width={130}
                height={140}
                onPress={() => {
                  navigation.navigate("Details", item);
                }}
              />
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(products) => products.id}
          />
        </View>
      ) : (
        <View
          style={{
            height: "50%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: Styles.FontSizes.medium }}>
            No items found with this tags
          </Text>
        </View>
      )}
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
