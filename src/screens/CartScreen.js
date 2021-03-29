import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CartItem from "../components/CartItem";
import CartItemBottomBar from "../components/CartItemBottomBar";
import CouponItem from "../components/CouponItem";
import ProfileHeader from "../components/ProfileHeader";
import ProfileListItem from "../components/ProfileListItem";
import StepIndicator from "../components/StepIndicator";
import colors from "../config/Colors";
import Styles from "../config/Styles";
import DeliveryInfoScreen from "./DeliveryInfoScreen";

import { connect } from "react-redux";
import * as actions from "../redux/actions/cartActions";
import EmptyCart from "./EmptyCart";
const CartScreen = (props, { navigation }) => {
  const [total, settotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let totalPrice = 0;
    props.cartItems.forEach((cart) => {
      totalPrice += cart.price;
      settotal(totalPrice);
    });
  }, [props.cartItems]);

  return (
    <>
      {props.cartItems.length > 0 ? (
        <View style={styles.container}>
          <View style={styles.stepIndicator}>
            <StepIndicator position={0} />
          </View>

          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
              }}
            >
              <Text style={{ fontSize: Styles.FontSizes.large }}>
                Total Price:
              </Text>
              <Text
                style={{
                  fontSize: Styles.FontSizes.medium,
                  color: colors.secondary,
                }}
              >
                ${total.toString()}
              </Text>
            </View>
            {props.cartItems.map((item) => {
              return (
                <CartItem
                  image={item.image}
                  title={item.name}
                  price={item.price}
                  addQuantity={() => {
                    quantity >= item.countInStock
                      ? setQuantity(item.countInStock)
                      : setQuantity(quantity + 1);
                  }}
                  removeQuantity={() => {
                    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
                  }}
                  keyId={item.id + Math.random()}
                  onDelete={() => props.removeItemFromCart(item)}
                  quantity={quantity}
                />
              );
            })}
            <CouponItem />

            {/* <DeliveryInfoScreen /> */}
          </ScrollView>
          <CartItemBottomBar
            leftButtonText="Clear"
            righButtonText="Next"
            onClickNext={() => {
              console.log("next");
              props.navigation.navigate("Delivery");
            }}
            onClickBack={() => {
              props.clearItemsFromCart();
            }}
          />
        </View>
      ) : (
        <EmptyCart
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (item) => dispatch(actions.removeFromCart(item)),
    clearItemsFromCart: () => dispatch(actions.clearCart()),
  };
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  stepIndicator: {
    marginBottom: 20,
  },
});
