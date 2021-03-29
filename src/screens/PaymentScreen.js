import React, { useState } from "react";
import { View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Picker,
  Icon,
  Body,
  Title,
  Footer,
} from "native-base";
import colors from "../config/Colors";
import Styles from "../config/Styles";
import CartItemBottomBar from "../components/CartItemBottomBar";
import StepIndicator from "../components/StepIndicator";
const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];

const PaymentScreen = (props) => {
  const order = props.route.params;

  const [selected, setSelected] = useState();
  const [card, setCard] = useState();
  return (
    <>
      <StepIndicator position={2} />
      <Container style={{ height: "100%" }}>
        <View
          style={{
            width: "100%",
            height: 75,
            backgroundColor: colors.light,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.medium,
            elevation: 10,
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: Styles.FontSizes.medium }}
          >
            Choose your payment method
          </Text>
        </View>
        <View>
          {methods.map((item, index) => {
            return (
              <ListItem key={item.name} onPress={() => setSelected(item.value)}>
                <Left>
                  <Text>{item.name}</Text>
                </Left>
                <Right>
                  <Radio
                    selected={selected == item.value}
                    selectedColor={colors.secondary}
                  />
                </Right>
              </ListItem>
            );
          })}
          {selected == 3 ? (
            <Picker
              mode="dropdown"
              iosIcon={<Icon name={"arrow-down"} />}
              headerStyle={{ backgroundColor: colors.secondary }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={card}
              onValueChange={(x) => setCard(x)}
            >
              {paymentCards.map((c, index) => {
                return (
                  <Picker.Item key={c.name} label={c.name} value={c.name} />
                );
              })}
            </Picker>
          ) : null}

          <View style={{ position: "absolute", bottom: 1 }}></View>
        </View>
      </Container>
      <CartItemBottomBar
        leftButtonText="Back"
        righButtonText="Next"
        onClickNext={() => {
          props.navigation.navigate("Summary", { order });
        }}
        onClickBack={() => {
          props.navigation.navigate("Delivery");
        }}
      />
    </>
  );
};

export default PaymentScreen;
