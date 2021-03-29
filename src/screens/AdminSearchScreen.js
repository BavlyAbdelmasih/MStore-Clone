import React, { useState, useEffect } from "react";
import {
  Alert,
  Dimensions,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StyleSheet, Text, View } from "react-native";
import ActionButton from "react-native-action-button";

import ProductItem from "../components/ProductItem";
import SearchTags from "../components/SearchTags";
import Styles from "../config/Styles";
import useApi from "../hooks/useApi";
import productsApi from "../api/products";
import AdminProductItem from "../components/AdminProductItem";
import colors from "../config/Colors";

const AdminSearchScreen = ({ navigation }) => {
  const { data: productsData, error, loading, request, setData } = useApi(
    productsApi.getProducts
  );
  const [products, setproducts] = useState([]);
  const [searchTags, setsearchTags] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { height, width } = Dimensions.get("screen");
  function searchStringInArray(str = "", strArray) {
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
            paddingLeft: 5,
            height: "100%",
            paddingBottom: 100,
          }}
        >
          <FlatList
            data={products}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <AdminProductItem
                image={item.image}
                title={item.name}
                price={item.price.toString()}
                rounding={5}
                showDownTitle={true}
                width={120}
                height={110}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            )}
            //Setting the number of column
            keyExtractor={(products) => products.id}
          />
        </View>
      ) : (
        <View
          style={{
            marginVertical: 10,
            paddingLeft: 5,
            height: "100%",
            paddingBottom: 100,
          }}
        >
          <FlatList
            data={productsData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <AdminProductItem
                image={item.image}
                title={item.name}
                price={item.price.toString()}
                rounding={5}
                showDownTitle={true}
                width={120}
                height={110}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            )}
            //Setting the number of column
            keyExtractor={(products) => products.id}
          />
        </View>
      )}
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.close}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: colors.blackTextColor,
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: colors.secondary,
                }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.openButton,
                  backgroundColor: colors.danger,
                }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <ActionButton
        buttonColor={colors.secondary}
        elevation={20}
        onPress={() => {
          navigation.navigate("EditProduct");
        }}
      />
    </>
  );
};

export default AdminSearchScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "60%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 100,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
