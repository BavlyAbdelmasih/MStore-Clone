import React, { useState } from "react";
import { View, Text } from "react-native";
import RadioButton from "react-native-simple-radio-button-input";
import colors from "../config/Colors";

const AppRadioButton = ({ setValue }) => {
  const DATA = [
    {
      key: "1",
      type: "Free Shipping",
      price: "$0",
    },
    { key: "2", type: "Normal Shipping", price: "$50" },
  ];

  const [select, setselect] = useState(DATA[0]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        paddingHorizontal: 40,
      }}
    >
      {DATA.map((val) => (
        <View
          style={{
            flexDirection: "row",
            marginBottom: 5,
            alignItems: "center",
          }}
        >
          <RadioButton
            color={colors.secondary}
            selected={select == val.type}
            onPress={() => {
              setselect(val.type);
              setValue(val);
            }}
            key={(item) => item.key}
          />
          <View>
            <Text style={{ marginLeft: 7 }}> {val.type} </Text>
            <Text style={{ marginLeft: 7, fontWeight: "bold" }}>
              {val.price}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default AppRadioButton;
