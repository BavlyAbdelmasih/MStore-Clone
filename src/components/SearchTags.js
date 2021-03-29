import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { color } from "react-native-reanimated";
import TagInput from "react-native-tags-input";
import colors from "../config/Colors";
const SearchTags = ({ setTags }) => {
  const mainColor = colors.white;
  const [tags, settags] = useState({
    tag: "",
    tagsArray: [],
  });
  const [tagsColor, settagsColor] = useState(mainColor);
  const [tagsText, settagsText] = useState("#fff");

  const updateTagState = (state) => {
    settags(state);
    setTags(state);
  };

  return (
    <View style={styles.container}>
      <TagInput
        updateState={updateTagState}
        tags={tags}
        placeholder="Search product by name"
        labelStyle={{ color: colors.black }}
        leftElement={
          <MaterialCommunityIcons
            name={"magnify"}
            color={colors.medium}
            size={20}
          />
        }
        leftElementContainerStyle={{ marginLeft: 10 }}
        containerStyle={{ width: Dimensions.get("window").width - 10 }}
        inputContainerStyle={[styles.textInput, { backgroundColor: tagsColor }]}
        inputStyle={{ color: colors.black }}
        onFocus={() => {
          settagsColor("#fff");
          settagsText(mainColor);
        }}
        onBlur={() => {
          settagsText("#fff");
          settagsColor(mainColor);
        }}
        autoCorrect={true}
        tagStyle={styles.tag}
        tagTextStyle={styles.tagText}
        keysForTag={", "}
      />
    </View>
  );
};

export default SearchTags;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textInput: {
    height: 50,
    borderColor: colors.light,
    borderWidth: 2,
    marginTop: 8,
    borderRadius: 25,
    padding: 3,
  },
  tag: {
    backgroundColor: colors.white,
  },
  tagText: {
    color: "#3ca897",
  },
});
