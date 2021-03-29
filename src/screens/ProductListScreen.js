import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from "../components/ProductItem";

const ProductListScreen = ({ route, navigation }) => {
  const products = route.params;

  return (
    <View style={{ marginVertical: 10, alignItems: "center", paddingLeft: 5 }}>
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
        keyExtractor={(products) => products._id}
      />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({});
