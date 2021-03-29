import React from "react";
import { FlatList, View, Text } from "react-native";
import CategoryItem from "../components/CategoryItem";

const CategoryList = ({ DATA, onPress }) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <CategoryItem image={item.image} onPress={() => onPress()} />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoryList;
