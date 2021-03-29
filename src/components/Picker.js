import * as React from "react";
import { Alert, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { CustomPicker } from "react-native-custom-picker";
import colors from "../config/Colors";
import Styles from "../config/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Picker = ({ title, options, borderColor, onSelectItem }) => {
  const renderFooter = () => {
    return (
      <View style={styles.headerFooterContainer}>
        <Text style={styles.footerText}>Cancel</Text>
      </View>
    );
  };

  const renderField = (settings) => {
    const { selectedItem, getLabel } = settings;
    return (
      <View style={[styles.container, { borderColor: borderColor }]}>
        <Text style={[styles.leftText, { color: colors.medium }]}>{title}</Text>

        <View style={styles.innerContainer}>
          {selectedItem && (
            <Text style={[styles.text, { color: colors.black }]}>
              {getLabel(selectedItem)}
            </Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </View>
    );
  };

  const renderOption = (settings) => {
    const { item, getLabel } = settings;
    return (
      <View style={styles.optionContainer}>
        <Text
          style={{
            color: colors.secondary,
            fontSize: Styles.FontSizes.medium,
          }}
        >
          {getLabel(item)}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <CustomPicker
        options={options}
        placeholder={title}
        footerTemplate={renderFooter}
        optionTemplate={renderOption}
        fieldTemplate={renderField}
        defaultValue={options[0]}
        onValueChange={(value) => {
          onSelectItem && onSelectItem(value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerFooterContainer: {
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    fontSize: Styles.FontSizes.large,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    paddingLeft: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  innerContainer: {
    justifyContent: "flex-end",
    flex: 1,
    paddingRight: 10,
    flexDirection: "row",
  },
  leftText: {
    fontSize: Styles.FontSizes.small,
  },
  text: {
    fontSize: Styles.FontSizes.small,
    fontWeight: "bold",
    marginBottom: 5,
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Picker;
