import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/ProfileHeader";
import ProfileListItem from "../components/ProfileListItem";

const AccountScreen = () => {
  return (
    <ScrollView>
      <View style={{ margin: 5 }}>
        <ProfileHeader />
        <ProfileListItem title="WishList(1)" />
        <ProfileListItem title="Adreeses" />
        <ProfileListItem title="Languages" />
        <ProfileListItem title="Terms & Conditiions" />
        <ProfileListItem title="Privacy policies" />
        <ProfileListItem title="Contact Us" />
        <ProfileListItem title="About Us" />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
