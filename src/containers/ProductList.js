import React from "react";
import { FlatList, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductItem from "../components/ProductItem";
import Styles from "../config/Styles";

const ProductList = ({
  DATA,
  large = true,
  header,
  onPress,
  onPressShowAll,
}) => {
  return (
    <View>
      {header && (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: Styles.FontSizes.large }}>{header}</Text>
          <View style={{ alignItems: "flex-end", flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                onPressShowAll();
              }}
            >
              <Text style={{ fontSize: Styles.FontSizes.small }}>
                Show All >>{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          large ? (
            <ProductItem
              image={item.image}
              title={item.name}
              price={item.price.toString()}
              rating={item.rating}
              showRating={false}
              onPress={() => {
                onPress(item);
              }}
            />
          ) : (
            <ProductItem
              image={item.image}
              title={item.name}
              price={item.price.toString()}
              rating={item.rating}
              rounding={0}
              showDownTitle={true}
              width={120}
              height={170}
              onPress={() => {
                onPress(item);
              }}
            />
          )
        }
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
      />
    </View>
  );
};

export default ProductList;
