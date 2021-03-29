import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../redux/actions/cartActions";
import colors from "../config/Colors";
import CartItemBottomBar from "../components/CartItemBottomBar";
import StepIndicator from "../components/StepIndicator";
import ConfirmationScreen from "./ConfirmationScreen";

var { width, height } = Dimensions.get("window");

const OrderSummary = (props) => {
  const finalOrder = props.route.params;
  const [uploadVisible, setUploadVisible] = useState(false);
  return (
    <>
      <StepIndicator position={3} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Confirm Order
          </Text>
          {props.route.params ? (
            <View style={{ borderWidth: 1, borderColor: colors.secondary }}>
              <Text style={styles.title}>Shipping to:</Text>
              <View style={{ padding: 8 }}>
                <Text>Address: {finalOrder.order.order.address}</Text>
                <Text>City: {finalOrder.order.order.city}</Text>
                <Text>Zip Code: {finalOrder.order.order.postCode}</Text>
              </View>
              <Text style={styles.title}>Items:</Text>
              {props.cartItems.map((x) => {
                return (
                  <ListItem style={styles.listItem} key={x.name} avatar>
                    <Left>
                      <Thumbnail source={{ uri: x.image }} />
                    </Left>
                    <Body style={styles.body}>
                      <Left>
                        <Text>{x.name}</Text>
                      </Left>
                      <Right>
                        <Text>$ {x.price}</Text>
                      </Right>
                    </Body>
                  </ListItem>
                );
              })}
            </View>
          ) : null}
        </View>
      </ScrollView>
      <CartItemBottomBar
        leftButtonText="Back"
        righButtonText="Confirm"
        onClickBack={() => {
          props.navigation.navigate("Payment");
        }}
        onClickNext={() => {
          setUploadVisible(true);
          props.clearCart();
          props.navigation.navigate("Cart");
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});
