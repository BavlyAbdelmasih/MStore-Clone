import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Animated } from "react-native";
import { TouchableOpacityComponent } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/Colors";
import Styles from "../config/Styles";

const CartItem = ({
  addQuantity,
  removeQuantity,
  keyId,
  image,
  title,
  price,
  onDelete,
  quantity = 0,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 2,
        borderColor: colors.light,
        paddingBottom: 15,
        paddingTop: 10,
      }}
      key={keyId}
    >
      <Animated.Image
        style={{
          width: 100,
          height: 110,
          resizeMode: "cover",
          borderRadius: 10,
          marginRight: 10,
          marginLeft: 10,
        }}
        source={{ uri: image }}
      />
      <View
        style={{
          width: "50%",
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: Styles.FontSizes.large,
            justifyContent: "center",
          }}
          numberOfLines={2}
        >
          {title}
        </Text>

        <Text
          style={{
            fontSize: Styles.FontSizes.large,
            fontWeight: "bold",
          }}
        >
          ${price}
        </Text>
      </View>
      <View
        style={{
          width: 30,
          backgroundColor: colors.light,
          borderWidth: 1,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          borderColor: colors.medium,
          position: "absolute",
          right: 15,
          alignSelf: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
            alignSelf: "center",
            marginVertical: 5,
          }}
        >
          <MaterialCommunityIcons
            name="chevron-up-circle"
            size={20}
            color={colors.medium}
            onPress={addQuantity}
          />
          <Text style={{ alignSelf: "center" }}>{quantity}</Text>
          <MaterialCommunityIcons
            name="chevron-down-circle"
            size={20}
            color={colors.medium}
            onPress={removeQuantity}
          />
        </View>
      </View>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={25}
        color={colors.medium}
        style={{ position: "absolute", right: 70, bottom: 20 }}
        onPress={onDelete}
      />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
